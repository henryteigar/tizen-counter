window.app = window.app || {};

(function(app) {
	
	var count = 0,
		countText = null,
		increaseButton = null,
		decreaseButton = null;
	
	function onIncreaseButtonClick() {
		app.model.increaseBadgeCount();
	}
	
	function onDecreaseButtonClick() {
        app.model.decreaseBadgeCount();
    }
	
	function onBadgeValueChange() {
		count = app.model.getCurrentBadgeCount();
		countText.innerHTML = count;
    }
	
	function bindUiEvents() {
		increaseButton.addEventListener('click', onIncreaseButtonClick);
		decreaseButton.addEventListener('click', onDecreaseButtonClick);
		window.addEventListener('model.badgevaluechange', onBadgeValueChange);
	}
	
	function init() {
		countText = document.getElementById('count-number');
		increaseButton = document.getElementById("increase-btn");
		decreaseButton = document.getElementById("decrease-btn");
		countText.innerText = app.model.getCurrentBadgeCount();
		bindUiEvents();
	}
	
	app.ui = {
		init: init
	};
	
}(window.app));