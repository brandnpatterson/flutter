<?php

namespace App\Controllers;

use App\Controllers\Controller;
use Slim\Views\Twig as View;

class SignInController extends Controller
{
  public function index ($request, $response)
  {
    return $this->view->render($response, 'sign-in.twig');
  }
}
