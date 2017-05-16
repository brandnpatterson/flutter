<?php namespace src\routes\web;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Provider\TwigServiceProvider;

$app->register(new TwigServiceProvider, [
  'twig.path' => __DIR__ . '/../views'
]);

$app->get('/', function(Application $app) {
  return $app['twig']->render('sign-in.twig');
});

$app->get('/sign-up', function(Application $app) {
  return $app['twig']->render('sign-up.twig');
});

$app->get('/{email}', function(Application $app) {
  return $app['twig']->render('account.twig');
});
