<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSequenceLookupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sequence_lookup', function (Blueprint $table) {
            $table->id();
            $table->uuid('sequence_id');
            $table->uuid('songpart_id');
            $table->integer('order');
            $table->integer('repeat')->default(1);
            $table->integer('reference_key')->default(0);
            $table->timestamps();

            $table->foreign('sequence_id')->references('id')->on('sequences')->onDelete('cascade');
            $table->foreign('songpart_id')->references('id')->on('songparts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sequence');
    }
}
