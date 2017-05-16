<?php

namespace App\Controllers;

class AccountController extends Controller
{
  public function redirect($request, $response)
  {
    return $this->view->render($response, 'account.twig');
  }
}
