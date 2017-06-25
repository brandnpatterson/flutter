<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
mysql://b497412f76e6c8:88a42f8c@us-cdbr-iron-east-03.cleardb.net/heroku_f0c27ae53158310?reconnect=true
$capsule->addConnection([
  'driver' => 'mysql',
  'host' => 'us-cdbr-iron-east-03.cleardb.net',
  'database' => 'heroku_f0c27ae53158310',
  'username' => 'b497412f76e6c8',
  'password' => '88a42f8c',
  'charset' => 'utf8',
  'collation' => 'utf8_general_ci'
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();
