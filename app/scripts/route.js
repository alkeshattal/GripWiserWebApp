(function(){
    'use strict';
    define( ['angularAMD' ], function (angularAMD) {
        function config($stateProvider, $urlRouterProvider) {
            var home = angularAMD.route({
                url: '/home',
                templateUrl : 'app/modules/home/home.html',
                controllerUrl : 'app/modules/home/home.js',
                controller : 'homeController'
            });

            var goals = angularAMD.route({
                url: '/goals',
                templateUrl : 'app/modules/goals/goals.html',
                controllerUrl : 'app/modules/goals/goals.js',
                controller : 'homeController'
            });

            var splash = angularAMD.route({
                url: '/splash',
                templateUrl : 'app/modules/splash/splash.html',
                controllerUrl : 'app/modules/splash/splash.js',
                controller : 'splashController'
            });

            var login = angularAMD.route({
                url: '/login',
                templateUrl : 'app/modules/login/login.html',
                controllerUrl : 'app/modules/login/login.js',
                controller : 'loginController'
            });

            $stateProvider.state('home',home);
            $stateProvider.state('goals',goals);
            $stateProvider.state('splash',splash);
            $stateProvider.state('login',login);

            $urlRouterProvider.otherwise('/splash');
        }
        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        return config;
    });
})();