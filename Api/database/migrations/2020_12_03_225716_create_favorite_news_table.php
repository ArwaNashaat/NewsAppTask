<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoriteNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorite_news', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->json('source');
            $table->String('author')->nullable();
            $table->String('title');
            $table->String('description')->nullable();
            $table->String('url');
            $table->String('urlToImage');
            $table->String('publishedAt');
            $table->String('content')->nullable();    
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorite_news');
    }
}
