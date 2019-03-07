<?php

namespace App\Http\Controllers\Web\Activities;

use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\CreateActivity as Request;
use App\Http\Resources\Activities\Activity as ActivityResource;

class CreateActivity extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return ActivityResource
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        $activity = Activity::create([
            'organisation_id' => $request->organisationId(),
            'collection_id'   => $collection->id,
            'name'            => $request->name(),
            'description'     => $request->description(),
            'places'          => $request->places(),
            'price'           => $request->price()->getAmount(),
            'starts_at'       => $request->dates()->start(),
            'ends_at'         => $request->dates()->end()
        ]);

        return new ActivityResource($activity);
    }
}
