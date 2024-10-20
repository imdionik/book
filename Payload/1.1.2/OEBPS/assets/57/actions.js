pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22443;
pubcoder.page.title = pubcoder.page.title || "57";
pubcoder.page.number = pubcoder.page.number || 57;
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
var obj22450_onTap_activeActionGroupIndex = -1;
var obj22450_onTap_runningActionsCount = 0;
var obj22450_onTap_loopCount = 0;
var obj22453_onTap_activeActionGroupIndex = -1;
var obj22453_onTap_runningActionsCount = 0;
var obj22453_onTap_loopCount = 0;
var obj22480_onTap_activeActionGroupIndex = -1;
var obj22480_onTap_runningActionsCount = 0;
var obj22480_onTap_loopCount = 0;
var obj22483_onTap_activeActionGroupIndex = -1;
var obj22483_onTap_runningActionsCount = 0;
var obj22483_onTap_loopCount = 0;

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
		
obj22450_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22450_onTap_activeActionGroupIndex = -1;
		$("#obj22450").trigger("obj22450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22450) {
				console.warn("de-queueing event obj22450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22450_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22452();
function goToPage_22452() {
	window.obj22450_onTap_runningActionsCount = obj22450_onTap_runningActionsCount + 1;

	$("#anchor887")[0].click();
	window.obj22450_onTap_runningActionsCount = window.obj22450_onTap_runningActionsCount - 1;

if (window.obj22450_onTap_runningActionsCount < 0) {
	window.obj22450_onTap_runningActionsCount = 0;
} else if (window.obj22450_onTap_runningActionsCount == 0) {
	obj22450_onTap_actionGroup1();
}
}










































};
obj22450_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22450_onTap_activeActionGroupIndex = -1;
		$("#obj22450").trigger("obj22450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22450) {
				console.warn("de-queueing event obj22450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22450_onTap_activeActionGroupIndex = 1;
	











































};
obj22453_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22453_onTap_activeActionGroupIndex = -1;
		$("#obj22453").trigger("obj22453_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22453) {
				console.warn("de-queueing event obj22453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22453_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22455();
function goToPage_22455() {
	window.obj22453_onTap_runningActionsCount = obj22453_onTap_runningActionsCount + 1;

	$("#anchor888")[0].click();
	window.obj22453_onTap_runningActionsCount = window.obj22453_onTap_runningActionsCount - 1;

if (window.obj22453_onTap_runningActionsCount < 0) {
	window.obj22453_onTap_runningActionsCount = 0;
} else if (window.obj22453_onTap_runningActionsCount == 0) {
	obj22453_onTap_actionGroup1();
}
}










































};
obj22453_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22453_onTap_activeActionGroupIndex = -1;
		$("#obj22453").trigger("obj22453_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22453) {
				console.warn("de-queueing event obj22453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22453_onTap_activeActionGroupIndex = 1;
	











































};
obj22480_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22480_onTap_activeActionGroupIndex = -1;
		$("#obj22480").trigger("obj22480_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22480) {
				console.warn("de-queueing event obj22480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22480_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22482();
function goToPage_22482() {
	window.obj22480_onTap_runningActionsCount = obj22480_onTap_runningActionsCount + 1;

	$("#anchor889")[0].click();
	window.obj22480_onTap_runningActionsCount = window.obj22480_onTap_runningActionsCount - 1;

if (window.obj22480_onTap_runningActionsCount < 0) {
	window.obj22480_onTap_runningActionsCount = 0;
} else if (window.obj22480_onTap_runningActionsCount == 0) {
	obj22480_onTap_actionGroup1();
}
}










































};
obj22480_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22480_onTap_activeActionGroupIndex = -1;
		$("#obj22480").trigger("obj22480_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22480) {
				console.warn("de-queueing event obj22480." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22480").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22480_onTap_activeActionGroupIndex = 1;
	











































};
obj22483_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22483_onTap_activeActionGroupIndex = -1;
		$("#obj22483").trigger("obj22483_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22483) {
				console.warn("de-queueing event obj22483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22483_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22485();
function goToPage_22485() {
	window.obj22483_onTap_runningActionsCount = obj22483_onTap_runningActionsCount + 1;

	$("#anchor890")[0].click();
	window.obj22483_onTap_runningActionsCount = window.obj22483_onTap_runningActionsCount - 1;

if (window.obj22483_onTap_runningActionsCount < 0) {
	window.obj22483_onTap_runningActionsCount = 0;
} else if (window.obj22483_onTap_runningActionsCount == 0) {
	obj22483_onTap_actionGroup1();
}
}










































};
obj22483_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22483_onTap_activeActionGroupIndex = -1;
		$("#obj22483").trigger("obj22483_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22483) {
				console.warn("de-queueing event obj22483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22483_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj22450: Event Touch Down
 *
 */

$("#obj22450").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22450_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22450_onTap is still running");
	return;
}
var obj22450_onTap_runningActionsCount = 0;
var obj22450_onTap_loopCount = 0;
obj22450_onTap_actionGroup0();
});


















/*
 *
 *   obj22453: Event Touch Down
 *
 */

$("#obj22453").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22453_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22453_onTap is still running");
	return;
}
var obj22453_onTap_runningActionsCount = 0;
var obj22453_onTap_loopCount = 0;
obj22453_onTap_actionGroup0();
});


















/*
 *
 *   obj22480: Event Touch Down
 *
 */

$("#obj22480").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22480_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22480_onTap is still running");
	return;
}
var obj22480_onTap_runningActionsCount = 0;
var obj22480_onTap_loopCount = 0;
obj22480_onTap_actionGroup0();
});


















/*
 *
 *   obj22483: Event Touch Down
 *
 */

$("#obj22483").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22483_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22483_onTap is still running");
	return;
}
var obj22483_onTap_runningActionsCount = 0;
var obj22483_onTap_loopCount = 0;
obj22483_onTap_actionGroup0();
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
	
$("#obj22444").trigger('SCEventShow');
$("#obj22446").trigger('SCEventShow');
$("#obj22448").trigger('SCEventShow');
$("#obj22450").trigger('SCEventShow');
$("#obj22453").trigger('SCEventShow');
$("#obj22480").trigger('SCEventShow');
$("#obj22483").trigger('SCEventShow');
$("#obj22499").trigger('SCEventShow');
$("#obj22487").trigger('SCEventShow');
$("#obj22490").trigger('SCEventShow');
$("#obj22493").trigger('SCEventShow');
$("#obj22496").trigger('SCEventShow');
$("#obj22501").trigger('SCEventShow');
$("#obj22503").trigger('SCEventShow');
$("#obj22505").trigger('SCEventShow');
$("#obj22507").trigger('SCEventShow');
$("#obj22509").trigger('SCEventShow');
$("#obj22511").trigger('SCEventShow');
$("#obj22513").trigger('SCEventShow');
	

});