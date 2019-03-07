<?php

namespace App\Http\Controllers\Web\Activities;

use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\FetchActivity as Request;
use App\Http\Resources\Activities\Activity as ActivityResource;

class FetchActivity extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     * @param Activity $activity
     *
     * @return ActivityResource
     */
    public function __invoke(Request $request, ActivityCollection $collection, Activity $activity)
    {
        return new ActivityResource($activity);
    }
}
