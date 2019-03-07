<?php

namespace App\Http\Controllers\Web\Organisations\Billing;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Stripe\Error\Base as StripeError;
use App\Exceptions\Stripe\GenericStripeError;
use App\Http\Resources\Stripe\CardCollection;
use App\Http\Requests\Organisations\Billing\FetchPaymentMethods as Request;

class FetchPaymentMethods extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return CardCollection
     */
    public function __invoke(Request $request)
    {
        $key = sprintf('stripe.customers.%s.cards', $request->organisationId());

        $cards = Cache::rememberForever($key, function () use ($request) {
            try {
                return $request->organisation()->cards();
            } catch (StripeError $e) {
                throw new GenericStripeError($e->getMessage());
            }
        });

        return new CardCollection($cards);
    }
}
