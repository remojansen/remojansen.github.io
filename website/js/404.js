$(document).ready(function(){

    function RedirectToApp(){
        var path = window.location.pathname;
        var host = window.location.hostname;
        var protocol = "http://";
        var hash = "/#";
        window.location = protocol + host + hash + path.substr(1, path.length);
    }

    RedirectToApp();
});
