/**
 * LiWidFilters module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedent modules.
 * @author Alkesh Attal - c20482
 */
 'use strict';
    angular
        .module('LiWidFilters')
        .filter('aabAmountFormatter', aabAmountFormatter);

    /**
     * @ngdoc filter
     * @name formatter.amount.aabAmountFormatter:aabAmountFormatter
     * @description
     * We use this filter to format the amount(this filter will format numbers and strings).
     * Output of minus-sign is Unicode, so we don't have to use HTML-sanitation ($sce) when using this filter
     * @param {value} amount to be formatted.
     * @param {minNoOfDecimals} minimum no of decimals in amount(default is 2).
     * @param {maxNoOfDecimals} maximum no of decimals in amount(default is 2).
     * @param {applyCeil} boolean value to format the decimal part of amount to ceiling value or floor value.
     * @returns {String} formatted amount.
     * Default decimals is 2
     * @example
     * <p> 100 | aabAmountFormatter</p>
     * // return 100,00
     * @example
     * <p> 100.12 | aabAmountFormatter</p>
     * // returns  100,12
     * @example
     * <p> -12345| aabAmountFormatter</p>
     * //returns - 12.345,00
     * <p> 100.12 | aabAmountFormatter :'3' :'5'</p>
     * // returns  100,120
     * <p> 100.1234 | aabAmountFormatter :'3' :'5'</p>
     * // returns  100,1234
     * <p> 100.123444 | aabAmountFormatter :'2' :'5'</p>
     * // returns  100,12344
     * <p> 100.11999 | aabAmountFormatter :'2' :'2'</p>
     * // returns  100,12
     * <p> 100 | aabAmountFormatter :'0' :'0'</p>
     * // returns  100
     * <p> 100.999 | aabAmountFormatter :'2' :'2'</p>
     * <p> 100.999 | aabAmountFormatter :2 :2</p>
     * // returns  101,00
     * <p> 100.999 | aabAmountFormatter :'0' :'0'</p>
     * <p> 100.999 | aabAmountFormatter :0 :0</p>
     * // returns  101
     * <p> 124.4750 | aabAmountFormatter </p>
      // return 124,48
     * <p> 124.4750 | aabAmountFormatter :1 :1 :true</p>
      // return 124,5
     * <p> 124.4750 | aabAmountFormatter :1 :1 :false</p>
      // return 124,4
     */
    function aabAmountFormatter() {
        return function(value, minNoOfDecimals, maxNoOfDecimals, applyCeil) {
            var minNoDecimals = parseInt(minNoOfDecimals, 10) >= 0 ? parseInt(minNoOfDecimals, 10) : 2;
            var maxNoDecimals = parseInt(maxNoOfDecimals, 10) >= 0 ? parseInt(maxNoOfDecimals, 10) : 2;
            // As per UICF we need to use \u002D to show  minus symbol for amounts
            var symbol = parseFloat(value) < 0 ? '\u002D ' : '';
            var fValue = parseFloat(Math.abs(value));
            var iValue = parseInt(fValue, 10);
            var decimalValues = fValue.toString().split('.')[1];
            var regEx = /(\d+)(\d{3})/;
            var sValue;
            var noDecimals = 0;
            var roundedValue;
            var fixedRoundedValue;

            if (isNaN(iValue) || isNaN(fValue)) {
                return '--,--';
            }

            if ((decimalValues && minNoDecimals >= decimalValues.length) ||
                (!decimalValues && minNoDecimals)) {
                noDecimals = minNoDecimals;
            } else if (decimalValues && maxNoDecimals <= decimalValues.length) {
                noDecimals = maxNoDecimals;
            } else if (decimalValues && decimalValues.length > minNoDecimals && decimalValues.length < maxNoDecimals) {
                noDecimals = decimalValues.length;
            }
            roundedValue = Math.pow(10, noDecimals);
            fixedRoundedValue = (angular.isDefined(applyCeil) ? ( applyCeil ? Math.ceil(fValue*roundedValue) : Math.floor(fValue*roundedValue)) : Math.round(fValue*roundedValue))/roundedValue;
            fixedRoundedValue = fixedRoundedValue.toFixed(noDecimals).toString().split('.');
            iValue = parseInt(fixedRoundedValue, 10);
            sValue = iValue.toString();
            // The loop is there to add the thousand delimiter
            while (regEx.test(sValue)) {
                sValue = sValue.replace(regEx, '$1' + '.' + '$2');
            }
            return symbol + sValue + (fixedRoundedValue[1] ? ',' + fixedRoundedValue[1] : '');
        };
    }