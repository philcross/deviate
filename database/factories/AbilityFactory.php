<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Models\Usergroups\Ability;
use App\Models\Usergroups\AbilityGroup;

$factory->define(Ability::class, function (Faker $faker) {
    return [
        'group_id'    => function () {
            return factory(AbilityGroup::class)->create()->id;
        },
        'name'        => $faker->unique()->sentence(2),
        'ability_key' => strtolower(Str::snake($faker->unique()->sentence(2), '.')),
        'description' => $faker->paragraph,
    ];
});
