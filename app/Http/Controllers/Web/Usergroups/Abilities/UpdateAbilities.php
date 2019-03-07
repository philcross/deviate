<?php

namespace App\Http\Controllers\Web\Usergroups\Abilities;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Requests\Usergroups\Abilities\UpdateAbilities as Request;

class UpdateAbilities extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     *
     * @return void
     */
    public function __invoke(Request $request, Usergroup $usergroup)
    {
        $usergroup->abilities()->sync($request->abilities());
    }
}
