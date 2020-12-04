<?php

namespace App\Http\Controllers;

use App\Models\FavoriteNews;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class FavoriteNewsController extends Controller
{
    public function addFavoriteNews(Request $request){
        
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['User Not Found'], 404);
        }

        $userId = $user->id;
        
        $fav = FavoriteNews::firstOrCreate([
            'favorite' => json_encode($request['Fav']),
            'userId' => $userId
        ]);
        return response()->json(['Fav' => $fav], 200);
    }
}
