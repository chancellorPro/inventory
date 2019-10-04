<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActionLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('action_log', function (Blueprint $table) {
            $table->increments('id');

            $table->boolean('income')->index();
            $table->unsignedInteger('color')->nullable();
            $table->unsignedInteger('material')->nullable();
            $table->unsignedInteger('count')->nullable();
            $table->unsignedInteger('partition')->index();
            $table->unsignedInteger('customer')->nullable();
            $table->text('description');

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
        Schema::dropIfExists('action_log');
    }
}
