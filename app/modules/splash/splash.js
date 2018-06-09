(function () {
    /**
     *
     */
    define(['angular'], function () {
        angular.module('splash', ['LiWidFilters']).controller('splashController', splashController);

        function splashController($scope, $state) {
            console.log("in splash");
            $scope.gotoHome = function () {
                console.log("in splash to home");
                $state.go('home');
            };

        }

        splashController.$inject = ['$scope', '$state'];

    });

})();
