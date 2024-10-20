pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 4580;
pubcoder.page.title = pubcoder.page.title || "19";
pubcoder.page.number = pubcoder.page.number || 19;
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
var obj4587_onTap_activeActionGroupIndex = -1;
var obj4587_onTap_runningActionsCount = 0;
var obj4587_onTap_loopCount = 0;
var obj4590_onTap_activeActionGroupIndex = -1;
var obj4590_onTap_runningActionsCount = 0;
var obj4590_onTap_loopCount = 0;
var obj4653_onTap_activeActionGroupIndex = -1;
var obj4653_onTap_runningActionsCount = 0;
var obj4653_onTap_loopCount = 0;
var obj4662_onTap_activeActionGroupIndex = -1;
var obj4662_onTap_runningActionsCount = 0;
var obj4662_onTap_loopCount = 0;

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
		
obj4587_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4587_onTap_activeActionGroupIndex = -1;
		$("#obj4587").trigger("obj4587_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4587) {
				console.warn("de-queueing event obj4587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4587_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4589();
function goToPage_4589() {
	window.obj4587_onTap_runningActionsCount = obj4587_onTap_runningActionsCount + 1;

	$("#anchor211")[0].click();
	window.obj4587_onTap_runningActionsCount = window.obj4587_onTap_runningActionsCount - 1;

if (window.obj4587_onTap_runningActionsCount < 0) {
	window.obj4587_onTap_runningActionsCount = 0;
} else if (window.obj4587_onTap_runningActionsCount == 0) {
	obj4587_onTap_actionGroup1();
}
}










































};
obj4587_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4587_onTap_activeActionGroupIndex = -1;
		$("#obj4587").trigger("obj4587_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4587) {
				console.warn("de-queueing event obj4587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4587_onTap_activeActionGroupIndex = 1;
	











































};
obj4590_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4590_onTap_activeActionGroupIndex = -1;
		$("#obj4590").trigger("obj4590_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4590) {
				console.warn("de-queueing event obj4590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4590_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4592();
function goToPage_4592() {
	window.obj4590_onTap_runningActionsCount = obj4590_onTap_runningActionsCount + 1;

	$("#anchor212")[0].click();
	window.obj4590_onTap_runningActionsCount = window.obj4590_onTap_runningActionsCount - 1;

if (window.obj4590_onTap_runningActionsCount < 0) {
	window.obj4590_onTap_runningActionsCount = 0;
} else if (window.obj4590_onTap_runningActionsCount == 0) {
	obj4590_onTap_actionGroup1();
}
}










































};
obj4590_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4590_onTap_activeActionGroupIndex = -1;
		$("#obj4590").trigger("obj4590_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4590) {
				console.warn("de-queueing event obj4590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4590_onTap_activeActionGroupIndex = 1;
	











































};
obj4653_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4653_onTap_activeActionGroupIndex = -1;
		$("#obj4653").trigger("obj4653_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4653) {
				console.warn("de-queueing event obj4653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4653_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4655();
function goToPage_4655() {
	window.obj4653_onTap_runningActionsCount = obj4653_onTap_runningActionsCount + 1;

	$("#anchor213")[0].click();
	window.obj4653_onTap_runningActionsCount = window.obj4653_onTap_runningActionsCount - 1;

if (window.obj4653_onTap_runningActionsCount < 0) {
	window.obj4653_onTap_runningActionsCount = 0;
} else if (window.obj4653_onTap_runningActionsCount == 0) {
	obj4653_onTap_actionGroup1();
}
}










































};
obj4653_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4653_onTap_activeActionGroupIndex = -1;
		$("#obj4653").trigger("obj4653_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4653) {
				console.warn("de-queueing event obj4653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4653_onTap_activeActionGroupIndex = 1;
	











































};
obj4662_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4662_onTap_activeActionGroupIndex = -1;
		$("#obj4662").trigger("obj4662_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4662) {
				console.warn("de-queueing event obj4662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4662_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4664();
function goToPage_4664() {
	window.obj4662_onTap_runningActionsCount = obj4662_onTap_runningActionsCount + 1;

	$("#anchor214")[0].click();
	window.obj4662_onTap_runningActionsCount = window.obj4662_onTap_runningActionsCount - 1;

if (window.obj4662_onTap_runningActionsCount < 0) {
	window.obj4662_onTap_runningActionsCount = 0;
} else if (window.obj4662_onTap_runningActionsCount == 0) {
	obj4662_onTap_actionGroup1();
}
}










































};
obj4662_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4662_onTap_activeActionGroupIndex = -1;
		$("#obj4662").trigger("obj4662_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4662) {
				console.warn("de-queueing event obj4662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4662_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj4587: Event Touch Down
 *
 */

$("#obj4587").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4587_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4587_onTap is still running");
	return;
}
var obj4587_onTap_runningActionsCount = 0;
var obj4587_onTap_loopCount = 0;
obj4587_onTap_actionGroup0();
});


















/*
 *
 *   obj4590: Event Touch Down
 *
 */

$("#obj4590").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4590_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4590_onTap is still running");
	return;
}
var obj4590_onTap_runningActionsCount = 0;
var obj4590_onTap_loopCount = 0;
obj4590_onTap_actionGroup0();
});






















































































































































































































































/*
 *
 *   obj4653: Event Touch Down
 *
 */

$("#obj4653").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4653_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4653_onTap is still running");
	return;
}
var obj4653_onTap_runningActionsCount = 0;
var obj4653_onTap_loopCount = 0;
obj4653_onTap_actionGroup0();
});


















/*
 *
 *   obj4662: Event Touch Down
 *
 */

$("#obj4662").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4662_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4662_onTap is still running");
	return;
}
var obj4662_onTap_runningActionsCount = 0;
var obj4662_onTap_loopCount = 0;
obj4662_onTap_actionGroup0();
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
	
$("#obj4626").trigger('SCEventShow');
$("#obj4583").trigger('SCEventShow');
$("#obj4585").trigger('SCEventShow');
$("#obj4587").trigger('SCEventShow');
$("#obj4590").trigger('SCEventShow');
$("#obj4605").trigger('SCEventShow');
$("#obj4608").trigger('SCEventShow');
$("#obj4611").trigger('SCEventShow');
$("#obj4614").trigger('SCEventShow');
$("#obj4620").trigger('SCEventShow');
$("#obj4634").trigger('SCEventShow');
$("#obj4636").trigger('SCEventShow');
$("#obj4643").trigger('SCEventShow');
$("#obj4645").trigger('SCEventShow');
$("#obj4647").trigger('SCEventShow');
$("#obj4649").trigger('SCEventShow');
$("#obj4651").trigger('SCEventShow');
$("#obj4653").trigger('SCEventShow');
$("#obj4662").trigger('SCEventShow');
	

});