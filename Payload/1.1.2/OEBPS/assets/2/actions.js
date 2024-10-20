pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj19_onTap_activeActionGroupIndex = -1;
var obj19_onTap_runningActionsCount = 0;
var obj19_onTap_loopCount = 0;
var obj21_onTap_activeActionGroupIndex = -1;
var obj21_onTap_runningActionsCount = 0;
var obj21_onTap_loopCount = 0;

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
		
obj19_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19_onTap_activeActionGroupIndex = -1;
		$("#obj19").trigger("obj19_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19) {
				console.warn("de-queueing event obj19." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4376();
function goToPage_4376() {
	window.obj19_onTap_runningActionsCount = obj19_onTap_runningActionsCount + 1;

	$("#anchor20")[0].click();
	window.obj19_onTap_runningActionsCount = window.obj19_onTap_runningActionsCount - 1;

if (window.obj19_onTap_runningActionsCount < 0) {
	window.obj19_onTap_runningActionsCount = 0;
} else if (window.obj19_onTap_runningActionsCount == 0) {
	obj19_onTap_actionGroup1();
}
}










































};
obj19_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19_onTap_activeActionGroupIndex = -1;
		$("#obj19").trigger("obj19_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19) {
				console.warn("de-queueing event obj19." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19_onTap_activeActionGroupIndex = 1;
	











































};
obj21_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21_onTap_activeActionGroupIndex = -1;
		$("#obj21").trigger("obj21_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21) {
				console.warn("de-queueing event obj21." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4377();
function goToPage_4377() {
	window.obj21_onTap_runningActionsCount = obj21_onTap_runningActionsCount + 1;

	$("#anchor21")[0].click();
	window.obj21_onTap_runningActionsCount = window.obj21_onTap_runningActionsCount - 1;

if (window.obj21_onTap_runningActionsCount < 0) {
	window.obj21_onTap_runningActionsCount = 0;
} else if (window.obj21_onTap_runningActionsCount == 0) {
	obj21_onTap_actionGroup1();
}
}










































};
obj21_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21_onTap_activeActionGroupIndex = -1;
		$("#obj21").trigger("obj21_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21) {
				console.warn("de-queueing event obj21." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj19: Event Touch Down
 *
 */

$("#obj19").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19_onTap is still running");
	return;
}
var obj19_onTap_runningActionsCount = 0;
var obj19_onTap_loopCount = 0;
obj19_onTap_actionGroup0();
});


















/*
 *
 *   obj21: Event Touch Down
 *
 */

$("#obj21").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21_onTap is still running");
	return;
}
var obj21_onTap_runningActionsCount = 0;
var obj21_onTap_loopCount = 0;
obj21_onTap_actionGroup0();
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
	
$("#obj11").trigger('SCEventShow');
$("#obj14").trigger('SCEventShow');
$("#obj19").trigger('SCEventShow');
$("#obj21").trigger('SCEventShow');
$("#obj23").trigger('SCEventShow');
$("#obj25").trigger('SCEventShow');
$("#obj27").trigger('SCEventShow');
$("#obj33").trigger('SCEventShow');
	

});