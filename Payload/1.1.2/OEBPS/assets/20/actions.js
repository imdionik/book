pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 9253;
pubcoder.page.title = pubcoder.page.title || "20";
pubcoder.page.number = pubcoder.page.number || 20;
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
var obj9260_onTap_activeActionGroupIndex = -1;
var obj9260_onTap_runningActionsCount = 0;
var obj9260_onTap_loopCount = 0;
var obj9263_onTap_activeActionGroupIndex = -1;
var obj9263_onTap_runningActionsCount = 0;
var obj9263_onTap_loopCount = 0;
var obj9290_onTap_activeActionGroupIndex = -1;
var obj9290_onTap_runningActionsCount = 0;
var obj9290_onTap_loopCount = 0;
var obj9293_onTap_activeActionGroupIndex = -1;
var obj9293_onTap_runningActionsCount = 0;
var obj9293_onTap_loopCount = 0;

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
		
obj9260_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9260_onTap_activeActionGroupIndex = -1;
		$("#obj9260").trigger("obj9260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9260) {
				console.warn("de-queueing event obj9260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9260_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9262();
function goToPage_9262() {
	window.obj9260_onTap_runningActionsCount = obj9260_onTap_runningActionsCount + 1;

	$("#anchor215")[0].click();
	window.obj9260_onTap_runningActionsCount = window.obj9260_onTap_runningActionsCount - 1;

if (window.obj9260_onTap_runningActionsCount < 0) {
	window.obj9260_onTap_runningActionsCount = 0;
} else if (window.obj9260_onTap_runningActionsCount == 0) {
	obj9260_onTap_actionGroup1();
}
}










































};
obj9260_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9260_onTap_activeActionGroupIndex = -1;
		$("#obj9260").trigger("obj9260_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9260) {
				console.warn("de-queueing event obj9260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9260_onTap_activeActionGroupIndex = 1;
	











































};
obj9263_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9263_onTap_activeActionGroupIndex = -1;
		$("#obj9263").trigger("obj9263_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9263) {
				console.warn("de-queueing event obj9263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9263_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9265();
function goToPage_9265() {
	window.obj9263_onTap_runningActionsCount = obj9263_onTap_runningActionsCount + 1;

	$("#anchor216")[0].click();
	window.obj9263_onTap_runningActionsCount = window.obj9263_onTap_runningActionsCount - 1;

if (window.obj9263_onTap_runningActionsCount < 0) {
	window.obj9263_onTap_runningActionsCount = 0;
} else if (window.obj9263_onTap_runningActionsCount == 0) {
	obj9263_onTap_actionGroup1();
}
}










































};
obj9263_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9263_onTap_activeActionGroupIndex = -1;
		$("#obj9263").trigger("obj9263_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9263) {
				console.warn("de-queueing event obj9263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9263_onTap_activeActionGroupIndex = 1;
	











































};
obj9290_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9290_onTap_activeActionGroupIndex = -1;
		$("#obj9290").trigger("obj9290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9290) {
				console.warn("de-queueing event obj9290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9290_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9292();
function goToPage_9292() {
	window.obj9290_onTap_runningActionsCount = obj9290_onTap_runningActionsCount + 1;

	$("#anchor217")[0].click();
	window.obj9290_onTap_runningActionsCount = window.obj9290_onTap_runningActionsCount - 1;

if (window.obj9290_onTap_runningActionsCount < 0) {
	window.obj9290_onTap_runningActionsCount = 0;
} else if (window.obj9290_onTap_runningActionsCount == 0) {
	obj9290_onTap_actionGroup1();
}
}










































};
obj9290_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9290_onTap_activeActionGroupIndex = -1;
		$("#obj9290").trigger("obj9290_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9290) {
				console.warn("de-queueing event obj9290." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9290").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9290_onTap_activeActionGroupIndex = 1;
	











































};
obj9293_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj9293_onTap_activeActionGroupIndex = -1;
		$("#obj9293").trigger("obj9293_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9293) {
				console.warn("de-queueing event obj9293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9293_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_9295();
function goToPage_9295() {
	window.obj9293_onTap_runningActionsCount = obj9293_onTap_runningActionsCount + 1;

	$("#anchor218")[0].click();
	window.obj9293_onTap_runningActionsCount = window.obj9293_onTap_runningActionsCount - 1;

if (window.obj9293_onTap_runningActionsCount < 0) {
	window.obj9293_onTap_runningActionsCount = 0;
} else if (window.obj9293_onTap_runningActionsCount == 0) {
	obj9293_onTap_actionGroup1();
}
}










































};
obj9293_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj9293_onTap_activeActionGroupIndex = -1;
		$("#obj9293").trigger("obj9293_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 9293) {
				console.warn("de-queueing event obj9293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj9293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj9293_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj9260: Event Touch Down
 *
 */

$("#obj9260").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9260_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9260_onTap is still running");
	return;
}
var obj9260_onTap_runningActionsCount = 0;
var obj9260_onTap_loopCount = 0;
obj9260_onTap_actionGroup0();
});


















/*
 *
 *   obj9263: Event Touch Down
 *
 */

$("#obj9263").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9263_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9263_onTap is still running");
	return;
}
var obj9263_onTap_runningActionsCount = 0;
var obj9263_onTap_loopCount = 0;
obj9263_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj9290: Event Touch Down
 *
 */

$("#obj9290").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9290_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9290_onTap is still running");
	return;
}
var obj9290_onTap_runningActionsCount = 0;
var obj9290_onTap_loopCount = 0;
obj9290_onTap_actionGroup0();
});


















/*
 *
 *   obj9293: Event Touch Down
 *
 */

$("#obj9293").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj9293_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj9293_onTap is still running");
	return;
}
var obj9293_onTap_runningActionsCount = 0;
var obj9293_onTap_loopCount = 0;
obj9293_onTap_actionGroup0();
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
	
$("#obj9254").trigger('SCEventShow');
$("#obj9256").trigger('SCEventShow');
$("#obj9258").trigger('SCEventShow');
$("#obj9260").trigger('SCEventShow');
$("#obj9263").trigger('SCEventShow');
$("#obj9266").trigger('SCEventShow');
$("#obj9268").trigger('SCEventShow');
$("#obj9270").trigger('SCEventShow');
$("#obj9272").trigger('SCEventShow');
$("#obj9274").trigger('SCEventShow');
$("#obj9276").trigger('SCEventShow');
$("#obj9278").trigger('SCEventShow');
$("#obj9280").trigger('SCEventShow');
$("#obj9282").trigger('SCEventShow');
$("#obj9290").trigger('SCEventShow');
$("#obj9293").trigger('SCEventShow');
$("#obj9322").trigger('SCEventShow');
$("#obj9320").trigger('SCEventShow');
$("#obj9318").trigger('SCEventShow');
$("#obj9316").trigger('SCEventShow');
$("#obj9314").trigger('SCEventShow');
$("#obj9312").trigger('SCEventShow');
$("#obj9310").trigger('SCEventShow');
$("#obj9308").trigger('SCEventShow');
$("#obj9306").trigger('SCEventShow');
$("#obj9304").trigger('SCEventShow');
$("#obj9302").trigger('SCEventShow');
$("#obj9300").trigger('SCEventShow');
$("#obj9298").trigger('SCEventShow');
$("#obj9296").trigger('SCEventShow');
	

});