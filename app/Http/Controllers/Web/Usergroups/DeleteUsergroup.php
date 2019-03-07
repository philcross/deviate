<?php

namespace App\Http\Controllers\Web\Usergroups;

use App\Models\Usergroups\Usergroup;
use App\Http\Controllers\Controller;
use App\Http\Requests\Usergroups\DeleteUsergroup as Request;

class DeleteUsergroup extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param Usergroup $usergroup
     *
     * @return void
     *
     * @throws \Exception
     */
    public function __invoke(Request $request, Usergroup $usergroup)
    {
        $usergroup->delete();
    }
}
