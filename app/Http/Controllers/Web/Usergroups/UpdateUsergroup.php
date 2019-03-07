<?php

namespace App\Http\Controllers\Web\Usergroups;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Requests\Usergroups\UpdateUsergroup as Request;
use App\Http\Resources\Usergroups\Usergroup as UsergroupResource;

class UpdateUsergroup extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     *
     * @return UsergroupResource
     */
    public function __invoke(Request $request, Usergroup $usergroup)
    {
        $usergroup->update([
            'name'        => $request->name(),
            'description' => $request->description(),
        ]);

        return new UsergroupResource($usergroup);
    }
}
