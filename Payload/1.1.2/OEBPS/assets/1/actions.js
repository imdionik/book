pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 2;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj8_onTap_activeActionGroupIndex = -1;
var obj8_onTap_runningActionsCount = 0;
var obj8_onTap_loopCount = 0;

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
		
obj8_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj8_onTap_activeActionGroupIndex = -1;
		$("#obj8").trigger("obj8_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8) {
				console.warn("de-queueing event obj8." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4375();
function goToPage_4375() {
	window.obj8_onTap_runningActionsCount = obj8_onTap_runningActionsCount + 1;

	$("#anchor19")[0].click();
	window.obj8_onTap_runningActionsCount = window.obj8_onTap_runningActionsCount - 1;

if (window.obj8_onTap_runningActionsCount < 0) {
	window.obj8_onTap_runningActionsCount = 0;
} else if (window.obj8_onTap_runningActionsCount == 0) {
	obj8_onTap_actionGroup1();
}
}










































};
obj8_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj8_onTap_activeActionGroupIndex = -1;
		$("#obj8").trigger("obj8_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 8) {
				console.warn("de-queueing event obj8." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj8").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj8_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj8: Event Touch Down
 *
 */

$("#obj8").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj8_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj8_onTap is still running");
	return;
}
var obj8_onTap_runningActionsCount = 0;
var obj8_onTap_loopCount = 0;
obj8_onTap_actionGroup0();
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
	
$("#obj8").trigger('SCEventShow');
	

});