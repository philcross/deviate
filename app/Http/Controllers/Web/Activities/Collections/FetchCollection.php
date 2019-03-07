<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroup;
use App\Http\Requests\Activities\Collections\FetchCollection as Request;

class FetchCollection extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return ActivityGroup
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        return new ActivityGroup($collection);
    }
}
