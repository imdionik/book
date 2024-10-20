pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13334;
pubcoder.page.title = pubcoder.page.title || "38";
pubcoder.page.number = pubcoder.page.number || 38;
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
var obj13343_onTap_activeActionGroupIndex = -1;
var obj13343_onTap_runningActionsCount = 0;
var obj13343_onTap_loopCount = 0;
var obj13346_onTap_activeActionGroupIndex = -1;
var obj13346_onTap_runningActionsCount = 0;
var obj13346_onTap_loopCount = 0;
var obj13353_onTap_activeActionGroupIndex = -1;
var obj13353_onTap_runningActionsCount = 0;
var obj13353_onTap_loopCount = 0;
var obj13356_onTap_activeActionGroupIndex = -1;
var obj13356_onTap_runningActionsCount = 0;
var obj13356_onTap_loopCount = 0;

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
		
obj13343_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13343_onTap_activeActionGroupIndex = -1;
		$("#obj13343").trigger("obj13343_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13343) {
				console.warn("de-queueing event obj13343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13343_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13345();
function goToPage_13345() {
	window.obj13343_onTap_runningActionsCount = obj13343_onTap_runningActionsCount + 1;

	$("#anchor559")[0].click();
	window.obj13343_onTap_runningActionsCount = window.obj13343_onTap_runningActionsCount - 1;

if (window.obj13343_onTap_runningActionsCount < 0) {
	window.obj13343_onTap_runningActionsCount = 0;
} else if (window.obj13343_onTap_runningActionsCount == 0) {
	obj13343_onTap_actionGroup1();
}
}










































};
obj13343_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13343_onTap_activeActionGroupIndex = -1;
		$("#obj13343").trigger("obj13343_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13343) {
				console.warn("de-queueing event obj13343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13343_onTap_activeActionGroupIndex = 1;
	











































};
obj13346_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13346_onTap_activeActionGroupIndex = -1;
		$("#obj13346").trigger("obj13346_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13346) {
				console.warn("de-queueing event obj13346." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13346").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13346_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13348();
function goToPage_13348() {
	window.obj13346_onTap_runningActionsCount = obj13346_onTap_runningActionsCount + 1;

	$("#anchor560")[0].click();
	window.obj13346_onTap_runningActionsCount = window.obj13346_onTap_runningActionsCount - 1;

if (window.obj13346_onTap_runningActionsCount < 0) {
	window.obj13346_onTap_runningActionsCount = 0;
} else if (window.obj13346_onTap_runningActionsCount == 0) {
	obj13346_onTap_actionGroup1();
}
}










































};
obj13346_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13346_onTap_activeActionGroupIndex = -1;
		$("#obj13346").trigger("obj13346_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13346) {
				console.warn("de-queueing event obj13346." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13346").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13346_onTap_activeActionGroupIndex = 1;
	











































};
obj13353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13353_onTap_activeActionGroupIndex = -1;
		$("#obj13353").trigger("obj13353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13353) {
				console.warn("de-queueing event obj13353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13353_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13355();
function goToPage_13355() {
	window.obj13353_onTap_runningActionsCount = obj13353_onTap_runningActionsCount + 1;

	$("#anchor561")[0].click();
	window.obj13353_onTap_runningActionsCount = window.obj13353_onTap_runningActionsCount - 1;

if (window.obj13353_onTap_runningActionsCount < 0) {
	window.obj13353_onTap_runningActionsCount = 0;
} else if (window.obj13353_onTap_runningActionsCount == 0) {
	obj13353_onTap_actionGroup1();
}
}










































};
obj13353_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13353_onTap_activeActionGroupIndex = -1;
		$("#obj13353").trigger("obj13353_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13353) {
				console.warn("de-queueing event obj13353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13353_onTap_activeActionGroupIndex = 1;
	











































};
obj13356_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13356_onTap_activeActionGroupIndex = -1;
		$("#obj13356").trigger("obj13356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13356) {
				console.warn("de-queueing event obj13356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13356_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13358();
function goToPage_13358() {
	window.obj13356_onTap_runningActionsCount = obj13356_onTap_runningActionsCount + 1;

	$("#anchor562")[0].click();
	window.obj13356_onTap_runningActionsCount = window.obj13356_onTap_runningActionsCount - 1;

if (window.obj13356_onTap_runningActionsCount < 0) {
	window.obj13356_onTap_runningActionsCount = 0;
} else if (window.obj13356_onTap_runningActionsCount == 0) {
	obj13356_onTap_actionGroup1();
}
}










































};
obj13356_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13356_onTap_activeActionGroupIndex = -1;
		$("#obj13356").trigger("obj13356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13356) {
				console.warn("de-queueing event obj13356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13356_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj13343: Event Touch Down
 *
 */

$("#obj13343").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13343_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13343_onTap is still running");
	return;
}
var obj13343_onTap_runningActionsCount = 0;
var obj13343_onTap_loopCount = 0;
obj13343_onTap_actionGroup0();
});


















/*
 *
 *   obj13346: Event Touch Down
 *
 */

$("#obj13346").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13346_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13346_onTap is still running");
	return;
}
var obj13346_onTap_runningActionsCount = 0;
var obj13346_onTap_loopCount = 0;
obj13346_onTap_actionGroup0();
});
























































/*
 *
 *   obj13353: Event Touch Down
 *
 */

$("#obj13353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13353_onTap is still running");
	return;
}
var obj13353_onTap_runningActionsCount = 0;
var obj13353_onTap_loopCount = 0;
obj13353_onTap_actionGroup0();
});


















/*
 *
 *   obj13356: Event Touch Down
 *
 */

$("#obj13356").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13356_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13356_onTap is still running");
	return;
}
var obj13356_onTap_runningActionsCount = 0;
var obj13356_onTap_loopCount = 0;
obj13356_onTap_actionGroup0();
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
	
$("#obj13335").trigger('SCEventShow');
$("#obj13337").trigger('SCEventShow');
$("#obj13339").trigger('SCEventShow');
$("#obj13341").trigger('SCEventShow');
$("#obj13343").trigger('SCEventShow');
$("#obj13346").trigger('SCEventShow');
$("#obj13349").trigger('SCEventShow');
$("#obj13351").trigger('SCEventShow');
$("#obj13353").trigger('SCEventShow');
$("#obj13356").trigger('SCEventShow');
$("#obj13361").trigger('SCEventShow');
$("#obj22212").trigger('SCEventShow');
	

});