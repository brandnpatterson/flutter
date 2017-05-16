<?php

$app->get('/', 'AuthController:getSignIn')->setName('sign-in');
$app->post('/', 'AuthController:postSignIn');
$app->get('/sign-up', 'AuthController:getSignUp')->setName('sign-up');
$app->post('/sign-up', 'AuthController:postSignUp');
$app->get('/account', 'AccountController:redirect')->setName('account');
