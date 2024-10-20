pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 17578;
pubcoder.page.title = pubcoder.page.title || "48";
pubcoder.page.number = pubcoder.page.number || 48;
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
var obj17583_onTap_activeActionGroupIndex = -1;
var obj17583_onTap_runningActionsCount = 0;
var obj17583_onTap_loopCount = 0;
var obj17586_onTap_activeActionGroupIndex = -1;
var obj17586_onTap_runningActionsCount = 0;
var obj17586_onTap_loopCount = 0;
var obj17593_onTap_activeActionGroupIndex = -1;
var obj17593_onTap_runningActionsCount = 0;
var obj17593_onTap_loopCount = 0;

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
		
obj17583_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17583_onTap_activeActionGroupIndex = -1;
		$("#obj17583").trigger("obj17583_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17583) {
				console.warn("de-queueing event obj17583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17583_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17585();
function goToPage_17585() {
	window.obj17583_onTap_runningActionsCount = obj17583_onTap_runningActionsCount + 1;

	$("#anchor702")[0].click();
	window.obj17583_onTap_runningActionsCount = window.obj17583_onTap_runningActionsCount - 1;

if (window.obj17583_onTap_runningActionsCount < 0) {
	window.obj17583_onTap_runningActionsCount = 0;
} else if (window.obj17583_onTap_runningActionsCount == 0) {
	obj17583_onTap_actionGroup1();
}
}










































};
obj17583_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17583_onTap_activeActionGroupIndex = -1;
		$("#obj17583").trigger("obj17583_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17583) {
				console.warn("de-queueing event obj17583." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17583").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17583_onTap_activeActionGroupIndex = 1;
	











































};
obj17586_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17586_onTap_activeActionGroupIndex = -1;
		$("#obj17586").trigger("obj17586_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17586) {
				console.warn("de-queueing event obj17586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17586_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17588();
function goToPage_17588() {
	window.obj17586_onTap_runningActionsCount = obj17586_onTap_runningActionsCount + 1;

	$("#anchor703")[0].click();
	window.obj17586_onTap_runningActionsCount = window.obj17586_onTap_runningActionsCount - 1;

if (window.obj17586_onTap_runningActionsCount < 0) {
	window.obj17586_onTap_runningActionsCount = 0;
} else if (window.obj17586_onTap_runningActionsCount == 0) {
	obj17586_onTap_actionGroup1();
}
}










































};
obj17586_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17586_onTap_activeActionGroupIndex = -1;
		$("#obj17586").trigger("obj17586_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17586) {
				console.warn("de-queueing event obj17586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17586_onTap_activeActionGroupIndex = 1;
	











































};
obj17593_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17593_onTap_activeActionGroupIndex = -1;
		$("#obj17593").trigger("obj17593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17593) {
				console.warn("de-queueing event obj17593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17593_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17595();
function goToPage_17595() {
	window.obj17593_onTap_runningActionsCount = obj17593_onTap_runningActionsCount + 1;

	$("#anchor704")[0].click();
	window.obj17593_onTap_runningActionsCount = window.obj17593_onTap_runningActionsCount - 1;

if (window.obj17593_onTap_runningActionsCount < 0) {
	window.obj17593_onTap_runningActionsCount = 0;
} else if (window.obj17593_onTap_runningActionsCount == 0) {
	obj17593_onTap_actionGroup1();
}
}










































};
obj17593_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17593_onTap_activeActionGroupIndex = -1;
		$("#obj17593").trigger("obj17593_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17593) {
				console.warn("de-queueing event obj17593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17593_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj17583: Event Touch Down
 *
 */

$("#obj17583").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17583_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17583_onTap is still running");
	return;
}
var obj17583_onTap_runningActionsCount = 0;
var obj17583_onTap_loopCount = 0;
obj17583_onTap_actionGroup0();
});


















/*
 *
 *   obj17586: Event Touch Down
 *
 */

$("#obj17586").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17586_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17586_onTap is still running");
	return;
}
var obj17586_onTap_runningActionsCount = 0;
var obj17586_onTap_loopCount = 0;
obj17586_onTap_actionGroup0();
});
























































/*
 *
 *   obj17593: Event Touch Down
 *
 */

$("#obj17593").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17593_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17593_onTap is still running");
	return;
}
var obj17593_onTap_runningActionsCount = 0;
var obj17593_onTap_loopCount = 0;
obj17593_onTap_actionGroup0();
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
	
$("#obj22228").trigger('SCEventShow');
$("#obj17581").trigger('SCEventShow');
$("#obj17583").trigger('SCEventShow');
$("#obj17586").trigger('SCEventShow');
$("#obj17589").trigger('SCEventShow');
$("#obj17591").trigger('SCEventShow');
$("#obj17593").trigger('SCEventShow');
$("#obj22220").trigger('SCEventShow');
$("#obj22299").trigger('SCEventShow');
$("#obj17598").trigger('SCEventShow');
$("#obj17600").trigger('SCEventShow');
$("#obj17602").trigger('SCEventShow');
$("#obj17604").trigger('SCEventShow');
$("#obj17606").trigger('SCEventShow');
$("#obj17610").trigger('SCEventShow');
$("#obj22226").trigger('SCEventShow');
$("#obj22224").trigger('SCEventShow');
$("#obj22222").trigger('SCEventShow');
$("#obj22218").trigger('SCEventShow');
$("#obj22216").trigger('SCEventShow');
$("#obj22214").trigger('SCEventShow');
$("#obj22235").trigger('SCEventShow');
	

});