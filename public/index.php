<?php
use Silex\Application;

require __DIR__ . '/../vendor/autoload.php';

$app = new Application([
  'debug' => true
]);

require __DIR__ . '/../routes/web.php';

$app->run();
