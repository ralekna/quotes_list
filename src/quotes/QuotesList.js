define('quotes/QuotesList', ['jquery'], function($) {

    // Here we define templates for our component parts
    // Do not use any id's and minimize usage of classes
    var body_template = '<div class="quotes_list">' +
            '<blockquote></blockquote>'     +
            '<ul></ul>'   +
        '</div>';

    function QuotesList(element) {
        // let's not have anything important here
        this.element    = element;
        this.init();
    }

    QuotesList.prototype.element        = null;
    QuotesList.prototype.$component     = null;
    QuotesList.prototype.$blockquote    = null;
    QuotesList.prototype.$list          = null;


    QuotesList.prototype.init = function() {

        // Create a jQuery object from component template
        this.$component     = $(body_template);

        // and extract it's parts
        this.$blockquote    = this.$component.find('blockquote');
        this.$list          = this.$component.find('ul');
    };

    return QuotesList;

});