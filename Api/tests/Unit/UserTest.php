<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
class UserTest extends TestCase
{
   
    public function testRegisterTest()
    {
        $user = User::create(['name'=>'arwa',
        'email'=>'arwa@gmail.com',
        'dateOfBirth'=>'11/5/1198',
        'password'=>'pass']);
        
        // $request = new Request();
        // $request->replace(['user'=>['name'=>'arwa',
        // 'email'=>'arwa@gmail.com',
        // 'dateOfBirth'=>'11/5/1198',
        // 'password'=>'pass']]);

        // echo $request->user['name'];
        $userController = new UserController();
        // $userController->register($request);

        $user2 = User::find($user);
        $this->assertEquals($user->json_decode, $user2[0]->json_decode);
      
    }
}
