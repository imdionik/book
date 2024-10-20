pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 24878;
pubcoder.page.title = pubcoder.page.title || "64";
pubcoder.page.number = pubcoder.page.number || 64;
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
var obj24883_onTap_activeActionGroupIndex = -1;
var obj24883_onTap_runningActionsCount = 0;
var obj24883_onTap_loopCount = 0;
var obj24890_onTap_activeActionGroupIndex = -1;
var obj24890_onTap_runningActionsCount = 0;
var obj24890_onTap_loopCount = 0;
var obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj24893_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj24893_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj24893_counterValue = 0;
var obj24893_counterTargetValue = 4;
var obj24893_counterCanExceedTargetValue = false;

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
		
obj24883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24883_onTap_activeActionGroupIndex = -1;
		$("#obj24883").trigger("obj24883_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24883) {
				console.warn("de-queueing event obj24883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24883_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24885();
function goToPage_24885() {
	window.obj24883_onTap_runningActionsCount = obj24883_onTap_runningActionsCount + 1;

	$("#anchor956")[0].click();
	window.obj24883_onTap_runningActionsCount = window.obj24883_onTap_runningActionsCount - 1;

if (window.obj24883_onTap_runningActionsCount < 0) {
	window.obj24883_onTap_runningActionsCount = 0;
} else if (window.obj24883_onTap_runningActionsCount == 0) {
	obj24883_onTap_actionGroup1();
}
}










































};
obj24883_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24883_onTap_activeActionGroupIndex = -1;
		$("#obj24883").trigger("obj24883_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24883) {
				console.warn("de-queueing event obj24883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24883_onTap_activeActionGroupIndex = 1;
	











































};
obj24890_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24890_onTap_activeActionGroupIndex = -1;
		$("#obj24890").trigger("obj24890_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24890) {
				console.warn("de-queueing event obj24890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24890_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24892();
function goToPage_24892() {
	window.obj24890_onTap_runningActionsCount = obj24890_onTap_runningActionsCount + 1;

	$("#anchor957")[0].click();
	window.obj24890_onTap_runningActionsCount = window.obj24890_onTap_runningActionsCount - 1;

if (window.obj24890_onTap_runningActionsCount < 0) {
	window.obj24890_onTap_runningActionsCount = 0;
} else if (window.obj24890_onTap_runningActionsCount == 0) {
	obj24890_onTap_actionGroup1();
}
}










































};
obj24890_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24890_onTap_activeActionGroupIndex = -1;
		$("#obj24890").trigger("obj24890_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24890) {
				console.warn("de-queueing event obj24890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24890_onTap_activeActionGroupIndex = 1;
	











































};
obj24893_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24893").trigger("obj24893_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24893) {
				console.warn("de-queueing event obj24893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_24895();
function wait_24895() {
	window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = obj24893_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj24893_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj24893_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24893").trigger("obj24893_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24893) {
				console.warn("de-queueing event obj24893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_24896();
function goToPage_24896() {
	window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = obj24893_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor958")[0].click();
	window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj24893_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj24893_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj24893_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24893").trigger("obj24893_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24893) {
				console.warn("de-queueing event obj24893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj24883: Event Touch Down
 *
 */

$("#obj24883").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24883_onTap is still running");
	return;
}
var obj24883_onTap_runningActionsCount = 0;
var obj24883_onTap_loopCount = 0;
obj24883_onTap_actionGroup0();
});
























































/*
 *
 *   obj24890: Event Touch Down
 *
 */

$("#obj24890").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24890_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24890_onTap is still running");
	return;
}
var obj24890_onTap_runningActionsCount = 0;
var obj24890_onTap_loopCount = 0;
obj24890_onTap_actionGroup0();
});



























/*
 *
 *   obj24893: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj24893").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj24893_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24893_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj24893_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj24893_SCEventCounterReachedTargetValue_loopCount = 0;
obj24893_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj24879").trigger('SCEventShow');
$("#obj24881").trigger('SCEventShow');
$("#obj24883").trigger('SCEventShow');
$("#obj24886").trigger('SCEventShow');
$("#obj24888").trigger('SCEventShow');
$("#obj24890").trigger('SCEventShow');
$("#obj24897").trigger('SCEventShow');
$("#obj24899").trigger('SCEventShow');
$("#obj24901").trigger('SCEventShow');
	

});