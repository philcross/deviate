<?php

namespace App\Http\Controllers\Web\Users\Usergroups;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\Usergroups\UsergroupCollection;
use App\Http\Requests\Users\Usergroup\FetchUsergroups as Request;

class FetchUsergroups extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return UsergroupCollection
     */
    public function __invoke(Request $request, User $user)
    {
        return new UsergroupCollection($user->usergroups);
    }
}
