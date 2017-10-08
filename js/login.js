jQuery(document).ready(function($) {

    $("#submitButton").on('click', function () {

        $('#loading').show();
        var delay = 1000;
        setTimeout(function(){ window.location = "/metuneurl"; }, delay);
    });

});