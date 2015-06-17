define(function QuotesListMetaClass(require) {

    // imports
    var $             = require('jquery');
    var AjaxService   = require('app/service/AjaxService');
    var bodyTemplate  = require('tpl!templates/QuotesList.tpl');
    var quoteTemplate = require('tpl!templates/SingleQuote.tpl');


    var single_quote_template = '<li>{{ quote.text }}</li>';

    function QuotesList(element, quotes_url) {
        // let's not have anything important here
        this.element    = element;
        this.quotes_url = quotes_url;
        this.init();
    }

    QuotesList.prototype.element        = null;
    QuotesList.prototype.$component     = null;
    QuotesList.prototype.$blockquote    = null;
    QuotesList.prototype.$list          = null;


    QuotesList.prototype.init = function() {

        // Create a jQuery object from component template
        this.$component     = $(bodyTemplate());

        // and extract it's parts
        this.$blockquote    = this.$component.find('blockquote');
        this.$list          = this.$component.find('ul');

        AjaxService.fetch(this.quotes_url).done($.proxy(function handleQuotesData(data) {
            addQuotesToList(this.$list, data, quoteTemplate);
        }, this));

        this.$component.appendTo(this.element);
    };

    function addQuotesToList($list, quotes_data, quote_template) {
        $(quotes_data).map(function mapJsonToJQuery() {
            return $(quote_template(this));
        }).appendTo($list);
    }

    return QuotesList;

});
