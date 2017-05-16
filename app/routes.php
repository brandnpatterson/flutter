<?php

$app->get('/', 'SignInController:index')->setName('sign-in');
$app->get('/sign-up', 'SignUpController:getSignUp')->setName('sign-up');
$app->post('/sign-up', 'SignUpController:postSignUp');
$app->get('/account', 'AccountController:redirect')->setName('account');
