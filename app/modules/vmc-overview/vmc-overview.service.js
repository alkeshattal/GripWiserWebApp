(function() {
    'use strict';
    define(['angularAMD'], function(app) {
        app.factory("GetVmc", function($resource, $location) {
            return function(lang) {
                return $resource('./vmc.json', {}, {
                    'get': {
                        method: 'GET',
                        headers: { 'Accept-Language': lang }
                    },
                    'query': {
                        method: 'GET',
                        isArray: false,
                        headers: { 'Accept-Language': lang }
                    }
                });
            };
        });
    })
})();