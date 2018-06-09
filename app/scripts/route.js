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

            $stateProvider.state('home',home);
            $stateProvider.state('goals',goals);

            $urlRouterProvider.otherwise('/home');
        }
        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        return config;
    });
})();