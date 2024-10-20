pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 17452;
pubcoder.page.title = pubcoder.page.title || "46";
pubcoder.page.number = pubcoder.page.number || 46;
pubcoder.page.alias = pubcoder.page.alias || "";


var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;



/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj17459_onTap_activeActionGroupIndex = -1;
var obj17459_onTap_runningActionsCount = 0;
var obj17459_onTap_loopCount = 0;
var obj17462_onTap_activeActionGroupIndex = -1;
var obj17462_onTap_runningActionsCount = 0;
var obj17462_onTap_loopCount = 0;
var obj17469_onTap_activeActionGroupIndex = -1;
var obj17469_onTap_runningActionsCount = 0;
var obj17469_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 

 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 

 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	

 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	

	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    

	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj17459_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17459_onTap_activeActionGroupIndex = -1;
		$("#obj17459").trigger("obj17459_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17459) {
				console.warn("de-queueing event obj17459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17459_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17461();
function goToPage_17461() {
	window.obj17459_onTap_runningActionsCount = obj17459_onTap_runningActionsCount + 1;

	$("#anchor695")[0].click();
	window.obj17459_onTap_runningActionsCount = window.obj17459_onTap_runningActionsCount - 1;

if (window.obj17459_onTap_runningActionsCount < 0) {
	window.obj17459_onTap_runningActionsCount = 0;
} else if (window.obj17459_onTap_runningActionsCount == 0) {
	obj17459_onTap_actionGroup1();
}
}










































};
obj17459_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17459_onTap_activeActionGroupIndex = -1;
		$("#obj17459").trigger("obj17459_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17459) {
				console.warn("de-queueing event obj17459." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17459").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17459_onTap_activeActionGroupIndex = 1;
	











































};
obj17462_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17462_onTap_activeActionGroupIndex = -1;
		$("#obj17462").trigger("obj17462_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17462) {
				console.warn("de-queueing event obj17462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17462_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17464();
function goToPage_17464() {
	window.obj17462_onTap_runningActionsCount = obj17462_onTap_runningActionsCount + 1;

	$("#anchor696")[0].click();
	window.obj17462_onTap_runningActionsCount = window.obj17462_onTap_runningActionsCount - 1;

if (window.obj17462_onTap_runningActionsCount < 0) {
	window.obj17462_onTap_runningActionsCount = 0;
} else if (window.obj17462_onTap_runningActionsCount == 0) {
	obj17462_onTap_actionGroup1();
}
}










































};
obj17462_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17462_onTap_activeActionGroupIndex = -1;
		$("#obj17462").trigger("obj17462_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17462) {
				console.warn("de-queueing event obj17462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17462_onTap_activeActionGroupIndex = 1;
	











































};
obj17469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17469_onTap_activeActionGroupIndex = -1;
		$("#obj17469").trigger("obj17469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17469) {
				console.warn("de-queueing event obj17469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17469_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17471();
function goToPage_17471() {
	window.obj17469_onTap_runningActionsCount = obj17469_onTap_runningActionsCount + 1;

	$("#anchor697")[0].click();
	window.obj17469_onTap_runningActionsCount = window.obj17469_onTap_runningActionsCount - 1;

if (window.obj17469_onTap_runningActionsCount < 0) {
	window.obj17469_onTap_runningActionsCount = 0;
} else if (window.obj17469_onTap_runningActionsCount == 0) {
	obj17469_onTap_actionGroup1();
}
}










































};
obj17469_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17469_onTap_activeActionGroupIndex = -1;
		$("#obj17469").trigger("obj17469_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17469) {
				console.warn("de-queueing event obj17469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17469_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj17459: Event Touch Down
 *
 */

$("#obj17459").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17459_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17459_onTap is still running");
	return;
}
var obj17459_onTap_runningActionsCount = 0;
var obj17459_onTap_loopCount = 0;
obj17459_onTap_actionGroup0();
});


















/*
 *
 *   obj17462: Event Touch Down
 *
 */

$("#obj17462").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17462_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17462_onTap is still running");
	return;
}
var obj17462_onTap_runningActionsCount = 0;
var obj17462_onTap_loopCount = 0;
obj17462_onTap_actionGroup0();
});
























































/*
 *
 *   obj17469: Event Touch Down
 *
 */

$("#obj17469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17469_onTap is still running");
	return;
}
var obj17469_onTap_runningActionsCount = 0;
var obj17469_onTap_loopCount = 0;
obj17469_onTap_actionGroup0();
});




















































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});

$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj17453").trigger('SCEventShow');
$("#obj17455").trigger('SCEventShow');
$("#obj17457").trigger('SCEventShow');
$("#obj17459").trigger('SCEventShow');
$("#obj17462").trigger('SCEventShow');
$("#obj17465").trigger('SCEventShow');
$("#obj17467").trigger('SCEventShow');
$("#obj17469").trigger('SCEventShow');
$("#obj17472").trigger('SCEventShow');
$("#obj17474").trigger('SCEventShow');
	

});