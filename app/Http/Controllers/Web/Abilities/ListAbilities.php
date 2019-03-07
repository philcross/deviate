<?php

namespace App\Http\Controllers\Web\Abilities;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\AbilityGroup;
use App\Http\Resources\Usergroups\AbilityGroupCollection;
use App\Http\Requests\Abilities\ListAbilities as Request;

class ListAbilities extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return AbilityGroupCollection
     */
    public function __invoke(Request $request)
    {
        $groups = AbilityGroup::query()
            ->with(['abilities' => function ($query) {
                return $query->orderBy('name');
            }])
            ->orderBy('name')
            ->get();

        return new AbilityGroupCollection($groups);
    }
}
