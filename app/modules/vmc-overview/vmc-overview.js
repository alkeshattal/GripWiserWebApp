(function () {
    /**
     *
     */
    define(['angular','ui.bootstrap','aab-accordian','jquery', 'jquery-ui'], function () {
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
                
            $scope.updateSelectedVmc = function(event){
                    for(var i=0;i<$('input[name="selectAllVmc"]:checked').length; i++)
                    {
                        for(var j=0;j<$scope.vmcList.length;j++)
                        {
                            if($($('input[name="selectAllVmc"]:checked')[i]).attr('data-key-id') == $scope.vmcList[j].businessContactNumber)
                             {
                                if($(event.currentTarget).hasClass('block-entry') && $scope.vmcList[j].status=='open')
                                {
                                    $scope.vmcList[j].status = 'blocked'
                                }  
                                else if($scope.vmcList[j].status=='open')
                                {
                                    $scope.vmcList[j].status = 'deleted'
                                }                            

                             }                                       
                        }    
                    }      
            }


            GetVmc().get({},onSuccess,onError);

        }

        vmcOverviewController.$inject = ['$scope', 'GetVmc'];

    });

})();
