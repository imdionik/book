pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 499;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
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
var obj502_onTap_activeActionGroupIndex = -1;
var obj502_onTap_runningActionsCount = 0;
var obj502_onTap_loopCount = 0;
var obj505_onTap_activeActionGroupIndex = -1;
var obj505_onTap_runningActionsCount = 0;
var obj505_onTap_loopCount = 0;
var obj512_onTap_activeActionGroupIndex = -1;
var obj512_onTap_runningActionsCount = 0;
var obj512_onTap_loopCount = 0;

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
		
obj502_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj502_onTap_activeActionGroupIndex = -1;
		$("#obj502").trigger("obj502_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 502) {
				console.warn("de-queueing event obj502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj502_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_504();
function goToPage_504() {
	window.obj502_onTap_runningActionsCount = obj502_onTap_runningActionsCount + 1;

	$("#anchor59")[0].click();
	window.obj502_onTap_runningActionsCount = window.obj502_onTap_runningActionsCount - 1;

if (window.obj502_onTap_runningActionsCount < 0) {
	window.obj502_onTap_runningActionsCount = 0;
} else if (window.obj502_onTap_runningActionsCount == 0) {
	obj502_onTap_actionGroup1();
}
}










































};
obj502_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj502_onTap_activeActionGroupIndex = -1;
		$("#obj502").trigger("obj502_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 502) {
				console.warn("de-queueing event obj502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj502_onTap_activeActionGroupIndex = 1;
	











































};
obj505_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj505_onTap_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_507();
function goToPage_507() {
	window.obj505_onTap_runningActionsCount = obj505_onTap_runningActionsCount + 1;

	$("#anchor60")[0].click();
	window.obj505_onTap_runningActionsCount = window.obj505_onTap_runningActionsCount - 1;

if (window.obj505_onTap_runningActionsCount < 0) {
	window.obj505_onTap_runningActionsCount = 0;
} else if (window.obj505_onTap_runningActionsCount == 0) {
	obj505_onTap_actionGroup1();
}
}










































};
obj505_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj505_onTap_activeActionGroupIndex = -1;
		$("#obj505").trigger("obj505_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 505) {
				console.warn("de-queueing event obj505." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj505").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj505_onTap_activeActionGroupIndex = 1;
	











































};
obj512_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj512_onTap_activeActionGroupIndex = -1;
		$("#obj512").trigger("obj512_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 512) {
				console.warn("de-queueing event obj512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj512_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_514();
function goToPage_514() {
	window.obj512_onTap_runningActionsCount = obj512_onTap_runningActionsCount + 1;

	$("#anchor61")[0].click();
	window.obj512_onTap_runningActionsCount = window.obj512_onTap_runningActionsCount - 1;

if (window.obj512_onTap_runningActionsCount < 0) {
	window.obj512_onTap_runningActionsCount = 0;
} else if (window.obj512_onTap_runningActionsCount == 0) {
	obj512_onTap_actionGroup1();
}
}










































};
obj512_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj512_onTap_activeActionGroupIndex = -1;
		$("#obj512").trigger("obj512_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 512) {
				console.warn("de-queueing event obj512." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj512").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj512_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj502: Event Touch Down
 *
 */

$("#obj502").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj502_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj502_onTap is still running");
	return;
}
var obj502_onTap_runningActionsCount = 0;
var obj502_onTap_loopCount = 0;
obj502_onTap_actionGroup0();
});


















/*
 *
 *   obj505: Event Touch Down
 *
 */

$("#obj505").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj505_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj505_onTap is still running");
	return;
}
var obj505_onTap_runningActionsCount = 0;
var obj505_onTap_loopCount = 0;
obj505_onTap_actionGroup0();
});
























































/*
 *
 *   obj512: Event Touch Down
 *
 */

$("#obj512").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj512_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj512_onTap is still running");
	return;
}
var obj512_onTap_runningActionsCount = 0;
var obj512_onTap_loopCount = 0;
obj512_onTap_actionGroup0();
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
	
$("#obj9251").trigger('SCEventShow');
$("#obj500").trigger('SCEventShow');
$("#obj502").trigger('SCEventShow');
$("#obj505").trigger('SCEventShow');
$("#obj508").trigger('SCEventShow');
$("#obj510").trigger('SCEventShow');
$("#obj512").trigger('SCEventShow');
$("#obj517").trigger('SCEventShow');
$("#obj525").trigger('SCEventShow');
$("#obj523").trigger('SCEventShow');
$("#obj529").trigger('SCEventShow');
$("#obj527").trigger('SCEventShow');
$("#obj533").trigger('SCEventShow');
$("#obj531").trigger('SCEventShow');
$("#obj535").trigger('SCEventShow');
$("#obj537").trigger('SCEventShow');
$("#obj539").trigger('SCEventShow');
	

});