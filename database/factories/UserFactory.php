<?php

use App\Models\Organisations\Organisation;
use App\Scopes\OrganisationScope;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Models\Users\User::class, function (Faker $faker) {
    return [
        'organisation_id'   => function () {
            return Organisation::withoutGlobalScope(OrganisationScope::class)->firstOrCreate([
                'name' => 'Deviate',
                'slug' => 'deviate'
            ])->id;
        },
        'forename'          => $faker->firstName,
        'surname'           => $faker->lastName,
        'email'             => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password'          => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token'    => str_random(10),
    ];
});

$factory->state(\App\Models\Users\User::class, 'deactivated', [
    'deleted_at' => date('Y-m-d H:i:s'),
]);
