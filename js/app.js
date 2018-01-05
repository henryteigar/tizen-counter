window.app = window.app || {};

(function(app) {
	
	app.exit = function exit() {
        try {
            tizen.application.getCurrentApplication().exit();
        } catch (error) {
            console.error('Application exit failed. ', error);
        }
    };
    
    function onDeviceHardwareKeyPress(event) {
        if (event.keyName === 'back') {
            app.exit();
        }
    }
    
    
    function bindEvents() {
        document.addEventListener('tizenhwkey', onDeviceHardwareKeyPress);
    }
    
	function init() {
		app.ui.init();
        app.model.init();
        bindEvents();
    }
	
	window.addEventListener('load', init);
	
}(window.app));
