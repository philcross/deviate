<?php

namespace App\Exceptions\Stripe;

use App\Exceptions\Exception;
use Stripe\Error\Card;

class CardErrorException extends Exception
{
    const ERROR_CODE = 3001;

    /**
     * Create an instance of this exception from the underlying stripe exception
     *
     * @param \Stripe\Error\Card $exception
     *
     * @return static
     */
    public static function fromStripException(Card $exception)
    {
        return new static(sprintf('An error was returned from Stripe with the message: %s', $exception->getMessage()));
    }
}
