<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\Flutter;

class FlutterController extends Controller
{

  public function getFlutter($request, $response)
  {
    return $this->view->render($response, 'account.twig');
  }

  public function postFlutter($request, $response)
  {
    $flutter = Flutter::create([
      'user_id' => $_SESSION['user'],
      'text_area' => $request->getParam('text_area'),
    ]);

    $this->updateFlutter();
    return $response->withRedirect($this->router->pathFor('account'));
  }

  public function updateFlutter()
  {
    $flutter = Flutter::where('user_id', $_SESSION['user'])->first();
    $_SESSION['flutter'] = $flutter->id;
  }
}
