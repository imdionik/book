pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 9234;
pubcoder.page.title = pubcoder.page.title || "27";
pubcoder.page.number = pubcoder.page.number || 27;
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
var obj9239_onTap_activeActionGroupIndex = -1;
var obj9239_onTap_runningActionsCount = 0;
var obj9239_onTap_loopCount = 0;
var obj9246_onTap_activeActionGroupIndex = -1;
var obj9246_onTap_runningActionsCount = 0;
var obj9246_onTap_loopCount = 0;

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
		
obj9239_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9239_onTap_activeActionGroupIndex = -1;
		$("#obj9239").trigger("obj9239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9239) {
				console.warn("de-queueing event obj9239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9239_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9241();
function goToPage_9241() {
	window.obj9239_onTap_runningActionsCount = obj9239_onTap_runningActionsCount + 1;

	$("#anchor406")[0].click();
	window.obj9239_onTap_runningActionsCount = window.obj9239_onTap_runningActionsCount - 1;

if (window.obj9239_onTap_runningActionsCount < 0) {
	window.obj9239_onTap_runningActionsCount = 0;
} else if (window.obj9239_onTap_runningActionsCount == 0) {
	obj9239_onTap_actionGroup1();
}
}










































};
obj9239_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9239_onTap_activeActionGroupIndex = -1;
		$("#obj9239").trigger("obj9239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9239) {
				console.warn("de-queueing event obj9239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9239_onTap_activeActionGroupIndex = 1;
	











































};
obj9246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9246_onTap_activeActionGroupIndex = -1;
		$("#obj9246").trigger("obj9246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9246) {
				console.warn("de-queueing event obj9246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9246_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9248();
function goToPage_9248() {
	window.obj9246_onTap_runningActionsCount = obj9246_onTap_runningActionsCount + 1;

	$("#anchor407")[0].click();
	window.obj9246_onTap_runningActionsCount = window.obj9246_onTap_runningActionsCount - 1;

if (window.obj9246_onTap_runningActionsCount < 0) {
	window.obj9246_onTap_runningActionsCount = 0;
} else if (window.obj9246_onTap_runningActionsCount == 0) {
	obj9246_onTap_actionGroup1();
}
}










































};
obj9246_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9246_onTap_activeActionGroupIndex = -1;
		$("#obj9246").trigger("obj9246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9246) {
				console.warn("de-queueing event obj9246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9246_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj9239: Event Touch Down
 *
 */

$("#obj9239").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9239_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9239_onTap is still running");
	return;
}
var obj9239_onTap_runningActionsCount = 0;
var obj9239_onTap_loopCount = 0;
obj9239_onTap_actionGroup0();
});
























































/*
 *
 *   obj9246: Event Touch Down
 *
 */

$("#obj9246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9246_onTap is still running");
	return;
}
var obj9246_onTap_runningActionsCount = 0;
var obj9246_onTap_loopCount = 0;
obj9246_onTap_actionGroup0();
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
	
$("#obj9235").trigger('SCEventShow');
$("#obj9237").trigger('SCEventShow');
$("#obj9239").trigger('SCEventShow');
$("#obj9242").trigger('SCEventShow');
$("#obj9244").trigger('SCEventShow');
$("#obj9246").trigger('SCEventShow');
$("#obj9249").trigger('SCEventShow');
	

});