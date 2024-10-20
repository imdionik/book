pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13453;
pubcoder.page.title = pubcoder.page.title || "40";
pubcoder.page.number = pubcoder.page.number || 40;
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
var obj13458_onTap_activeActionGroupIndex = -1;
var obj13458_onTap_runningActionsCount = 0;
var obj13458_onTap_loopCount = 0;
var obj13461_onTap_activeActionGroupIndex = -1;
var obj13461_onTap_runningActionsCount = 0;
var obj13461_onTap_loopCount = 0;
var obj13468_onTap_activeActionGroupIndex = -1;
var obj13468_onTap_runningActionsCount = 0;
var obj13468_onTap_loopCount = 0;

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
		
obj13458_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13458_onTap_activeActionGroupIndex = -1;
		$("#obj13458").trigger("obj13458_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13458) {
				console.warn("de-queueing event obj13458." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13458").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13458_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13460();
function goToPage_13460() {
	window.obj13458_onTap_runningActionsCount = obj13458_onTap_runningActionsCount + 1;

	$("#anchor566")[0].click();
	window.obj13458_onTap_runningActionsCount = window.obj13458_onTap_runningActionsCount - 1;

if (window.obj13458_onTap_runningActionsCount < 0) {
	window.obj13458_onTap_runningActionsCount = 0;
} else if (window.obj13458_onTap_runningActionsCount == 0) {
	obj13458_onTap_actionGroup1();
}
}










































};
obj13458_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13458_onTap_activeActionGroupIndex = -1;
		$("#obj13458").trigger("obj13458_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13458) {
				console.warn("de-queueing event obj13458." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13458").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13458_onTap_activeActionGroupIndex = 1;
	











































};
obj13461_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13461_onTap_activeActionGroupIndex = -1;
		$("#obj13461").trigger("obj13461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13461) {
				console.warn("de-queueing event obj13461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13461_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13463();
function goToPage_13463() {
	window.obj13461_onTap_runningActionsCount = obj13461_onTap_runningActionsCount + 1;

	$("#anchor567")[0].click();
	window.obj13461_onTap_runningActionsCount = window.obj13461_onTap_runningActionsCount - 1;

if (window.obj13461_onTap_runningActionsCount < 0) {
	window.obj13461_onTap_runningActionsCount = 0;
} else if (window.obj13461_onTap_runningActionsCount == 0) {
	obj13461_onTap_actionGroup1();
}
}










































};
obj13461_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13461_onTap_activeActionGroupIndex = -1;
		$("#obj13461").trigger("obj13461_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13461) {
				console.warn("de-queueing event obj13461." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13461").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13461_onTap_activeActionGroupIndex = 1;
	











































};
obj13468_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13468_onTap_activeActionGroupIndex = -1;
		$("#obj13468").trigger("obj13468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13468) {
				console.warn("de-queueing event obj13468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13468_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13470();
function goToPage_13470() {
	window.obj13468_onTap_runningActionsCount = obj13468_onTap_runningActionsCount + 1;

	$("#anchor568")[0].click();
	window.obj13468_onTap_runningActionsCount = window.obj13468_onTap_runningActionsCount - 1;

if (window.obj13468_onTap_runningActionsCount < 0) {
	window.obj13468_onTap_runningActionsCount = 0;
} else if (window.obj13468_onTap_runningActionsCount == 0) {
	obj13468_onTap_actionGroup1();
}
}










































};
obj13468_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13468_onTap_activeActionGroupIndex = -1;
		$("#obj13468").trigger("obj13468_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13468) {
				console.warn("de-queueing event obj13468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13468_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj13458: Event Touch Down
 *
 */

$("#obj13458").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13458_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13458_onTap is still running");
	return;
}
var obj13458_onTap_runningActionsCount = 0;
var obj13458_onTap_loopCount = 0;
obj13458_onTap_actionGroup0();
});


















/*
 *
 *   obj13461: Event Touch Down
 *
 */

$("#obj13461").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13461_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13461_onTap is still running");
	return;
}
var obj13461_onTap_runningActionsCount = 0;
var obj13461_onTap_loopCount = 0;
obj13461_onTap_actionGroup0();
});
























































/*
 *
 *   obj13468: Event Touch Down
 *
 */

$("#obj13468").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13468_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13468_onTap is still running");
	return;
}
var obj13468_onTap_runningActionsCount = 0;
var obj13468_onTap_loopCount = 0;
obj13468_onTap_actionGroup0();
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
	
$("#obj13454").trigger('SCEventShow');
$("#obj13456").trigger('SCEventShow');
$("#obj13458").trigger('SCEventShow');
$("#obj13461").trigger('SCEventShow');
$("#obj13464").trigger('SCEventShow');
$("#obj13466").trigger('SCEventShow');
$("#obj13468").trigger('SCEventShow');
$("#obj13471").trigger('SCEventShow');
$("#obj13473").trigger('SCEventShow');
$("#obj13475").trigger('SCEventShow');
$("#obj13477").trigger('SCEventShow');
$("#obj13479").trigger('SCEventShow');
$("#obj13481").trigger('SCEventShow');
$("#obj13483").trigger('SCEventShow');
$("#obj13485").trigger('SCEventShow');
$("#obj13487").trigger('SCEventShow');
$("#obj13489").trigger('SCEventShow');
	

});