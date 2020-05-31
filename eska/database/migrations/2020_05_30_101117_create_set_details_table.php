<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSetDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('set_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('song_set_id');
            $table->string('key');
            $table->string('value')->nullable();
            $table->timestamps();

            $table->foreign('song_set_id')->references('id')->on('song_sets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('set_details');
    }
}
