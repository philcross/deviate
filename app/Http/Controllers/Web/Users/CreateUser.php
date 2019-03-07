<?php

namespace App\Http\Controllers\Web\Users;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use App\Http\Resources\Users\User as UserResource;
use App\Http\Requests\Users\CreateUser as Request;

class CreateUser extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return UserResource
     */
    public function __invoke(Request $request)
    {
        $user = User::create([
            'organisation_id' => $request->organisationId(),
            'forename'        => $request->name()->forename(),
            'surname'         => $request->name()->surname(),
            'email'           => $request->email(),
            'password'        => $request->password(),
        ]);

        return new UserResource($user);
    }
}
