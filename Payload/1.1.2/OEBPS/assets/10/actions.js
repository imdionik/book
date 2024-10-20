pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 545;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj548_onTap_activeActionGroupIndex = -1;
var obj548_onTap_runningActionsCount = 0;
var obj548_onTap_loopCount = 0;
var obj551_onTap_activeActionGroupIndex = -1;
var obj551_onTap_runningActionsCount = 0;
var obj551_onTap_loopCount = 0;
var obj558_onTap_activeActionGroupIndex = -1;
var obj558_onTap_runningActionsCount = 0;
var obj558_onTap_loopCount = 0;

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
		
obj548_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj548_onTap_activeActionGroupIndex = -1;
		$("#obj548").trigger("obj548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 548) {
				console.warn("de-queueing event obj548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj548_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_550();
function goToPage_550() {
	window.obj548_onTap_runningActionsCount = obj548_onTap_runningActionsCount + 1;

	$("#anchor62")[0].click();
	window.obj548_onTap_runningActionsCount = window.obj548_onTap_runningActionsCount - 1;

if (window.obj548_onTap_runningActionsCount < 0) {
	window.obj548_onTap_runningActionsCount = 0;
} else if (window.obj548_onTap_runningActionsCount == 0) {
	obj548_onTap_actionGroup1();
}
}










































};
obj548_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj548_onTap_activeActionGroupIndex = -1;
		$("#obj548").trigger("obj548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 548) {
				console.warn("de-queueing event obj548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj548_onTap_activeActionGroupIndex = 1;
	











































};
obj551_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj551_onTap_activeActionGroupIndex = -1;
		$("#obj551").trigger("obj551_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 551) {
				console.warn("de-queueing event obj551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj551_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_553();
function goToPage_553() {
	window.obj551_onTap_runningActionsCount = obj551_onTap_runningActionsCount + 1;

	$("#anchor63")[0].click();
	window.obj551_onTap_runningActionsCount = window.obj551_onTap_runningActionsCount - 1;

if (window.obj551_onTap_runningActionsCount < 0) {
	window.obj551_onTap_runningActionsCount = 0;
} else if (window.obj551_onTap_runningActionsCount == 0) {
	obj551_onTap_actionGroup1();
}
}










































};
obj551_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj551_onTap_activeActionGroupIndex = -1;
		$("#obj551").trigger("obj551_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 551) {
				console.warn("de-queueing event obj551." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj551").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj551_onTap_activeActionGroupIndex = 1;
	











































};
obj558_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj558_onTap_activeActionGroupIndex = -1;
		$("#obj558").trigger("obj558_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 558) {
				console.warn("de-queueing event obj558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj558_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_560();
function goToPage_560() {
	window.obj558_onTap_runningActionsCount = obj558_onTap_runningActionsCount + 1;

	$("#anchor64")[0].click();
	window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;

if (window.obj558_onTap_runningActionsCount < 0) {
	window.obj558_onTap_runningActionsCount = 0;
} else if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
}










































};
obj558_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj558_onTap_activeActionGroupIndex = -1;
		$("#obj558").trigger("obj558_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 558) {
				console.warn("de-queueing event obj558." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj558").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj558_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj548: Event Touch Down
 *
 */

$("#obj548").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj548_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj548_onTap is still running");
	return;
}
var obj548_onTap_runningActionsCount = 0;
var obj548_onTap_loopCount = 0;
obj548_onTap_actionGroup0();
});


















/*
 *
 *   obj551: Event Touch Down
 *
 */

$("#obj551").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj551_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj551_onTap is still running");
	return;
}
var obj551_onTap_runningActionsCount = 0;
var obj551_onTap_loopCount = 0;
obj551_onTap_actionGroup0();
});
























































/*
 *
 *   obj558: Event Touch Down
 *
 */

$("#obj558").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj558_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj558_onTap is still running");
	return;
}
var obj558_onTap_runningActionsCount = 0;
var obj558_onTap_loopCount = 0;
obj558_onTap_actionGroup0();
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
	
$("#obj594").trigger('SCEventShow');
$("#obj546").trigger('SCEventShow');
$("#obj548").trigger('SCEventShow');
$("#obj551").trigger('SCEventShow');
$("#obj554").trigger('SCEventShow');
$("#obj556").trigger('SCEventShow');
$("#obj558").trigger('SCEventShow');
$("#obj585").trigger('SCEventShow');
$("#obj588").trigger('SCEventShow');
$("#obj596").trigger('SCEventShow');
	

});