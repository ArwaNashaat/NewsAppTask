<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Mail\SendEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

// use Illuminate\Support\Auth;

class UserController extends Controller
{
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }
        return response(200);

    }

    public function register(Request $request)
    {

        $userData = $this->validateRequest($request);

        $userData['password'] = $this->autoGeneratePassword();
        $this->sendEmail($userData);

        $userData['password'] = bcrypt($userData['password']);
        
        $user = User::create($userData);
        return $user;
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
