(function () {
    'use strict';
    var requiredJS = ['angularAMD', 'route', 'ui-router', 'angular-resource', 'gettext', 'translations', 'ui.bootstrap', 'aab-accordian',
        '../../app/modules/home/home', '../../app/modules/home/home.service', '../../app/modules/splash/splash','../../app/modules/login/login'
    ];

    define('app', requiredJS, function (angularAMD, route) {

        var app = angular.module("GripWiserApp", ['ui.router', 'ngResource', 'gettext', 'ui.bootstrap', 'home', 'ui.aabAccordionTwo', 'splash']);

        app.config(route);

        return angularAMD.bootstrap(app);
    });
})();