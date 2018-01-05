/* global window, tizen, console */

window.app = window.app || {};

(function(app) {
	
	var currentBadgeCount = 0,
		countText = null,
		applicationId = '';
	
	function getApplicationId() {
        try {
            return tizen.application.getCurrentApplication().appInfo.id;
        } catch (error) {
            console.error('GetCurrentApplication id error: ', error);
        }
    }
	
	function getBadgeCount() {
        try {
            return tizen.badge.getBadgeCount(applicationId);
        } catch (error) {
            console.error('getBadgeCount error: ', error);
        }
    }
	
	function updateBadgeCount(value) {
		changeBadgeCount(value)
	}
	
	
	
	function changeBadgeCount(newValue) {
        try {
        	tizen.badge.setBadgeCount(applicationId, newValue)
        } catch (error) {
        	tizen.badge.setBadgeCount(applicationId, 0)
        }

	}
	
	function getCurrentBadgeCount() {
        return currentBadgeCount;
    }
	
	function init() {
		countText = document.getElementById('count-number');
        applicationId = getApplicationId();
        currentBadgeCount = getBadgeCount();
    }

    app.model = {
        init: init,
        updateBadgeCount: updateBadgeCount,
        getCurrentBadgeCount: getCurrentBadgeCount
    };

	
})(window.app);
