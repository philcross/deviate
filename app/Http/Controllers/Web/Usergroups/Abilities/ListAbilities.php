<?php

namespace App\Http\Controllers\Web\Usergroups\Abilities;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Resources\Usergroups\AbilityCollection;
use App\Http\Requests\Usergroups\Abilities\ListAbilities as Request;

class ListAbilities extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     *
     * @return AbilityCollection
     */
    public function __invoke(Request $request, Usergroup $usergroup)
    {
        return new AbilityCollection($usergroup->abilities);
    }
}
