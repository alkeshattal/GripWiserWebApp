(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian','liwid-modules'], function () {
        angular.module('home', ['LiWidFilters','ui.aabToggleTile']).controller('homeController', homeController);

        function homeController($scope) {

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
        homeController.$inject = ['$scope'];

    });

})();
