<?php

namespace App\Controllers;

class AccountController extends Controller
{
  public function accountHome($request, $response)
  {
    return $this->view->render($response, 'account.twig');
  }
}
