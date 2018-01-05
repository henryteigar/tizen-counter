/* global window, tizen, console */

window.app = window.app || {};

(function(app) {
	
	var countText = null,
		applicationId = '';
	
//	function getApplicationId() {
//        try {
//            return tizen.application.getCurrentApplication().appInfo.id;
//        } catch (error) {
//            console.error('GetCurrentApplication id error: ', error);
//        }
//    }
//	
//	function getBadgeCount() {
//        try {
//        	return tizen.badge.getBadgeCount(applicationId);
//        } catch (error) {
//            console.error('getBadgeCount error: ', error);
//        }
//    }
//	
//	function updateBadgeCount(value) {
//		changeBadgeCount(value);
//	}
//	
//	function changeBadgeCount(newValue) {
//        try {
//        	tizen.badge.setBadgeCount(applicationId, newValue);
//        } catch (error) {
//        	tizen.badge.setBadgeCount(applicationId, 0);
//        }
//	}
	
	function getCurrentCount() {
		var count = localStorage.getItem("count");
		
		if (count !== null) {
			return count;
		} else {
			return 0;
		}
    }
	
	function updateCount(count) {
		localStorage.setItem("count", count);
	}
	
	function init() {
//        applicationId = getApplicationId();
//        currentBadgeCount = getBadgeCount();
        document.getElementById('loading').style.display = "none";
        //document.getElementsByClassName('content')[0].style.display = "block";
    }

    app.model = {
        init: init,
        updateCount: updateCount,
        getCurrentCount: getCurrentCount
    };

	
})(window.app);
