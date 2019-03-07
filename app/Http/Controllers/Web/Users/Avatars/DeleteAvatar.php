<?php

namespace App\Http\Controllers\Web\Users\Avatars;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\Avatars\DeleteAvatar as Request;

class DeleteAvatar extends Controller
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
        $user->avatar->delete();
    }
}
