
var ErrorMessageComponent = Vue.component('error-message', {
    template: templates.ErrorMessage,

    computed: {
        message() {
            return this.$route.params.message;
        }
    }
});

