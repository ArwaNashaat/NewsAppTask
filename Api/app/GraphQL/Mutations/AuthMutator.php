<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;

class AuthMutator
{

    public function login($rootValue, array $args)
    {
        $credentials = [
            'email' => $args['email'],
            'password' => $args['password']
        ];

        $token = JWTAuth::attempt($credentials);
        if (!$token) {
            return response()->json(['error' => 'Wrong Email or Password'], 401);
        }

        return $token;
    }

    public function register($rootValue, array $args)
    {
        $userData = [
            'name' => $args['name'],
            'email' => $args['email'],
            'dateOfBirth' => $args['dateOfBirth']
        ];

        $userData['password'] = $this->autoGeneratePassword();
        
        $this->sendEmail($userData);

        $userData['password'] = bcrypt($userData['password']);
        
        $user = User::create($userData);
        return json_decode($user);
    }

    private function autoGeneratePassword()
    {
        return Str::random(16);
    }

    private function sendEmail($user)
    {
        $password = array(
            'password' => $user['password']
        );
        Mail::to($user['email'])->send(new SendEmail($password));
    }
}
