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
            'source' => json_encode($request['source']),
            'author' => $request['author'],
            'title' =>$request['title'],
            'description' => $request['description'],
            'url' => $request['url'],
            'urlToImage' => $request['urlToImage'],
            'publishedAt' => $request['publishedAt'],
            'content' => $request['content'],
            'userId' => $userId
        ]);
        return response()->json(['Fav' => $fav], 200);
    }

    public function removeFavoriteNews($title, $source){
        
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['User Not Found'], 404);
        }

        $userId = $user->id;
        $favId = FavoriteNews::where([
            ['userId',$userId],
            ['title', $title]],
            ['source', $source])->delete();

        return response()->json(["Remove from Favorites"], 200);
    }
}
