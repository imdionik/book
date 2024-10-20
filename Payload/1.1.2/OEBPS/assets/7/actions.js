pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 294;
pubcoder.page.title = pubcoder.page.title || "7";
pubcoder.page.number = pubcoder.page.number || 7;
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
var obj339_onTap_activeActionGroupIndex = -1;
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
var obj345_onTap_activeActionGroupIndex = -1;
var obj345_onTap_runningActionsCount = 0;
var obj345_onTap_loopCount = 0;
var obj366_onTap_activeActionGroupIndex = -1;
var obj366_onTap_runningActionsCount = 0;
var obj366_onTap_loopCount = 0;

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
		
obj339_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 339) {
				console.warn("de-queueing event obj339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4435();
function goToPage_4435() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;

	$("#anchor53")[0].click();
	window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;

if (window.obj339_onTap_runningActionsCount < 0) {
	window.obj339_onTap_runningActionsCount = 0;
} else if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
}










































};
obj339_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 339) {
				console.warn("de-queueing event obj339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 1;
	











































};
obj345_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj345_onTap_activeActionGroupIndex = -1;
		$("#obj345").trigger("obj345_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 345) {
				console.warn("de-queueing event obj345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj345_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_348();
function goToPage_348() {
	window.obj345_onTap_runningActionsCount = obj345_onTap_runningActionsCount + 1;

	$("#anchor54")[0].click();
	window.obj345_onTap_runningActionsCount = window.obj345_onTap_runningActionsCount - 1;

if (window.obj345_onTap_runningActionsCount < 0) {
	window.obj345_onTap_runningActionsCount = 0;
} else if (window.obj345_onTap_runningActionsCount == 0) {
	obj345_onTap_actionGroup1();
}
}










































};
obj345_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj345_onTap_activeActionGroupIndex = -1;
		$("#obj345").trigger("obj345_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 345) {
				console.warn("de-queueing event obj345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj345_onTap_activeActionGroupIndex = 1;
	











































};
obj366_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj366_onTap_activeActionGroupIndex = -1;
		$("#obj366").trigger("obj366_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 366) {
				console.warn("de-queueing event obj366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj366_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_424();
function goToPage_424() {
	window.obj366_onTap_runningActionsCount = obj366_onTap_runningActionsCount + 1;

	$("#anchor55")[0].click();
	window.obj366_onTap_runningActionsCount = window.obj366_onTap_runningActionsCount - 1;

if (window.obj366_onTap_runningActionsCount < 0) {
	window.obj366_onTap_runningActionsCount = 0;
} else if (window.obj366_onTap_runningActionsCount == 0) {
	obj366_onTap_actionGroup1();
}
}










































};
obj366_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj366_onTap_activeActionGroupIndex = -1;
		$("#obj366").trigger("obj366_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 366) {
				console.warn("de-queueing event obj366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj366_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj339: Event Touch Down
 *
 */

$("#obj339").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj339_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj339_onTap is still running");
	return;
}
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
obj339_onTap_actionGroup0();
});


















/*
 *
 *   obj345: Event Touch Down
 *
 */

$("#obj345").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj345_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj345_onTap is still running");
	return;
}
var obj345_onTap_runningActionsCount = 0;
var obj345_onTap_loopCount = 0;
obj345_onTap_actionGroup0();
});
























































/*
 *
 *   obj366: Event Touch Down
 *
 */

$("#obj366").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj366_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj366_onTap is still running");
	return;
}
var obj366_onTap_runningActionsCount = 0;
var obj366_onTap_loopCount = 0;
obj366_onTap_actionGroup0();
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
	
$("#obj421").trigger('SCEventShow');
$("#obj297").trigger('SCEventShow');
$("#obj303").trigger('SCEventShow');
$("#obj339").trigger('SCEventShow');
$("#obj345").trigger('SCEventShow');
$("#obj363").trigger('SCEventShow');
$("#obj369").trigger('SCEventShow');
$("#obj366").trigger('SCEventShow');
$("#obj371").trigger('SCEventShow');
$("#obj373").trigger('SCEventShow');
	

});