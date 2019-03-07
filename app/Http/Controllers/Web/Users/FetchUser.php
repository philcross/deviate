<?php

namespace App\Http\Controllers\Web\Users;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\FetchUser as Request;
use App\Http\Resources\Users\User as UserResource;

class FetchUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return UserResource
     */
    public function __invoke(Request $request, User $user)
    {
        return new UserResource($user);
    }
}
