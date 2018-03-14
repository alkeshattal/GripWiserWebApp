(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian'], function () {
        angular.module('vmcOverview', []).controller('vmcOverviewController', vmcOverviewController);

        function vmcOverviewController($scope, GetVmc) {

            let onSuccess = function(data){
                console.log("success");
                if (angular.isDefined(data.vmcList) && data.vmcList.length > 0) {
                    console.log("data found");
                    $scope.vmcList = data.vmcList;
                }

            };
            let onError = function (error) {
                console.log(error);
            };
            GetVmc().get({},onSuccess,onError);

        }
        vmcOverviewController.$inject = ['$scope', 'GetVmc'];

    });

})();
