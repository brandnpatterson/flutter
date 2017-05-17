<?php

namespace App\Validation;

use Respect\Validation\Exceptions\ValidationException;

class EmailAvailableException extends ValidationException
{
  public static $defaultTemplates = [
    self::MODE_DEFAULT => [
      self::STANDARD => 'An account already exists with this email'
    ]
  ];
}
