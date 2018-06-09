'use strict';
define(['gettext'], function () {
    angular.module("gettext").run(['gettextCatalog', '$http', function (gettextCatalog, $http) {
        $http.get('/nl/widgetcontent/medewerkerapplicaties/ths/ths.json').then(function (data) {
            gettextCatalog.setStrings('nl', data);
        }, function () {
            gettextCatalog.setStrings('nl', {
                "LABEL_SELECTEREN_1": "Transactie-gegevens/-kenmerken",
                "LABEL_SELECTEREN_2": "Transactie-ID/-Referentie",
                "LABEL_SCREEN_NAME": "Raadplegen effectentransacties",
                "LABEL_OVERVIEW_SCREEN_NAME": "Model Portfolio Overview",
                "LABEL_DETAIL_SCREEN_NAME": "VMC Overview",

                "LABEL_SERVICE_CONCEPT":"Service Concept Id",
                "LABEL_MODEL_PORTFOLIO_NAME":"Model Portfolio Name",

                "LABEL_RISK_PROFILE_01" : "Very Defensive",
                "LABEL_RISK_PROFILE_02" : "Moderately Defensive",
                "LABEL_RISK_PROFILE_03" : "Defensive",
                "LABEL_RISK_PROFILE_04" : "Offensive",
                "LABEL_RISK_PROFILE_05" : "Moderately Offensive",
                "LABEL_RISK_PROFILE_06" : "Very Offensive",

                "LABEL_SECURITIES_ACCOUNT" :"Securities Account",
                "LABEL_BC_NUMBER" : "BC nummer",
                "LABEL_OTHER_USERS" : "Other Users",
                "LABEL_SEARCH" : "Zoeken",
                "LABEL_CIN" : "CIN",
                "LABEL_BEHEER_STATUS":"Beheer Status",
                "LABEL_RISK_PROFILE":"Risk Profile",

                "LABEL_DATE":"Selection Date",

                "LABEL_DEPOTNUMBER": "Depotnummer",
                "LABEL_FONDSCODE": "Fondscode",
                "LABEL_ISINCODE": "ISIN-code",
                "LABEL_ISIN": "ISIN",

                "LABEL_ALL": "Alle",
                "LABEL_FROM": "Van",
                "LABEL_TILL": "Tot",
                "LABEL_CHOICE": "Maak een keuze",
                "LABEL_NO": "Nee",
                "LABEL_YES": "Ja",
                "LABEL_LANG_NL": "NL",
                "LABEL_LANG_EN": "EN",

                "LABEL_BUTTON_SEARCH": "zoeken",
                "LABEL_BUTTON_RESET": "reset",
                "LABEL_BUTTON_BACK": "terug",
                "LABEL_BUTTON_BACK_TO_SEARCH": "terug",
                "LABEL_BUTTON_BACK_TO_OVERVIEW": "terug",
                "LABEL_BUTTON_OK": "ok",
                "LABEL_BUTTON_CANCEL": "cancel",
                "LABEL_BUTTON_CLOSE": "close",
                "LABEL_PAGE_RANGE": "pagina ",
                "LABEL_PAGE_RESULTS": "Resultaten per page",
                "LABEL_PAGE_PREVIOUS": "Vorige",
                "LABEL_PAGE_NEXT": "volgende"


            });
        });
        $http.get('/en/widgetcontent/medewerkerapplicaties/ths/ths.json').then(function (data) {
            gettextCatalog.setStrings('en', data);
        },function () {
            gettextCatalog.setStrings('en', {
                "LABEL_SELECTEREN_1": "Transactie-gegevens/-kenmerken",
                "LABEL_SELECTEREN_2": "Transactie-ID/-Referentie",
                "LABEL_SCREEN_NAME": "Browse securities transactions",
                "LABEL_OVERVIEW_SCREEN_NAME": "Model Portfolio Overview",
                "LABEL_DETAIL_SCREEN_NAME": "VMC Overview",

                "LABEL_SERVICE_CONCEPT":"Service Concept Id",
                "LABEL_MODEL_PORTFOLIO_NAME":"Model Portfolio Name",

                "LABEL_RISK_PROFILE_01" : "Very Defensive",
                "LABEL_RISK_PROFILE_02" : "Moderately Defensive",
                "LABEL_RISK_PROFILE_03" : "Defensive",
                "LABEL_RISK_PROFILE_04" : "Offensive",
                "LABEL_RISK_PROFILE_05" : "Moderately Offensive",
                "LABEL_RISK_PROFILE_06" : "Very Offensive",

                "LABEL_SECURITIES_ACCOUNT" :"Securities Account",
                "LABEL_BC_NUMBER" : "BC nummer",
                "LABEL_OTHER_USERS" : "Other Users",
                "LABEL_SEARCH" : "Search",
                "LABEL_CIN" : "CIN",
                "LABEL_BEHEER_STATUS":"Beheer Status",
                "LABEL_RISK_PROFILE":"Risk Profile",

                "LABEL_DATE":"Selection Date",

                "LABEL_DEPOTNUMBER": "Depotnumber",
                "LABEL_FONDSCODE": "Instrument",
                "LABEL_ISINCODE": "ISIN-code",
                "LABEL_ISIN": "ISIN",
                "LABEL_BEWAARPLAATS": "Custodian",
                "LABEL_STATUS": "Status",


                "LABEL_ALL": "All",
                "LABEL_FROM": "From",
                "LABEL_TILL": "Till",
                "LABEL_CHOICE": "Select",
                "LABEL_NO": "No",
                "LABEL_YES": "Yes",
                "LABEL_LANG_NL": "NL",
                "LABEL_LANG_EN": "EN",

                "LABEL_BUTTON_SEARCH": "search",
                "LABEL_BUTTON_RESET": "reset",
                "LABEL_BUTTON_BACK": "back",
                "LABEL_BUTTON_BACK_TO_SEARCH": "back",
                "LABEL_BUTTON_BACK_TO_OVERVIEW": "back",
                "LABEL_BUTTON_OK": "ok",
                "LABEL_BUTTON_CANCEL": "cancel",
                "LABEL_BUTTON_CLOSE": "close",
                "LABEL_PAGE_RANGE": "Page",
                "LABEL_PAGE_RESULTS": "Results per page",
                "LABEL_PAGE_PREVIOUS": "previous",
                "LABEL_PAGE_NEXT": "next"

            });
        });
    }]);
});
