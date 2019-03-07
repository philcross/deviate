<?php

use Faker\Generator as Faker;
use App\Models\Organisations\Organisation;
use Illuminate\Support\Str;

$factory->define(Organisation::class, function (Faker $faker) {
    $name = $faker->unique()->company;

    return [
        'name' => $name,
        'slug' => Str::slug($name),
    ];
});
