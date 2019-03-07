<?php

namespace App\Exceptions\Generic;

use App\Exceptions\Exception;

class UnauthorizedException extends Exception
{
    const ERROR_CODE = 1003;
}
