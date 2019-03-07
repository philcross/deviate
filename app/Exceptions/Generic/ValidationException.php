<?php

namespace App\Exceptions\Generic;

use App\Exceptions\Exception;
use Illuminate\Validation\ValidationException as BaseValidationException;

class ValidationException extends Exception
{
    const ERROR_CODE = 1001;

    /** @var array */
    private $errors = [];

    /**
     * {@inheritdoc}
     */
    public function __construct(BaseValidationException $exception)
    {
        parent::__construct($exception->getMessage());

        $this->errors = $exception->errors();
    }

    /**
     * {@inheritdoc}
     */
    protected function additional(): array
    {
        return [
            'errors' => $this->errors,
        ];
    }
}
