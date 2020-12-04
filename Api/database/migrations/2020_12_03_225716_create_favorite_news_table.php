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
            $table->foreignId('userId');
            $table->String('source');
            $table->String('author')->nullable();
            $table->String('title')->nullable();
            $table->String('description')->nullable();
            $table->String('url');
            $table->String('urlToImage');
            $table->String('publishedAt');
            $table->String('content')->nullable();    
            $table->timestamps();

            $table->foreign('userId')->references('id')->on('users');
            // $table->index(['userId', 'source', 'author', 'title', 'description',
            // 'url', 'urlToImage', 'publishedAt', 'content']);
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
