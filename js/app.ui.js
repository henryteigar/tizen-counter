/*jslint browser */
/*global window, tizen, console, document */

window.app = window.app || {};

(function (app) {
    "use strict";

    var countText;
    var increaseButton;
    var decreaseButton;

    function changeCount(change) {
        var count = app.model.getCount();
        var newCount = Number(count) + change;

        countText.innerHTML = newCount;
        app.model.setCount(newCount);
    }

    function increaseCount() {
        changeCount(1);
    }

    function decreaseCount() {
        changeCount(-1);
    }

    function bindUiEvents() {
        increaseButton.addEventListener("click", increaseCount);
        decreaseButton.addEventListener("click", decreaseCount);
    }

    function addRotaryEventHandler() {
        document.addEventListener("rotarydetent", function (ev) {
            var direction = ev.detail.direction;
            if (direction === "CW") {
                increaseCount();
            } else if (direction === "CCW") {
                decreaseCount();
            }
        });
    }

    function init() {
        countText = document.getElementById("count-number");
        increaseButton = document.getElementById("increase-btn");
        decreaseButton = document.getElementById("decrease-btn");
        countText.innerHTML = app.model.getCount();

        bindUiEvents();
        addRotaryEventHandler();
    }

    app.ui = {
        init: init
    };

}(window.app));