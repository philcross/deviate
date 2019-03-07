<?php

namespace App\Http\Controllers\Web\Registration;

use App\Models\Users\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Jobs\Payments\CreateCustomer;
use App\Models\Organisations\Organisation;
use App\Http\Requests\Registration\Register as Request;

class Register extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return void
     */
    public function __invoke(Request $request)
    {
        /** @var User $user */
        $user = User::create([
            'forename' => $request->name()->forename(),
            'surname'  => $request->name()->surname(),
            'email'    => $request->email(),
            'password' => $request->password(),
        ]);

        /** @var Organisation $organisation */
        $organisation = Organisation::create([
            'name' => $request->organisation(),
            'slug' => $request->slug(),
        ]);

        $user->organisation_id = $organisation->id;
        $user->save();

        $organisation->superusers()->attach($user);

        Auth::login($user);
        CreateCustomer::dispatch($user)->onQueue('payments');
    }
}
