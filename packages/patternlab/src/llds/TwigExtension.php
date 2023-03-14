<?php

namespace llds;

use Drupal\Core\Template\Attribute;
use \Twig_SimpleFunction;
use Twig_Extension;
use Twig_ExtensionInterface;

class TwigExtension extends Twig_Extension implements Twig_ExtensionInterface {

  public function getFunctions() {
    return [
      new Twig_SimpleFunction('create_attribute', function($attributes) {
          file_put_contents('/tmp/test.txt', 'running');
        return is_array($attributes) ? new Attribute($attributes) : $attributes;
      }),
      new Twig_SimpleFunction('get_component_stylesheets', function () {
        $styles = '';
        foreach (glob('packages/*/dist/style.css') as $component) {
          $styles .= file_get_contents($component);
        }
        return $styles;
      }),
      new Twig_SimpleFunction('get_component_scripts', function () {
        $scripts = '';
        foreach (glob('packages/*/dist/scripts.js') as $component) {
          $scripts .= file_get_contents($component);
        }
        return $scripts;
      })
    ];
  }
}