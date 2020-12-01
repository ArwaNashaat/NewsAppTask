<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }
    public function register(Request $request) {
        
        $validatedData = $request->validate([
            'name'=>'required',
            'email'=>'email|required|unique:users',
            'dateOfBirth' => 'required',
            'password'=>'required',
            ]);
           
        $user = User::create($validatedData);
        return $user;
    }
}
