/*jslint browser */
/*global window, tizen, console, document */

window.app = window.app || {};

(function (app) {
    "use strict";

    function getLocalStorageCount() {
        var count = localStorage.getItem("count");

        if (count !== null) {
            return count;
        } else {
            return 0;
        }
    }

    function setLocalStorageCount(count) {
        localStorage.setItem("count", count);
    }

    function init() {
        document.getElementById("loading").style.display = "none";
    }

    app.model = {
        init: init,
        setCount: setLocalStorageCount,
        getCount: getLocalStorageCount
    };

}(window.app));
