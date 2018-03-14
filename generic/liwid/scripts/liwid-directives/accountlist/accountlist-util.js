'use strict';

/* util */
define(['app', 'jquery'], function(app) {
    app.factory('accountlistUtilService', [function() {
        return {
            formatCurrency: function(currency) {
                if (currency === '0.0' || currency === 0.0 || currency === 0 || currency === '' || currency === null) {
                    return '0';
                } else {
                    return currency;
                }
            },
            formatAccountType: function(externalName) {
                if (externalName.length <= 21) {
                    return $.trim(externalName) + '   ';
                } else {
                    return $.trim(externalName).substring(0, 18) + "... ";
                }
            }

        };
    }]);

});
