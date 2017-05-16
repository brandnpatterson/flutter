<?php

namespace App\Controllers;

use App\Models\User;

class SignUpController extends Controller
{
  public function getSignUp($request, $response)
  {
    return $this->view->render($response, 'sign-up.twig');
  }

  public function postSignUp($request, $response)
  {
    $user = User::create([
      'email' => $request->getParam('email'),
      'password' => password_hash($request->getParam('password'), PASSWORD_DEFAULT),
    ]);

    return $response->withRedirect($this->router->pathFor('account'));
  }
}
