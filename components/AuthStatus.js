
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
            var callback = window.location.protocol + '//' + window.location.host + '/callback.html';

            // TODO - save this? Read up on CSRF attacks
            // https://en.wikipedia.org/wiki/Cross-site_request_forgery
            // http://docs.aws.amazon.com/cognito/latest/developerguide/login-endpoint.html
            var verification = generateVerification();

            createCookie(VERIFICATION_COOKIE, verification, 14);
            createCookie(DESTINATION_COOKIE, '/funky.html', 1);
            
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

