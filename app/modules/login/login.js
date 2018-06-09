(function () {
    /**
     *
     */
    define(['angular'], function () {
        angular.module('login', ['LiWidFilters']).controller('loginController', loginController);

        function loginController($scope, $state) {
            console.log("in login");

        }

        loginController.$inject = ['$scope', '$state'];
        angular.module('login').controller('pin5Controller', pin5Controller);

        function pin5Controller() {
            var self = this;
        }
    });

})();
