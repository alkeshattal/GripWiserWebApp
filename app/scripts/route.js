(function(){
    'use strict';
    define( ['angularAMD' ], function (angularAMD) {
        function config($stateProvider, $urlRouterProvider) {

            var modelPortfolio = angularAMD.route({
                url: '/modelportfolio',
                templateUrl : 'app/modules/model-portfolio/model-portfolio.html',
                controllerUrl : 'app/modules/model-portfolio/model-portfolio.js',
                controller : 'modelPortfolioController'
            });
            var vmc = angularAMD.route({
                url: '/vmc',
                templateUrl : 'app/modules/vmc-overview/vmc-overview.html',
                controllerUrl : 'app/modules/vmc-overview/vmc-overview.js',
                controller : 'vmcOverviewController'
            });

            $stateProvider.state('modelportfolio',modelPortfolio);
            $stateProvider.state('vmc',vmc);
            $urlRouterProvider.otherwise('/modelportfolio');
        }
        config.$inject = ['$stateProvider', '$urlRouterProvider'];

        return config;
    });
})();