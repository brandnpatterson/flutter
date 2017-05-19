<?php

namespace App\Validation;

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\NestedValidationException;

class Validator
{
  protected $errors;

  // use Respect to check for errors and display the errors in an array in AuthController
  public function validate($request, array $rules)
  {
    foreach ($rules as $field => $rule) {
      try {
        $rule->setName(ucfirst($field))->assert($request->getParam($field));
      } catch (NestedValidationException $e) {
        $this->errors[$field] = $e->getMessages();
      }
    }

    // global variable used in Twig
    $_SESSION['errors'] = $this->errors;

    return $this;
  }

  public function failed()
  {
    return !empty($this->errors);
  }

  public function passed()
  {
    return empty($this->errors);
  }

  public function getErrors()
  {
    return $this->errors;
  }
}
