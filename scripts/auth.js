
(function(auth) {

    // One-time, private setup
    AWSCognito.config.region = 'us-east-1';

    var poolData = {
        UserPoolId : 'us-east-1_Na5ZIi3rW',
        ClientId : '38133l85viga4hi13cmre3g9ed'
    };

    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    // Public fun
    auth.signIn = function(username, password, callbacks) {
        var userData = {
            Username : username,
            Pool : userPool
        };

        var authenticationData = {
            Username : username,
            Password : password
        };

        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, callbacks);
    };


    auth.signOut = function() {
        var cognitoUser = userPool.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.signOut();
        }
    };


    auth.getSession = function(callback) {
        var cognitoUser = userPool.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(callback);
        } else {
            callback(new Error('Not logged in!'), null);
        }
    };

    auth.isAuthenticated = function() {
        return userPool.getCurrentUser() != null;
    };

}(window.auth = window.auth || {}));
