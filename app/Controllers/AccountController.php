<?php

namespace App\Controllers;

use App\Controllers\Controller;

class AccountController extends Controller
{
  public function redirect($request, $response)
  {
    return $this->view->render($response, 'account.twig');
  }
}
