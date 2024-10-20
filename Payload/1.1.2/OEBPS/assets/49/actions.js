pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 17537;
pubcoder.page.title = pubcoder.page.title || "49";
pubcoder.page.number = pubcoder.page.number || 49;
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
var obj17542_onTap_activeActionGroupIndex = -1;
var obj17542_onTap_runningActionsCount = 0;
var obj17542_onTap_loopCount = 0;
var obj17545_onTap_activeActionGroupIndex = -1;
var obj17545_onTap_runningActionsCount = 0;
var obj17545_onTap_loopCount = 0;
var obj17552_onTap_activeActionGroupIndex = -1;
var obj17552_onTap_runningActionsCount = 0;
var obj17552_onTap_loopCount = 0;

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
		
obj17542_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17542_onTap_activeActionGroupIndex = -1;
		$("#obj17542").trigger("obj17542_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17542) {
				console.warn("de-queueing event obj17542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17542_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17544();
function goToPage_17544() {
	window.obj17542_onTap_runningActionsCount = obj17542_onTap_runningActionsCount + 1;

	$("#anchor705")[0].click();
	window.obj17542_onTap_runningActionsCount = window.obj17542_onTap_runningActionsCount - 1;

if (window.obj17542_onTap_runningActionsCount < 0) {
	window.obj17542_onTap_runningActionsCount = 0;
} else if (window.obj17542_onTap_runningActionsCount == 0) {
	obj17542_onTap_actionGroup1();
}
}










































};
obj17542_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17542_onTap_activeActionGroupIndex = -1;
		$("#obj17542").trigger("obj17542_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17542) {
				console.warn("de-queueing event obj17542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17542_onTap_activeActionGroupIndex = 1;
	











































};
obj17545_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17545_onTap_activeActionGroupIndex = -1;
		$("#obj17545").trigger("obj17545_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17545) {
				console.warn("de-queueing event obj17545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17545_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17547();
function goToPage_17547() {
	window.obj17545_onTap_runningActionsCount = obj17545_onTap_runningActionsCount + 1;

	$("#anchor706")[0].click();
	window.obj17545_onTap_runningActionsCount = window.obj17545_onTap_runningActionsCount - 1;

if (window.obj17545_onTap_runningActionsCount < 0) {
	window.obj17545_onTap_runningActionsCount = 0;
} else if (window.obj17545_onTap_runningActionsCount == 0) {
	obj17545_onTap_actionGroup1();
}
}










































};
obj17545_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17545_onTap_activeActionGroupIndex = -1;
		$("#obj17545").trigger("obj17545_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17545) {
				console.warn("de-queueing event obj17545." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17545").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17545_onTap_activeActionGroupIndex = 1;
	











































};
obj17552_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17552_onTap_activeActionGroupIndex = -1;
		$("#obj17552").trigger("obj17552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17552) {
				console.warn("de-queueing event obj17552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17552_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17554();
function goToPage_17554() {
	window.obj17552_onTap_runningActionsCount = obj17552_onTap_runningActionsCount + 1;

	$("#anchor707")[0].click();
	window.obj17552_onTap_runningActionsCount = window.obj17552_onTap_runningActionsCount - 1;

if (window.obj17552_onTap_runningActionsCount < 0) {
	window.obj17552_onTap_runningActionsCount = 0;
} else if (window.obj17552_onTap_runningActionsCount == 0) {
	obj17552_onTap_actionGroup1();
}
}










































};
obj17552_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17552_onTap_activeActionGroupIndex = -1;
		$("#obj17552").trigger("obj17552_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17552) {
				console.warn("de-queueing event obj17552." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17552").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17552_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj17542: Event Touch Down
 *
 */

$("#obj17542").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17542_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17542_onTap is still running");
	return;
}
var obj17542_onTap_runningActionsCount = 0;
var obj17542_onTap_loopCount = 0;
obj17542_onTap_actionGroup0();
});


















/*
 *
 *   obj17545: Event Touch Down
 *
 */

$("#obj17545").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17545_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17545_onTap is still running");
	return;
}
var obj17545_onTap_runningActionsCount = 0;
var obj17545_onTap_loopCount = 0;
obj17545_onTap_actionGroup0();
});
























































/*
 *
 *   obj17552: Event Touch Down
 *
 */

$("#obj17552").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17552_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17552_onTap is still running");
	return;
}
var obj17552_onTap_runningActionsCount = 0;
var obj17552_onTap_loopCount = 0;
obj17552_onTap_actionGroup0();
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
	
$("#obj17557").trigger('SCEventShow');
$("#obj17538").trigger('SCEventShow');
$("#obj17540").trigger('SCEventShow');
$("#obj17542").trigger('SCEventShow');
$("#obj17545").trigger('SCEventShow');
$("#obj17548").trigger('SCEventShow');
$("#obj17550").trigger('SCEventShow');
$("#obj17552").trigger('SCEventShow');
$("#obj17555").trigger('SCEventShow');
$("#obj17559").trigger('SCEventShow');
$("#obj17561").trigger('SCEventShow');
$("#obj17563").trigger('SCEventShow');
$("#obj17565").trigger('SCEventShow');
$("#obj17567").trigger('SCEventShow');
$("#obj17569").trigger('SCEventShow');
$("#obj17571").trigger('SCEventShow');
$("#obj17573").trigger('SCEventShow');
	

});