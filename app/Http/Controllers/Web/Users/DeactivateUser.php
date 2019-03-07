<?php

namespace App\Http\Controllers\Web\Users;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\Users\User as UserResource;
use App\Http\Requests\Users\DeactivateUser as Request;

class DeactivateUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return UserResource
     *
     * @throws \Throwable
     */
    public function __invoke(Request $request, User $user)
    {
        $user->delete();

        return new UserResource($user->refresh());
    }
}
