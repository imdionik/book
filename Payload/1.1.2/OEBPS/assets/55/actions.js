pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22100;
pubcoder.page.title = pubcoder.page.title || "55";
pubcoder.page.number = pubcoder.page.number || 55;
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
var obj22107_onTap_activeActionGroupIndex = -1;
var obj22107_onTap_runningActionsCount = 0;
var obj22107_onTap_loopCount = 0;
var obj22117_onTap_activeActionGroupIndex = -1;
var obj22117_onTap_runningActionsCount = 0;
var obj22117_onTap_loopCount = 0;
var obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj22136_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj22136_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj22136_counterValue = 0;
var obj22136_counterTargetValue = 5;
var obj22136_counterCanExceedTargetValue = false;

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
		
obj22107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22107_onTap_activeActionGroupIndex = -1;
		$("#obj22107").trigger("obj22107_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22107) {
				console.warn("de-queueing event obj22107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22107_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22109();
function goToPage_22109() {
	window.obj22107_onTap_runningActionsCount = obj22107_onTap_runningActionsCount + 1;

	$("#anchor881")[0].click();
	window.obj22107_onTap_runningActionsCount = window.obj22107_onTap_runningActionsCount - 1;

if (window.obj22107_onTap_runningActionsCount < 0) {
	window.obj22107_onTap_runningActionsCount = 0;
} else if (window.obj22107_onTap_runningActionsCount == 0) {
	obj22107_onTap_actionGroup1();
}
}










































};
obj22107_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22107_onTap_activeActionGroupIndex = -1;
		$("#obj22107").trigger("obj22107_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22107) {
				console.warn("de-queueing event obj22107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22107_onTap_activeActionGroupIndex = 1;
	











































};
obj22117_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22117_onTap_activeActionGroupIndex = -1;
		$("#obj22117").trigger("obj22117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22117) {
				console.warn("de-queueing event obj22117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22117_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22119();
function goToPage_22119() {
	window.obj22117_onTap_runningActionsCount = obj22117_onTap_runningActionsCount + 1;

	$("#anchor882")[0].click();
	window.obj22117_onTap_runningActionsCount = window.obj22117_onTap_runningActionsCount - 1;

if (window.obj22117_onTap_runningActionsCount < 0) {
	window.obj22117_onTap_runningActionsCount = 0;
} else if (window.obj22117_onTap_runningActionsCount == 0) {
	obj22117_onTap_actionGroup1();
}
}










































};
obj22117_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22117_onTap_activeActionGroupIndex = -1;
		$("#obj22117").trigger("obj22117_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22117) {
				console.warn("de-queueing event obj22117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22117_onTap_activeActionGroupIndex = 1;
	











































};
obj22136_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22136").trigger("obj22136_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22136) {
				console.warn("de-queueing event obj22136." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22136").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_22138();
function wait_22138() {
	window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = obj22136_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj22136_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj22136_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22136").trigger("obj22136_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22136) {
				console.warn("de-queueing event obj22136." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22136").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_22139();
function goToPage_22139() {
	window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = obj22136_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor883")[0].click();
	window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj22136_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj22136_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj22136_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22136").trigger("obj22136_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22136) {
				console.warn("de-queueing event obj22136." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22136").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj22107: Event Touch Down
 *
 */

$("#obj22107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22107_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22107_onTap is still running");
	return;
}
var obj22107_onTap_runningActionsCount = 0;
var obj22107_onTap_loopCount = 0;
obj22107_onTap_actionGroup0();
});
























































/*
 *
 *   obj22117: Event Touch Down
 *
 */

$("#obj22117").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22117_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22117_onTap is still running");
	return;
}
var obj22117_onTap_runningActionsCount = 0;
var obj22117_onTap_loopCount = 0;
obj22117_onTap_actionGroup0();
});



























/*
 *
 *   obj22136: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj22136").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj22136_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22136_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj22136_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj22136_SCEventCounterReachedTargetValue_loopCount = 0;
obj22136_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj22199").trigger('SCEventShow');
$("#obj22196").trigger('SCEventShow');
$("#obj22105").trigger('SCEventShow');
$("#obj22107").trigger('SCEventShow');
$("#obj22113").trigger('SCEventShow');
$("#obj22115").trigger('SCEventShow');
$("#obj22117").trigger('SCEventShow');
$("#obj22203").trigger('SCEventShow');
	

});