<?php

namespace App\Http\Controllers\Web\Activities;

use Illuminate\Http\Response;
use League\Glide\ServerFactory;
use App\Models\Activities\Activity;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Activities\ActivityCollection;
use League\Glide\Responses\LaravelResponseFactory;
use App\Http\Requests\Activities\ShowImage as Request;

class ShowImage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     * @param Activity $activity
     *
     * @return Response
     */
    public function __invoke(Request $request, ActivityCollection $collection, Activity $activity)
    {
        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory($request),
            'source'            => Storage::disk('activities')->getDriver(),
            'cache'             => Storage::disk('activities')->getDriver(),
            'cache_path_prefix' => '.cache/collections',
            'base_url'          => 'collections',
        ]);

        return $server->getImageResponse($activity->image->filename, [
            'w'   => 1000,
            'h'   => 500,
            'fit' => 'crop',
        ]);
    }
}
