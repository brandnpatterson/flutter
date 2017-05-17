<?php

namespace App\Controllers;

use App\Models\User;
use App\Models\FlutterPost;

class FlutterPostController extends Controller
{

  public function postFlutter($request, $response)
  {
    $flutterPosts = FlutterPost::create([
      'user_id' => $_SESSION['user'],
      'flutter_post' => $request->getParam('flutter_post'),
    ]);

    return $response->withRedirect($this->router->pathFor('account'));
  }
}
