<?php

namespace App\Http\Controllers\Web\Usergroups\Membership;

use App\Models\Usergroups\Usergroup;
use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UserCollection;
use App\Http\Requests\Usergroups\Membership\SearchMembers as Request;

class SearchMembers extends Controller
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
        $members = $usergroup->members();

        $request->search()->apply($members);

        return new UserCollection($members->paginate($request->limit()));
    }
}
