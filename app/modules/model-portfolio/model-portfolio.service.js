(function() {
    'use strict';
    define(['angularAMD'], function(app) {
        app.factory("GetModelPortfolio", function($resource, $location) {
            return function(lang) {
                return $resource('./modelPortfolio.json', {}, {
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