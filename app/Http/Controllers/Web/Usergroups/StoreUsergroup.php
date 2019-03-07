<?php

namespace App\Http\Controllers\Web\Usergroups;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup as EloquentUsergroup;
use App\Http\Requests\Usergroups\StoreUsergroup as Request;
use App\Http\Resources\Usergroups\Usergroup as UsergroupResource;

class StoreUsergroup extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return UsergroupResource
     */
    public function __invoke(Request $request)
    {
        $usergroup = EloquentUsergroup::create([
            'organisation_id' => $request->organisationId(),
            'name'            => $request->name(),
            'description'     => $request->description(),
        ]);

        return new UsergroupResource($usergroup);
    }
}
