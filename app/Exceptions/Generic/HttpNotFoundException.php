<?php

namespace App\Exceptions\Generic;

use App\Exceptions\Exception;
use Exception as BaseException;

class HttpNotFoundException extends Exception
{
    const ERROR_CODE = 1002;

    /**
     * {@inheritdoc}
     */
    public function __construct(BaseException $exception)
    {
        parent::__construct($exception->getMessage());
    }

    /**
     * {@inheritdoc}
     */
    protected function additional(): array
    {
        return [];
    }
}
