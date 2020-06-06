<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSongpartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('songparts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('song_id');
            $table->string('name')->nullable();
            $table->integer('reference_key')->default(0);
            $table->string('scale', 63);
            $table->integer('order');
            $table->string('lyrics', 4095)->nullable();
            $table->string('lyrics_display', 4095)->nullable();
            $table->string('chords', 4095)->nullable();
            $table->timestamps();

            $table->foreign('song_id')->references('id')->on('songs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('songpart');
    }
}
