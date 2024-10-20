pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22367;
pubcoder.page.title = pubcoder.page.title || "56";
pubcoder.page.number = pubcoder.page.number || 56;
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
var obj22374_onTap_activeActionGroupIndex = -1;
var obj22374_onTap_runningActionsCount = 0;
var obj22374_onTap_loopCount = 0;
var obj22377_onTap_activeActionGroupIndex = -1;
var obj22377_onTap_runningActionsCount = 0;
var obj22377_onTap_loopCount = 0;
var obj22384_onTap_activeActionGroupIndex = -1;
var obj22384_onTap_runningActionsCount = 0;
var obj22384_onTap_loopCount = 0;

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
		
obj22374_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22374_onTap_activeActionGroupIndex = -1;
		$("#obj22374").trigger("obj22374_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22374) {
				console.warn("de-queueing event obj22374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22374_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22376();
function goToPage_22376() {
	window.obj22374_onTap_runningActionsCount = obj22374_onTap_runningActionsCount + 1;

	$("#anchor884")[0].click();
	window.obj22374_onTap_runningActionsCount = window.obj22374_onTap_runningActionsCount - 1;

if (window.obj22374_onTap_runningActionsCount < 0) {
	window.obj22374_onTap_runningActionsCount = 0;
} else if (window.obj22374_onTap_runningActionsCount == 0) {
	obj22374_onTap_actionGroup1();
}
}










































};
obj22374_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22374_onTap_activeActionGroupIndex = -1;
		$("#obj22374").trigger("obj22374_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22374) {
				console.warn("de-queueing event obj22374." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22374").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22374_onTap_activeActionGroupIndex = 1;
	











































};
obj22377_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22377_onTap_activeActionGroupIndex = -1;
		$("#obj22377").trigger("obj22377_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22377) {
				console.warn("de-queueing event obj22377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22377_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22379();
function goToPage_22379() {
	window.obj22377_onTap_runningActionsCount = obj22377_onTap_runningActionsCount + 1;

	$("#anchor885")[0].click();
	window.obj22377_onTap_runningActionsCount = window.obj22377_onTap_runningActionsCount - 1;

if (window.obj22377_onTap_runningActionsCount < 0) {
	window.obj22377_onTap_runningActionsCount = 0;
} else if (window.obj22377_onTap_runningActionsCount == 0) {
	obj22377_onTap_actionGroup1();
}
}










































};
obj22377_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22377_onTap_activeActionGroupIndex = -1;
		$("#obj22377").trigger("obj22377_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22377) {
				console.warn("de-queueing event obj22377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22377_onTap_activeActionGroupIndex = 1;
	











































};
obj22384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22384_onTap_activeActionGroupIndex = -1;
		$("#obj22384").trigger("obj22384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22384) {
				console.warn("de-queueing event obj22384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22384_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22386();
function goToPage_22386() {
	window.obj22384_onTap_runningActionsCount = obj22384_onTap_runningActionsCount + 1;

	$("#anchor886")[0].click();
	window.obj22384_onTap_runningActionsCount = window.obj22384_onTap_runningActionsCount - 1;

if (window.obj22384_onTap_runningActionsCount < 0) {
	window.obj22384_onTap_runningActionsCount = 0;
} else if (window.obj22384_onTap_runningActionsCount == 0) {
	obj22384_onTap_actionGroup1();
}
}










































};
obj22384_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22384_onTap_activeActionGroupIndex = -1;
		$("#obj22384").trigger("obj22384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22384) {
				console.warn("de-queueing event obj22384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22384_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj22374: Event Touch Down
 *
 */

$("#obj22374").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22374_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22374_onTap is still running");
	return;
}
var obj22374_onTap_runningActionsCount = 0;
var obj22374_onTap_loopCount = 0;
obj22374_onTap_actionGroup0();
});


















/*
 *
 *   obj22377: Event Touch Down
 *
 */

$("#obj22377").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22377_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22377_onTap is still running");
	return;
}
var obj22377_onTap_runningActionsCount = 0;
var obj22377_onTap_loopCount = 0;
obj22377_onTap_actionGroup0();
});
























































/*
 *
 *   obj22384: Event Touch Down
 *
 */

$("#obj22384").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22384_onTap is still running");
	return;
}
var obj22384_onTap_runningActionsCount = 0;
var obj22384_onTap_loopCount = 0;
obj22384_onTap_actionGroup0();
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
	
$("#obj22368").trigger('SCEventShow');
$("#obj22370").trigger('SCEventShow');
$("#obj22372").trigger('SCEventShow');
$("#obj22374").trigger('SCEventShow');
$("#obj22377").trigger('SCEventShow');
$("#obj22380").trigger('SCEventShow');
$("#obj22382").trigger('SCEventShow');
$("#obj22384").trigger('SCEventShow');
$("#obj22387").trigger('SCEventShow');
$("#obj22389").trigger('SCEventShow');
	

});