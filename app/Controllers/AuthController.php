<?php

namespace App\Controllers;

use App\Auth;
use App\Models\User;

class AuthController extends Controller
{

  public function getSignIn($request, $response)
  {
    return $this->view->render($response, 'sign-in.twig');
  }

  public function postSignIn($request, $response)
  {
    $auth = $this->auth->attempt(
      $request->getParam('email'),
      $request->getParam('password')
    );

    if(!$auth) {
      return $response->withRedirect($this->router->pathFor('sign-in'));
    }

    return $response->withRedirect($this->router->pathFor('account'));
  }

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
