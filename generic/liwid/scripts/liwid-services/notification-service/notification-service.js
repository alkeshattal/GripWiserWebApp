'use strict';
	angular.module('LiWidServices').factory('NotificationService', ['gettextCatalog','$compile','$rootScope', function (gettextCatalog,$compile,$rootScope) {
        return {
            showError: function (errorMsgKey) {
                $('#notification-block').empty();
                $('#notification-block').html($compile("<div class='alert alert-warning'> <span class='glyphicon glyphicon-warning-sign' id='errorImage'></span><h3 translate>" + errorMsgKey +" </h3></div>")($rootScope));
                $('#errorImage').attr("title",errorMsgKey);
                $('#notification-block').show();
            }
        };
    }]);