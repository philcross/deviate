<?php

use Faker\Generator as Faker;
use App\Models\Usergroups\AbilityGroup;

$factory->define(AbilityGroup::class, function (Faker $faker) {
    return [
        'name'        => $faker->unique()->sentence(2),
        'icon'        => 'flaticon-users',
        'description' => $faker->paragraph,
    ];
});
