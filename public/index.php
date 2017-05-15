<?php
use Silex\Application as App;
use Silex\Provider\TwigServiceProvider as Twig;
use Silex\Provider\DoctrineServiceProvider as Doctrine;

require __DIR__ . '/../vendor/autoload.php';

$app = new App([
  'debug' => true
]);

$app->register(new Doctrine, [
  'db.options' => [
    'driver'   => 'pdo_mysql',
    'host'     => 'localhost',
    'dbname'   => 'flutter',
    'username' => 'root',
    'password' => 'root',
    'charset'  => 'utf-8'
  ]
]);

$app->register(new Twig, [
  'twig.path' => __DIR__ . '/../views'
]);

require __DIR__ . '/../routes/web.php';

$app->run();
