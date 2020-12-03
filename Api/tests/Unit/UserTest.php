<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
class UserTest extends TestCase
{
   
    public function testSuccessfulRegisterTest()
    {
        $userData = [
            "name" => "Arwa Nashaat",
            "email" => "arwanashaat@gmail.com",
            "dateOfBirth"=>"11/5/1198"
        ];

        $response = $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
            ->assertStatus(201)->assertJsonFragment($userData);
        
        User::find($response['id'])->delete();    
    }


    public function testWrongEmailRegisterTest()
    {
        $userData = [
            "name" => "Arwa Nashaat",
            "email" => "arwanashaat.com",
            "dateOfBirth"=>"11/5/1198"
        ];

        $this->json('POST', 'api/register', $userData, ['Accept' => 'application/json'])
            ->assertStatus(422);
        $this->assertDatabaseCount('users',0);
        
    }
}
