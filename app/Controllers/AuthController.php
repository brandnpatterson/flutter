<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\FlutterPosts;
use Respect\Validation\Validator as v;

class AuthController extends Controller
{
  public function getSignOut($request, $response)
  {
    $this->auth->signOut();
    return $this->view->render($response, 'sign-in.twig');
  }

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

  public function getSignUp($request, $response, $errors = [])
  {
    return $this->view->render($response, 'sign-up.twig', ['errors' => $errors]);
  }

  public function postSignUp($request, $response)
  {
    $validation = $this->validator->validate($request, [
      'email' => v::emailAvailable()
    ]);

    if($validation->failed()) {
      return $this->getSignUp($request, $response, $validation->getErrors());
    }

    $user = User::create([
      'email' => $request->getParam('email'),
      'password' => password_hash($request->getParam('password'), PASSWORD_DEFAULT),
    ]);

    $this->auth->attempt($user->email, $request->getParam('password'));

    if($validation->passed()) {
      return $response->withRedirect($this->router->pathFor('account'));
    }
  }
}
