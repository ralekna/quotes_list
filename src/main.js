require.config({
  // make components more sensible
  // expose jquery
  paths: {
    "app": ".",
    "tpl": "../bower_components/requirejs-tpl/tpl",
    "lib": "../bower_components",
    "jquery": "../bower_components/jquery/dist/jquery",
    "templates": "../templates"
  }
});

requirejs([ 'jquery', 'app/quotes/QuotesList'], function Main($, QuotesList) {
  var quotes_container = document.getElementById('container');
  var quotes_list = new QuotesList(quotes_container);
});
