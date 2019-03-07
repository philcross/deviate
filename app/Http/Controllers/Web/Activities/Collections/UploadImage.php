<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use App\Models\Media\Image;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Activities\ActivityCollection;
use App\Http\Resources\Activities\ActivityGroup;
use App\Http\Requests\Activities\Collections\UploadImage as Request;

class UploadImage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return ActivityGroup
     *
     * @throws \Throwable
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        if ($collection->image->exists) {
            $collection->image->delete();
        }

        $path = Storage::disk('collections')->putFile('/', $request->image());

        Image::create([
            'organisation_id' => $request->organisationId(),
            'disk'            => 'collections',
            'filename'        => $path,
            'imageable_id'    => $collection->id,
            'imageable_type'  => ActivityCollection::class,
        ]);

        return new ActivityGroup($collection->refresh());
    }
}
