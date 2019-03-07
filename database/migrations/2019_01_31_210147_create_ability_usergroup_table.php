<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAbilityUsergroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ability_usergroup', function (Blueprint $table) {
            $table->integer('ability_id')->unsigned();
            $table->integer('usergroup_id')->unsigned();

            $table->unique(['ability_id', 'usergroup_id']);
        });

        Schema::table('ability_usergroup', function (Blueprint $table) {
            $table->foreign('ability_id')->references('id')->on('abilities')->onDelete('cascade');
            $table->foreign('usergroup_id')->references('id')->on('usergroups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ability_usergroup');
    }
}
