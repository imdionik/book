pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 4555;
pubcoder.page.title = pubcoder.page.title || "18";
pubcoder.page.number = pubcoder.page.number || 18;
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
var obj4562_onTap_activeActionGroupIndex = -1;
var obj4562_onTap_runningActionsCount = 0;
var obj4562_onTap_loopCount = 0;
var obj4565_onTap_activeActionGroupIndex = -1;
var obj4565_onTap_runningActionsCount = 0;
var obj4565_onTap_loopCount = 0;
var obj4572_onTap_activeActionGroupIndex = -1;
var obj4572_onTap_runningActionsCount = 0;
var obj4572_onTap_loopCount = 0;

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
		
obj4562_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4562_onTap_activeActionGroupIndex = -1;
		$("#obj4562").trigger("obj4562_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4562) {
				console.warn("de-queueing event obj4562." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4562").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4562_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4564();
function goToPage_4564() {
	window.obj4562_onTap_runningActionsCount = obj4562_onTap_runningActionsCount + 1;

	$("#anchor208")[0].click();
	window.obj4562_onTap_runningActionsCount = window.obj4562_onTap_runningActionsCount - 1;

if (window.obj4562_onTap_runningActionsCount < 0) {
	window.obj4562_onTap_runningActionsCount = 0;
} else if (window.obj4562_onTap_runningActionsCount == 0) {
	obj4562_onTap_actionGroup1();
}
}










































};
obj4562_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4562_onTap_activeActionGroupIndex = -1;
		$("#obj4562").trigger("obj4562_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4562) {
				console.warn("de-queueing event obj4562." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4562").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4562_onTap_activeActionGroupIndex = 1;
	











































};
obj4565_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4565_onTap_activeActionGroupIndex = -1;
		$("#obj4565").trigger("obj4565_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4565) {
				console.warn("de-queueing event obj4565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4565_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4567();
function goToPage_4567() {
	window.obj4565_onTap_runningActionsCount = obj4565_onTap_runningActionsCount + 1;

	$("#anchor209")[0].click();
	window.obj4565_onTap_runningActionsCount = window.obj4565_onTap_runningActionsCount - 1;

if (window.obj4565_onTap_runningActionsCount < 0) {
	window.obj4565_onTap_runningActionsCount = 0;
} else if (window.obj4565_onTap_runningActionsCount == 0) {
	obj4565_onTap_actionGroup1();
}
}










































};
obj4565_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4565_onTap_activeActionGroupIndex = -1;
		$("#obj4565").trigger("obj4565_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4565) {
				console.warn("de-queueing event obj4565." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4565").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4565_onTap_activeActionGroupIndex = 1;
	











































};
obj4572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4572_onTap_activeActionGroupIndex = -1;
		$("#obj4572").trigger("obj4572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4572) {
				console.warn("de-queueing event obj4572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4572_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4574();
function goToPage_4574() {
	window.obj4572_onTap_runningActionsCount = obj4572_onTap_runningActionsCount + 1;

	$("#anchor210")[0].click();
	window.obj4572_onTap_runningActionsCount = window.obj4572_onTap_runningActionsCount - 1;

if (window.obj4572_onTap_runningActionsCount < 0) {
	window.obj4572_onTap_runningActionsCount = 0;
} else if (window.obj4572_onTap_runningActionsCount == 0) {
	obj4572_onTap_actionGroup1();
}
}










































};
obj4572_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4572_onTap_activeActionGroupIndex = -1;
		$("#obj4572").trigger("obj4572_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4572) {
				console.warn("de-queueing event obj4572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4572_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj4562: Event Touch Down
 *
 */

$("#obj4562").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4562_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4562_onTap is still running");
	return;
}
var obj4562_onTap_runningActionsCount = 0;
var obj4562_onTap_loopCount = 0;
obj4562_onTap_actionGroup0();
});


















/*
 *
 *   obj4565: Event Touch Down
 *
 */

$("#obj4565").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4565_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4565_onTap is still running");
	return;
}
var obj4565_onTap_runningActionsCount = 0;
var obj4565_onTap_loopCount = 0;
obj4565_onTap_actionGroup0();
});
























































/*
 *
 *   obj4572: Event Touch Down
 *
 */

$("#obj4572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4572_onTap is still running");
	return;
}
var obj4572_onTap_runningActionsCount = 0;
var obj4572_onTap_loopCount = 0;
obj4572_onTap_actionGroup0();
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
	
$("#obj4556").trigger('SCEventShow');
$("#obj4558").trigger('SCEventShow');
$("#obj4560").trigger('SCEventShow');
$("#obj4562").trigger('SCEventShow');
$("#obj4565").trigger('SCEventShow');
$("#obj4568").trigger('SCEventShow');
$("#obj4570").trigger('SCEventShow');
$("#obj4572").trigger('SCEventShow');
$("#obj4575").trigger('SCEventShow');
$("#obj4577").trigger('SCEventShow');
	

});