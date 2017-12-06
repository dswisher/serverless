
var HomeComponent = Vue.component('hello', {
    template: templates.Home,

    data: function() {
        return {
            errorMessage: undefined,
            pets: undefined
        };
    },

    methods: {
        getPets: function() {
            var that = this;
            that.errorMessage = undefined;
            that.pets = undefined;

            auth.getSession(function(err, session) {
                if (err) {
                    that.errorMessage = err.message;
                    return;
                }

                var token = session.getIdToken().getJwtToken();

                var config = {
                    headers: { 'cog-auth': token }
                };

                // TODO - make API call using axios
                console.log('GetPets is not yet implemented!');
            });
        }
    }
});

