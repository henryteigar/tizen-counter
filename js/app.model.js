/* global window, tizen, console */

window.app = window.app || {};

(function(app) {
	
	var currentBadgeCount = 0,
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
	
	function setBadgeChangeListener() {
        try {
            tizen.badge.addChangeListener([applicationId],
                onBadgeChange);
        } catch (error) {
            console.error('setBadgeChangeListener error: ', error);
        }
    }
	
	function onBadgeChange(applicationId, badgeCount) {
        currentBadgeCount = badgeCount;
        app.common.dispatchEvent('model.badgevaluechange');
    }
	
	function increaseBadgeCount() {
        changeBadgeCount(currentBadgeCount + 1);
    }
	
	function decreaseBadgeCount() {
        changeBadgeCount(currentBadgeCount - 1);
    }
	
	function changeBadgeCount(newValue) {
        try {
            tizen.badge.setBadgeCount(applicationId, newValue);
        } catch (error) {
            console.error('setBadgeCount error: ', error);
            app.common.dispatchEvent('model.badgevaluechange.error');
        }

	}
	
	function getCurrentBadgeCount() {
        return currentBadgeCount;
    }
	
	function init() {
        applicationId = getApplicationId();
        currentBadgeCount = getBadgeCount();
        setBadgeChangeListener();
    }

    app.model = {
        init: init,
        increaseBadgeCount: increaseBadgeCount,
        decreaseBadgeCount: decreaseBadgeCount,
        getCurrentBadgeCount: getCurrentBadgeCount
    };

	
})(window.app);
