(function () {
    'use strict';
    define(['angularAMD'], function (app) {
        app.value('currentLang', 'nl');
        app.directive('aabHeader', aabHeader);
       /* app.controller('navbarController', navbarController);

        function navbarController($state) {
            var navbarController = this;

            navbarController.browsedetails = function (element) {
                console.log(element);
                switch (true) {
                    case (element.hasClass('nav1')):
                        $state.go('home');
                        break;
                    case (element.hasClass('nav2')):
                        $state.go('home2');
                        break;
                    default:
                        break;
                }
            }

        };
        navbarController.$inject = ['$state'];*/

        function aabHeader() {
            var directive = {
                restrict: 'EA',
                templateUrl: 'app/modules/header/header.template.html',
                controller: headerController,
                controllerAs: 'headerCtrl'
            };
            return directive;
        };

        headerController.$inject = ['gettextCatalog', 'currentLang', '$rootScope'];

        function headerController(gettextCatalog, currentLang, $rootScope) {
            var langCtrl = this;
            langCtrl.selectedLanguage = currentLang;
            gettextCatalog.setCurrentLanguage(currentLang);
            $rootScope.currentLang = "nl";
            langCtrl.changeLanguage = function () {
                currentLang = langCtrl.selectedLanguage;
                $rootScope.currentLang = currentLang;
                gettextCatalog.setCurrentLanguage(langCtrl.selectedLanguage);
            };
        };
    });
})();

/*
(function() {
  'use strict';
  define(['angularAMD'], function (app) {
    app.value('currentLang', 'nl');
    app.directive('aabHeader', aabHeader);
    
    function aabHeader() {
      var directive =  {
        restrict: 'EA',
        templateUrl: 'app/modules/header/header.template.html',
        controller: headerController,
        controllerAs: 'headerCtrl'
      };
      return directive;
    };

    headerController.$inject = ['gettextCatalog', 'currentLang','$rootScope','$locale','tmhDynamicLocale'];

    function headerController (gettextCatalog, currentLang,$rootScope,$locale,tmhDynamicLocale) {
      var langCtrl = this;
      langCtrl.selectedLanguage = currentLang;
      gettextCatalog.setCurrentLanguage(currentLang);
      $rootScope.currentLang = "nl";
      langCtrl.changeLanguage = function () {
        currentLang = langCtrl.selectedLanguage;
        $rootScope.currentLang = currentLang;
        gettextCatalog.setCurrentLanguage(langCtrl.selectedLanguage);
        if(currentLang==='en'){
          tmhDynamicLocale.set('en-gb');
          $locale.id = 'en-gb';
          $locale.localeID = 'en_GB';
        }
        else if(currentLang==='nl'){
          tmhDynamicLocale.set('nl-nl');
          $locale.id = 'nl-nl';
          $locale.localeID = 'nl_NL';
        }
      };
    };
  });
})();
*/
