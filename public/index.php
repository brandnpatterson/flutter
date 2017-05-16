<?php

use Silex\Application;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new Application([
  'debug' => true
]);

require_once __DIR__ . '/../src/routes/web.php';

$app->run();
