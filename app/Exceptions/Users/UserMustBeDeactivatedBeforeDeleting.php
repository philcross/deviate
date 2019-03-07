<?php

namespace App\Exceptions\Users;

use App\Exceptions\Exception;

class UserMustBeDeactivatedBeforeDeleting extends Exception
{
    const ERROR_CODE = 2001;
}
