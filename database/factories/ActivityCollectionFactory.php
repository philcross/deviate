<?php

use App\Models\Activities\ActivityCollection;
use App\Models\Organisations\Organisation;
use App\Scopes\OrganisationScope;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(ActivityCollection::class, function (Faker $faker) {
    return [
        'organisation_id'     => function () {
            return Organisation::withoutGlobalScope(OrganisationScope::class)->firstOrCreate([
                'name' => 'Deviate',
                'slug' => 'deviate'
            ])->id;
        },
        'name'                => $faker->unique()->sentence(3),
        'description'         => $faker->paragraph,
        'booking_opens_at'    => function () use ($faker) {
            return $faker->dateTimeBetween(Carbon::now(), Carbon::now()->addMonth(2))->setTime(0, 0, 0);
        },
        'booking_closes_at'   => function ($collection) {
            $date = clone $collection['booking_opens_at'];

            return $date->add(new DateInterval('P7D'))->setTime(23, 59, 59);
        },
        'payment_opens_at'    => function ($collection) {
            $date = clone $collection['booking_closes_at'];

            return $date->add(new DateInterval('P1D'))->setTime(0, 0, 0);
        },
        'payment_closes_at'   => function ($collection) {
            $date = clone $collection['payment_opens_at'];

            return $date->add(new DateInterval('P7D'))->setTime(23, 59, 59);
        },
        'activities_start_at' => function ($collection) {
            $date = clone $collection['payment_closes_at'];

            return $date->add(new DateInterval('P1D'))->setTime(0, 0, 0);
        },
        'activities_end_at'   => function ($collection) {
            $date = clone $collection['activities_start_at'];

            return $date->add(new DateInterval('P7D'))->setTime(23, 59, 59);
        },
        'is_hidden'           => false,
    ];
});

$factory->state(ActivityCollection::class, 'hidden', [
    'is_hidden' => true,
]);
