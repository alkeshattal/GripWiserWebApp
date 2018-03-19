(function () {
    require.config(
        {
            baseUrl: './app/scripts',
            paths: {
                'jquery'  : '../../generic/lib/jquery/1.12.3/jquery',
                'jquery-ui'  : '../../generic/lib/jquery/ui/1.10.2/jquery-ui',
                'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular',
                'angularAMD': '../../generic/lib/angular/AMD/angularAMD.min',
                'ui-router': '../../generic/lib/angular/ui-router/angular-ui-router',
                'gettext': '../../generic/lib/angular/gettext/angular-gettext',
                'angular-resource': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-resource',
                'angular-locale_nl': 'https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.6.9/angular-locale_nl-nl.min',
                'angular-locale_en': 'https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.6.9/angular-locale_en-gb.min',
                'angular-animate': 'https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.6.9/angular-animate',
                'ui.bootstrap': '../../generic/lib/angular/ui-bootstrap/2.5.0/ui-bootstrap-tpls-2.5.0',
                'aab-accordian': '../../generic/liwid/scripts/liwid-directives/aab-accordion-two/aab-accordion-two',
                'aab-tile': '../../generic/liwid/scripts/liwid-directives/aab-tile/aab-tile',
                'aab-tile': '../../generic/liwid/scripts/liwid-directives/aab-tile/aab-tile',
                'liwid-modules' : '../../generic/liwid/scripts/liwid-modules',
                'liwid-filters' : '../../generic/liwid/scripts/liwid-filters/filters',
                'amount-formatter' : '../../generic/liwid/scripts/liwid-filters/amount-formatter'
            },
            shim: {
                'jquery': { 'deps' : [],  init: function () { return $; } },
                'jquery-ui': {'export' : "$", 'deps' : ['jquery']},
                
                'angular': {
                    'exports': 'angular', 'deps': ['jquery']
                },
                'angularAMD':
                    {
                        deps: ['angular']
                    },
                'ui-router': {deps: ['angular']},
                'gettext': {deps: ['angular']},
                'angular-resource': {deps: ['angular']},
                'angular-locale_nl': {deps: ['angular']},
                'angular-locale_en': {deps: ['angular']},
                'angular-animate': {deps: ['angular']},
                'ui.bootstrap': {deps: ['angular']},
                'aab-accordian': {deps: ['ui.bootstrap']},
                'liwid-modules' : { deps : ['angular', 'gettext'] },
                'liwid-filters' : { deps : ['angular', 'liwid-modules'] },
                'amount-formatter' : { deps : ['angular', 'liwid-modules'] }
            },
            // kick start application
            deps: ['angular', 'app']
        }
    );
})();