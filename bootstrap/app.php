<?php

use Slim\Views\Twig as View;
use Slim\Views\TwigExtension as TwigExtension;
use App\Controllers\SignInController as SignInController;
use App\Controllers\SignUpController as SignUpController;
use App\Controllers\AccountController as AccountController;

session_start();

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

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function ($container) use ($capsule) {
  return $capsule;
};

$container['view'] = function ($container) {
  $view = new View(__DIR__ . '/../resources/views', [
    'cache' => false
  ]);

  $view->addExtension(new TwigExtension(
    $container->router,
    $container->request->getUri()
  ));

  return $view;
};

$container['SignInController'] = function ($container) {
  return new SignInController($container);
};

$container['SignUpController'] = function ($container) {
  return new SignUpController($container);
};

$container['AccountController'] = function ($container) {
  return new AccountController($container);
};

require_once __DIR__ . '/../app/routes.php';
