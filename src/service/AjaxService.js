define(['jquery'], function($) {

    function AjaxService() {}

    function fetch(url, callback) {
        var promise = $.ajax(url).fail(onFail);
        if (callback) {
            promise.done(callback);
        }
        return promise;
    }

    // we delegate error handling here
    function onFail(error) {
        console.log(error);
    }

    AjaxService.fetch = fetch;

    return AjaxService;

});
