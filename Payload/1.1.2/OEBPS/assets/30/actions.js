pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 12604;
pubcoder.page.title = pubcoder.page.title || "30";
pubcoder.page.number = pubcoder.page.number || 30;
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
var obj12609_onTap_activeActionGroupIndex = -1;
var obj12609_onTap_runningActionsCount = 0;
var obj12609_onTap_loopCount = 0;
var obj12612_onTap_activeActionGroupIndex = -1;
var obj12612_onTap_runningActionsCount = 0;
var obj12612_onTap_loopCount = 0;
var obj12619_onTap_activeActionGroupIndex = -1;
var obj12619_onTap_runningActionsCount = 0;
var obj12619_onTap_loopCount = 0;

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
		
obj12609_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12609_onTap_activeActionGroupIndex = -1;
		$("#obj12609").trigger("obj12609_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12609) {
				console.warn("de-queueing event obj12609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12609_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12611();
function goToPage_12611() {
	window.obj12609_onTap_runningActionsCount = obj12609_onTap_runningActionsCount + 1;

	$("#anchor415")[0].click();
	window.obj12609_onTap_runningActionsCount = window.obj12609_onTap_runningActionsCount - 1;

if (window.obj12609_onTap_runningActionsCount < 0) {
	window.obj12609_onTap_runningActionsCount = 0;
} else if (window.obj12609_onTap_runningActionsCount == 0) {
	obj12609_onTap_actionGroup1();
}
}










































};
obj12609_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12609_onTap_activeActionGroupIndex = -1;
		$("#obj12609").trigger("obj12609_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12609) {
				console.warn("de-queueing event obj12609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12609_onTap_activeActionGroupIndex = 1;
	











































};
obj12612_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12612_onTap_activeActionGroupIndex = -1;
		$("#obj12612").trigger("obj12612_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12612) {
				console.warn("de-queueing event obj12612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12612_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12614();
function goToPage_12614() {
	window.obj12612_onTap_runningActionsCount = obj12612_onTap_runningActionsCount + 1;

	$("#anchor416")[0].click();
	window.obj12612_onTap_runningActionsCount = window.obj12612_onTap_runningActionsCount - 1;

if (window.obj12612_onTap_runningActionsCount < 0) {
	window.obj12612_onTap_runningActionsCount = 0;
} else if (window.obj12612_onTap_runningActionsCount == 0) {
	obj12612_onTap_actionGroup1();
}
}










































};
obj12612_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12612_onTap_activeActionGroupIndex = -1;
		$("#obj12612").trigger("obj12612_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12612) {
				console.warn("de-queueing event obj12612." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12612").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12612_onTap_activeActionGroupIndex = 1;
	











































};
obj12619_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12619_onTap_activeActionGroupIndex = -1;
		$("#obj12619").trigger("obj12619_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12619) {
				console.warn("de-queueing event obj12619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12619_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12621();
function goToPage_12621() {
	window.obj12619_onTap_runningActionsCount = obj12619_onTap_runningActionsCount + 1;

	$("#anchor417")[0].click();
	window.obj12619_onTap_runningActionsCount = window.obj12619_onTap_runningActionsCount - 1;

if (window.obj12619_onTap_runningActionsCount < 0) {
	window.obj12619_onTap_runningActionsCount = 0;
} else if (window.obj12619_onTap_runningActionsCount == 0) {
	obj12619_onTap_actionGroup1();
}
}










































};
obj12619_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12619_onTap_activeActionGroupIndex = -1;
		$("#obj12619").trigger("obj12619_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12619) {
				console.warn("de-queueing event obj12619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12619_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj12609: Event Touch Down
 *
 */

$("#obj12609").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12609_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12609_onTap is still running");
	return;
}
var obj12609_onTap_runningActionsCount = 0;
var obj12609_onTap_loopCount = 0;
obj12609_onTap_actionGroup0();
});


















/*
 *
 *   obj12612: Event Touch Down
 *
 */

$("#obj12612").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12612_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12612_onTap is still running");
	return;
}
var obj12612_onTap_runningActionsCount = 0;
var obj12612_onTap_loopCount = 0;
obj12612_onTap_actionGroup0();
});
























































/*
 *
 *   obj12619: Event Touch Down
 *
 */

$("#obj12619").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12619_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12619_onTap is still running");
	return;
}
var obj12619_onTap_runningActionsCount = 0;
var obj12619_onTap_loopCount = 0;
obj12619_onTap_actionGroup0();
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
	
$("#obj12605").trigger('SCEventShow');
$("#obj12607").trigger('SCEventShow');
$("#obj12609").trigger('SCEventShow');
$("#obj12612").trigger('SCEventShow');
$("#obj12615").trigger('SCEventShow');
$("#obj12617").trigger('SCEventShow');
$("#obj12619").trigger('SCEventShow');
$("#obj12622").trigger('SCEventShow');
$("#obj12642").trigger('SCEventShow');
$("#obj12650").trigger('SCEventShow');
$("#obj12662").trigger('SCEventShow');
$("#obj12665").trigger('SCEventShow');
$("#obj12667").trigger('SCEventShow');
$("#obj12673").trigger('SCEventShow');
$("#obj12671").trigger('SCEventShow');
$("#obj12669").trigger('SCEventShow');
$("#obj12677").trigger('SCEventShow');
$("#obj12675").trigger('SCEventShow');
$("#obj12679").trigger('SCEventShow');
	

});