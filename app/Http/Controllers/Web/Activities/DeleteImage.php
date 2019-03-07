<?php

namespace App\Http\Controllers\Web\Activities;

use Illuminate\Http\Request;
use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use App\Models\Activities\ActivityCollection;

class DeleteImage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     * @param Activity $activity
     *
     * @return void
     *
     * @throws \Throwable
     */
    public function __invoke(Request $request, ActivityCollection $collection, Activity $activity)
    {
        $activity->image->delete();
    }
}
