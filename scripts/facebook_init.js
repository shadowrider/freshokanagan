facebook = {};
//$(document).ready = function () {
    window.fbAsyncInit = function(callback) {
      Parse.FacebookUtils.init({
            appId      : 526141380770766, // Facebook App ID
            channelUrl : 'http://www.freshokanagan.com', // Channel File
            status     : true, // check login status
            cookie     : true, // enable cookies to allow Parse to access the session
            xfbml      : true  // parse XFBML
        });

      FB.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          facebook.get_data(function(data) {

            $('.facebook-login').remove();
            $('.main-wrapper .profile').remove();
            $('.main-wrapper > .header').append('<span class="profile"><img class="profile__pic small" src="'+data.img_url+'"></span>');
            $('.subsection .profile').addClass('success').text('Save');
            $('.profile__pic').attr('src', data.img_url);
            $('.profile__fname').text(data.first_name);
            $('.profile__lname').text(data.last_name);
            $('.profile').off('click').on('click', function(e) {
                if($(this).hasClass('success')){
                  api.save_user_data($('.selling').val(), $('.user-type .active').data('type'));
                  if($('.user-type .active').data('type') !== 'consumer') {
                    $('.add-place').show();
                  } else {
                    $('.add-place').hide();
                  }
                }
                $('html').toggleClass('sub-open');
            });
            var user = Parse.User.current();
            user.set('profile_pic', data.img_url);
            user.set('name', data.first_name + ' ' + data.last_name);
            if(!user.get('isConsumer')) {
              $('.add-place').show();
            }
          });
        }
      }, true);
    };

    (function(d, debug){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "http://connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
        ref.parentNode.insertBefore(js, ref);
    }(document, /*debug*/ false));
//};

facebook.login = function (callback) {
  if(!Parse.User.current()) {
    Parse.FacebookUtils.logIn(null, {
      success: function(user) {
        facebook.get_data(function(data) {
            $('.facebook-login').remove();
            $('.main-wrapper .profile').remove();
            $('.main-wrapper > .header').append('<span class="profile"><img class="profile__pic small" src="'+data.img_url+'"></span>');
            $('.subsection .profile').addClass('success').text('Save');
            $('.profile__pic').attr('src', data.img_url);
            $('.profile__fname').text(data.first_name);
            $('.profile__lname').text(data.last_name);
            $('.selling').val(data.selling)
            $('.profile').off('click').on('click', function(e) {
                if($(this).hasClass('success')){
                    api.save_user_data($('.selling').val(), $('.user-type .active').data('type'));
                    if($('.user-type .active').data('type') !== 'consumer') {
                      $('.add-place').show();
                    } else {
                      $('.add-place').hide();
                    }
                }
              $('html').toggleClass('sub-open');
            });
          var user = Parse.User.current();
          user.set('profile_pic', data.img_url);
          user.set('name', data.first_name + ' ' + data.last_name);
          if(!user.get('isConsumer')) {
            $('.add-place').show();
          }
        });
      },
      error: function(user, error) {
        alert("User cancelled the Facebook login or did not fully authorize.");
      }
    });
  } else {
    facebook.get_data(function(data) {
      $('.facebook-login').remove();
      $('.main-wrapper .profile').remove();
      $('.main-wrapper > .header').append('<span class="profile"><img class="profile__pic small" src="'+data.img_url+'"></span>');
      $('.subsection .profile').addClass('success').text('Save');

      $('.profile__pic').attr('src', data.img_url);
      $('.profile__fname').text(data.first_name);
      $('.profile__lname').text(data.last_name);
    });
  }
};

facebook.get_data = function (callback) {
   var facebook_data = {};
   FB.api('/me', function(response) {
       response.img_url = 'http://graph.facebook.com/' + response.username + '/picture?type=normal';
       callback(response);
   });
};