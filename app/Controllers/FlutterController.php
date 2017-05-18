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

    $this->auth->getFlutter();

    return $response->withRedirect($this->router->pathFor('account'));
  }
}
