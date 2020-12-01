<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmail;

class UserController extends Controller
{
    public function register(Request $request) {
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'email|required|unique:users',
            'dateOfBirth' => 'required',
            'password'=>'required',
            ]);      
        $user = User::create($validatedData);
        $this->sendEmail($request->password);
        return $user;
    }

    public function sendEmail($password) {
        $data = array(
            'password' => $password
        );
        
        Mail::to('arwanashaat@gmail.com')->send(new SendEmail($data));
    }
}
