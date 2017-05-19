<?php

namespace App\Controllers;

use App\Models\User;
use Respect\Validation\Validator as v;

class AuthController extends Controller
{

  // navigate to sign-in page
  public function getSignIn($request, $response)
  {
    return $this->view->render($response, 'sign-in.twig');
  }

  // uses attemptSignIn method in Auth to sign in user
  public function postSignIn($request, $response)
  {
    $auth = $this->auth->attemptSignIn(
      $request->getParam('email'),
      $request->getParam('password')
    );

    if(!$auth) {
      return $response->withRedirect($this->router->pathFor('sign-in'));
    }

    return $response->withRedirect($this->router->pathFor('account'));
  }

  // navigate to sign up and ready email validation error
  public function getSignUp($request, $response, $errors = [])
  {
    return $this->view->render($response, 'sign-up.twig', ['errors' => $errors]);
  }

  // show validation error if email is taken in database
  public function postSignUp($request, $response)
  {
    $validation = $this->validator->validate($request, [
      'email' => v::emailAvailable()
    ]);

    if($validation->failed()) {
      return $this->getSignUp($request, $response, $validation->getErrors());
    }

    // create new user according to input values
    $user = User::create([
      'email' => $request->getParam('email'),
      'password' => password_hash($request->getParam('password'), PASSWORD_DEFAULT),
    ]);

    // sign in newly created user
    if($validation->passed()) {
      $this->auth->attemptSignIn($user->email, $request->getParam('password'));
      return $response->withRedirect($this->router->pathFor('account'));
    }
  }

  public function getSignOut($request, $response)
  {
    $this->auth->signOut();
    return $this->view->render($response, 'sign-in.twig');
  }
}
