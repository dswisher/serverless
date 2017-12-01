

// TODO - move this into a library, with proper namespacing!

// NOTE: from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


function buster() {
    return "rand=" +  Math.floor(Math.random() * 10000);
}


// generateVerification creates a random string for including in the OAuth2
// request, which is then validated in the response.
function generateVerification () {
  var verification = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 32; i++) {
    verification += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return verification;
}


var COOKIE_NAME = "auth-token";
var TOKEN_VAL = "logged-in";


Vue.component('auth-status', {
    template: templates.AuthStatus,

    methods: {
        signIn: function() {
            var domain = 'swish-poc1.auth.us-east-1.amazoncognito.com';
            var clientId = '31k8k95kln8ck1bvcmem2c51n1';
            var type = 'code';
            //var type = 'token';
            var scope = 'openid profile';

            // Note: needs to be https for cognito redirect to work
            var callback = window.location.protocol + '//' + window.location.host + '/callback';

            // TODO - save this? Read up on CSRF attacks
            // https://en.wikipedia.org/wiki/Cross-site_request_forgery
            // http://docs.aws.amazon.com/cognito/latest/developerguide/login-endpoint.html
            var verification = generateVerification();
            
            window.location.href = 'https://' + domain + '/login?response_type=' + type + '&client_id=' + clientId + '&redirect_uri=' + callback + '&state=' + verification + '&scope=' + scope;

            // TODO - implement signIn
            // createCookie(COOKIE_NAME, TOKEN_VAL, 7);
            // window.location = "/index.html?" + buster();
        },

        signOut: function() {
            // TODO - implement signOut
            eraseCookie(COOKIE_NAME);
            window.location = "/index.html?" + buster();
        }
    },

    computed: {
        authorized: function() {
            // TODO - replace this with something real - call to library method
            return readCookie(COOKIE_NAME) === TOKEN_VAL;
        }
    }
});

