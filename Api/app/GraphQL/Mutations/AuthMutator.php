<?php

namespace App\GraphQL\Mutations;

use Tymon\JWTAuth\Facades\JWTAuth;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class AuthMutator{
    public function login($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
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
}