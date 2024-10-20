pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13307;
pubcoder.page.title = pubcoder.page.title || "37";
pubcoder.page.number = pubcoder.page.number || 37;
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
var obj13314_onTap_activeActionGroupIndex = -1;
var obj13314_onTap_runningActionsCount = 0;
var obj13314_onTap_loopCount = 0;
var obj13317_onTap_activeActionGroupIndex = -1;
var obj13317_onTap_runningActionsCount = 0;
var obj13317_onTap_loopCount = 0;
var obj13324_onTap_activeActionGroupIndex = -1;
var obj13324_onTap_runningActionsCount = 0;
var obj13324_onTap_loopCount = 0;

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
		
obj13314_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13314_onTap_activeActionGroupIndex = -1;
		$("#obj13314").trigger("obj13314_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13314) {
				console.warn("de-queueing event obj13314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13314_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13316();
function goToPage_13316() {
	window.obj13314_onTap_runningActionsCount = obj13314_onTap_runningActionsCount + 1;

	$("#anchor556")[0].click();
	window.obj13314_onTap_runningActionsCount = window.obj13314_onTap_runningActionsCount - 1;

if (window.obj13314_onTap_runningActionsCount < 0) {
	window.obj13314_onTap_runningActionsCount = 0;
} else if (window.obj13314_onTap_runningActionsCount == 0) {
	obj13314_onTap_actionGroup1();
}
}










































};
obj13314_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13314_onTap_activeActionGroupIndex = -1;
		$("#obj13314").trigger("obj13314_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13314) {
				console.warn("de-queueing event obj13314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13314_onTap_activeActionGroupIndex = 1;
	











































};
obj13317_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13317_onTap_activeActionGroupIndex = -1;
		$("#obj13317").trigger("obj13317_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13317) {
				console.warn("de-queueing event obj13317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13317_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13319();
function goToPage_13319() {
	window.obj13317_onTap_runningActionsCount = obj13317_onTap_runningActionsCount + 1;

	$("#anchor557")[0].click();
	window.obj13317_onTap_runningActionsCount = window.obj13317_onTap_runningActionsCount - 1;

if (window.obj13317_onTap_runningActionsCount < 0) {
	window.obj13317_onTap_runningActionsCount = 0;
} else if (window.obj13317_onTap_runningActionsCount == 0) {
	obj13317_onTap_actionGroup1();
}
}










































};
obj13317_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13317_onTap_activeActionGroupIndex = -1;
		$("#obj13317").trigger("obj13317_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13317) {
				console.warn("de-queueing event obj13317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13317_onTap_activeActionGroupIndex = 1;
	











































};
obj13324_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13324_onTap_activeActionGroupIndex = -1;
		$("#obj13324").trigger("obj13324_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13324) {
				console.warn("de-queueing event obj13324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13324_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13326();
function goToPage_13326() {
	window.obj13324_onTap_runningActionsCount = obj13324_onTap_runningActionsCount + 1;

	$("#anchor558")[0].click();
	window.obj13324_onTap_runningActionsCount = window.obj13324_onTap_runningActionsCount - 1;

if (window.obj13324_onTap_runningActionsCount < 0) {
	window.obj13324_onTap_runningActionsCount = 0;
} else if (window.obj13324_onTap_runningActionsCount == 0) {
	obj13324_onTap_actionGroup1();
}
}










































};
obj13324_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13324_onTap_activeActionGroupIndex = -1;
		$("#obj13324").trigger("obj13324_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13324) {
				console.warn("de-queueing event obj13324." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13324").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13324_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj13314: Event Touch Down
 *
 */

$("#obj13314").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13314_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13314_onTap is still running");
	return;
}
var obj13314_onTap_runningActionsCount = 0;
var obj13314_onTap_loopCount = 0;
obj13314_onTap_actionGroup0();
});


















/*
 *
 *   obj13317: Event Touch Down
 *
 */

$("#obj13317").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13317_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13317_onTap is still running");
	return;
}
var obj13317_onTap_runningActionsCount = 0;
var obj13317_onTap_loopCount = 0;
obj13317_onTap_actionGroup0();
});
























































/*
 *
 *   obj13324: Event Touch Down
 *
 */

$("#obj13324").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13324_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13324_onTap is still running");
	return;
}
var obj13324_onTap_runningActionsCount = 0;
var obj13324_onTap_loopCount = 0;
obj13324_onTap_actionGroup0();
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
	
$("#obj13308").trigger('SCEventShow');
$("#obj13310").trigger('SCEventShow');
$("#obj13312").trigger('SCEventShow');
$("#obj13314").trigger('SCEventShow');
$("#obj13317").trigger('SCEventShow');
$("#obj13320").trigger('SCEventShow');
$("#obj13322").trigger('SCEventShow');
$("#obj13324").trigger('SCEventShow');
$("#obj13327").trigger('SCEventShow');
$("#obj13329").trigger('SCEventShow');
	

});