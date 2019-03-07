<?php

use App\Scopes\OrganisationScope;
use Carbon\Carbon;
use Faker\Generator as Faker;
use App\Models\Activities\Activity;
use App\Models\Activities\ActivityCollection;
use App\Models\Organisations\Organisation;

$factory->define(Activity::class, function (Faker $faker) {
    return [
        'organisation_id' => function () {
            return Organisation::withoutGlobalScope(OrganisationScope::class)->firstOrCreate([
                'name' => 'Deviate',
                'slug' => 'deviate'
            ])->id;
        },
        'collection_id'   => function ($activity) {
            return factory(ActivityCollection::class)->create([
                'organisation_id' => $activity['organisation_id'],
            ])->id;
        },
        'name'            => $faker->unique()->sentence(3),
        'description'     => $faker->paragraph,
        'price'           => $faker->numberBetween(10, 50) * 100,
        'places'          => $faker->randomFloat(1, 0.1, 0.5) * 100,
        'starts_at'       => function ($activity) {
            $date = \DB::table('activity_collections')
                ->where('id', $activity['collection_id'])
                ->first()
                ->activities_start_at;

            return Carbon::createFromFormat('Y-m-d H:i:s', $date)->setTime(9, 0, 0);
        },
        'ends_at'         => function ($activity) {
            $date = \DB::table('activity_collections')
                ->where('id', $activity['collection_id'])
                ->first()
                ->activities_start_at;

            return Carbon::createFromFormat('Y-m-d H:i:s', $date)->setTime(15, 30, 0);
        }
    ];
});
