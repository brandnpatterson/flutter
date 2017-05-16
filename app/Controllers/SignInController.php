<?php

namespace App\Controllers;

use App\Controllers\Controller;

class SignInController extends Controller
{
  public function index ($request, $response)
  {
    return $this->view->render($response, 'sign-in.twig');
  }
}
