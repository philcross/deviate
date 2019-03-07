<?php

namespace App\Http\Controllers\Web\Organisations\Billing;

use App\Http\Resources\Stripe\Card;
use Stripe\Error\Card as CardError;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use App\Exceptions\Stripe\CardErrorException;
use App\Exceptions\Stripe\GenericStripeError;
use App\Http\Requests\Organisations\Billing\AddPaymentMethod as Request;

class AddPaymentMethod extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return Card
     *
     * @throws CardErrorException
     * @throws GenericStripeError
     */
    public function __invoke(Request $request)
    {
        try {
            $request->organisation()->updateCard($request->token());

            $card = $request->organisation()->defaultCard();

            Cache::forget(sprintf('stripe.customers.%s.cards', $request->organisationId()));

            return new Card($card);
        } catch (CardError $e) {
            throw CardErrorException::fromStripException($e);
        } catch (\Exception $e) {
            throw new GenericStripeError($e->getMessage());
        }
    }
}
