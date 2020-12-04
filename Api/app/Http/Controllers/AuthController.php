<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
// use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $this->validateLogin($request);
        
        $token = JWTAuth::attempt($credentials);
        if (!$token) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }

        return response()->json(['token' => $token], 200);
    }

    public function register(Request $request)
    {
        $userData = $this->validateRegister($request);

        $userData['password'] = $this->autoGeneratePassword();
        $this->sendEmail($userData);

        $userData['password'] = bcrypt($userData['password']);
        
        $user = User::create($userData);
        return response()->json(json_decode($user), 201);
    }

    private function sendEmail($user)
    {
        $password = array(
            'password' => $user['password']
        );
        Mail::to($user['email'])->send(new SendEmail($password));
    }

    private function validateLogin(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'email|required',
            'password' => 'required'
        ]);

        
        return $validatedData;
    }

    private function validateRegister(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'email|required|unique:users',
            'dateOfBirth' => 'required'
        ]);

        
        return $validatedData;
    }

    private function autoGeneratePassword()
    {
        return Str::random(16);
    }
}