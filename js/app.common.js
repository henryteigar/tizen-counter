/*jslint browser */
/*global window */

window.app = window.app || {};

(function defineAppCommon(app) {
    "use strict";

    app.common = app.common || {};

    app.common.pad = function pad(input, length, padString) {
        input = String(input);
        length = length || 2;
        padString = padString || "0";

        while (input.length < length) {
            input = padString + input;
        }

        return input;
    };

    app.common.dispatchEvent = function dispatchEvent(eventName, data) {
        var customEvent = new window.CustomEvent(eventName, {
            detail: data,
            cancelable: true
        });

        window.dispatchEvent(customEvent);
    };

}(window.app));
