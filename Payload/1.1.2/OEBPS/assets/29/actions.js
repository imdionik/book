pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 9606;
pubcoder.page.title = pubcoder.page.title || "29";
pubcoder.page.number = pubcoder.page.number || 29;
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
var obj9613_onTap_activeActionGroupIndex = -1;
var obj9613_onTap_runningActionsCount = 0;
var obj9613_onTap_loopCount = 0;
var obj9616_onTap_activeActionGroupIndex = -1;
var obj9616_onTap_runningActionsCount = 0;
var obj9616_onTap_loopCount = 0;
var obj13230_onTap_activeActionGroupIndex = -1;
var obj13230_onTap_runningActionsCount = 0;
var obj13230_onTap_loopCount = 0;
var obj13227_onTap_activeActionGroupIndex = -1;
var obj13227_onTap_runningActionsCount = 0;
var obj13227_onTap_loopCount = 0;

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
		
obj9613_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9613_onTap_activeActionGroupIndex = -1;
		$("#obj9613").trigger("obj9613_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9613) {
				console.warn("de-queueing event obj9613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9613_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9615();
function goToPage_9615() {
	window.obj9613_onTap_runningActionsCount = obj9613_onTap_runningActionsCount + 1;

	$("#anchor411")[0].click();
	window.obj9613_onTap_runningActionsCount = window.obj9613_onTap_runningActionsCount - 1;

if (window.obj9613_onTap_runningActionsCount < 0) {
	window.obj9613_onTap_runningActionsCount = 0;
} else if (window.obj9613_onTap_runningActionsCount == 0) {
	obj9613_onTap_actionGroup1();
}
}










































};
obj9613_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9613_onTap_activeActionGroupIndex = -1;
		$("#obj9613").trigger("obj9613_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9613) {
				console.warn("de-queueing event obj9613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9613_onTap_activeActionGroupIndex = 1;
	











































};
obj9616_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9616_onTap_activeActionGroupIndex = -1;
		$("#obj9616").trigger("obj9616_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9616) {
				console.warn("de-queueing event obj9616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9616_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9618();
function goToPage_9618() {
	window.obj9616_onTap_runningActionsCount = obj9616_onTap_runningActionsCount + 1;

	$("#anchor412")[0].click();
	window.obj9616_onTap_runningActionsCount = window.obj9616_onTap_runningActionsCount - 1;

if (window.obj9616_onTap_runningActionsCount < 0) {
	window.obj9616_onTap_runningActionsCount = 0;
} else if (window.obj9616_onTap_runningActionsCount == 0) {
	obj9616_onTap_actionGroup1();
}
}










































};
obj9616_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9616_onTap_activeActionGroupIndex = -1;
		$("#obj9616").trigger("obj9616_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9616) {
				console.warn("de-queueing event obj9616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9616_onTap_activeActionGroupIndex = 1;
	











































};
obj13230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13230_onTap_activeActionGroupIndex = -1;
		$("#obj13230").trigger("obj13230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13230) {
				console.warn("de-queueing event obj13230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13230_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13232();
function goToPage_13232() {
	window.obj13230_onTap_runningActionsCount = obj13230_onTap_runningActionsCount + 1;

	$("#anchor413")[0].click();
	window.obj13230_onTap_runningActionsCount = window.obj13230_onTap_runningActionsCount - 1;

if (window.obj13230_onTap_runningActionsCount < 0) {
	window.obj13230_onTap_runningActionsCount = 0;
} else if (window.obj13230_onTap_runningActionsCount == 0) {
	obj13230_onTap_actionGroup1();
}
}










































};
obj13230_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13230_onTap_activeActionGroupIndex = -1;
		$("#obj13230").trigger("obj13230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13230) {
				console.warn("de-queueing event obj13230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13230_onTap_activeActionGroupIndex = 1;
	











































};
obj13227_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13227_onTap_activeActionGroupIndex = -1;
		$("#obj13227").trigger("obj13227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13227) {
				console.warn("de-queueing event obj13227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13227_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13229();
function goToPage_13229() {
	window.obj13227_onTap_runningActionsCount = obj13227_onTap_runningActionsCount + 1;

	$("#anchor414")[0].click();
	window.obj13227_onTap_runningActionsCount = window.obj13227_onTap_runningActionsCount - 1;

if (window.obj13227_onTap_runningActionsCount < 0) {
	window.obj13227_onTap_runningActionsCount = 0;
} else if (window.obj13227_onTap_runningActionsCount == 0) {
	obj13227_onTap_actionGroup1();
}
}










































};
obj13227_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13227_onTap_activeActionGroupIndex = -1;
		$("#obj13227").trigger("obj13227_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13227) {
				console.warn("de-queueing event obj13227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13227_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































/*
 *
 *   obj9613: Event Touch Down
 *
 */

$("#obj9613").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9613_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9613_onTap is still running");
	return;
}
var obj9613_onTap_runningActionsCount = 0;
var obj9613_onTap_loopCount = 0;
obj9613_onTap_actionGroup0();
});


















/*
 *
 *   obj9616: Event Touch Down
 *
 */

$("#obj9616").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9616_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9616_onTap is still running");
	return;
}
var obj9616_onTap_runningActionsCount = 0;
var obj9616_onTap_loopCount = 0;
obj9616_onTap_actionGroup0();
});
























































/*
 *
 *   obj13230: Event Touch Down
 *
 */

$("#obj13230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13230_onTap is still running");
	return;
}
var obj13230_onTap_runningActionsCount = 0;
var obj13230_onTap_loopCount = 0;
obj13230_onTap_actionGroup0();
});


















/*
 *
 *   obj13227: Event Touch Down
 *
 */

$("#obj13227").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13227_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13227_onTap is still running");
	return;
}
var obj13227_onTap_runningActionsCount = 0;
var obj13227_onTap_loopCount = 0;
obj13227_onTap_actionGroup0();
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
	
$("#obj9645").trigger('SCEventShow');
$("#obj9639").trigger('SCEventShow');
$("#obj9609").trigger('SCEventShow');
$("#obj9611").trigger('SCEventShow');
$("#obj9613").trigger('SCEventShow');
$("#obj9616").trigger('SCEventShow');
$("#obj9648").trigger('SCEventShow');
$("#obj9650").trigger('SCEventShow');
$("#obj13230").trigger('SCEventShow');
$("#obj13227").trigger('SCEventShow');
	

});