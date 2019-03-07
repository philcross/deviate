<?php

namespace App\Http\Controllers\Web\Usergroups\Membership;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Requests\Usergroups\Membership\AddMember as Request;

class AddMember extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     * @param User $user
     *
     * @return void
     */
    public function __invoke(Request $request, Usergroup $usergroup, User $user)
    {
        if (!$usergroup->members->contains($user)) {
            $usergroup->members()->attach($user);
        }
    }
}
