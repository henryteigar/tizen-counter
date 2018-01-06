/*jslint browser */
/*global window, tizen, console, document */

window.app = window.app || {};

(function (app) {
    "use strict";

    function getLocalStorageCount() {
        return localStorage.getItem("count");
    }

    function setLocalStorageCount(count) {
        localStorage.setItem("count", count);
    }

    function init() {
        setLocalStorageCount(0);
        document.getElementById("loading").style.display = "none";
    }

    app.model = {
        init: init,
        setCount: setLocalStorageCount,
        getCount: getLocalStorageCount
    };

}(window.app));
