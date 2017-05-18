<?php

use Slim\Views\Twig as View;
use Slim\Views\TwigExtension as TwigExtension;
use Respect\Validation\Validator as v;

use \App\Auth\Auth as Auth;
use \App\Validation\Validator as Validator;

use \App\Controllers\AuthController as AuthController;
use \App\Controllers\FlutterController as FlutterController;

session_start();

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../config/database.php';

$app = new \Slim\App([
  'settings' => [
    'displayErrorDetails' => true
  ]
]);

$container = $app->getContainer();

$container['db'] = function ($container) use ($capsule) {
  return $capsule;
};

$container['auth'] = function ($container) {
  return new Auth;
};

$container['validator'] = function ($container) {
  return new Validator;
};

$container['view'] = function ($container) {
  $view = new View(__DIR__ . '/../views');

  $view->addExtension(new TwigExtension(
    $container->router,
    $container->request->getUri()
  ));

  $view->getEnvironment()->addGlobal('auth', [
    'check' => $container->auth->check(),
    'flutter' => $container->auth->flutter(),
    'user' => $container->auth->user(),
  ]);
  
  return $view;
};

$container['AuthController'] = function ($container) {
  return new AuthController($container);
};

$container['FlutterController'] = function ($container) {
  return new FlutterController($container);
};

v::with('App\\Validation\\');

require_once __DIR__ . '/../app/routes.php';
