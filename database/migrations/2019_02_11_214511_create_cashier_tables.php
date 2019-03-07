<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCashierTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organisations', function ($table) {
            $table->string('stripe_id')->nullable()->collation('utf8mb4_bin')->after('slug');
            $table->string('card_brand')->nullable()->after('stripe_id');
            $table->string('card_last_four', 4)->nullable()->after('card_brand');
            $table->timestamp('trial_ends_at')->nullable()->after('card_last_four');
        });

        Schema::create('subscriptions', function ($table) {
            $table->increments('id');
            $table->unsignedInteger('organisation_id');
            $table->string('name');
            $table->string('stripe_id')->collation('utf8mb4_bin');
            $table->string('stripe_plan');
            $table->integer('quantity');
            $table->timestamp('trial_ends_at')->nullable();
            $table->timestamp('ends_at')->nullable();
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
        Schema::table('organisations', function (Blueprint $table) {
            $table->dropColumn(['stripe_id', 'card_brand', 'card_last_four', 'trial_ends_at']);
        });

        Schema::dropIfExists('subscriptions');
    }
}
