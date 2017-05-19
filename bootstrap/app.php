<?php

// vendor
use Slim\Views\Twig as View;
use Slim\Views\TwigExtension as TwigExtension;
use Respect\Validation\Validator as v;

// local app

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

// Container used to inject all dependencies to the app
$container = $app->getContainer();

$container['auth'] = function ($container) {
  return new Auth;
};

$container['db'] = function ($container) use ($capsule) {
  // capsule used by Illuminate -- declared in /../config/database.php
  return $capsule;
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
  // auth used as global variable in order to check for user session
  $view->getEnvironment()->addGlobal('auth', [
    'check' => $container->auth->check(),
    'flutter' => $container->auth->flutter(),
    'user' => $container->auth->user()
  ]);

  return $view;
};

// Controller declarations
$container['AuthController'] = function ($container) {
  return new AuthController($container);
};

$container['FlutterController'] = function ($container) {
  return new FlutterController($container);
};

// Respect validation namespaceing
v::with('App\\Validation\\');

require_once __DIR__ . '/../app/routes.php';
