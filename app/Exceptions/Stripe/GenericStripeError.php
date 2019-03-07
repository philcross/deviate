<?php

namespace App\Exceptions\Stripe;

use App\Exceptions\Exception;

class GenericStripeError extends Exception
{
    const ERROR_CODE = 3002;
}
