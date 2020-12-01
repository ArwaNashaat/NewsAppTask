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
        $userData['password'] = $this->autoGeneratePassword();
        $user = User::create($userData);
        $this->sendEmail($user);
        return $user->password;
    }

    private function sendEmail(User $user) {
        $data = array(
            'password' => $user->password
        );
        Mail::to($user->email)->send(new SendEmail($data));
    }

    private function validateRequest(Request $request){
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'email|required|unique:users',
            'dateOfBirth' => 'required',
            'password'=>'required',
            ]);
        return $validatedData;
    }

    private function autoGeneratePassword(){
        return Hash::make(Str::random(16));
    }
}
