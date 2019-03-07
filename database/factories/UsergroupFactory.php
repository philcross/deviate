<?php

use App\Models\Organisations\Organisation;
use App\Scopes\OrganisationScope;
use Faker\Generator as Faker;
use App\Models\Usergroups\Usergroup;

$factory->define(Usergroup::class, function (Faker $faker) {
    return [
        'organisation_id'   => function () {
            return Organisation::withoutGlobalScope(OrganisationScope::class)->firstOrCreate([
                'name' => 'Deviate',
                'slug' => 'deviate'
            ])->id;
        },
        'name'        => $faker->unique()->sentence(2),
        'description' => $faker->text(250),
    ];
});
