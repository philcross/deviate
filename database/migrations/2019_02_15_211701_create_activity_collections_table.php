<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivityCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_collections', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('organisation_id')->unsigned();
            $table->string('name');
            $table->string('description', 500);
            $table->date('booking_opens_at');
            $table->date('booking_closes_at');
            $table->date('payment_opens_at');
            $table->date('payment_closes_at');
            $table->date('activities_start_at');
            $table->date('activities_end_at');
            $table->boolean('is_hidden')->default(false);
            $table->timestamps();
        });

        Schema::table('activity_collections', function (Blueprint $table) {
            $table->foreign('organisation_id')->references('id')->on('organisations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_collections');
    }
}
