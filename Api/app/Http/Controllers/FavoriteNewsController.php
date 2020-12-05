<?php

namespace App\Http\Controllers;

use App\Models\FavoriteNews;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class FavoriteNewsController extends Controller
{
    public function addFavoriteNews(Request $request){
        
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['Please Login first'], 404);
        }

        $userId = $user->id;
        
        $favorite = FavoriteNews::firstOrCreate([
            'source' => json_encode($request['source']),
            'author' => $request['author'],
            'title' =>$request['title'],
            'description' => $request['description'],
            'url' => $request['url'],
            'urlToImage' => $request['urlToImage'],
            'publishedAt' => $request['publishedAt'],
            'content' => $request['content'],
            'user_id' => $userId
        ]);
        return response()->json(['favorite' => $favorite], 200);
    }

    public function removeFavoriteNews($title, $source){
        
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['Please Login first'], 404);
        }

        $userId = $user->id;
        FavoriteNews::where([
            ['user_id',$userId],
            ['title', $title],
            ['source', $source]])->delete();

        return response()->json(["Remove from Favorites"], 200);
    }

    public function getAllFavorites(){
        if (! $user = JWTAuth::parseToken()->authenticate()) {
            return response()->json(['Please Login first'], 404);
        }

        $userId = $user->id;
        
        $favorites = FavoriteNews::where('user_id', $userId)->get();
        return response()->json(['favorites' => $favorites], 200);
    }
}
