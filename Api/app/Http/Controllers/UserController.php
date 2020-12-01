<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Mail\SendEmail;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function register(Request $request) {

        $userData = $this->validateRequest($request);
        $user = User::create($userData);
        $this->sendEmail($user->password);
        return $user->password;
    }

    private function sendEmail($password) {
        $data = array(
            'password' => $password
        );
        Mail::to('arwanashaat@gmail.com')->send(new SendEmail($data));
    }

    private function validateRequest(Request $request){
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'email|required|unique:users',
            'dateOfBirth' => 'required',
            'password'=>'required',
            ]);   
        $validatedData['password'] =   Hash::make(Str::random(16)); 
        return $validatedData;
    }
}
