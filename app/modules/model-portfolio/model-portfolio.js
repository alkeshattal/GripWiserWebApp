(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian','liwid-modules','amount-formatter'], function () {
        angular.module('modelPortfolio', ['LiWidFilters']).controller('modelPortfolioController', modelPortfolioController);

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
