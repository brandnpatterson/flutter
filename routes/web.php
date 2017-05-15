<?php

use Silex\Application as App;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->get('/', function(App $app) {
  return $app['twig']->render('sign-in.twig');
});

$app->get('/sign-up', function(App $app) {
  return $app['twig']->render('sign-up.twig');
});

$app->get('/account', function(App $app) {
  return $app['twig']->render('account.twig');
});
