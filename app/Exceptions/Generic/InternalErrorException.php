<?php

namespace App\Exceptions\Generic;

use App\Exceptions\Exception;

class InternalErrorException extends Exception
{
    const ERROR_CODE = 1005;

    /**
     * {@inheritdoc}
     */
    public function __construct(?string $message = null)
    {
        parent::__construct(null);
    }

}
