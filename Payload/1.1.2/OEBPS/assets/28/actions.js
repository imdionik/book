pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 9582;
pubcoder.page.title = pubcoder.page.title || "28";
pubcoder.page.number = pubcoder.page.number || 28;
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
var obj9589_onTap_activeActionGroupIndex = -1;
var obj9589_onTap_runningActionsCount = 0;
var obj9589_onTap_loopCount = 0;
var obj9592_onTap_activeActionGroupIndex = -1;
var obj9592_onTap_runningActionsCount = 0;
var obj9592_onTap_loopCount = 0;
var obj9599_onTap_activeActionGroupIndex = -1;
var obj9599_onTap_runningActionsCount = 0;
var obj9599_onTap_loopCount = 0;

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
		
obj9589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9589_onTap_activeActionGroupIndex = -1;
		$("#obj9589").trigger("obj9589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9589) {
				console.warn("de-queueing event obj9589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9589_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9591();
function goToPage_9591() {
	window.obj9589_onTap_runningActionsCount = obj9589_onTap_runningActionsCount + 1;

	$("#anchor408")[0].click();
	window.obj9589_onTap_runningActionsCount = window.obj9589_onTap_runningActionsCount - 1;

if (window.obj9589_onTap_runningActionsCount < 0) {
	window.obj9589_onTap_runningActionsCount = 0;
} else if (window.obj9589_onTap_runningActionsCount == 0) {
	obj9589_onTap_actionGroup1();
}
}










































};
obj9589_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9589_onTap_activeActionGroupIndex = -1;
		$("#obj9589").trigger("obj9589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9589) {
				console.warn("de-queueing event obj9589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9589_onTap_activeActionGroupIndex = 1;
	











































};
obj9592_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9592_onTap_activeActionGroupIndex = -1;
		$("#obj9592").trigger("obj9592_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9592) {
				console.warn("de-queueing event obj9592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9592_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9594();
function goToPage_9594() {
	window.obj9592_onTap_runningActionsCount = obj9592_onTap_runningActionsCount + 1;

	$("#anchor409")[0].click();
	window.obj9592_onTap_runningActionsCount = window.obj9592_onTap_runningActionsCount - 1;

if (window.obj9592_onTap_runningActionsCount < 0) {
	window.obj9592_onTap_runningActionsCount = 0;
} else if (window.obj9592_onTap_runningActionsCount == 0) {
	obj9592_onTap_actionGroup1();
}
}










































};
obj9592_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9592_onTap_activeActionGroupIndex = -1;
		$("#obj9592").trigger("obj9592_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9592) {
				console.warn("de-queueing event obj9592." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9592").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9592_onTap_activeActionGroupIndex = 1;
	











































};
obj9599_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9599_onTap_activeActionGroupIndex = -1;
		$("#obj9599").trigger("obj9599_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9599) {
				console.warn("de-queueing event obj9599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9599_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9601();
function goToPage_9601() {
	window.obj9599_onTap_runningActionsCount = obj9599_onTap_runningActionsCount + 1;

	$("#anchor410")[0].click();
	window.obj9599_onTap_runningActionsCount = window.obj9599_onTap_runningActionsCount - 1;

if (window.obj9599_onTap_runningActionsCount < 0) {
	window.obj9599_onTap_runningActionsCount = 0;
} else if (window.obj9599_onTap_runningActionsCount == 0) {
	obj9599_onTap_actionGroup1();
}
}










































};
obj9599_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9599_onTap_activeActionGroupIndex = -1;
		$("#obj9599").trigger("obj9599_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9599) {
				console.warn("de-queueing event obj9599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9599_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj9589: Event Touch Down
 *
 */

$("#obj9589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9589_onTap is still running");
	return;
}
var obj9589_onTap_runningActionsCount = 0;
var obj9589_onTap_loopCount = 0;
obj9589_onTap_actionGroup0();
});


















/*
 *
 *   obj9592: Event Touch Down
 *
 */

$("#obj9592").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9592_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9592_onTap is still running");
	return;
}
var obj9592_onTap_runningActionsCount = 0;
var obj9592_onTap_loopCount = 0;
obj9592_onTap_actionGroup0();
});
























































/*
 *
 *   obj9599: Event Touch Down
 *
 */

$("#obj9599").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9599_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9599_onTap is still running");
	return;
}
var obj9599_onTap_runningActionsCount = 0;
var obj9599_onTap_loopCount = 0;
obj9599_onTap_actionGroup0();
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
	
$("#obj9583").trigger('SCEventShow');
$("#obj9585").trigger('SCEventShow');
$("#obj9587").trigger('SCEventShow');
$("#obj9589").trigger('SCEventShow');
$("#obj9592").trigger('SCEventShow');
$("#obj9595").trigger('SCEventShow');
$("#obj9597").trigger('SCEventShow');
$("#obj9599").trigger('SCEventShow');
$("#obj9602").trigger('SCEventShow');
$("#obj9604").trigger('SCEventShow');
	

});