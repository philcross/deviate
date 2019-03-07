<?php

namespace App\Http\Controllers\Web\Organisations\Billing;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SelectPlan extends Controller
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
        try {
            $planId = config('services.stripe.plans.'.$request->get('plan_id'));

            if (!$request->user()->organisation->subscribed('main')) {
                $request->user()->organisation->newSubscription('main', $planId)->create();
            } else {
                $request->user()->organisation->subscription('main')->swap($planId);
            }
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
