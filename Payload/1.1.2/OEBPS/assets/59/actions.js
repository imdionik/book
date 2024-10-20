pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22558;
pubcoder.page.title = pubcoder.page.title || "59";
pubcoder.page.number = pubcoder.page.number || 59;
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
var obj22565_onTap_activeActionGroupIndex = -1;
var obj22565_onTap_runningActionsCount = 0;
var obj22565_onTap_loopCount = 0;
var obj22568_onTap_activeActionGroupIndex = -1;
var obj22568_onTap_runningActionsCount = 0;
var obj22568_onTap_loopCount = 0;
var obj22571_onTap_activeActionGroupIndex = -1;
var obj22571_onTap_runningActionsCount = 0;
var obj22571_onTap_loopCount = 0;
var obj22574_onTap_activeActionGroupIndex = -1;
var obj22574_onTap_runningActionsCount = 0;
var obj22574_onTap_loopCount = 0;

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
		
obj22565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22565_onTap_activeActionGroupIndex = -1;
		$("#obj22565").trigger("obj22565_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22565) {
				console.warn("de-queueing event obj22565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22565_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22567();
function goToPage_22567() {
	window.obj22565_onTap_runningActionsCount = obj22565_onTap_runningActionsCount + 1;

	$("#anchor895")[0].click();
	window.obj22565_onTap_runningActionsCount = window.obj22565_onTap_runningActionsCount - 1;

if (window.obj22565_onTap_runningActionsCount < 0) {
	window.obj22565_onTap_runningActionsCount = 0;
} else if (window.obj22565_onTap_runningActionsCount == 0) {
	obj22565_onTap_actionGroup1();
}
}










































};
obj22565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22565_onTap_activeActionGroupIndex = -1;
		$("#obj22565").trigger("obj22565_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22565) {
				console.warn("de-queueing event obj22565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22565_onTap_activeActionGroupIndex = 1;
	











































};
obj22568_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22568_onTap_activeActionGroupIndex = -1;
		$("#obj22568").trigger("obj22568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22568) {
				console.warn("de-queueing event obj22568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22568_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22570();
function goToPage_22570() {
	window.obj22568_onTap_runningActionsCount = obj22568_onTap_runningActionsCount + 1;

	$("#anchor896")[0].click();
	window.obj22568_onTap_runningActionsCount = window.obj22568_onTap_runningActionsCount - 1;

if (window.obj22568_onTap_runningActionsCount < 0) {
	window.obj22568_onTap_runningActionsCount = 0;
} else if (window.obj22568_onTap_runningActionsCount == 0) {
	obj22568_onTap_actionGroup1();
}
}










































};
obj22568_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22568_onTap_activeActionGroupIndex = -1;
		$("#obj22568").trigger("obj22568_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22568) {
				console.warn("de-queueing event obj22568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22568_onTap_activeActionGroupIndex = 1;
	











































};
obj22571_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22571_onTap_activeActionGroupIndex = -1;
		$("#obj22571").trigger("obj22571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22571) {
				console.warn("de-queueing event obj22571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22571_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22573();
function goToPage_22573() {
	window.obj22571_onTap_runningActionsCount = obj22571_onTap_runningActionsCount + 1;

	$("#anchor897")[0].click();
	window.obj22571_onTap_runningActionsCount = window.obj22571_onTap_runningActionsCount - 1;

if (window.obj22571_onTap_runningActionsCount < 0) {
	window.obj22571_onTap_runningActionsCount = 0;
} else if (window.obj22571_onTap_runningActionsCount == 0) {
	obj22571_onTap_actionGroup1();
}
}










































};
obj22571_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22571_onTap_activeActionGroupIndex = -1;
		$("#obj22571").trigger("obj22571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22571) {
				console.warn("de-queueing event obj22571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22571_onTap_activeActionGroupIndex = 1;
	











































};
obj22574_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22574_onTap_activeActionGroupIndex = -1;
		$("#obj22574").trigger("obj22574_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22574) {
				console.warn("de-queueing event obj22574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22574_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22576();
function goToPage_22576() {
	window.obj22574_onTap_runningActionsCount = obj22574_onTap_runningActionsCount + 1;

	$("#anchor898")[0].click();
	window.obj22574_onTap_runningActionsCount = window.obj22574_onTap_runningActionsCount - 1;

if (window.obj22574_onTap_runningActionsCount < 0) {
	window.obj22574_onTap_runningActionsCount = 0;
} else if (window.obj22574_onTap_runningActionsCount == 0) {
	obj22574_onTap_actionGroup1();
}
}










































};
obj22574_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22574_onTap_activeActionGroupIndex = -1;
		$("#obj22574").trigger("obj22574_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22574) {
				console.warn("de-queueing event obj22574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22574_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj22565: Event Touch Down
 *
 */

$("#obj22565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22565_onTap is still running");
	return;
}
var obj22565_onTap_runningActionsCount = 0;
var obj22565_onTap_loopCount = 0;
obj22565_onTap_actionGroup0();
});


















/*
 *
 *   obj22568: Event Touch Down
 *
 */

$("#obj22568").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22568_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22568_onTap is still running");
	return;
}
var obj22568_onTap_runningActionsCount = 0;
var obj22568_onTap_loopCount = 0;
obj22568_onTap_actionGroup0();
});


















/*
 *
 *   obj22571: Event Touch Down
 *
 */

$("#obj22571").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22571_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22571_onTap is still running");
	return;
}
var obj22571_onTap_runningActionsCount = 0;
var obj22571_onTap_loopCount = 0;
obj22571_onTap_actionGroup0();
});


















/*
 *
 *   obj22574: Event Touch Down
 *
 */

$("#obj22574").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22574_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22574_onTap is still running");
	return;
}
var obj22574_onTap_runningActionsCount = 0;
var obj22574_onTap_loopCount = 0;
obj22574_onTap_actionGroup0();
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
	
$("#obj22561").trigger('SCEventShow');
$("#obj22563").trigger('SCEventShow');
$("#obj22565").trigger('SCEventShow');
$("#obj22568").trigger('SCEventShow');
$("#obj22571").trigger('SCEventShow');
$("#obj22574").trigger('SCEventShow');
$("#obj22601").trigger('SCEventShow');
$("#obj22605").trigger('SCEventShow');
$("#obj22607").trigger('SCEventShow');
$("#obj22609").trigger('SCEventShow');
$("#obj22615").trigger('SCEventShow');
$("#obj22613").trigger('SCEventShow');
$("#obj22611").trigger('SCEventShow');
$("#obj22621").trigger('SCEventShow');
$("#obj22619").trigger('SCEventShow');
$("#obj22617").trigger('SCEventShow');
$("#obj22627").trigger('SCEventShow');
$("#obj22625").trigger('SCEventShow');
$("#obj22623").trigger('SCEventShow');
	

});