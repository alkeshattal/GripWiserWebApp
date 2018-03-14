define('component/ui/aab-accordion-two/aab-accordion-two.example', ['angular'], function() {
    'use strict';

    return function() {
        var self = this;

        self.transcludedBtnFn = function() {
            self.triggerdTranscludedClick = 'Clicked Transcluded Button function';
        };
    };
});
