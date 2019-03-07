<?php

namespace App\Http\Controllers\Web\Activities;

use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\UpdateActivityDetails as Request;

class UpdateActivityDetails extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     * @param Activity $activity
     *
     * @return void
     */
    public function __invoke(Request $request, ActivityCollection $collection, Activity $activity)
    {
        $activity->update([
            'name'        => $request->name(),
            'description' => $request->description(),
            'places'      => $request->places(),
            'price'       => $request->price()->getAmount(),
            'starts_at'   => $request->dates()->start(),
            'ends_at'     => $request->dates()->end(),
        ]);
    }
}
