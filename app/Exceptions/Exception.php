<?php

namespace App\Exceptions;

use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Exception as BaseException;
use Illuminate\Http\JsonResponse;

class Exception extends BaseException
{
    /**
     * Constructor
     *
     * @param string|null $message
     *
     * @return void
     */
    public function __construct($message = null)
    {
        if (is_null($message)) {
            $message = $this->getDefaultMessage();
        }

        parent::__construct($message);
    }

    /**
     * Report the exception.
     *
     * @return void
     */
    public function report()
    {
        //
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param Request $request
     *
     * @return Response|JsonResponse
     */
    public function render(Request $request)
    {
        $httpStatus = config('exceptions.'.static::ERROR_CODE.'.status');
        $title      = config('exceptions.'.static::ERROR_CODE.'.title');
        $details    = config('exceptions.'.static::ERROR_CODE.'.details');

        $this->message = empty($this->message) ? $details : $this->message;

        $errorData = [
            'id'      => $this->getUniqueErrorIdentifier(),
            'status'  => $httpStatus,
            'code'    => static::ERROR_CODE,
            'title'   => $title,
            'details' => $this->message,
        ];

        if (!empty($additional = $this->additional())) {
            $errorData['additional'] = $additional;
        }

        if ($request->expectsJson()) {
            return new JsonResponse($errorData, $httpStatus);
        } else {
            if (view()->exists('errors.'.$httpStatus)) {
                return view('errors.'.$httpStatus, $errorData);
            }

            return new Response('', $httpStatus);
        }
    }

    /**
     * Returns the default message for the error
     *
     * @return string
     */
    protected function getDefaultMessage(): string
    {
        return config('exceptions.' . static::ERROR_CODE . '.details');
    }

    /**
     * Returns any additional error context
     *
     * @return array
     */
    protected function additional(): array
    {
        return [];
    }

    /**
     * Returns the unique error identifier for this exception
     *
     * @return string
     */
    private function getUniqueErrorIdentifier()
    {
        try {
            return Uuid::uuid4()->toString();
        } catch (\Exception $e) {
            return '0000-0000-0000-0000';
        }
    }
}
