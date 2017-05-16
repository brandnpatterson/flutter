<?php

use Illuminate\Database\Capsule\Manager as Manager;
use Slim\Views\Twig as View;
use Slim\Views\TwigExtension as TwigExtension;
use App\Auth\Auth as Auth;
use App\Controllers\AuthController as AuthController;
use App\Controllers\AccountController as AccountController;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App([
  'settings' => [
    'displayErrorDetails' => true,
    'db' => [
      'driver' => 'mysql',
      'host' => 'localhost',
      'database' => 'flutter',
      'username' => 'root',
      'password' => 'root',
      'charset' => 'utf8',
      'collation' => 'utf8_general_ci'
    ]
  ],
]);

$container = $app->getContainer();

$capsule = new Manager;
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule) {
  return $capsule;
};

$container['auth'] = function ($container) {
  return new Auth;
};

$container['view'] = function ($container) {
  $view = new View(__DIR__ . '/../resources/views', [
    'cache' => false
  ]);

  $view->addExtension(new TwigExtension(
    $container->router,
    $container->request->getUri()
  ));

  $view->getEnvironment()->addGlobal('auth', [
    'check' => $container->auth->check(),
    'user' => $container->auth->user()
  ]);

  return $view;
};

$container['AuthController'] = function ($container) {
  return new AuthController($container);
};

$container['AccountController'] = function ($container) {
  return new AccountController($container);
};

require_once __DIR__ . '/../app/routes.php';
