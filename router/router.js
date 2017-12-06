
Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent,
            meta: {
                title: 'POC: Home',
                auth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent,
            meta: {
                title: 'Login',
                auth: false
            }
        },
        {
            path: '/error',
            name: 'error',
            component: ErrorMessageComponent,
            props: true,
            meta: {
                title: 'Error',
                auth: false
            }
        }
    ]
});


router.beforeEach(function(to, from, next) {
    console.log('router.beforeEach...');

    // Use the page's router title to name the page
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }

    // For pages that have 'auth: true' set, redirect to login page if not authenticated
    if (to.meta && to.meta.auth !== undefined) {
        if (to.meta.auth) {
            if (auth.isAuthenticated()) {
                next();
            } else {
                router.push({ name: 'login' });
            }
        } else {
            if (auth.isAuthenticated()) {
                router.push({ name: 'home' });
        } else {
            next();
        }
        }
    } else {
        next();
    }
});

