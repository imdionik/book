pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 17476;
pubcoder.page.title = pubcoder.page.title || "47";
pubcoder.page.number = pubcoder.page.number || 47;
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
var obj17485_onTap_activeActionGroupIndex = -1;
var obj17485_onTap_runningActionsCount = 0;
var obj17485_onTap_loopCount = 0;
var obj17488_onTap_activeActionGroupIndex = -1;
var obj17488_onTap_runningActionsCount = 0;
var obj17488_onTap_loopCount = 0;
var obj17495_onTap_activeActionGroupIndex = -1;
var obj17495_onTap_runningActionsCount = 0;
var obj17495_onTap_loopCount = 0;
var obj17498_onTap_activeActionGroupIndex = -1;
var obj17498_onTap_runningActionsCount = 0;
var obj17498_onTap_loopCount = 0;

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
		
obj17485_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17485_onTap_activeActionGroupIndex = -1;
		$("#obj17485").trigger("obj17485_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17485) {
				console.warn("de-queueing event obj17485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17485_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17487();
function goToPage_17487() {
	window.obj17485_onTap_runningActionsCount = obj17485_onTap_runningActionsCount + 1;

	$("#anchor698")[0].click();
	window.obj17485_onTap_runningActionsCount = window.obj17485_onTap_runningActionsCount - 1;

if (window.obj17485_onTap_runningActionsCount < 0) {
	window.obj17485_onTap_runningActionsCount = 0;
} else if (window.obj17485_onTap_runningActionsCount == 0) {
	obj17485_onTap_actionGroup1();
}
}










































};
obj17485_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17485_onTap_activeActionGroupIndex = -1;
		$("#obj17485").trigger("obj17485_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17485) {
				console.warn("de-queueing event obj17485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17485_onTap_activeActionGroupIndex = 1;
	











































};
obj17488_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17488_onTap_activeActionGroupIndex = -1;
		$("#obj17488").trigger("obj17488_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17488) {
				console.warn("de-queueing event obj17488." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17488").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17488_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17490();
function goToPage_17490() {
	window.obj17488_onTap_runningActionsCount = obj17488_onTap_runningActionsCount + 1;

	$("#anchor699")[0].click();
	window.obj17488_onTap_runningActionsCount = window.obj17488_onTap_runningActionsCount - 1;

if (window.obj17488_onTap_runningActionsCount < 0) {
	window.obj17488_onTap_runningActionsCount = 0;
} else if (window.obj17488_onTap_runningActionsCount == 0) {
	obj17488_onTap_actionGroup1();
}
}










































};
obj17488_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17488_onTap_activeActionGroupIndex = -1;
		$("#obj17488").trigger("obj17488_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17488) {
				console.warn("de-queueing event obj17488." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17488").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17488_onTap_activeActionGroupIndex = 1;
	











































};
obj17495_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17495_onTap_activeActionGroupIndex = -1;
		$("#obj17495").trigger("obj17495_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17495) {
				console.warn("de-queueing event obj17495." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17495").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17495_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17497();
function goToPage_17497() {
	window.obj17495_onTap_runningActionsCount = obj17495_onTap_runningActionsCount + 1;

	$("#anchor700")[0].click();
	window.obj17495_onTap_runningActionsCount = window.obj17495_onTap_runningActionsCount - 1;

if (window.obj17495_onTap_runningActionsCount < 0) {
	window.obj17495_onTap_runningActionsCount = 0;
} else if (window.obj17495_onTap_runningActionsCount == 0) {
	obj17495_onTap_actionGroup1();
}
}










































};
obj17495_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17495_onTap_activeActionGroupIndex = -1;
		$("#obj17495").trigger("obj17495_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17495) {
				console.warn("de-queueing event obj17495." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17495").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17495_onTap_activeActionGroupIndex = 1;
	











































};
obj17498_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj17498_onTap_activeActionGroupIndex = -1;
		$("#obj17498").trigger("obj17498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17498) {
				console.warn("de-queueing event obj17498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17498_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_17500();
function goToPage_17500() {
	window.obj17498_onTap_runningActionsCount = obj17498_onTap_runningActionsCount + 1;

	$("#anchor701")[0].click();
	window.obj17498_onTap_runningActionsCount = window.obj17498_onTap_runningActionsCount - 1;

if (window.obj17498_onTap_runningActionsCount < 0) {
	window.obj17498_onTap_runningActionsCount = 0;
} else if (window.obj17498_onTap_runningActionsCount == 0) {
	obj17498_onTap_actionGroup1();
}
}










































};
obj17498_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj17498_onTap_activeActionGroupIndex = -1;
		$("#obj17498").trigger("obj17498_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 17498) {
				console.warn("de-queueing event obj17498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj17498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj17498_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj17485: Event Touch Down
 *
 */

$("#obj17485").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17485_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17485_onTap is still running");
	return;
}
var obj17485_onTap_runningActionsCount = 0;
var obj17485_onTap_loopCount = 0;
obj17485_onTap_actionGroup0();
});


















/*
 *
 *   obj17488: Event Touch Down
 *
 */

$("#obj17488").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17488_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17488_onTap is still running");
	return;
}
var obj17488_onTap_runningActionsCount = 0;
var obj17488_onTap_loopCount = 0;
obj17488_onTap_actionGroup0();
});
























































/*
 *
 *   obj17495: Event Touch Down
 *
 */

$("#obj17495").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17495_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17495_onTap is still running");
	return;
}
var obj17495_onTap_runningActionsCount = 0;
var obj17495_onTap_loopCount = 0;
obj17495_onTap_actionGroup0();
});


















/*
 *
 *   obj17498: Event Touch Down
 *
 */

$("#obj17498").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj17498_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj17498_onTap is still running");
	return;
}
var obj17498_onTap_runningActionsCount = 0;
var obj17498_onTap_loopCount = 0;
obj17498_onTap_actionGroup0();
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
	
$("#obj17477").trigger('SCEventShow');
$("#obj17479").trigger('SCEventShow');
$("#obj17481").trigger('SCEventShow');
$("#obj17483").trigger('SCEventShow');
$("#obj17485").trigger('SCEventShow');
$("#obj17488").trigger('SCEventShow');
$("#obj17491").trigger('SCEventShow');
$("#obj17493").trigger('SCEventShow');
$("#obj17495").trigger('SCEventShow');
$("#obj17498").trigger('SCEventShow');
$("#obj17501").trigger('SCEventShow');
$("#obj22292").trigger('SCEventShow');
	

});