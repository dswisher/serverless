
var LoginComponent = Vue.component('login', {
    template: templates.Login,

    data: function() {
        return {
            username: undefined,
            password: undefined,
            errorMessage: undefined
        };
    },

    methods: {
        doLogin: function() {
            auth.signIn(this.username, this.password, {
                onSuccess: function (result) {
                    // TODO - how to know where to go back to? For now, go back home
                    router.push({ name: 'home' });
                },

                onFailure: function(err) {
                    // User authentication failed
                    // router.push({ name: 'error', params: { message: err } })
                    that.errorMessage = err.message;
                },

                // TODO - move this to auth lib! Test!
                newPasswordRequired: function(userAttributes, requiredAttributes) {
                    // User was signed up by an admin and must provide new
                    // password and required attributes, if any, to complete
                    // authentication.

                    // the api doesn't accept this field back
                    delete userAttributes.email_verified;

                    // Get these details and call
                    cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
                }
            });
        }
    }
});

