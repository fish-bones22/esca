<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSetLookupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('set_lookup', function (Blueprint $table) {
            $table->id();
            $table->uuid('song_set_id');
            $table->uuid('sequence_id');
            $table->string('remarks')->nullable();
            $table->integer('reference_key')->default(0);
            $table->timestamps();

            $table->foreign('song_set_id')->references('id')->on('song_sets')->onDelete('cascade');
            $table->foreign('sequence_id')->references('id')->on('sequences')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('set_lookup');
    }
}
