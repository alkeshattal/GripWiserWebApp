(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian','liwid-modules','amount-formatter'], function () {
        angular.module('goals', ['LiWidFilters']).controller('goalsController', goalsController);

        function goalsController($scope) {

            /*let onSuccess = function(data){
                console.log("success");
                if (angular.isDefined(data.modelportfolio) && data.modelportfolio.length > 0) {
                    console.log("data found");
                    $scope.modelPortfolioList = data.modelportfolio;
                }

            };
            let onError = function (error) {
                console.log("error");
            };*/
            //GetModelPortfolio().get({},onSuccess,onError);

        }
        goalsController.$inject = ['$scope'];

    });

})();
