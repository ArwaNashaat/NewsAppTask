<?php

namespace App\Http\Controllers;

use App\Models\FavoriteNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteNewsController extends Controller
{
    public function addFavoriteNews(Request $request){
        
        $userId = Auth::user();
        FavoriteNews::firstOrCreate([
            'source' => $request['source'],
            'author' => $request['author'],
            'description' => $request['description'],
            'content' => $request['content'],
            'url' => $request['url'],
            'publishedAt' => $request['publishedAt'],
            'title' => $request['title'],
            'urlToImage' => $request['urlToImage'],
            'userId' => '1'
        ]);
        
        return 200;

    }
}
