<?php

namespace App\Http\Controllers\Web\Activities;

use App\Models\Media\Image;
use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Activities\ActivityCollection;
use App\Http\Requests\Activities\UpdateImage as Request;
use App\Http\Resources\Activities\Activity as ActivityResource;

class UpdateImage extends Controller
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
        if ($activity->image->exists) {
            $activity->image->delete();
        }

        $path = Storage::disk('activities')->putFile('/', $request->image());

        Image::create([
            'organisation_id' => $request->organisationId(),
            'disk'            => 'activities',
            'filename'        => $path,
            'imageable_id'    => $activity->id,
            'imageable_type'  => Activity::class,
        ]);

        return new ActivityResource($activity->refresh());
    }
}
