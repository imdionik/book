pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22515;
pubcoder.page.title = pubcoder.page.title || "58";
pubcoder.page.number = pubcoder.page.number || 58;
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
var obj22522_onTap_activeActionGroupIndex = -1;
var obj22522_onTap_runningActionsCount = 0;
var obj22522_onTap_loopCount = 0;
var obj22525_onTap_activeActionGroupIndex = -1;
var obj22525_onTap_runningActionsCount = 0;
var obj22525_onTap_loopCount = 0;
var obj22528_onTap_activeActionGroupIndex = -1;
var obj22528_onTap_runningActionsCount = 0;
var obj22528_onTap_loopCount = 0;
var obj22531_onTap_activeActionGroupIndex = -1;
var obj22531_onTap_runningActionsCount = 0;
var obj22531_onTap_loopCount = 0;

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
		
obj22522_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22522_onTap_activeActionGroupIndex = -1;
		$("#obj22522").trigger("obj22522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22522) {
				console.warn("de-queueing event obj22522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22522_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22524();
function goToPage_22524() {
	window.obj22522_onTap_runningActionsCount = obj22522_onTap_runningActionsCount + 1;

	$("#anchor891")[0].click();
	window.obj22522_onTap_runningActionsCount = window.obj22522_onTap_runningActionsCount - 1;

if (window.obj22522_onTap_runningActionsCount < 0) {
	window.obj22522_onTap_runningActionsCount = 0;
} else if (window.obj22522_onTap_runningActionsCount == 0) {
	obj22522_onTap_actionGroup1();
}
}










































};
obj22522_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22522_onTap_activeActionGroupIndex = -1;
		$("#obj22522").trigger("obj22522_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22522) {
				console.warn("de-queueing event obj22522." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22522").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22522_onTap_activeActionGroupIndex = 1;
	











































};
obj22525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22525_onTap_activeActionGroupIndex = -1;
		$("#obj22525").trigger("obj22525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22525) {
				console.warn("de-queueing event obj22525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22525_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22527();
function goToPage_22527() {
	window.obj22525_onTap_runningActionsCount = obj22525_onTap_runningActionsCount + 1;

	$("#anchor892")[0].click();
	window.obj22525_onTap_runningActionsCount = window.obj22525_onTap_runningActionsCount - 1;

if (window.obj22525_onTap_runningActionsCount < 0) {
	window.obj22525_onTap_runningActionsCount = 0;
} else if (window.obj22525_onTap_runningActionsCount == 0) {
	obj22525_onTap_actionGroup1();
}
}










































};
obj22525_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22525_onTap_activeActionGroupIndex = -1;
		$("#obj22525").trigger("obj22525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22525) {
				console.warn("de-queueing event obj22525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22525_onTap_activeActionGroupIndex = 1;
	











































};
obj22528_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22528_onTap_activeActionGroupIndex = -1;
		$("#obj22528").trigger("obj22528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22528) {
				console.warn("de-queueing event obj22528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22528_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22530();
function goToPage_22530() {
	window.obj22528_onTap_runningActionsCount = obj22528_onTap_runningActionsCount + 1;

	$("#anchor893")[0].click();
	window.obj22528_onTap_runningActionsCount = window.obj22528_onTap_runningActionsCount - 1;

if (window.obj22528_onTap_runningActionsCount < 0) {
	window.obj22528_onTap_runningActionsCount = 0;
} else if (window.obj22528_onTap_runningActionsCount == 0) {
	obj22528_onTap_actionGroup1();
}
}










































};
obj22528_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22528_onTap_activeActionGroupIndex = -1;
		$("#obj22528").trigger("obj22528_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22528) {
				console.warn("de-queueing event obj22528." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22528").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22528_onTap_activeActionGroupIndex = 1;
	











































};
obj22531_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22531_onTap_activeActionGroupIndex = -1;
		$("#obj22531").trigger("obj22531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22531) {
				console.warn("de-queueing event obj22531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22531_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22533();
function goToPage_22533() {
	window.obj22531_onTap_runningActionsCount = obj22531_onTap_runningActionsCount + 1;

	$("#anchor894")[0].click();
	window.obj22531_onTap_runningActionsCount = window.obj22531_onTap_runningActionsCount - 1;

if (window.obj22531_onTap_runningActionsCount < 0) {
	window.obj22531_onTap_runningActionsCount = 0;
} else if (window.obj22531_onTap_runningActionsCount == 0) {
	obj22531_onTap_actionGroup1();
}
}










































};
obj22531_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22531_onTap_activeActionGroupIndex = -1;
		$("#obj22531").trigger("obj22531_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22531) {
				console.warn("de-queueing event obj22531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22531_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj22522: Event Touch Down
 *
 */

$("#obj22522").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22522_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22522_onTap is still running");
	return;
}
var obj22522_onTap_runningActionsCount = 0;
var obj22522_onTap_loopCount = 0;
obj22522_onTap_actionGroup0();
});


















/*
 *
 *   obj22525: Event Touch Down
 *
 */

$("#obj22525").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22525_onTap is still running");
	return;
}
var obj22525_onTap_runningActionsCount = 0;
var obj22525_onTap_loopCount = 0;
obj22525_onTap_actionGroup0();
});


















/*
 *
 *   obj22528: Event Touch Down
 *
 */

$("#obj22528").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22528_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22528_onTap is still running");
	return;
}
var obj22528_onTap_runningActionsCount = 0;
var obj22528_onTap_loopCount = 0;
obj22528_onTap_actionGroup0();
});


















/*
 *
 *   obj22531: Event Touch Down
 *
 */

$("#obj22531").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22531_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22531_onTap is still running");
	return;
}
var obj22531_onTap_runningActionsCount = 0;
var obj22531_onTap_loopCount = 0;
obj22531_onTap_actionGroup0();
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
	
$("#obj22516").trigger('SCEventShow');
$("#obj22518").trigger('SCEventShow');
$("#obj22520").trigger('SCEventShow');
$("#obj22522").trigger('SCEventShow');
$("#obj22525").trigger('SCEventShow');
$("#obj22528").trigger('SCEventShow');
$("#obj22531").trigger('SCEventShow');
$("#obj22534").trigger('SCEventShow');
$("#obj22538").trigger('SCEventShow');
$("#obj22540").trigger('SCEventShow');
$("#obj22542").trigger('SCEventShow');
$("#obj22536").trigger('SCEventShow');
$("#obj22544").trigger('SCEventShow');
$("#obj22546").trigger('SCEventShow');
$("#obj22548").trigger('SCEventShow');
$("#obj22550").trigger('SCEventShow');
$("#obj22552").trigger('SCEventShow');
$("#obj22554").trigger('SCEventShow');
$("#obj22556").trigger('SCEventShow');
	

});