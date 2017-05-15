<?php

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

$app->get('/account', function(Application $app) {
  return $app['twig']->render('account.twig');
});
