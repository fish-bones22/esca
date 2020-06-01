<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKeyReferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('key_references', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('root');
            $table->string('alternative_root')->nullable();
            $table->string('scale');
            $table->integer('order');
            $table->string('display');
            $table->string('alternative_display')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('key_references');
    }
}
