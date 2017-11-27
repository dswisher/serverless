
// TODO - move this into a library, with proper namespacing!
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


Vue.component('auth-status', {
    template: templates.AuthStatus,

    methods: {
        signIn: function() {
            // TODO - implement signIn
            console.log("signIn is not yet implemented.");
            window.location = "/index.html?loggedin=true";
        },

        signOut: function() {
            // TODO - implement signOut
            console.log("signOut is not yet implemented.");
            window.location = "/index.html?loggedin=false";
        }
    },

    computed: {
        authorized: function() {
            // TODO - replace this with something real - call to library method
            return (getParameterByName("loggedin") === "true");
        }
    }
});

