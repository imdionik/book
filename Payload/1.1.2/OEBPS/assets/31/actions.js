pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 12681;
pubcoder.page.title = pubcoder.page.title || "31";
pubcoder.page.number = pubcoder.page.number || 31;
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
var obj12686_onTap_activeActionGroupIndex = -1;
var obj12686_onTap_runningActionsCount = 0;
var obj12686_onTap_loopCount = 0;
var obj12689_onTap_activeActionGroupIndex = -1;
var obj12689_onTap_runningActionsCount = 0;
var obj12689_onTap_loopCount = 0;
var obj12696_onTap_activeActionGroupIndex = -1;
var obj12696_onTap_runningActionsCount = 0;
var obj12696_onTap_loopCount = 0;

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
		
obj12686_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12686_onTap_activeActionGroupIndex = -1;
		$("#obj12686").trigger("obj12686_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12686) {
				console.warn("de-queueing event obj12686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12686_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12688();
function goToPage_12688() {
	window.obj12686_onTap_runningActionsCount = obj12686_onTap_runningActionsCount + 1;

	$("#anchor418")[0].click();
	window.obj12686_onTap_runningActionsCount = window.obj12686_onTap_runningActionsCount - 1;

if (window.obj12686_onTap_runningActionsCount < 0) {
	window.obj12686_onTap_runningActionsCount = 0;
} else if (window.obj12686_onTap_runningActionsCount == 0) {
	obj12686_onTap_actionGroup1();
}
}










































};
obj12686_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12686_onTap_activeActionGroupIndex = -1;
		$("#obj12686").trigger("obj12686_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12686) {
				console.warn("de-queueing event obj12686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12686_onTap_activeActionGroupIndex = 1;
	











































};
obj12689_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12689_onTap_activeActionGroupIndex = -1;
		$("#obj12689").trigger("obj12689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12689) {
				console.warn("de-queueing event obj12689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12689_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12691();
function goToPage_12691() {
	window.obj12689_onTap_runningActionsCount = obj12689_onTap_runningActionsCount + 1;

	$("#anchor419")[0].click();
	window.obj12689_onTap_runningActionsCount = window.obj12689_onTap_runningActionsCount - 1;

if (window.obj12689_onTap_runningActionsCount < 0) {
	window.obj12689_onTap_runningActionsCount = 0;
} else if (window.obj12689_onTap_runningActionsCount == 0) {
	obj12689_onTap_actionGroup1();
}
}










































};
obj12689_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12689_onTap_activeActionGroupIndex = -1;
		$("#obj12689").trigger("obj12689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12689) {
				console.warn("de-queueing event obj12689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12689_onTap_activeActionGroupIndex = 1;
	











































};
obj12696_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12696_onTap_activeActionGroupIndex = -1;
		$("#obj12696").trigger("obj12696_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12696) {
				console.warn("de-queueing event obj12696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12696_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12698();
function goToPage_12698() {
	window.obj12696_onTap_runningActionsCount = obj12696_onTap_runningActionsCount + 1;

	$("#anchor420")[0].click();
	window.obj12696_onTap_runningActionsCount = window.obj12696_onTap_runningActionsCount - 1;

if (window.obj12696_onTap_runningActionsCount < 0) {
	window.obj12696_onTap_runningActionsCount = 0;
} else if (window.obj12696_onTap_runningActionsCount == 0) {
	obj12696_onTap_actionGroup1();
}
}










































};
obj12696_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12696_onTap_activeActionGroupIndex = -1;
		$("#obj12696").trigger("obj12696_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12696) {
				console.warn("de-queueing event obj12696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12696_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj12686: Event Touch Down
 *
 */

$("#obj12686").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12686_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12686_onTap is still running");
	return;
}
var obj12686_onTap_runningActionsCount = 0;
var obj12686_onTap_loopCount = 0;
obj12686_onTap_actionGroup0();
});


















/*
 *
 *   obj12689: Event Touch Down
 *
 */

$("#obj12689").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12689_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12689_onTap is still running");
	return;
}
var obj12689_onTap_runningActionsCount = 0;
var obj12689_onTap_loopCount = 0;
obj12689_onTap_actionGroup0();
});
























































/*
 *
 *   obj12696: Event Touch Down
 *
 */

$("#obj12696").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12696_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12696_onTap is still running");
	return;
}
var obj12696_onTap_runningActionsCount = 0;
var obj12696_onTap_loopCount = 0;
obj12696_onTap_actionGroup0();
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
	
$("#obj12682").trigger('SCEventShow');
$("#obj12684").trigger('SCEventShow');
$("#obj12686").trigger('SCEventShow');
$("#obj12689").trigger('SCEventShow');
$("#obj12692").trigger('SCEventShow');
$("#obj12694").trigger('SCEventShow');
$("#obj12696").trigger('SCEventShow');
$("#obj12699").trigger('SCEventShow');
$("#obj12701").trigger('SCEventShow');
$("#obj12705").trigger('SCEventShow');
$("#obj12707").trigger('SCEventShow');
$("#obj12709").trigger('SCEventShow');
$("#obj12711").trigger('SCEventShow');
$("#obj12713").trigger('SCEventShow');
$("#obj12715").trigger('SCEventShow');
$("#obj12717").trigger('SCEventShow');
$("#obj12719").trigger('SCEventShow');
$("#obj12721").trigger('SCEventShow');
$("#obj12723").trigger('SCEventShow');
$("#obj12727").trigger('SCEventShow');
	

});