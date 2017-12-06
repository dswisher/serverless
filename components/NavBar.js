
Vue.component('nav-bar', {
    template: templates.NavBar,

    data: function() {
        return {
            isActive: false
        };
    },

    methods: {
        accountClick: function() {
            this.isActive = !this.isActive;
        },

        signOut: function() {
            auth.signOut();
            this.$router.push({ name: 'login' });
        }
    }
});

