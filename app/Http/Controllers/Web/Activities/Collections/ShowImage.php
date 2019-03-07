<?php

namespace App\Http\Controllers\Web\Activities\Collections;

use League\Glide\ServerFactory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Models\Activities\ActivityCollection;
use League\Glide\Responses\LaravelResponseFactory;
use App\Http\Requests\Activities\Collections\ShowImage as Request;

class ShowImage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param ActivityCollection $collection
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, ActivityCollection $collection)
    {
        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory($request),
            'source'            => Storage::disk('collections')->getDriver(),
            'cache'             => Storage::disk('collections')->getDriver(),
            'cache_path_prefix' => '.cache/collections',
            'base_url'          => 'collections',
        ]);

        return $server->getImageResponse($collection->image->filename, [
            'w'   => 1000,
            'h'   => 500,
            'fit' => 'crop',
        ]);
    }
}
