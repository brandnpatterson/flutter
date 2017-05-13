<?php

require __DIR__ . '/../bootstrap/app.php';

$app->register(new Silex\Provider\TwigServiceProvider, [
  'twig.path' => __DIR__ . '/../views'
]);

$app->run();
