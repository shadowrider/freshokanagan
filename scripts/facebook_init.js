facebook = {};
//$(document).ready = function () {
    window.fbAsyncInit = function() {
        Parse.FacebookUtils.init({
            appId      : 526141380770766, // Facebook App ID
            channelUrl : 'http://www.freshokanagan.com', // Channel File
            status     : true, // check login status
            cookie     : true, // enable cookies to allow Parse to access the session
            xfbml      : true  // parse XFBML
        });
    };

    (function(d, debug){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "http://connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
        ref.parentNode.insertBefore(js, ref);
    }(document, /*debug*/ false));
//};

facebook.login = function () {
    Parse.FacebookUtils.logIn(null, {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");
            } else {
                alert("User logged in through Facebook!");
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });
};