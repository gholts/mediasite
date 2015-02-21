<?php
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app["debug"] = true;
// Routes
$app->get('/', function () use ($app) {
    return $app["twig"]->render("index.html.twig", array(
        "title" => "Media Site",
    ));
});

$app->run();
