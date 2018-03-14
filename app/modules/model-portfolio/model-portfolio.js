(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian'], function () {
        angular.module('modelPortfolio', []).controller('modelPortfolioController', modelPortfolioController);

        function modelPortfolioController($scope, GetModelPortfolio) {

            let onSuccess = function(data){
                console.log("success");
                if (angular.isDefined(data.modelportfolio) && data.modelportfolio.length > 0) {
                    console.log("data found");
                    $scope.modelPortfolioList = data.modelportfolio;
                }

            };
            let onError = function (error) {
                console.log("error");
            };
            GetModelPortfolio().get({},onSuccess,onError);

        }
        modelPortfolioController.$inject = ['$scope', 'GetModelPortfolio'];

    });

})();
