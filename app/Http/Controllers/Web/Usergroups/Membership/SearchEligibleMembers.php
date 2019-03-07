<?php

namespace App\Http\Controllers\Web\Usergroups\Membership;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Resources\Users\UserCollection;
use App\Http\Requests\Usergroups\Membership\SearchEligibleMembers as Request;

class SearchEligibleMembers extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     *
     * @return UserCollection
     */
    public function __invoke(Request $request, Usergroup $usergroup)
    {
        $users = User::query()
            ->inOrganisation($request->organisation())
            ->whereDoesntHave('usergroups', function ($query) use ($usergroup) {
                $query->where('id', $usergroup->id);
            });

        $request->search()->apply($users);

        return new UserCollection($users->paginate($request->limit()));
    }
}
