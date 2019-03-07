<?php

namespace App\Http\Controllers\Web\Users;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UserCollection;
use App\Http\Requests\Users\SearchUsers as Request;

class SearchUsers extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return UserCollection
     */
    public function __invoke(Request $request)
    {
        $users = $request->organisation()->users();

        $request->search()->apply($users);

        return new UserCollection(
            $users->paginate($request->limit())
        );
    }
}
