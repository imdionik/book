pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 3438;
pubcoder.page.title = pubcoder.page.title || "17";
pubcoder.page.number = pubcoder.page.number || 17;
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
var obj3443_onTap_activeActionGroupIndex = -1;
var obj3443_onTap_runningActionsCount = 0;
var obj3443_onTap_loopCount = 0;
var obj3453_onTap_activeActionGroupIndex = -1;
var obj3453_onTap_runningActionsCount = 0;
var obj3453_onTap_loopCount = 0;

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
		
obj3443_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3443_onTap_activeActionGroupIndex = -1;
		$("#obj3443").trigger("obj3443_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3443) {
				console.warn("de-queueing event obj3443." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3443").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3443_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3445();
function goToPage_3445() {
	window.obj3443_onTap_runningActionsCount = obj3443_onTap_runningActionsCount + 1;

	$("#anchor206")[0].click();
	window.obj3443_onTap_runningActionsCount = window.obj3443_onTap_runningActionsCount - 1;

if (window.obj3443_onTap_runningActionsCount < 0) {
	window.obj3443_onTap_runningActionsCount = 0;
} else if (window.obj3443_onTap_runningActionsCount == 0) {
	obj3443_onTap_actionGroup1();
}
}










































};
obj3443_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3443_onTap_activeActionGroupIndex = -1;
		$("#obj3443").trigger("obj3443_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3443) {
				console.warn("de-queueing event obj3443." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3443").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3443_onTap_activeActionGroupIndex = 1;
	











































};
obj3453_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3453_onTap_activeActionGroupIndex = -1;
		$("#obj3453").trigger("obj3453_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3453) {
				console.warn("de-queueing event obj3453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3453_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3455();
function goToPage_3455() {
	window.obj3453_onTap_runningActionsCount = obj3453_onTap_runningActionsCount + 1;

	$("#anchor207")[0].click();
	window.obj3453_onTap_runningActionsCount = window.obj3453_onTap_runningActionsCount - 1;

if (window.obj3453_onTap_runningActionsCount < 0) {
	window.obj3453_onTap_runningActionsCount = 0;
} else if (window.obj3453_onTap_runningActionsCount == 0) {
	obj3453_onTap_actionGroup1();
}
}










































};
obj3453_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3453_onTap_activeActionGroupIndex = -1;
		$("#obj3453").trigger("obj3453_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3453) {
				console.warn("de-queueing event obj3453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3453_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj3443: Event Touch Down
 *
 */

$("#obj3443").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3443_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3443_onTap is still running");
	return;
}
var obj3443_onTap_runningActionsCount = 0;
var obj3443_onTap_loopCount = 0;
obj3443_onTap_actionGroup0();
});
























































/*
 *
 *   obj3453: Event Touch Down
 *
 */

$("#obj3453").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3453_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3453_onTap is still running");
	return;
}
var obj3453_onTap_runningActionsCount = 0;
var obj3453_onTap_loopCount = 0;
obj3453_onTap_actionGroup0();
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
	
$("#obj4369").trigger('SCEventShow');
$("#obj3441").trigger('SCEventShow');
$("#obj3443").trigger('SCEventShow');
$("#obj3449").trigger('SCEventShow');
$("#obj3451").trigger('SCEventShow');
$("#obj3453").trigger('SCEventShow');
$("#obj4373").trigger('SCEventShow');
	

});