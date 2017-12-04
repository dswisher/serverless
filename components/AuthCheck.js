
Vue.component('auth-check', {
    template: templates.AuthCheck,

    data: function() {
        return {
            message: 'Ok',
            code: undefined,
            state: undefined,
            verificationCookie: undefined,
            destinationCookie: undefined
        };
    },

    created: function() {
        console.log('Created auth-check!');

        this.message = 'Created!';

        this.code = getParameterByName('code');
        this.state = getParameterByName('state');

        this.verificationCookie = readCookie(VERIFICATION_COOKIE);
        this.destinationCookie = readCookie(DESTINATION_COOKIE);
    }
});

