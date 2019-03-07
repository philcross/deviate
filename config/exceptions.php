<?php

return [

    /**
     * Generic Exceptions
     */
    1001 => [
        'status'  => 422,
        'title'   => 'Invalid Data',
        'details' => 'The given data failed to pass validation.',
    ],
    1002 => [
        'status'  => 404,
        'title'   => 'Resource Missing',
        'details' => 'The resource could not be found.',
    ],
    1003 => [
        'status'  => 401,
        'title'   => 'Unauthorized',
        'details' => 'You are not authorized to perform this action. If you believe this to be an error, please contact your administrator.',
    ],
    1004 => [
        'status'  => 401,
        'title'   => 'Unauthorized',
        'details' => 'You are not authorized to perform this action. If you believe this to be an error, please contact your administrator.',
    ],
    1005 => [
        'status'  => 500,
        'title'   => 'An error occurred',
        'details' => 'An error occurred while trying ot process your request. This has been automatically reported.',
    ],

    /**
     * User Exceptions
     */
    2001 => [
        'status'  => 400,
        'title'   => 'Cannot delete user',
        'details' => 'Users must be deactivated first before you can delete them.',
    ],

    /**
     * User Exceptions
     */
    3001 => [
        'status'  => 400,
        'title'   => 'Stripe error',
        'details' => 'An error was returned from Stripe.',
    ],
    3002 => [
        'status'  => 400,
        'title'   => 'Stripe error',
        'details' => 'An error was returned from Stripe. The error has been reported and we are looking into it.',
    ],
];
