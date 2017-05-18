<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\FlutterPost;

class FlutterPostController extends Controller
{

  public function postFlutter($request, $response)
  {
    $flutters = FlutterPost::create([
      'user_id' => $_SESSION['user'],
      'text_field' => $request->getParam('text_field'),
    ]);

    return $response->withRedirect($this->router->pathFor('account'));
  }
}
