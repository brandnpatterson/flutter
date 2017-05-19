<?php

namespace App\Auth;

use App\Models\User;
use App\Models\Flutter;

class Auth
{
  /* The following three methods are used globally in twig templates: */

  // to check if user is signed in
  public function check()
  {
    $userIsSet = isset($_SESSION['user']);
    $flutterIsSet = isset($_SESSION['flutter']);
    return [$userIsSet, $flutterIsSet];
  }

  // to to display user.email upon sign in
  public function user()
  {
    if (isset($_SESSION['user'])) {
      return User::find($_SESSION['user']);
    }
  }

  // to display flutter.text_area in flutter posts
  public function flutter()
  {
    if (isset($_SESSION['flutter'])) {
      return Flutter::all()->where('user_id', $_SESSION['user']);
    }
  }

  public function attemptSignIn($email, $password)
  {
    $user = User::where('email', $email)->first();

    if (!$user) {
      return false;
    }

    if (password_verify($password, $user->password)) {
      $_SESSION['user'] = $user->id;

      return true;
    }

    return false;
  }

  public function signOut()
  {
    unset($_SESSION['user']);
  }
}
