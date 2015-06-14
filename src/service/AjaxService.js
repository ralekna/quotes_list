define('service/AjaxService', ['jquery'], function($) {

    function AjaxService() {}

    function fetch(url, callback) {
        $.ajax(url).then(callback).fail(onFail);
    }

    function onFail(error) {
        console.log(error);
    }

    AjaxService.fetch = fetch;

    return AjaxService;

});
