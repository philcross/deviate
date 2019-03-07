<?php

namespace App\Http\Controllers\Web\Activities;

use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\ListActivities as Request;
use App\Http\Resources\Activities\ActivityCollection as ActivityCollectionResource;

class ListActivities extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return ActivityCollectionResource
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        return new ActivityCollectionResource(
            $collection->activities()->orderBy('starts_at')->orderBy('name')->paginate(999)
        );
    }
}
