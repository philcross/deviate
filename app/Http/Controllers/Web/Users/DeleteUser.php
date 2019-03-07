<?php

namespace App\Http\Controllers\Web\Users;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\DeleteUser as Request;

class DeleteUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param User $user
     *
     * @return void
     */
    public function __invoke(Request $request, User $user)
    {
        $user->forceDelete();
    }
}
