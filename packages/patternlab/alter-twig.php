<?php

require_once('vendor/autoload.php');

use llds\TwigExtension;

function addCustomExtension(\Twig_Environment $env) {
  $env->addExtension(new TwigExtension());
}