<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroupCollection;
use App\Http\Requests\Activities\Collections\ListCollections as Request;

class ListCollections extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return ActivityGroupCollection
     */
    public function __invoke(Request $request)
    {
        return new ActivityGroupCollection(
            ActivityCollection::visible()->orderBy('name')->paginate(20)
        );
    }
}
