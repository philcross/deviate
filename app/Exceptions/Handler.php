<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Auth\AuthenticationException;
use App\Exceptions\Generic\ValidationException;
use App\Exceptions\Generic\UnauthorizedException;
use App\Exceptions\Generic\HttpNotFoundException;
use App\Exceptions\Generic\InternalErrorException;
use Symfony\Component\Debug\Exception\FatalThrowableError;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Validation\ValidationException as BaseValidationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Exception $exception
     *
     * @return void
     *
     * @throws \Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  Request  $request
     * @param  \Exception  $exception
     *
     * @return Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof AuthenticationException) {
            $exception = new UnauthorizedException;
        }

        if ($exception instanceof NotFoundHttpException || $exception instanceof ModelNotFoundException) {
            $exception = new HttpNotFoundException($exception);
        }

//        if ($exception instanceof FatalThrowableError) {
//            $exception = new InternalErrorException($exception);
//        }

        return parent::render($request, $exception);
    }

    /**
     * {@inheritdoc}
     */
    protected function convertValidationExceptionToResponse(BaseValidationException $e, $request)
    {
        $exception = new ValidationException($e);

        return $this->render($request, $exception);
    }

    /**
     * {@inheritdoc}
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if (!$request->expectsJson()) {
            return redirect('/login');
        }

        return parent::unauthenticated($request, $exception);
    }
}
