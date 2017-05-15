<?php namespace config;

use Silex\Provider\DoctrineServiceProvider;

$app->register(new DoctrineServiceProvider, [
  'db.options' => [
    'driver'   => 'pdo_mysql',
    'host'     => 'localhost',
    'dbname'   => 'flutter',
    'username' => 'root',
    'password' => 'root',
    'charset'  => 'utf-8'
  ]
]);
