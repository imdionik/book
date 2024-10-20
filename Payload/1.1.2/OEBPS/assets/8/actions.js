pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 425;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj430_onTap_activeActionGroupIndex = -1;
var obj430_onTap_runningActionsCount = 0;
var obj430_onTap_loopCount = 0;
var obj433_onTap_activeActionGroupIndex = -1;
var obj433_onTap_runningActionsCount = 0;
var obj433_onTap_loopCount = 0;
var obj440_onTap_activeActionGroupIndex = -1;
var obj440_onTap_runningActionsCount = 0;
var obj440_onTap_loopCount = 0;

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
		
obj430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj430_onTap_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 430) {
				console.warn("de-queueing event obj430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj430_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_432();
function goToPage_432() {
	window.obj430_onTap_runningActionsCount = obj430_onTap_runningActionsCount + 1;

	$("#anchor56")[0].click();
	window.obj430_onTap_runningActionsCount = window.obj430_onTap_runningActionsCount - 1;

if (window.obj430_onTap_runningActionsCount < 0) {
	window.obj430_onTap_runningActionsCount = 0;
} else if (window.obj430_onTap_runningActionsCount == 0) {
	obj430_onTap_actionGroup1();
}
}










































};
obj430_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj430_onTap_activeActionGroupIndex = -1;
		$("#obj430").trigger("obj430_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 430) {
				console.warn("de-queueing event obj430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj430_onTap_activeActionGroupIndex = 1;
	











































};
obj433_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj433_onTap_activeActionGroupIndex = -1;
		$("#obj433").trigger("obj433_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 433) {
				console.warn("de-queueing event obj433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj433_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_435();
function goToPage_435() {
	window.obj433_onTap_runningActionsCount = obj433_onTap_runningActionsCount + 1;

	$("#anchor57")[0].click();
	window.obj433_onTap_runningActionsCount = window.obj433_onTap_runningActionsCount - 1;

if (window.obj433_onTap_runningActionsCount < 0) {
	window.obj433_onTap_runningActionsCount = 0;
} else if (window.obj433_onTap_runningActionsCount == 0) {
	obj433_onTap_actionGroup1();
}
}










































};
obj433_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj433_onTap_activeActionGroupIndex = -1;
		$("#obj433").trigger("obj433_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 433) {
				console.warn("de-queueing event obj433." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj433").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj433_onTap_activeActionGroupIndex = 1;
	











































};
obj440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj440_onTap_activeActionGroupIndex = -1;
		$("#obj440").trigger("obj440_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 440) {
				console.warn("de-queueing event obj440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj440_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_442();
function goToPage_442() {
	window.obj440_onTap_runningActionsCount = obj440_onTap_runningActionsCount + 1;

	$("#anchor58")[0].click();
	window.obj440_onTap_runningActionsCount = window.obj440_onTap_runningActionsCount - 1;

if (window.obj440_onTap_runningActionsCount < 0) {
	window.obj440_onTap_runningActionsCount = 0;
} else if (window.obj440_onTap_runningActionsCount == 0) {
	obj440_onTap_actionGroup1();
}
}










































};
obj440_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj440_onTap_activeActionGroupIndex = -1;
		$("#obj440").trigger("obj440_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 440) {
				console.warn("de-queueing event obj440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj440_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj430: Event Touch Down
 *
 */

$("#obj430").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj430_onTap is still running");
	return;
}
var obj430_onTap_runningActionsCount = 0;
var obj430_onTap_loopCount = 0;
obj430_onTap_actionGroup0();
});


















/*
 *
 *   obj433: Event Touch Down
 *
 */

$("#obj433").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj433_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj433_onTap is still running");
	return;
}
var obj433_onTap_runningActionsCount = 0;
var obj433_onTap_loopCount = 0;
obj433_onTap_actionGroup0();
});
























































/*
 *
 *   obj440: Event Touch Down
 *
 */

$("#obj440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj440_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj440_onTap is still running");
	return;
}
var obj440_onTap_runningActionsCount = 0;
var obj440_onTap_loopCount = 0;
obj440_onTap_actionGroup0();
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
	
$("#obj428").trigger('SCEventShow');
$("#obj430").trigger('SCEventShow');
$("#obj433").trigger('SCEventShow');
$("#obj436").trigger('SCEventShow');
$("#obj438").trigger('SCEventShow');
$("#obj440").trigger('SCEventShow');
$("#obj497").trigger('SCEventShow');
	

});