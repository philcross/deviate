<?php

namespace App\Http\Controllers\Web\Users\Avatars;

use App\Models\Users\User;
use App\Models\Media\Image;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Users\Avatars\UpdateAvatar as Request;

class UpdateAvatar extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return void
     *
     * @throws \Throwable
     */
    public function __invoke(Request $request, User $user)
    {
        if ($user->avatar->exists) {
            $user->avatar->delete();
        }

        $path = Storage::disk('avatars')->putFile('/', $request->avatar());

        Image::create([
            'organisation_id' => $request->organisationId(),
            'disk'            => 'avatars',
            'filename'        => $path,
            'imageable_id'    => $user->id,
            'imageable_type'  => User::class,
        ]);
    }
}
