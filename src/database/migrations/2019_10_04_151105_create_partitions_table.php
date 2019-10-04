<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partitions', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->unsignedInteger('product_id_1')->nullable();
            $table->unsignedInteger('color_id_1')->nullable();
            $table->unsignedInteger('material_id_1')->nullable();
            $table->unsignedInteger('count_1')->nullable();
            $table->unsignedInteger('product_id_2')->nullable();
            $table->unsignedInteger('color_id_2')->nullable();
            $table->unsignedInteger('count_2')->nullable();
            $table->unsignedInteger('material_id_2')->nullable();
            $table->text('description')->nullable();

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
        Schema::dropIfExists('partitions');
    }
}
