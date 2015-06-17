require.config({
  // make components more sensible
  // expose jquery
  paths: {
    "app": ".",
    "text":"../bower_components/requirejs-text/text",
    "tpl": "../bower_components/requirejs-underscore-tpl/underscore-tpl",
    "lib": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "underscore": "../bower_components/underscore/underscore",
    "templates": "../templates"
  }
});

requirejs([ 'jquery', 'underscore', 'app/quotes/QuotesList'], function Main($, _, QuotesList) {
  _.templateSettings = {
    interpolate: /\{\{\s*([^#\{]+?)\s*\}\}/g,  // {{ title }}
    evaluate:    /\{\{#([\s\S]+?)\}\}/g,       // {{# console.log("stuff") }}
    escape:      /\{\{\{([\s\S]+?)\}\}\}/g     // {{{ title }}}
  };

  var quotes_container = document.getElementById('container');
  var quotes_list = new QuotesList(quotes_container);
});
