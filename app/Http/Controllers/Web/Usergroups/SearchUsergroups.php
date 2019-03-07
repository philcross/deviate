<?php

namespace App\Http\Controllers\Web\Usergroups;

use App\Http\Controllers\Controller;
use App\Models\Usergroups\Usergroup;
use App\Http\Resources\Usergroups\Search\SearchCollection;
use App\Http\Requests\Usergroups\SearchUsergroups as Request;

class SearchUsergroups extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return SearchCollection
     */
    public function __invoke(Request $request)
    {
        $usergroups = Usergroup::query()->with(['members' => function ($query) {
            $query->take(5);
        }]);

        $request->search()->apply($usergroups);

        return new SearchCollection($usergroups->paginate($request->limit()));
    }
}
