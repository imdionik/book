pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13363;
pubcoder.page.title = pubcoder.page.title || "39";
pubcoder.page.number = pubcoder.page.number || 39;
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
var obj13368_onTap_activeActionGroupIndex = -1;
var obj13368_onTap_runningActionsCount = 0;
var obj13368_onTap_loopCount = 0;
var obj13371_onTap_activeActionGroupIndex = -1;
var obj13371_onTap_runningActionsCount = 0;
var obj13371_onTap_loopCount = 0;
var obj13378_onTap_activeActionGroupIndex = -1;
var obj13378_onTap_runningActionsCount = 0;
var obj13378_onTap_loopCount = 0;

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
		
obj13368_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13368_onTap_activeActionGroupIndex = -1;
		$("#obj13368").trigger("obj13368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13368) {
				console.warn("de-queueing event obj13368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13368_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13370();
function goToPage_13370() {
	window.obj13368_onTap_runningActionsCount = obj13368_onTap_runningActionsCount + 1;

	$("#anchor563")[0].click();
	window.obj13368_onTap_runningActionsCount = window.obj13368_onTap_runningActionsCount - 1;

if (window.obj13368_onTap_runningActionsCount < 0) {
	window.obj13368_onTap_runningActionsCount = 0;
} else if (window.obj13368_onTap_runningActionsCount == 0) {
	obj13368_onTap_actionGroup1();
}
}










































};
obj13368_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13368_onTap_activeActionGroupIndex = -1;
		$("#obj13368").trigger("obj13368_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13368) {
				console.warn("de-queueing event obj13368." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13368").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13368_onTap_activeActionGroupIndex = 1;
	











































};
obj13371_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13371_onTap_activeActionGroupIndex = -1;
		$("#obj13371").trigger("obj13371_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13371) {
				console.warn("de-queueing event obj13371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13371_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13373();
function goToPage_13373() {
	window.obj13371_onTap_runningActionsCount = obj13371_onTap_runningActionsCount + 1;

	$("#anchor564")[0].click();
	window.obj13371_onTap_runningActionsCount = window.obj13371_onTap_runningActionsCount - 1;

if (window.obj13371_onTap_runningActionsCount < 0) {
	window.obj13371_onTap_runningActionsCount = 0;
} else if (window.obj13371_onTap_runningActionsCount == 0) {
	obj13371_onTap_actionGroup1();
}
}










































};
obj13371_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13371_onTap_activeActionGroupIndex = -1;
		$("#obj13371").trigger("obj13371_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13371) {
				console.warn("de-queueing event obj13371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13371_onTap_activeActionGroupIndex = 1;
	











































};
obj13378_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13378_onTap_activeActionGroupIndex = -1;
		$("#obj13378").trigger("obj13378_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13378) {
				console.warn("de-queueing event obj13378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13378_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13380();
function goToPage_13380() {
	window.obj13378_onTap_runningActionsCount = obj13378_onTap_runningActionsCount + 1;

	$("#anchor565")[0].click();
	window.obj13378_onTap_runningActionsCount = window.obj13378_onTap_runningActionsCount - 1;

if (window.obj13378_onTap_runningActionsCount < 0) {
	window.obj13378_onTap_runningActionsCount = 0;
} else if (window.obj13378_onTap_runningActionsCount == 0) {
	obj13378_onTap_actionGroup1();
}
}










































};
obj13378_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13378_onTap_activeActionGroupIndex = -1;
		$("#obj13378").trigger("obj13378_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13378) {
				console.warn("de-queueing event obj13378." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13378").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13378_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj13368: Event Touch Down
 *
 */

$("#obj13368").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13368_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13368_onTap is still running");
	return;
}
var obj13368_onTap_runningActionsCount = 0;
var obj13368_onTap_loopCount = 0;
obj13368_onTap_actionGroup0();
});


















/*
 *
 *   obj13371: Event Touch Down
 *
 */

$("#obj13371").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13371_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13371_onTap is still running");
	return;
}
var obj13371_onTap_runningActionsCount = 0;
var obj13371_onTap_loopCount = 0;
obj13371_onTap_actionGroup0();
});
























































/*
 *
 *   obj13378: Event Touch Down
 *
 */

$("#obj13378").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13378_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13378_onTap is still running");
	return;
}
var obj13378_onTap_runningActionsCount = 0;
var obj13378_onTap_loopCount = 0;
obj13378_onTap_actionGroup0();
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
	
$("#obj13417").trigger('SCEventShow');
$("#obj13366").trigger('SCEventShow');
$("#obj13368").trigger('SCEventShow');
$("#obj13371").trigger('SCEventShow');
$("#obj13374").trigger('SCEventShow');
$("#obj13376").trigger('SCEventShow');
$("#obj13378").trigger('SCEventShow');
$("#obj13381").trigger('SCEventShow');
$("#obj13383").trigger('SCEventShow');
$("#obj13391").trigger('SCEventShow');
$("#obj13397").trigger('SCEventShow');
$("#obj13401").trigger('SCEventShow');
$("#obj13406").trigger('SCEventShow');
$("#obj13411").trigger('SCEventShow');
$("#obj13414").trigger('SCEventShow');
	

});