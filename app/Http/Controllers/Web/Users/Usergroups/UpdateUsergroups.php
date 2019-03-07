<?php

namespace App\Http\Controllers\Web\Users\Usergroups;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\Usergroup\UpdateUsergroups as Request;

class UpdateUsergroups extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return void
     */
    public function __invoke(Request $request, User $user)
    {
        $user->usergroups()->sync($request->usergroups());
    }
}
