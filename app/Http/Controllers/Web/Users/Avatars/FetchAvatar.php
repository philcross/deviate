<?php

namespace App\Http\Controllers\Web\Users\Avatars;

use App\Models\Users\User;
use Illuminate\Http\Response;
use League\Glide\ServerFactory;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use League\Glide\Responses\LaravelResponseFactory;
use App\Http\Requests\Users\Avatars\ShowAvatar as Request;

class FetchAvatar extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return Response
     */
    public function __invoke(Request $request, User $user)
    {
        $server = ServerFactory::create([
            'response'          => new LaravelResponseFactory($request),
            'source'            => Storage::disk('avatars')->getDriver(),
            'cache'             => Storage::disk('avatars')->getDriver(),
            'cache_path_prefix' => '.cache/avatars',
            'base_url'          => 'users',
        ]);

        return $server->getImageResponse($user->avatar->filename, [
            'w'   => 300,
            'h'   => 300,
            'fit' => 'crop',
        ]);
    }
}
