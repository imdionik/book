pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 16279;
pubcoder.page.title = pubcoder.page.title || "45";
pubcoder.page.number = pubcoder.page.number || 45;
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
var obj16284_onTap_activeActionGroupIndex = -1;
var obj16284_onTap_runningActionsCount = 0;
var obj16284_onTap_loopCount = 0;
var obj16291_onTap_activeActionGroupIndex = -1;
var obj16291_onTap_runningActionsCount = 0;
var obj16291_onTap_loopCount = 0;

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
		
obj16284_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16284_onTap_activeActionGroupIndex = -1;
		$("#obj16284").trigger("obj16284_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16284) {
				console.warn("de-queueing event obj16284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16284_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16286();
function goToPage_16286() {
	window.obj16284_onTap_runningActionsCount = obj16284_onTap_runningActionsCount + 1;

	$("#anchor693")[0].click();
	window.obj16284_onTap_runningActionsCount = window.obj16284_onTap_runningActionsCount - 1;

if (window.obj16284_onTap_runningActionsCount < 0) {
	window.obj16284_onTap_runningActionsCount = 0;
} else if (window.obj16284_onTap_runningActionsCount == 0) {
	obj16284_onTap_actionGroup1();
}
}










































};
obj16284_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16284_onTap_activeActionGroupIndex = -1;
		$("#obj16284").trigger("obj16284_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16284) {
				console.warn("de-queueing event obj16284." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16284").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16284_onTap_activeActionGroupIndex = 1;
	











































};
obj16291_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16291_onTap_activeActionGroupIndex = -1;
		$("#obj16291").trigger("obj16291_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16291) {
				console.warn("de-queueing event obj16291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16291_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_16293();
function goToPage_16293() {
	window.obj16291_onTap_runningActionsCount = obj16291_onTap_runningActionsCount + 1;

	$("#anchor694")[0].click();
	window.obj16291_onTap_runningActionsCount = window.obj16291_onTap_runningActionsCount - 1;

if (window.obj16291_onTap_runningActionsCount < 0) {
	window.obj16291_onTap_runningActionsCount = 0;
} else if (window.obj16291_onTap_runningActionsCount == 0) {
	obj16291_onTap_actionGroup1();
}
}










































};
obj16291_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16291_onTap_activeActionGroupIndex = -1;
		$("#obj16291").trigger("obj16291_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16291) {
				console.warn("de-queueing event obj16291." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16291").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16291_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj16284: Event Touch Down
 *
 */

$("#obj16284").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16284_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16284_onTap is still running");
	return;
}
var obj16284_onTap_runningActionsCount = 0;
var obj16284_onTap_loopCount = 0;
obj16284_onTap_actionGroup0();
});
























































/*
 *
 *   obj16291: Event Touch Down
 *
 */

$("#obj16291").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16291_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16291_onTap is still running");
	return;
}
var obj16291_onTap_runningActionsCount = 0;
var obj16291_onTap_loopCount = 0;
obj16291_onTap_actionGroup0();
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
	
$("#obj16280").trigger('SCEventShow');
$("#obj16282").trigger('SCEventShow');
$("#obj16284").trigger('SCEventShow');
$("#obj16287").trigger('SCEventShow');
$("#obj16289").trigger('SCEventShow');
$("#obj16291").trigger('SCEventShow');
$("#obj16294").trigger('SCEventShow');
	

});