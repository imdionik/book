pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 35;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
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
var obj40_onTap_activeActionGroupIndex = -1;
var obj40_onTap_runningActionsCount = 0;
var obj40_onTap_loopCount = 0;
var obj42_onTap_activeActionGroupIndex = -1;
var obj42_onTap_runningActionsCount = 0;
var obj42_onTap_loopCount = 0;
var obj76_onTap_activeActionGroupIndex = -1;
var obj76_onTap_runningActionsCount = 0;
var obj76_onTap_loopCount = 0;

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
		
obj40_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj40_onTap_activeActionGroupIndex = -1;
		$("#obj40").trigger("obj40_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40) {
				console.warn("de-queueing event obj40." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4437();
function goToPage_4437() {
	window.obj40_onTap_runningActionsCount = obj40_onTap_runningActionsCount + 1;

	$("#anchor22")[0].click();
	window.obj40_onTap_runningActionsCount = window.obj40_onTap_runningActionsCount - 1;

if (window.obj40_onTap_runningActionsCount < 0) {
	window.obj40_onTap_runningActionsCount = 0;
} else if (window.obj40_onTap_runningActionsCount == 0) {
	obj40_onTap_actionGroup1();
}
}










































};
obj40_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj40_onTap_activeActionGroupIndex = -1;
		$("#obj40").trigger("obj40_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 40) {
				console.warn("de-queueing event obj40." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj40").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj40_onTap_activeActionGroupIndex = 1;
	











































};
obj42_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42_onTap_activeActionGroupIndex = -1;
		$("#obj42").trigger("obj42_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42) {
				console.warn("de-queueing event obj42." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4438();
function goToPage_4438() {
	window.obj42_onTap_runningActionsCount = obj42_onTap_runningActionsCount + 1;

	$("#anchor23")[0].click();
	window.obj42_onTap_runningActionsCount = window.obj42_onTap_runningActionsCount - 1;

if (window.obj42_onTap_runningActionsCount < 0) {
	window.obj42_onTap_runningActionsCount = 0;
} else if (window.obj42_onTap_runningActionsCount == 0) {
	obj42_onTap_actionGroup1();
}
}










































};
obj42_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42_onTap_activeActionGroupIndex = -1;
		$("#obj42").trigger("obj42_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42) {
				console.warn("de-queueing event obj42." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42_onTap_activeActionGroupIndex = 1;
	











































};
obj76_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj76_onTap_activeActionGroupIndex = -1;
		$("#obj76").trigger("obj76_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 76) {
				console.warn("de-queueing event obj76." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj76").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj76_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4433();
function goToPage_4433() {
	window.obj76_onTap_runningActionsCount = obj76_onTap_runningActionsCount + 1;

	$("#anchor24")[0].click();
	window.obj76_onTap_runningActionsCount = window.obj76_onTap_runningActionsCount - 1;

if (window.obj76_onTap_runningActionsCount < 0) {
	window.obj76_onTap_runningActionsCount = 0;
} else if (window.obj76_onTap_runningActionsCount == 0) {
	obj76_onTap_actionGroup1();
}
}










































};
obj76_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj76_onTap_activeActionGroupIndex = -1;
		$("#obj76").trigger("obj76_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 76) {
				console.warn("de-queueing event obj76." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj76").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj76_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj40: Event Touch Down
 *
 */

$("#obj40").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj40_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj40_onTap is still running");
	return;
}
var obj40_onTap_runningActionsCount = 0;
var obj40_onTap_loopCount = 0;
obj40_onTap_actionGroup0();
});


















/*
 *
 *   obj42: Event Touch Down
 *
 */

$("#obj42").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42_onTap is still running");
	return;
}
var obj42_onTap_runningActionsCount = 0;
var obj42_onTap_loopCount = 0;
obj42_onTap_actionGroup0();
});
















































































































































































































/*
 *
 *   obj76: Event Touch Down
 *
 */

$("#obj76").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj76_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj76_onTap is still running");
	return;
}
var obj76_onTap_runningActionsCount = 0;
var obj76_onTap_loopCount = 0;
obj76_onTap_actionGroup0();
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
	
$("#obj53").trigger('SCEventShow');
$("#obj38").trigger('SCEventShow');
$("#obj40").trigger('SCEventShow');
$("#obj42").trigger('SCEventShow');
$("#obj46").trigger('SCEventShow');
$("#obj48").trigger('SCEventShow');
$("#obj50").trigger('SCEventShow');
$("#obj57").trigger('SCEventShow');
$("#obj61").trigger('SCEventShow');
$("#obj63").trigger('SCEventShow');
$("#obj65").trigger('SCEventShow');
$("#obj70").trigger('SCEventShow');
$("#obj72").trigger('SCEventShow');
$("#obj74").trigger('SCEventShow');
$("#obj76").trigger('SCEventShow');
	

});