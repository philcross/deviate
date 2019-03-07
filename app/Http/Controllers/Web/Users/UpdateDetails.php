<?php

namespace App\Http\Controllers\Web\Users;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\UpdateDetails as Request;

class UpdateDetails extends Controller
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
        $user->update([
            'forename' => $request->name()->forename(),
            'surname'  => $request->name()->surname(),
            'email'    => $request->email(),
        ]);

        if ($request->shouldUpdatePassword()) {
            $user->password = $request->password();
            $user->save();
        }
    }
}
