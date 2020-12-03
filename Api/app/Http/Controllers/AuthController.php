<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // public function __construct() {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }

    public function login()
    {
        $credentials = request(['email', 'password']);
        
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }

        return response()->json(['Token' => $token], 200);
    }

    public function register(Request $request)
    {

        $userData = $this->validateRequest($request);

        $userData['password'] = $this->autoGeneratePassword();
        $this->sendEmail($userData);

        $userData['password'] = bcrypt($userData['password']);
        
        $user = User::create($userData);
        return response()->json(json_decode($user), 201);
    }

    private function sendEmail($user)
    {
        $data = array(
            'password' => $user['password']
        );
        Mail::to($user['email'])->send(new SendEmail($data));
    }

    private function validateRequest(Request $request)
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
