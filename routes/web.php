<?php

$app->get('/', function () use ($app) {
  return $app['twig']->render('sign-in.twig');
});

$app->get('/sign-up', function () use ($app) {
  return $app['twig']->render('sign-up.twig');
});
