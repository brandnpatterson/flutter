<?php

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

require __DIR__ . '/../vendor/autoload.php';

$app = new Application([
  'debug' => true
]);

$app->post('/flutter/public/account', function (Request $request) {
    $message = $request->get('message');

    return new Response('Thank you for your feedback!', 201);
});

require __DIR__ . '/../routes/web.php';

$app->run();
