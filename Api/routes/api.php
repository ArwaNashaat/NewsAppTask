<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FavoriteNewsController;
use App\Http\Controllers\NewsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('/news/{country}/{category}', [NewsController::class, 'getNewsFrom']);

Route::middleware('auth:api')->post('/addToFavorites', [FavoriteNewsController::class, 'addFavoriteNews']);
Route::middleware('auth:api')->delete('/removeFromFavorites/{title}/{source}', [FavoriteNewsController::class, 'removeFavoriteNews']);
Route::middleware('auth:api')->get('/getAllFavorites', [FavoriteNewsController::class, 'getAllFavorites']);
