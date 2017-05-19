<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\Flutter;

class FlutterController extends Controller
{

  // navigate to User account with all flutter posts displayed
  public function getFlutter($request, $response)
  {
    $this->updateFlutter();
    return $this->view->render($response, 'account.twig');
  }

  // send a new flutter post to the database
  public function postFlutter($request, $response)
  {
    $flutter = Flutter::create([
      'user_id' => $_SESSION['user'],
      'text_area' => $request->getParam('text_area'),
    ]);

    $this->updateFlutter();
    return $response->withRedirect($this->router->pathFor('account'));
  }

  // update the DOM with newly created flutter post
  public function updateFlutter()
  {
    $flutter = Flutter::where('user_id', $_SESSION['user'])->first();
    $_SESSION['flutter'] = $flutter->id;
  }
}
