pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 9324;
pubcoder.page.title = pubcoder.page.title || "21";
pubcoder.page.number = pubcoder.page.number || 21;
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
var obj9331_onTap_activeActionGroupIndex = -1;
var obj9331_onTap_runningActionsCount = 0;
var obj9331_onTap_loopCount = 0;
var obj9334_onTap_activeActionGroupIndex = -1;
var obj9334_onTap_runningActionsCount = 0;
var obj9334_onTap_loopCount = 0;
var obj9355_onTap_activeActionGroupIndex = -1;
var obj9355_onTap_runningActionsCount = 0;
var obj9355_onTap_loopCount = 0;
var obj9358_onTap_activeActionGroupIndex = -1;
var obj9358_onTap_runningActionsCount = 0;
var obj9358_onTap_loopCount = 0;

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
		
obj9331_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9331_onTap_activeActionGroupIndex = -1;
		$("#obj9331").trigger("obj9331_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9331) {
				console.warn("de-queueing event obj9331." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9331").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9331_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9333();
function goToPage_9333() {
	window.obj9331_onTap_runningActionsCount = obj9331_onTap_runningActionsCount + 1;

	$("#anchor219")[0].click();
	window.obj9331_onTap_runningActionsCount = window.obj9331_onTap_runningActionsCount - 1;

if (window.obj9331_onTap_runningActionsCount < 0) {
	window.obj9331_onTap_runningActionsCount = 0;
} else if (window.obj9331_onTap_runningActionsCount == 0) {
	obj9331_onTap_actionGroup1();
}
}










































};
obj9331_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9331_onTap_activeActionGroupIndex = -1;
		$("#obj9331").trigger("obj9331_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9331) {
				console.warn("de-queueing event obj9331." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9331").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9331_onTap_activeActionGroupIndex = 1;
	











































};
obj9334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9334_onTap_activeActionGroupIndex = -1;
		$("#obj9334").trigger("obj9334_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9334) {
				console.warn("de-queueing event obj9334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9334_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9336();
function goToPage_9336() {
	window.obj9334_onTap_runningActionsCount = obj9334_onTap_runningActionsCount + 1;

	$("#anchor220")[0].click();
	window.obj9334_onTap_runningActionsCount = window.obj9334_onTap_runningActionsCount - 1;

if (window.obj9334_onTap_runningActionsCount < 0) {
	window.obj9334_onTap_runningActionsCount = 0;
} else if (window.obj9334_onTap_runningActionsCount == 0) {
	obj9334_onTap_actionGroup1();
}
}










































};
obj9334_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9334_onTap_activeActionGroupIndex = -1;
		$("#obj9334").trigger("obj9334_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9334) {
				console.warn("de-queueing event obj9334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9334_onTap_activeActionGroupIndex = 1;
	











































};
obj9355_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9355_onTap_activeActionGroupIndex = -1;
		$("#obj9355").trigger("obj9355_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9355) {
				console.warn("de-queueing event obj9355." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9355").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9355_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9357();
function goToPage_9357() {
	window.obj9355_onTap_runningActionsCount = obj9355_onTap_runningActionsCount + 1;

	$("#anchor221")[0].click();
	window.obj9355_onTap_runningActionsCount = window.obj9355_onTap_runningActionsCount - 1;

if (window.obj9355_onTap_runningActionsCount < 0) {
	window.obj9355_onTap_runningActionsCount = 0;
} else if (window.obj9355_onTap_runningActionsCount == 0) {
	obj9355_onTap_actionGroup1();
}
}










































};
obj9355_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9355_onTap_activeActionGroupIndex = -1;
		$("#obj9355").trigger("obj9355_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9355) {
				console.warn("de-queueing event obj9355." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9355").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9355_onTap_activeActionGroupIndex = 1;
	











































};
obj9358_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9358_onTap_activeActionGroupIndex = -1;
		$("#obj9358").trigger("obj9358_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9358) {
				console.warn("de-queueing event obj9358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9358_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9360();
function goToPage_9360() {
	window.obj9358_onTap_runningActionsCount = obj9358_onTap_runningActionsCount + 1;

	$("#anchor222")[0].click();
	window.obj9358_onTap_runningActionsCount = window.obj9358_onTap_runningActionsCount - 1;

if (window.obj9358_onTap_runningActionsCount < 0) {
	window.obj9358_onTap_runningActionsCount = 0;
} else if (window.obj9358_onTap_runningActionsCount == 0) {
	obj9358_onTap_actionGroup1();
}
}










































};
obj9358_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9358_onTap_activeActionGroupIndex = -1;
		$("#obj9358").trigger("obj9358_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9358) {
				console.warn("de-queueing event obj9358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9358_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj9331: Event Touch Down
 *
 */

$("#obj9331").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9331_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9331_onTap is still running");
	return;
}
var obj9331_onTap_runningActionsCount = 0;
var obj9331_onTap_loopCount = 0;
obj9331_onTap_actionGroup0();
});


















/*
 *
 *   obj9334: Event Touch Down
 *
 */

$("#obj9334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9334_onTap is still running");
	return;
}
var obj9334_onTap_runningActionsCount = 0;
var obj9334_onTap_loopCount = 0;
obj9334_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj9355: Event Touch Down
 *
 */

$("#obj9355").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9355_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9355_onTap is still running");
	return;
}
var obj9355_onTap_runningActionsCount = 0;
var obj9355_onTap_loopCount = 0;
obj9355_onTap_actionGroup0();
});


















/*
 *
 *   obj9358: Event Touch Down
 *
 */

$("#obj9358").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9358_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9358_onTap is still running");
	return;
}
var obj9358_onTap_runningActionsCount = 0;
var obj9358_onTap_loopCount = 0;
obj9358_onTap_actionGroup0();
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
	
$("#obj9325").trigger('SCEventShow');
$("#obj9327").trigger('SCEventShow');
$("#obj9329").trigger('SCEventShow');
$("#obj9331").trigger('SCEventShow');
$("#obj9334").trigger('SCEventShow');
$("#obj9337").trigger('SCEventShow');
$("#obj9339").trigger('SCEventShow');
$("#obj9341").trigger('SCEventShow');
$("#obj9343").trigger('SCEventShow');
$("#obj9345").trigger('SCEventShow');
$("#obj9347").trigger('SCEventShow');
$("#obj9349").trigger('SCEventShow');
$("#obj9351").trigger('SCEventShow');
$("#obj9353").trigger('SCEventShow');
$("#obj9355").trigger('SCEventShow');
$("#obj9358").trigger('SCEventShow');
$("#obj9361").trigger('SCEventShow');
$("#obj9363").trigger('SCEventShow');
$("#obj9365").trigger('SCEventShow');
$("#obj9367").trigger('SCEventShow');
$("#obj9369").trigger('SCEventShow');
$("#obj9371").trigger('SCEventShow');
$("#obj9373").trigger('SCEventShow');
$("#obj9375").trigger('SCEventShow');
$("#obj9377").trigger('SCEventShow');
$("#obj9379").trigger('SCEventShow');
$("#obj9381").trigger('SCEventShow');
$("#obj9383").trigger('SCEventShow');
$("#obj9385").trigger('SCEventShow');
$("#obj9387").trigger('SCEventShow');
	

});