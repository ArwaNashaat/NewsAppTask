<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNewsFrom($country,$category)
    {
        $httpClient = new Client();
        $url = 'https://newsapi.org/v2/top-headlines?'.
        'country='.$country
        .'&category='.$category
        .'&apiKey='.env('NEWS_API_KEY', '');
    
        $response = $httpClient->get($url);
        $body = json_decode($response->getBody());

        return response()->json(['news'=> $body], 200);
    }

}