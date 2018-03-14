(function () {
    'use strict';
    var requiredJS = ['angularAMD', 'route', 'ui-router', 'angular-resource', 'gettext', 'translations', 'ui.bootstrap','aab-accordian',
        '../../app/modules/header/header.directive', '../../app/modules/model-portfolio/model-portfolio', '../../app/modules/model-portfolio/model-portfolio.service',
        '../../app/modules/vmc-overview/vmc-overview', '../../app/modules/vmc-overview/vmc-overview.service'
    ];

    define('app', requiredJS, function (angularAMD, route) {

        var app = angular.module("tripleABackupApp", ['ui.router', 'ngResource', 'gettext', 'ui.bootstrap', 'modelPortfolio','vmcOverview','ui.aabAccordionTwo']);

        app.config(route);

        return angularAMD.bootstrap(app);
    });
})();