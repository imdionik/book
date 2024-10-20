pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 2426;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj2431_onTap_activeActionGroupIndex = -1;
var obj2431_onTap_runningActionsCount = 0;
var obj2431_onTap_loopCount = 0;
var obj2434_onTap_activeActionGroupIndex = -1;
var obj2434_onTap_runningActionsCount = 0;
var obj2434_onTap_loopCount = 0;
var obj2441_onTap_activeActionGroupIndex = -1;
var obj2441_onTap_runningActionsCount = 0;
var obj2441_onTap_loopCount = 0;
var obj2444_onTap_activeActionGroupIndex = -1;
var obj2444_onTap_runningActionsCount = 0;
var obj2444_onTap_loopCount = 0;
var obj2450_onTap_activeActionGroupIndex = -1;
var obj2450_onTap_runningActionsCount = 0;
var obj2450_onTap_loopCount = 0;
var obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj2462_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2462_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2806_onTap_activeActionGroupIndex = -1;
var obj2806_onTap_runningActionsCount = 0;
var obj2806_onTap_loopCount = 0;
var obj2820_onTap_activeActionGroupIndex = -1;
var obj2820_onTap_runningActionsCount = 0;
var obj2820_onTap_loopCount = 0;
var obj2848_onTap_activeActionGroupIndex = -1;
var obj2848_onTap_runningActionsCount = 0;
var obj2848_onTap_loopCount = 0;
var obj2855_onTap_activeActionGroupIndex = -1;
var obj2855_onTap_runningActionsCount = 0;
var obj2855_onTap_loopCount = 0;
var obj2897_SCEventRun_activeActionGroupIndex = -1;
var obj2897_SCEventRun_runningActionsCount = 0;
var obj2897_SCEventRun_loopCount = 0;
var obj2936_onTap_activeActionGroupIndex = -1;
var obj2936_onTap_runningActionsCount = 0;
var obj2936_onTap_loopCount = 0;
var obj2926_onTap_activeActionGroupIndex = -1;
var obj2926_onTap_runningActionsCount = 0;
var obj2926_onTap_loopCount = 0;
var obj2916_onTap_activeActionGroupIndex = -1;
var obj2916_onTap_runningActionsCount = 0;
var obj2916_onTap_loopCount = 0;
var obj2909_onTap_activeActionGroupIndex = -1;
var obj2909_onTap_runningActionsCount = 0;
var obj2909_onTap_loopCount = 0;
var obj2902_SCEventRun_activeActionGroupIndex = -1;
var obj2902_SCEventRun_runningActionsCount = 0;
var obj2902_SCEventRun_loopCount = 0;
var obj3015_onTap_activeActionGroupIndex = -1;
var obj3015_onTap_runningActionsCount = 0;
var obj3015_onTap_loopCount = 0;
var obj3003_onTap_activeActionGroupIndex = -1;
var obj3003_onTap_runningActionsCount = 0;
var obj3003_onTap_loopCount = 0;
var obj2993_onTap_activeActionGroupIndex = -1;
var obj2993_onTap_runningActionsCount = 0;
var obj2993_onTap_loopCount = 0;
var obj2984_onTap_activeActionGroupIndex = -1;
var obj2984_onTap_runningActionsCount = 0;
var obj2984_onTap_loopCount = 0;
var obj2977_SCEventRun_activeActionGroupIndex = -1;
var obj2977_SCEventRun_runningActionsCount = 0;
var obj2977_SCEventRun_loopCount = 0;
var obj3127_onTap_activeActionGroupIndex = -1;
var obj3127_onTap_runningActionsCount = 0;
var obj3127_onTap_loopCount = 0;
var obj3114_onTap_activeActionGroupIndex = -1;
var obj3114_onTap_runningActionsCount = 0;
var obj3114_onTap_loopCount = 0;
var obj3105_onTap_activeActionGroupIndex = -1;
var obj3105_onTap_runningActionsCount = 0;
var obj3105_onTap_loopCount = 0;
var obj3096_onTap_activeActionGroupIndex = -1;
var obj3096_onTap_runningActionsCount = 0;
var obj3096_onTap_loopCount = 0;
var obj3089_SCEventRun_activeActionGroupIndex = -1;
var obj3089_SCEventRun_runningActionsCount = 0;
var obj3089_SCEventRun_loopCount = 0;
var obj3186_onTap_activeActionGroupIndex = -1;
var obj3186_onTap_runningActionsCount = 0;
var obj3186_onTap_loopCount = 0;
var obj3174_onTap_activeActionGroupIndex = -1;
var obj3174_onTap_runningActionsCount = 0;
var obj3174_onTap_loopCount = 0;
var obj3164_onTap_activeActionGroupIndex = -1;
var obj3164_onTap_runningActionsCount = 0;
var obj3164_onTap_loopCount = 0;
var obj3155_onTap_activeActionGroupIndex = -1;
var obj3155_onTap_runningActionsCount = 0;
var obj3155_onTap_loopCount = 0;
var obj3148_SCEventRun_activeActionGroupIndex = -1;
var obj3148_SCEventRun_runningActionsCount = 0;
var obj3148_SCEventRun_loopCount = 0;
var obj3242_onTap_activeActionGroupIndex = -1;
var obj3242_onTap_runningActionsCount = 0;
var obj3242_onTap_loopCount = 0;
var obj3230_onTap_activeActionGroupIndex = -1;
var obj3230_onTap_runningActionsCount = 0;
var obj3230_onTap_loopCount = 0;
var obj3220_onTap_activeActionGroupIndex = -1;
var obj3220_onTap_runningActionsCount = 0;
var obj3220_onTap_loopCount = 0;
var obj3211_onTap_activeActionGroupIndex = -1;
var obj3211_onTap_runningActionsCount = 0;
var obj3211_onTap_loopCount = 0;
var obj3204_SCEventRun_activeActionGroupIndex = -1;
var obj3204_SCEventRun_runningActionsCount = 0;
var obj3204_SCEventRun_loopCount = 0;
var obj3298_onTap_activeActionGroupIndex = -1;
var obj3298_onTap_runningActionsCount = 0;
var obj3298_onTap_loopCount = 0;
var obj3286_onTap_activeActionGroupIndex = -1;
var obj3286_onTap_runningActionsCount = 0;
var obj3286_onTap_loopCount = 0;
var obj3276_onTap_activeActionGroupIndex = -1;
var obj3276_onTap_runningActionsCount = 0;
var obj3276_onTap_loopCount = 0;
var obj3267_onTap_activeActionGroupIndex = -1;
var obj3267_onTap_runningActionsCount = 0;
var obj3267_onTap_loopCount = 0;
var obj3260_SCEventRun_activeActionGroupIndex = -1;
var obj3260_SCEventRun_runningActionsCount = 0;
var obj3260_SCEventRun_loopCount = 0;
var obj3354_onTap_activeActionGroupIndex = -1;
var obj3354_onTap_runningActionsCount = 0;
var obj3354_onTap_loopCount = 0;
var obj3342_onTap_activeActionGroupIndex = -1;
var obj3342_onTap_runningActionsCount = 0;
var obj3342_onTap_loopCount = 0;
var obj3332_onTap_activeActionGroupIndex = -1;
var obj3332_onTap_runningActionsCount = 0;
var obj3332_onTap_loopCount = 0;
var obj3323_onTap_activeActionGroupIndex = -1;
var obj3323_onTap_runningActionsCount = 0;
var obj3323_onTap_loopCount = 0;
var obj3316_SCEventRun_activeActionGroupIndex = -1;
var obj3316_SCEventRun_runningActionsCount = 0;
var obj3316_SCEventRun_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj2462_counterValue = 0;
var obj2462_counterTargetValue = 8;
var obj2462_counterCanExceedTargetValue = false;

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
		
obj2431_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2431_onTap_activeActionGroupIndex = -1;
		$("#obj2431").trigger("obj2431_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2431) {
				console.warn("de-queueing event obj2431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2431_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2433();
function goToPage_2433() {
	window.obj2431_onTap_runningActionsCount = obj2431_onTap_runningActionsCount + 1;

	$("#anchor148")[0].click();
	window.obj2431_onTap_runningActionsCount = window.obj2431_onTap_runningActionsCount - 1;

if (window.obj2431_onTap_runningActionsCount < 0) {
	window.obj2431_onTap_runningActionsCount = 0;
} else if (window.obj2431_onTap_runningActionsCount == 0) {
	obj2431_onTap_actionGroup1();
}
}










































};
obj2431_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2431_onTap_activeActionGroupIndex = -1;
		$("#obj2431").trigger("obj2431_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2431) {
				console.warn("de-queueing event obj2431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2431_onTap_activeActionGroupIndex = 1;
	











































};
obj2434_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2434_onTap_activeActionGroupIndex = -1;
		$("#obj2434").trigger("obj2434_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2434) {
				console.warn("de-queueing event obj2434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2434_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2436();
function goToPage_2436() {
	window.obj2434_onTap_runningActionsCount = obj2434_onTap_runningActionsCount + 1;

	$("#anchor149")[0].click();
	window.obj2434_onTap_runningActionsCount = window.obj2434_onTap_runningActionsCount - 1;

if (window.obj2434_onTap_runningActionsCount < 0) {
	window.obj2434_onTap_runningActionsCount = 0;
} else if (window.obj2434_onTap_runningActionsCount == 0) {
	obj2434_onTap_actionGroup1();
}
}










































};
obj2434_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2434_onTap_activeActionGroupIndex = -1;
		$("#obj2434").trigger("obj2434_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2434) {
				console.warn("de-queueing event obj2434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2434_onTap_activeActionGroupIndex = 1;
	











































};
obj2441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2441_onTap_activeActionGroupIndex = -1;
		$("#obj2441").trigger("obj2441_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2441) {
				console.warn("de-queueing event obj2441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2441_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2443();
function goToPage_2443() {
	window.obj2441_onTap_runningActionsCount = obj2441_onTap_runningActionsCount + 1;

	$("#anchor150")[0].click();
	window.obj2441_onTap_runningActionsCount = window.obj2441_onTap_runningActionsCount - 1;

if (window.obj2441_onTap_runningActionsCount < 0) {
	window.obj2441_onTap_runningActionsCount = 0;
} else if (window.obj2441_onTap_runningActionsCount == 0) {
	obj2441_onTap_actionGroup1();
}
}










































};
obj2441_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2441_onTap_activeActionGroupIndex = -1;
		$("#obj2441").trigger("obj2441_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2441) {
				console.warn("de-queueing event obj2441." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2441").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2441_onTap_activeActionGroupIndex = 1;
	











































};
obj2444_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onTap_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2450
(function(){
	window.obj2444_onTap_runningActionsCount = obj2444_onTap_runningActionsCount + 1;


	var selector = "#obj2450";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj2444_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onTap_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj2444 
hide_2447();
function hide_2447() {
	var selector = "#obj2444";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2444_onTap_runningActionsCount = obj2444_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2447(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2444_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onTap_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj2458
(function(){
	window.obj2444_onTap_runningActionsCount = obj2444_onTap_runningActionsCount + 1;


	var selector = "#obj2458";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2456
(function(){
	window.obj2444_onTap_runningActionsCount = obj2444_onTap_runningActionsCount + 1;


	var selector = "#obj2456";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2444_onTap_runningActionsCount = window.obj2444_onTap_runningActionsCount - 1;

if (window.obj2444_onTap_runningActionsCount < 0) {
	window.obj2444_onTap_runningActionsCount = 0;
} else if (window.obj2444_onTap_runningActionsCount == 0) {
	obj2444_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj2444_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2444_onTap_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onTap_activeActionGroupIndex = 3;
	











































};
obj2450_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2450_onTap_activeActionGroupIndex = -1;
		$("#obj2450").trigger("obj2450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2450) {
				console.warn("de-queueing event obj2450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2450_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2444
(function(){
	window.obj2450_onTap_runningActionsCount = obj2450_onTap_runningActionsCount + 1;


	var selector = "#obj2444";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj2450_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2450_onTap_activeActionGroupIndex = -1;
		$("#obj2450").trigger("obj2450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2450) {
				console.warn("de-queueing event obj2450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2450_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj2450 
hide_2453();
function hide_2453() {
	var selector = "#obj2450";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2450_onTap_runningActionsCount = obj2450_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2453(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2450_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2450_onTap_activeActionGroupIndex = -1;
		$("#obj2450").trigger("obj2450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2450) {
				console.warn("de-queueing event obj2450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2450_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2456 
hide_2454();
function hide_2454() {
	var selector = "#obj2456";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2450_onTap_runningActionsCount = obj2450_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2454(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2458 
hide_2455();
function hide_2455() {
	var selector = "#obj2458";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2450_onTap_runningActionsCount = obj2450_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2455(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2450_onTap_runningActionsCount = window.obj2450_onTap_runningActionsCount - 1;

if (window.obj2450_onTap_runningActionsCount < 0) {
	window.obj2450_onTap_runningActionsCount = 0;
} else if (window.obj2450_onTap_runningActionsCount == 0) {
	obj2450_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2450_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2450_onTap_activeActionGroupIndex = -1;
		$("#obj2450").trigger("obj2450_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2450) {
				console.warn("de-queueing event obj2450." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2450").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2450_onTap_activeActionGroupIndex = 3;
	











































};
obj2462_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2462").trigger("obj2462_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2462) {
				console.warn("de-queueing event obj2462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_2464();
function wait_2464() {
	window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = obj2462_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2462_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj2462_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2462").trigger("obj2462_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2462) {
				console.warn("de-queueing event obj2462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_2465();
function goToPage_2465() {
	window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = obj2462_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor151")[0].click();
	window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2462_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2462_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj2462_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2462").trigger("obj2462_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2462) {
				console.warn("de-queueing event obj2462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj2806_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2806_onTap_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2806) {
				console.warn("de-queueing event obj2806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2806_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2886();
function playAudioFile_2886() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2886")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2886");
			$("#obj_audio_playSoundFile2886").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2862();
function switchText_2862() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2806").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2806_content");
			setTimeout(function () {
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2806_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2806_onTap_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2806) {
				console.warn("de-queueing event obj2806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2806_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2820
(function(){
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;


	var selector = "#obj2820";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2848
(function(){
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;


	var selector = "#obj2848";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2855
(function(){
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;


	var selector = "#obj2855";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj2806_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2806_onTap_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2806) {
				console.warn("de-queueing event obj2806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2806_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2902 
runActionList_2953();
function runActionList_2953() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3032();
function runActionList_3032() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3144();
function runActionList_3144() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3385();
function runActionList_3385() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3386();
function runActionList_3386() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3387();
function runActionList_3387() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3388();
function runActionList_3388() {
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup3();
}		
	}, 1);
}







};
obj2806_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2806_onTap_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2806) {
				console.warn("de-queueing event obj2806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2806_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_2883();
function hide_2883() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2883(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_2884();
function hide_2884() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2884(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_2885();
function hide_2885() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2806_onTap_runningActionsCount = obj2806_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2885(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2806_onTap_runningActionsCount = window.obj2806_onTap_runningActionsCount - 1;

if (window.obj2806_onTap_runningActionsCount < 0) {
	window.obj2806_onTap_runningActionsCount = 0;
} else if (window.obj2806_onTap_runningActionsCount == 0) {
	obj2806_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2806_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2806_onTap_activeActionGroupIndex = -1;
		$("#obj2806").trigger("obj2806_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2806) {
				console.warn("de-queueing event obj2806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2806_onTap_activeActionGroupIndex = 4;
	











































};
obj2820_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2820_onTap_activeActionGroupIndex = -1;
		$("#obj2820").trigger("obj2820_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2820) {
				console.warn("de-queueing event obj2820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2820_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj2820_onTap_runningActionsCount = obj2820_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2863();
function playAudioFile_2863() {
	window.obj2820_onTap_runningActionsCount = obj2820_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2863")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2863");
			$("#obj_audio_playSoundFile2863").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2872();
function switchText_2872() {
	window.obj2820_onTap_runningActionsCount = obj2820_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2820_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2820_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2820").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2820_content");
			setTimeout(function () {
				window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2820 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2820_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2820_onTap_activeActionGroupIndex = -1;
		$("#obj2820").trigger("obj2820_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2820) {
				console.warn("de-queueing event obj2820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2820_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_2975();
function wait_2975() {
	window.obj2820_onTap_runningActionsCount = obj2820_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup2();
}
	}, 600);
}


























};
obj2820_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2820_onTap_activeActionGroupIndex = -1;
		$("#obj2820").trigger("obj2820_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2820) {
				console.warn("de-queueing event obj2820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2820_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_2976();
function switchText_2976() {
	window.obj2820_onTap_runningActionsCount = obj2820_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2820_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2820_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2820").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2820_content");
			setTimeout(function () {
				window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj2820 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2820_onTap_runningActionsCount = window.obj2820_onTap_runningActionsCount - 1;

if (window.obj2820_onTap_runningActionsCount < 0) {
	window.obj2820_onTap_runningActionsCount = 0;
} else if (window.obj2820_onTap_runningActionsCount == 0) {
	obj2820_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj2820_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2820_onTap_activeActionGroupIndex = -1;
		$("#obj2820").trigger("obj2820_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2820) {
				console.warn("de-queueing event obj2820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2820_onTap_activeActionGroupIndex = 3;
	











































};
obj2848_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2848_onTap_activeActionGroupIndex = -1;
		$("#obj2848").trigger("obj2848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2848) {
				console.warn("de-queueing event obj2848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2848_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_2890();
function hide_2890() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2890(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2848_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2848_onTap_activeActionGroupIndex = -1;
		$("#obj2848").trigger("obj2848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2848) {
				console.warn("de-queueing event obj2848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2848_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2891
(function(){
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;


	var selector = "#obj2891";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2871();
function playAudioFile_2871() {
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2871")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2871");
			$("#obj_audio_playSoundFile2871").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2870();
function switchText_2870() {
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2806").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2806_content");
			setTimeout(function () {
				window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3437();
function incrementCounter_3437() {
	window.obj2848_onTap_runningActionsCount = obj2848_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2848_onTap_runningActionsCount = window.obj2848_onTap_runningActionsCount - 1;

if (window.obj2848_onTap_runningActionsCount < 0) {
	window.obj2848_onTap_runningActionsCount = 0;
} else if (window.obj2848_onTap_runningActionsCount == 0) {
	obj2848_onTap_actionGroup2();
} }, 1);
}











};
obj2848_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2848_onTap_activeActionGroupIndex = -1;
		$("#obj2848").trigger("obj2848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2848) {
				console.warn("de-queueing event obj2848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2848_onTap_activeActionGroupIndex = 2;
	











































};
obj2855_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2855_onTap_activeActionGroupIndex = -1;
		$("#obj2855").trigger("obj2855_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2855) {
				console.warn("de-queueing event obj2855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2855_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj2855_onTap_runningActionsCount = obj2855_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2869();
function playAudioFile_2869() {
	window.obj2855_onTap_runningActionsCount = obj2855_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2869")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2869");
			$("#obj_audio_playSoundFile2869").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2880();
function switchText_2880() {
	window.obj2855_onTap_runningActionsCount = obj2855_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2855").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2855_content");
			setTimeout(function () {
				window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2855_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2855_onTap_activeActionGroupIndex = -1;
		$("#obj2855").trigger("obj2855_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2855) {
				console.warn("de-queueing event obj2855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2855_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_2973();
function wait_2973() {
	window.obj2855_onTap_runningActionsCount = obj2855_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup2();
}
	}, 600);
}


























};
obj2855_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2855_onTap_activeActionGroupIndex = -1;
		$("#obj2855").trigger("obj2855_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2855) {
				console.warn("de-queueing event obj2855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2855_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_2974();
function switchText_2974() {
	window.obj2855_onTap_runningActionsCount = obj2855_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2855_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2855_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2855").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2855_content");
			setTimeout(function () {
				window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj2855 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2855_onTap_runningActionsCount = window.obj2855_onTap_runningActionsCount - 1;

if (window.obj2855_onTap_runningActionsCount < 0) {
	window.obj2855_onTap_runningActionsCount = 0;
} else if (window.obj2855_onTap_runningActionsCount == 0) {
	obj2855_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj2855_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2855_onTap_activeActionGroupIndex = -1;
		$("#obj2855").trigger("obj2855_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2855) {
				console.warn("de-queueing event obj2855." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2855").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2855_onTap_activeActionGroupIndex = 3;
	











































};
obj2897_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2897_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2897").trigger("obj2897_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2897) {
				console.warn("de-queueing event obj2897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2897_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2820 
hide_2899();
function hide_2899() {
	var selector = "#obj2820";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2897_SCEventRun_runningActionsCount = obj2897_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2899(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2848 
hide_2900();
function hide_2900() {
	var selector = "#obj2848";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2897_SCEventRun_runningActionsCount = obj2897_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2900(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2855 
hide_2901();
function hide_2901() {
	var selector = "#obj2855";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2897_SCEventRun_runningActionsCount = obj2897_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2901(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2897_SCEventRun_runningActionsCount = window.obj2897_SCEventRun_runningActionsCount - 1;

if (window.obj2897_SCEventRun_runningActionsCount < 0) {
	window.obj2897_SCEventRun_runningActionsCount = 0;
} else if (window.obj2897_SCEventRun_runningActionsCount == 0) {
	obj2897_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2897_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2897_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2897").trigger("obj2897_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2897) {
				console.warn("de-queueing event obj2897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2897_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj2936_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2936_onTap_activeActionGroupIndex = -1;
		$("#obj2936").trigger("obj2936_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2936) {
				console.warn("de-queueing event obj2936." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2936").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2936_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2938();
function playAudioFile_2938() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2938")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2938");
			$("#obj_audio_playSoundFile2938").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2940();
function switchText_2940() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2936_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2936_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2936").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2936_content");
			setTimeout(function () {
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2936 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2936_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2936_onTap_activeActionGroupIndex = -1;
		$("#obj2936").trigger("obj2936_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2936) {
				console.warn("de-queueing event obj2936." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2936").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2936_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2926
(function(){
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;


	var selector = "#obj2926";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2916
(function(){
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;


	var selector = "#obj2916";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2909
(function(){
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;


	var selector = "#obj2909";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj2936_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2936_onTap_activeActionGroupIndex = -1;
		$("#obj2936").trigger("obj2936_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2936) {
				console.warn("de-queueing event obj2936." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2936").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2936_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_2952();
function runActionList_2952() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3031();
function runActionList_3031() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3145();
function runActionList_3145() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3389();
function runActionList_3389() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3390();
function runActionList_3390() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3391();
function runActionList_3391() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3392();
function runActionList_3392() {
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup3();
}		
	}, 1);
}







};
obj2936_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2936_onTap_activeActionGroupIndex = -1;
		$("#obj2936").trigger("obj2936_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2936) {
				console.warn("de-queueing event obj2936." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2936").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2936_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_2941();
function hide_2941() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2941(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_2942();
function hide_2942() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2942(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_2943();
function hide_2943() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2936_onTap_runningActionsCount = obj2936_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2943(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2936_onTap_runningActionsCount = window.obj2936_onTap_runningActionsCount - 1;

if (window.obj2936_onTap_runningActionsCount < 0) {
	window.obj2936_onTap_runningActionsCount = 0;
} else if (window.obj2936_onTap_runningActionsCount == 0) {
	obj2936_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2936_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2936_onTap_activeActionGroupIndex = -1;
		$("#obj2936").trigger("obj2936_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2936) {
				console.warn("de-queueing event obj2936." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2936").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2936_onTap_activeActionGroupIndex = 4;
	











































};
obj2926_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2926_onTap_activeActionGroupIndex = -1;
		$("#obj2926").trigger("obj2926_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2926) {
				console.warn("de-queueing event obj2926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2926_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_2967();
function hide_2967() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2967(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2926_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2926_onTap_activeActionGroupIndex = -1;
		$("#obj2926").trigger("obj2926_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2926) {
				console.warn("de-queueing event obj2926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2926_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2907
(function(){
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;


	var selector = "#obj2907";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2963();
function playAudioFile_2963() {
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2963")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2963");
			$("#obj_audio_playSoundFile2963").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2962();
function switchText_2962() {
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #266fd5;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2936_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2936_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2936").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2936_content");
			setTimeout(function () {
				window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2936 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3436();
function incrementCounter_3436() {
	window.obj2926_onTap_runningActionsCount = obj2926_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2926_onTap_runningActionsCount = window.obj2926_onTap_runningActionsCount - 1;

if (window.obj2926_onTap_runningActionsCount < 0) {
	window.obj2926_onTap_runningActionsCount = 0;
} else if (window.obj2926_onTap_runningActionsCount == 0) {
	obj2926_onTap_actionGroup2();
} }, 1);
}











};
obj2926_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2926_onTap_activeActionGroupIndex = -1;
		$("#obj2926").trigger("obj2926_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2926) {
				console.warn("de-queueing event obj2926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2926_onTap_activeActionGroupIndex = 2;
	











































};
obj2916_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2916_onTap_activeActionGroupIndex = -1;
		$("#obj2916").trigger("obj2916_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2916) {
				console.warn("de-queueing event obj2916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2916_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2876
(function(){
	window.obj2916_onTap_runningActionsCount = obj2916_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2959();
function playAudioFile_2959() {
	window.obj2916_onTap_runningActionsCount = obj2916_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2959")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2959");
			$("#obj_audio_playSoundFile2959").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2960();
function switchText_2960() {
	window.obj2916_onTap_runningActionsCount = obj2916_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&lt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2916_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2916_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2916").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2916_content");
			setTimeout(function () {
				window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2916 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2916_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2916_onTap_activeActionGroupIndex = -1;
		$("#obj2916").trigger("obj2916_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2916) {
				console.warn("de-queueing event obj2916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2916_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_2971();
function wait_2971() {
	window.obj2916_onTap_runningActionsCount = obj2916_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup2();
}
	}, 600);
}


























};
obj2916_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2916_onTap_activeActionGroupIndex = -1;
		$("#obj2916").trigger("obj2916_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2916) {
				console.warn("de-queueing event obj2916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2916_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_2972();
function switchText_2972() {
	window.obj2916_onTap_runningActionsCount = obj2916_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2916_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2916_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2916").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2916_content");
			setTimeout(function () {
				window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj2916 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2916_onTap_runningActionsCount = window.obj2916_onTap_runningActionsCount - 1;

if (window.obj2916_onTap_runningActionsCount < 0) {
	window.obj2916_onTap_runningActionsCount = 0;
} else if (window.obj2916_onTap_runningActionsCount == 0) {
	obj2916_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj2916_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2916_onTap_activeActionGroupIndex = -1;
		$("#obj2916").trigger("obj2916_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2916) {
				console.warn("de-queueing event obj2916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2916_onTap_activeActionGroupIndex = 3;
	











































};
obj2909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2909_onTap_activeActionGroupIndex = -1;
		$("#obj2909").trigger("obj2909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2909) {
				console.warn("de-queueing event obj2909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2909_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj2909_onTap_runningActionsCount = obj2909_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2912();
function playAudioFile_2912() {
	window.obj2909_onTap_runningActionsCount = obj2909_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2912")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2912");
			$("#obj_audio_playSoundFile2912").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2913();
function switchText_2913() {
	window.obj2909_onTap_runningActionsCount = obj2909_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2909").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2909_content");
			setTimeout(function () {
				window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2909_onTap_activeActionGroupIndex = -1;
		$("#obj2909").trigger("obj2909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2909) {
				console.warn("de-queueing event obj2909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2909_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_2969();
function wait_2969() {
	window.obj2909_onTap_runningActionsCount = obj2909_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup2();
}
	}, 600);
}


























};
obj2909_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2909_onTap_activeActionGroupIndex = -1;
		$("#obj2909").trigger("obj2909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2909) {
				console.warn("de-queueing event obj2909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2909_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_2970();
function switchText_2970() {
	window.obj2909_onTap_runningActionsCount = obj2909_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2909_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2909_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2909").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2909_content");
			setTimeout(function () {
				window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj2909 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2909_onTap_runningActionsCount = window.obj2909_onTap_runningActionsCount - 1;

if (window.obj2909_onTap_runningActionsCount < 0) {
	window.obj2909_onTap_runningActionsCount = 0;
} else if (window.obj2909_onTap_runningActionsCount == 0) {
	obj2909_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj2909_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2909_onTap_activeActionGroupIndex = -1;
		$("#obj2909").trigger("obj2909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2909) {
				console.warn("de-queueing event obj2909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2909_onTap_activeActionGroupIndex = 3;
	











































};
obj2902_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2902_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2902").trigger("obj2902_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2902) {
				console.warn("de-queueing event obj2902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2902_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2926 
hide_2904();
function hide_2904() {
	var selector = "#obj2926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2902_SCEventRun_runningActionsCount = obj2902_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2904(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2916 
hide_2905();
function hide_2905() {
	var selector = "#obj2916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2902_SCEventRun_runningActionsCount = obj2902_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2905(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2909 
hide_2906();
function hide_2906() {
	var selector = "#obj2909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2902_SCEventRun_runningActionsCount = obj2902_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2906(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2902_SCEventRun_runningActionsCount = window.obj2902_SCEventRun_runningActionsCount - 1;

if (window.obj2902_SCEventRun_runningActionsCount < 0) {
	window.obj2902_SCEventRun_runningActionsCount = 0;
} else if (window.obj2902_SCEventRun_runningActionsCount == 0) {
	obj2902_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2902_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2902_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2902").trigger("obj2902_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2902) {
				console.warn("de-queueing event obj2902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2902_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3015_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3015_onTap_activeActionGroupIndex = -1;
		$("#obj3015").trigger("obj3015_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3015) {
				console.warn("de-queueing event obj3015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3015_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3018();
function playAudioFile_3018() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3018")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3018");
			$("#obj_audio_playSoundFile3018").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3020();
function switchText_3020() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3015_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3015_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3015").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3015_content");
			setTimeout(function () {
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3015 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3015_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3015_onTap_activeActionGroupIndex = -1;
		$("#obj3015").trigger("obj3015_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3015) {
				console.warn("de-queueing event obj3015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3015_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3003
(function(){
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;


	var selector = "#obj3003";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2993
(function(){
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;


	var selector = "#obj2993";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2984
(function(){
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;


	var selector = "#obj2984";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3015_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3015_onTap_activeActionGroupIndex = -1;
		$("#obj3015").trigger("obj3015_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3015) {
				console.warn("de-queueing event obj3015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3015_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_3033();
function runActionList_3033() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3017();
function runActionList_3017() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3146();
function runActionList_3146() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3393();
function runActionList_3393() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3394();
function runActionList_3394() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3395();
function runActionList_3395() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3396();
function runActionList_3396() {
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup3();
}		
	}, 1);
}







};
obj3015_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3015_onTap_activeActionGroupIndex = -1;
		$("#obj3015").trigger("obj3015_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3015) {
				console.warn("de-queueing event obj3015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3015_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_3021();
function hide_3021() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3021(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3022();
function hide_3022() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3022(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3023();
function hide_3023() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3015_onTap_runningActionsCount = obj3015_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3023(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3015_onTap_runningActionsCount = window.obj3015_onTap_runningActionsCount - 1;

if (window.obj3015_onTap_runningActionsCount < 0) {
	window.obj3015_onTap_runningActionsCount = 0;
} else if (window.obj3015_onTap_runningActionsCount == 0) {
	obj3015_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3015_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3015_onTap_activeActionGroupIndex = -1;
		$("#obj3015").trigger("obj3015_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3015) {
				console.warn("de-queueing event obj3015." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3015").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3015_onTap_activeActionGroupIndex = 4;
	











































};
obj3003_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3003_onTap_activeActionGroupIndex = -1;
		$("#obj3003").trigger("obj3003_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3003) {
				console.warn("de-queueing event obj3003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3003_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3003_onTap_runningActionsCount = obj3003_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3006();
function playAudioFile_3006() {
	window.obj3003_onTap_runningActionsCount = obj3003_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3006")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3006");
			$("#obj_audio_playSoundFile3006").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3007();
function switchText_3007() {
	window.obj3003_onTap_runningActionsCount = obj3003_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3003_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3003_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3003").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3003_content");
			setTimeout(function () {
				window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3003 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3003_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3003_onTap_activeActionGroupIndex = -1;
		$("#obj3003").trigger("obj3003_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3003) {
				console.warn("de-queueing event obj3003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3003_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3009();
function wait_3009() {
	window.obj3003_onTap_runningActionsCount = obj3003_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3003_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3003_onTap_activeActionGroupIndex = -1;
		$("#obj3003").trigger("obj3003_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3003) {
				console.warn("de-queueing event obj3003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3003_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3010();
function switchText_3010() {
	window.obj3003_onTap_runningActionsCount = obj3003_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3003_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3003_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3003").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3003_content");
			setTimeout(function () {
				window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3003 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3003_onTap_runningActionsCount = window.obj3003_onTap_runningActionsCount - 1;

if (window.obj3003_onTap_runningActionsCount < 0) {
	window.obj3003_onTap_runningActionsCount = 0;
} else if (window.obj3003_onTap_runningActionsCount == 0) {
	obj3003_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3003_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3003_onTap_activeActionGroupIndex = -1;
		$("#obj3003").trigger("obj3003_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3003) {
				console.warn("de-queueing event obj3003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3003_onTap_activeActionGroupIndex = 3;
	











































};
obj2993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2993_onTap_activeActionGroupIndex = -1;
		$("#obj2993").trigger("obj2993_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2993) {
				console.warn("de-queueing event obj2993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2993_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3000();
function hide_3000() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3000(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2993_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2993_onTap_activeActionGroupIndex = -1;
		$("#obj2993").trigger("obj2993_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2993) {
				console.warn("de-queueing event obj2993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2993_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2982
(function(){
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;


	var selector = "#obj2982";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2996();
function playAudioFile_2996() {
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2996")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2996");
			$("#obj_audio_playSoundFile2996").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2995();
function switchText_2995() {
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3015_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3015_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3015").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3015_content");
			setTimeout(function () {
				window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3015 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3435();
function incrementCounter_3435() {
	window.obj2993_onTap_runningActionsCount = obj2993_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2993_onTap_runningActionsCount = window.obj2993_onTap_runningActionsCount - 1;

if (window.obj2993_onTap_runningActionsCount < 0) {
	window.obj2993_onTap_runningActionsCount = 0;
} else if (window.obj2993_onTap_runningActionsCount == 0) {
	obj2993_onTap_actionGroup2();
} }, 1);
}











};
obj2993_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2993_onTap_activeActionGroupIndex = -1;
		$("#obj2993").trigger("obj2993_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2993) {
				console.warn("de-queueing event obj2993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2993_onTap_activeActionGroupIndex = 2;
	











































};
obj2984_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2984_onTap_activeActionGroupIndex = -1;
		$("#obj2984").trigger("obj2984_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2984) {
				console.warn("de-queueing event obj2984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2984_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj2984_onTap_runningActionsCount = obj2984_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_2987();
function playAudioFile_2987() {
	window.obj2984_onTap_runningActionsCount = obj2984_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2987")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2987");
			$("#obj_audio_playSoundFile2987").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_2988();
function switchText_2988() {
	window.obj2984_onTap_runningActionsCount = obj2984_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2984_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2984_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2984").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2984_content");
			setTimeout(function () {
				window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj2984 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj2984_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2984_onTap_activeActionGroupIndex = -1;
		$("#obj2984").trigger("obj2984_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2984) {
				console.warn("de-queueing event obj2984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2984_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_2990();
function wait_2990() {
	window.obj2984_onTap_runningActionsCount = obj2984_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup2();
}
	}, 600);
}


























};
obj2984_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2984_onTap_activeActionGroupIndex = -1;
		$("#obj2984").trigger("obj2984_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2984) {
				console.warn("de-queueing event obj2984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2984_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_2991();
function switchText_2991() {
	window.obj2984_onTap_runningActionsCount = obj2984_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2984_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2984_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj2984").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2984_content");
			setTimeout(function () {
				window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj2984 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2984_onTap_runningActionsCount = window.obj2984_onTap_runningActionsCount - 1;

if (window.obj2984_onTap_runningActionsCount < 0) {
	window.obj2984_onTap_runningActionsCount = 0;
} else if (window.obj2984_onTap_runningActionsCount == 0) {
	obj2984_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj2984_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2984_onTap_activeActionGroupIndex = -1;
		$("#obj2984").trigger("obj2984_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2984) {
				console.warn("de-queueing event obj2984." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2984").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2984_onTap_activeActionGroupIndex = 3;
	











































};
obj2977_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2977_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2977").trigger("obj2977_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2977) {
				console.warn("de-queueing event obj2977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2977_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3003 
hide_2979();
function hide_2979() {
	var selector = "#obj3003";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2977_SCEventRun_runningActionsCount = obj2977_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2979(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2993 
hide_2980();
function hide_2980() {
	var selector = "#obj2993";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2977_SCEventRun_runningActionsCount = obj2977_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2980(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2984 
hide_2981();
function hide_2981() {
	var selector = "#obj2984";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2977_SCEventRun_runningActionsCount = obj2977_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2981(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2977_SCEventRun_runningActionsCount = window.obj2977_SCEventRun_runningActionsCount - 1;

if (window.obj2977_SCEventRun_runningActionsCount < 0) {
	window.obj2977_SCEventRun_runningActionsCount = 0;
} else if (window.obj2977_SCEventRun_runningActionsCount == 0) {
	obj2977_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj2977_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2977_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2977").trigger("obj2977_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2977) {
				console.warn("de-queueing event obj2977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2977_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3127_onTap_activeActionGroupIndex = -1;
		$("#obj3127").trigger("obj3127_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3127) {
				console.warn("de-queueing event obj3127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3127_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3131();
function playAudioFile_3131() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3131")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3131");
			$("#obj_audio_playSoundFile3131").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3133();
function switchText_3133() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3127").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3127_content");
			setTimeout(function () {
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3127_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3127_onTap_activeActionGroupIndex = -1;
		$("#obj3127").trigger("obj3127_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3127) {
				console.warn("de-queueing event obj3127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3127_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3114
(function(){
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;


	var selector = "#obj3114";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3105
(function(){
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;


	var selector = "#obj3105";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3096
(function(){
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;


	var selector = "#obj3096";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3127_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3127_onTap_activeActionGroupIndex = -1;
		$("#obj3127").trigger("obj3127_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3127) {
				console.warn("de-queueing event obj3127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3127_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_3129();
function runActionList_3129() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3130();
function runActionList_3130() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3147();
function runActionList_3147() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3397();
function runActionList_3397() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3398();
function runActionList_3398() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3399();
function runActionList_3399() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3400();
function runActionList_3400() {
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup3();
}		
	}, 1);
}







};
obj3127_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3127_onTap_activeActionGroupIndex = -1;
		$("#obj3127").trigger("obj3127_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3127) {
				console.warn("de-queueing event obj3127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3127_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_3134();
function hide_3134() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3134(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3135();
function hide_3135() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3135(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3136();
function hide_3136() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3127_onTap_runningActionsCount = obj3127_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3136(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3127_onTap_runningActionsCount = window.obj3127_onTap_runningActionsCount - 1;

if (window.obj3127_onTap_runningActionsCount < 0) {
	window.obj3127_onTap_runningActionsCount = 0;
} else if (window.obj3127_onTap_runningActionsCount == 0) {
	obj3127_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3127_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3127_onTap_activeActionGroupIndex = -1;
		$("#obj3127").trigger("obj3127_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3127) {
				console.warn("de-queueing event obj3127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3127_onTap_activeActionGroupIndex = 4;
	











































};
obj3114_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3114_onTap_activeActionGroupIndex = -1;
		$("#obj3114").trigger("obj3114_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3114) {
				console.warn("de-queueing event obj3114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3114_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3121();
function hide_3121() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3121(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3114_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3114_onTap_activeActionGroupIndex = -1;
		$("#obj3114").trigger("obj3114_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3114) {
				console.warn("de-queueing event obj3114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3114_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3094
(function(){
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;


	var selector = "#obj3094";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3117();
function playAudioFile_3117() {
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3117")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3117");
			$("#obj_audio_playSoundFile3117").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3116();
function switchText_3116() {
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #266fd5;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3127").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3127_content");
			setTimeout(function () {
				window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3434();
function incrementCounter_3434() {
	window.obj3114_onTap_runningActionsCount = obj3114_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3114_onTap_runningActionsCount = window.obj3114_onTap_runningActionsCount - 1;

if (window.obj3114_onTap_runningActionsCount < 0) {
	window.obj3114_onTap_runningActionsCount = 0;
} else if (window.obj3114_onTap_runningActionsCount == 0) {
	obj3114_onTap_actionGroup2();
} }, 1);
}











};
obj3114_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3114_onTap_activeActionGroupIndex = -1;
		$("#obj3114").trigger("obj3114_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3114) {
				console.warn("de-queueing event obj3114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3114_onTap_activeActionGroupIndex = 2;
	











































};
obj3105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2876
(function(){
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3108();
function playAudioFile_3108() {
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3108")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3108");
			$("#obj_audio_playSoundFile3108").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3109();
function switchText_3109() {
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&lt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3105_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3105_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3105").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3105_content");
			setTimeout(function () {
				window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3105 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3105_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3111();
function wait_3111() {
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3105_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3112();
function switchText_3112() {
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3105_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3105_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3105").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3105_content");
			setTimeout(function () {
				window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3105 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;

if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3105_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 3;
	











































};
obj3096_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3096_onTap_activeActionGroupIndex = -1;
		$("#obj3096").trigger("obj3096_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3096) {
				console.warn("de-queueing event obj3096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3096_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj3096_onTap_runningActionsCount = obj3096_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3099();
function playAudioFile_3099() {
	window.obj3096_onTap_runningActionsCount = obj3096_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3099")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3099");
			$("#obj_audio_playSoundFile3099").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3100();
function switchText_3100() {
	window.obj3096_onTap_runningActionsCount = obj3096_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3096_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3096_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3096").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3096_content");
			setTimeout(function () {
				window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3096 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3096_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3096_onTap_activeActionGroupIndex = -1;
		$("#obj3096").trigger("obj3096_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3096) {
				console.warn("de-queueing event obj3096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3096_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3102();
function wait_3102() {
	window.obj3096_onTap_runningActionsCount = obj3096_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3096_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3096_onTap_activeActionGroupIndex = -1;
		$("#obj3096").trigger("obj3096_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3096) {
				console.warn("de-queueing event obj3096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3096_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3103();
function switchText_3103() {
	window.obj3096_onTap_runningActionsCount = obj3096_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3096_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3096_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3096").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3096_content");
			setTimeout(function () {
				window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3096 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3096_onTap_runningActionsCount = window.obj3096_onTap_runningActionsCount - 1;

if (window.obj3096_onTap_runningActionsCount < 0) {
	window.obj3096_onTap_runningActionsCount = 0;
} else if (window.obj3096_onTap_runningActionsCount == 0) {
	obj3096_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3096_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3096_onTap_activeActionGroupIndex = -1;
		$("#obj3096").trigger("obj3096_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3096) {
				console.warn("de-queueing event obj3096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3096_onTap_activeActionGroupIndex = 3;
	











































};
obj3089_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3089_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3089").trigger("obj3089_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3089) {
				console.warn("de-queueing event obj3089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3089_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3114 
hide_3091();
function hide_3091() {
	var selector = "#obj3114";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3089_SCEventRun_runningActionsCount = obj3089_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3091(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3105 
hide_3092();
function hide_3092() {
	var selector = "#obj3105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3089_SCEventRun_runningActionsCount = obj3089_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3092(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3096 
hide_3093();
function hide_3093() {
	var selector = "#obj3096";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3089_SCEventRun_runningActionsCount = obj3089_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3093(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3089_SCEventRun_runningActionsCount = window.obj3089_SCEventRun_runningActionsCount - 1;

if (window.obj3089_SCEventRun_runningActionsCount < 0) {
	window.obj3089_SCEventRun_runningActionsCount = 0;
} else if (window.obj3089_SCEventRun_runningActionsCount == 0) {
	obj3089_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3089_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3089_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3089").trigger("obj3089_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3089) {
				console.warn("de-queueing event obj3089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3089_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3186_onTap_activeActionGroupIndex = -1;
		$("#obj3186").trigger("obj3186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3186) {
				console.warn("de-queueing event obj3186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3186_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3191();
function playAudioFile_3191() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3191")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3191");
			$("#obj_audio_playSoundFile3191").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3193();
function switchText_3193() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3186_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3186_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3186").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3186_content");
			setTimeout(function () {
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3186 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3186_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3186_onTap_activeActionGroupIndex = -1;
		$("#obj3186").trigger("obj3186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3186) {
				console.warn("de-queueing event obj3186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3186_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3174
(function(){
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;


	var selector = "#obj3174";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3164
(function(){
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;


	var selector = "#obj3164";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3155
(function(){
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;


	var selector = "#obj3155";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3186_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3186_onTap_activeActionGroupIndex = -1;
		$("#obj3186").trigger("obj3186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3186) {
				console.warn("de-queueing event obj3186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3186_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_3188();
function runActionList_3188() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3189();
function runActionList_3189() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3190();
function runActionList_3190() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3401();
function runActionList_3401() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3402();
function runActionList_3402() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3403();
function runActionList_3403() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3404();
function runActionList_3404() {
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup3();
}		
	}, 1);
}







};
obj3186_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3186_onTap_activeActionGroupIndex = -1;
		$("#obj3186").trigger("obj3186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3186) {
				console.warn("de-queueing event obj3186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3186_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_3194();
function hide_3194() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3194(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3195();
function hide_3195() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3195(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3196();
function hide_3196() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3186_onTap_runningActionsCount = obj3186_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3196(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3186_onTap_runningActionsCount = window.obj3186_onTap_runningActionsCount - 1;

if (window.obj3186_onTap_runningActionsCount < 0) {
	window.obj3186_onTap_runningActionsCount = 0;
} else if (window.obj3186_onTap_runningActionsCount == 0) {
	obj3186_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3186_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3186_onTap_activeActionGroupIndex = -1;
		$("#obj3186").trigger("obj3186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3186) {
				console.warn("de-queueing event obj3186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3186_onTap_activeActionGroupIndex = 4;
	











































};
obj3174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3174_onTap_activeActionGroupIndex = -1;
		$("#obj3174").trigger("obj3174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3174) {
				console.warn("de-queueing event obj3174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3174_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3174_onTap_runningActionsCount = obj3174_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3177();
function playAudioFile_3177() {
	window.obj3174_onTap_runningActionsCount = obj3174_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3177")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3177");
			$("#obj_audio_playSoundFile3177").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3178();
function switchText_3178() {
	window.obj3174_onTap_runningActionsCount = obj3174_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3174_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3174_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3174").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3174_content");
			setTimeout(function () {
				window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3174 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3174_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3174_onTap_activeActionGroupIndex = -1;
		$("#obj3174").trigger("obj3174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3174) {
				console.warn("de-queueing event obj3174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3174_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3180();
function wait_3180() {
	window.obj3174_onTap_runningActionsCount = obj3174_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3174_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3174_onTap_activeActionGroupIndex = -1;
		$("#obj3174").trigger("obj3174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3174) {
				console.warn("de-queueing event obj3174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3174_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3181();
function switchText_3181() {
	window.obj3174_onTap_runningActionsCount = obj3174_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3174_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3174_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3174").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3174_content");
			setTimeout(function () {
				window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3174 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3174_onTap_runningActionsCount = window.obj3174_onTap_runningActionsCount - 1;

if (window.obj3174_onTap_runningActionsCount < 0) {
	window.obj3174_onTap_runningActionsCount = 0;
} else if (window.obj3174_onTap_runningActionsCount == 0) {
	obj3174_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3174_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3174_onTap_activeActionGroupIndex = -1;
		$("#obj3174").trigger("obj3174_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3174) {
				console.warn("de-queueing event obj3174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3174_onTap_activeActionGroupIndex = 3;
	











































};
obj3164_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3164_onTap_activeActionGroupIndex = -1;
		$("#obj3164").trigger("obj3164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3164) {
				console.warn("de-queueing event obj3164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3164_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3171();
function hide_3171() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3171(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3164_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3164_onTap_activeActionGroupIndex = -1;
		$("#obj3164").trigger("obj3164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3164) {
				console.warn("de-queueing event obj3164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3164_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3153
(function(){
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;


	var selector = "#obj3153";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3167();
function playAudioFile_3167() {
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3167")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3167");
			$("#obj_audio_playSoundFile3167").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3166();
function switchText_3166() {
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3186_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3186_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3186").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3186_content");
			setTimeout(function () {
				window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3186 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3433();
function incrementCounter_3433() {
	window.obj3164_onTap_runningActionsCount = obj3164_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3164_onTap_runningActionsCount = window.obj3164_onTap_runningActionsCount - 1;

if (window.obj3164_onTap_runningActionsCount < 0) {
	window.obj3164_onTap_runningActionsCount = 0;
} else if (window.obj3164_onTap_runningActionsCount == 0) {
	obj3164_onTap_actionGroup2();
} }, 1);
}











};
obj3164_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3164_onTap_activeActionGroupIndex = -1;
		$("#obj3164").trigger("obj3164_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3164) {
				console.warn("de-queueing event obj3164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3164_onTap_activeActionGroupIndex = 2;
	











































};
obj3155_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3155_onTap_activeActionGroupIndex = -1;
		$("#obj3155").trigger("obj3155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3155) {
				console.warn("de-queueing event obj3155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3155_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj3155_onTap_runningActionsCount = obj3155_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3158();
function playAudioFile_3158() {
	window.obj3155_onTap_runningActionsCount = obj3155_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3158")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3158");
			$("#obj_audio_playSoundFile3158").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3159();
function switchText_3159() {
	window.obj3155_onTap_runningActionsCount = obj3155_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3155_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3155_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3155").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3155_content");
			setTimeout(function () {
				window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3155 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3155_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3155_onTap_activeActionGroupIndex = -1;
		$("#obj3155").trigger("obj3155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3155) {
				console.warn("de-queueing event obj3155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3155_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3161();
function wait_3161() {
	window.obj3155_onTap_runningActionsCount = obj3155_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3155_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3155_onTap_activeActionGroupIndex = -1;
		$("#obj3155").trigger("obj3155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3155) {
				console.warn("de-queueing event obj3155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3155_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3162();
function switchText_3162() {
	window.obj3155_onTap_runningActionsCount = obj3155_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3155_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3155_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3155").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3155_content");
			setTimeout(function () {
				window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3155 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3155_onTap_runningActionsCount = window.obj3155_onTap_runningActionsCount - 1;

if (window.obj3155_onTap_runningActionsCount < 0) {
	window.obj3155_onTap_runningActionsCount = 0;
} else if (window.obj3155_onTap_runningActionsCount == 0) {
	obj3155_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3155_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3155_onTap_activeActionGroupIndex = -1;
		$("#obj3155").trigger("obj3155_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3155) {
				console.warn("de-queueing event obj3155." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3155").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3155_onTap_activeActionGroupIndex = 3;
	











































};
obj3148_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3148_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3148").trigger("obj3148_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3148) {
				console.warn("de-queueing event obj3148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3148_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3174 
hide_3150();
function hide_3150() {
	var selector = "#obj3174";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3148_SCEventRun_runningActionsCount = obj3148_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3150(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3164 
hide_3151();
function hide_3151() {
	var selector = "#obj3164";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3148_SCEventRun_runningActionsCount = obj3148_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3151(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3155 
hide_3152();
function hide_3152() {
	var selector = "#obj3155";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3148_SCEventRun_runningActionsCount = obj3148_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3152(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3148_SCEventRun_runningActionsCount = window.obj3148_SCEventRun_runningActionsCount - 1;

if (window.obj3148_SCEventRun_runningActionsCount < 0) {
	window.obj3148_SCEventRun_runningActionsCount = 0;
} else if (window.obj3148_SCEventRun_runningActionsCount == 0) {
	obj3148_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3148_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3148_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3148").trigger("obj3148_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3148) {
				console.warn("de-queueing event obj3148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3148_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3242_onTap_activeActionGroupIndex = -1;
		$("#obj3242").trigger("obj3242_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3242) {
				console.warn("de-queueing event obj3242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3242_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3247();
function playAudioFile_3247() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3247")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3247");
			$("#obj_audio_playSoundFile3247").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3249();
function switchText_3249() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3242_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3242_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3242").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3242_content");
			setTimeout(function () {
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3242 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3242_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3242_onTap_activeActionGroupIndex = -1;
		$("#obj3242").trigger("obj3242_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3242) {
				console.warn("de-queueing event obj3242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3242_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3230
(function(){
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;


	var selector = "#obj3230";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3220
(function(){
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;


	var selector = "#obj3220";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3211
(function(){
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;


	var selector = "#obj3211";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3242_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3242_onTap_activeActionGroupIndex = -1;
		$("#obj3242").trigger("obj3242_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3242) {
				console.warn("de-queueing event obj3242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3242_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_3244();
function runActionList_3244() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3245();
function runActionList_3245() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3246();
function runActionList_3246() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3405();
function runActionList_3405() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3406();
function runActionList_3406() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3407();
function runActionList_3407() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3408();
function runActionList_3408() {
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup3();
}		
	}, 1);
}







};
obj3242_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3242_onTap_activeActionGroupIndex = -1;
		$("#obj3242").trigger("obj3242_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3242) {
				console.warn("de-queueing event obj3242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3242_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_3250();
function hide_3250() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3250(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3251();
function hide_3251() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3251(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3252();
function hide_3252() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3242_onTap_runningActionsCount = obj3242_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3252(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3242_onTap_runningActionsCount = window.obj3242_onTap_runningActionsCount - 1;

if (window.obj3242_onTap_runningActionsCount < 0) {
	window.obj3242_onTap_runningActionsCount = 0;
} else if (window.obj3242_onTap_runningActionsCount == 0) {
	obj3242_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3242_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3242_onTap_activeActionGroupIndex = -1;
		$("#obj3242").trigger("obj3242_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3242) {
				console.warn("de-queueing event obj3242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3242_onTap_activeActionGroupIndex = 4;
	











































};
obj3230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3230_onTap_activeActionGroupIndex = -1;
		$("#obj3230").trigger("obj3230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3230) {
				console.warn("de-queueing event obj3230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3230_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3230_onTap_runningActionsCount = obj3230_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3233();
function playAudioFile_3233() {
	window.obj3230_onTap_runningActionsCount = obj3230_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3233")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3233");
			$("#obj_audio_playSoundFile3233").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3234();
function switchText_3234() {
	window.obj3230_onTap_runningActionsCount = obj3230_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3230_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3230_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3230").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3230_content");
			setTimeout(function () {
				window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3230 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3230_onTap_activeActionGroupIndex = -1;
		$("#obj3230").trigger("obj3230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3230) {
				console.warn("de-queueing event obj3230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3230_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3236();
function wait_3236() {
	window.obj3230_onTap_runningActionsCount = obj3230_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3230_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3230_onTap_activeActionGroupIndex = -1;
		$("#obj3230").trigger("obj3230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3230) {
				console.warn("de-queueing event obj3230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3230_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3237();
function switchText_3237() {
	window.obj3230_onTap_runningActionsCount = obj3230_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3230_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3230_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3230").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3230_content");
			setTimeout(function () {
				window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3230 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3230_onTap_runningActionsCount = window.obj3230_onTap_runningActionsCount - 1;

if (window.obj3230_onTap_runningActionsCount < 0) {
	window.obj3230_onTap_runningActionsCount = 0;
} else if (window.obj3230_onTap_runningActionsCount == 0) {
	obj3230_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3230_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3230_onTap_activeActionGroupIndex = -1;
		$("#obj3230").trigger("obj3230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3230) {
				console.warn("de-queueing event obj3230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3230_onTap_activeActionGroupIndex = 3;
	











































};
obj3220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3220_onTap_activeActionGroupIndex = -1;
		$("#obj3220").trigger("obj3220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3220) {
				console.warn("de-queueing event obj3220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3220_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3227();
function hide_3227() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3227(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3220_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3220_onTap_activeActionGroupIndex = -1;
		$("#obj3220").trigger("obj3220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3220) {
				console.warn("de-queueing event obj3220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3220_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3209
(function(){
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;


	var selector = "#obj3209";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3223();
function playAudioFile_3223() {
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3223")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3223");
			$("#obj_audio_playSoundFile3223").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3222();
function switchText_3222() {
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3242_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3242_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3242").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3242_content");
			setTimeout(function () {
				window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3242 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3432();
function incrementCounter_3432() {
	window.obj3220_onTap_runningActionsCount = obj3220_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3220_onTap_runningActionsCount = window.obj3220_onTap_runningActionsCount - 1;

if (window.obj3220_onTap_runningActionsCount < 0) {
	window.obj3220_onTap_runningActionsCount = 0;
} else if (window.obj3220_onTap_runningActionsCount == 0) {
	obj3220_onTap_actionGroup2();
} }, 1);
}











};
obj3220_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3220_onTap_activeActionGroupIndex = -1;
		$("#obj3220").trigger("obj3220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3220) {
				console.warn("de-queueing event obj3220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3220_onTap_activeActionGroupIndex = 2;
	











































};
obj3211_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3211_onTap_activeActionGroupIndex = -1;
		$("#obj3211").trigger("obj3211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3211) {
				console.warn("de-queueing event obj3211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3211_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj3211_onTap_runningActionsCount = obj3211_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3214();
function playAudioFile_3214() {
	window.obj3211_onTap_runningActionsCount = obj3211_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3214")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3214");
			$("#obj_audio_playSoundFile3214").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3215();
function switchText_3215() {
	window.obj3211_onTap_runningActionsCount = obj3211_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3211_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3211_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3211").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3211_content");
			setTimeout(function () {
				window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3211 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3211_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3211_onTap_activeActionGroupIndex = -1;
		$("#obj3211").trigger("obj3211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3211) {
				console.warn("de-queueing event obj3211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3211_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3217();
function wait_3217() {
	window.obj3211_onTap_runningActionsCount = obj3211_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3211_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3211_onTap_activeActionGroupIndex = -1;
		$("#obj3211").trigger("obj3211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3211) {
				console.warn("de-queueing event obj3211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3211_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3218();
function switchText_3218() {
	window.obj3211_onTap_runningActionsCount = obj3211_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3211_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3211_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3211").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3211_content");
			setTimeout(function () {
				window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3211 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3211_onTap_runningActionsCount = window.obj3211_onTap_runningActionsCount - 1;

if (window.obj3211_onTap_runningActionsCount < 0) {
	window.obj3211_onTap_runningActionsCount = 0;
} else if (window.obj3211_onTap_runningActionsCount == 0) {
	obj3211_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3211_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3211_onTap_activeActionGroupIndex = -1;
		$("#obj3211").trigger("obj3211_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3211) {
				console.warn("de-queueing event obj3211." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3211").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3211_onTap_activeActionGroupIndex = 3;
	











































};
obj3204_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3204_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3204").trigger("obj3204_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3204) {
				console.warn("de-queueing event obj3204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3204_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3230 
hide_3206();
function hide_3206() {
	var selector = "#obj3230";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3204_SCEventRun_runningActionsCount = obj3204_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3206(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3220 
hide_3207();
function hide_3207() {
	var selector = "#obj3220";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3204_SCEventRun_runningActionsCount = obj3204_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3207(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3211 
hide_3208();
function hide_3208() {
	var selector = "#obj3211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3204_SCEventRun_runningActionsCount = obj3204_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3208(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3204_SCEventRun_runningActionsCount = window.obj3204_SCEventRun_runningActionsCount - 1;

if (window.obj3204_SCEventRun_runningActionsCount < 0) {
	window.obj3204_SCEventRun_runningActionsCount = 0;
} else if (window.obj3204_SCEventRun_runningActionsCount == 0) {
	obj3204_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3204_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3204_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3204").trigger("obj3204_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3204) {
				console.warn("de-queueing event obj3204." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3204").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3204_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3298_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3298_onTap_activeActionGroupIndex = -1;
		$("#obj3298").trigger("obj3298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3298) {
				console.warn("de-queueing event obj3298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3298_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3303();
function playAudioFile_3303() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3303")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3303");
			$("#obj_audio_playSoundFile3303").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3305();
function switchText_3305() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3298_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3298_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3298").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3298_content");
			setTimeout(function () {
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3298 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3298_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3298_onTap_activeActionGroupIndex = -1;
		$("#obj3298").trigger("obj3298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3298) {
				console.warn("de-queueing event obj3298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3298_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3286
(function(){
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;


	var selector = "#obj3286";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3276
(function(){
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;


	var selector = "#obj3276";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3267
(function(){
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;


	var selector = "#obj3267";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj3298_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3298_onTap_activeActionGroupIndex = -1;
		$("#obj3298").trigger("obj3298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3298) {
				console.warn("de-queueing event obj3298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3298_onTap_activeActionGroupIndex = 2;
	



































//	action: run action list container
//	target: obj2897 
runActionList_3300();
function runActionList_3300() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3301();
function runActionList_3301() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3302();
function runActionList_3302() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3413();
function runActionList_3413() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3414();
function runActionList_3414() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3316 
runActionList_3415();
function runActionList_3415() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj3316").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3416();
function runActionList_3416() {
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup3();
}		
	}, 1);
}







};
obj3298_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3298_onTap_activeActionGroupIndex = -1;
		$("#obj3298").trigger("obj3298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3298) {
				console.warn("de-queueing event obj3298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3298_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2873 
hide_3306();
function hide_3306() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3306(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3307();
function hide_3307() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3307(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3308();
function hide_3308() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3298_onTap_runningActionsCount = obj3298_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3308(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3298_onTap_runningActionsCount = window.obj3298_onTap_runningActionsCount - 1;

if (window.obj3298_onTap_runningActionsCount < 0) {
	window.obj3298_onTap_runningActionsCount = 0;
} else if (window.obj3298_onTap_runningActionsCount == 0) {
	obj3298_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3298_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3298_onTap_activeActionGroupIndex = -1;
		$("#obj3298").trigger("obj3298_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3298) {
				console.warn("de-queueing event obj3298." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3298").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3298_onTap_activeActionGroupIndex = 4;
	











































};
obj3286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3286_onTap_activeActionGroupIndex = -1;
		$("#obj3286").trigger("obj3286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3286) {
				console.warn("de-queueing event obj3286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3286_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3286_onTap_runningActionsCount = obj3286_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3289();
function playAudioFile_3289() {
	window.obj3286_onTap_runningActionsCount = obj3286_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3289")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3289");
			$("#obj_audio_playSoundFile3289").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3290();
function switchText_3290() {
	window.obj3286_onTap_runningActionsCount = obj3286_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3286_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3286_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3286").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3286_content");
			setTimeout(function () {
				window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3286 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3286_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3286_onTap_activeActionGroupIndex = -1;
		$("#obj3286").trigger("obj3286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3286) {
				console.warn("de-queueing event obj3286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3286_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3292();
function wait_3292() {
	window.obj3286_onTap_runningActionsCount = obj3286_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3286_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3286_onTap_activeActionGroupIndex = -1;
		$("#obj3286").trigger("obj3286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3286) {
				console.warn("de-queueing event obj3286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3286_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3293();
function switchText_3293() {
	window.obj3286_onTap_runningActionsCount = obj3286_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3286_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3286_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3286").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3286_content");
			setTimeout(function () {
				window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3286 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3286_onTap_runningActionsCount = window.obj3286_onTap_runningActionsCount - 1;

if (window.obj3286_onTap_runningActionsCount < 0) {
	window.obj3286_onTap_runningActionsCount = 0;
} else if (window.obj3286_onTap_runningActionsCount == 0) {
	obj3286_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3286_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3286_onTap_activeActionGroupIndex = -1;
		$("#obj3286").trigger("obj3286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3286) {
				console.warn("de-queueing event obj3286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3286_onTap_activeActionGroupIndex = 3;
	











































};
obj3276_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3276_onTap_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3276) {
				console.warn("de-queueing event obj3276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3276_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3283();
function hide_3283() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3283(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3276_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3276_onTap_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3276) {
				console.warn("de-queueing event obj3276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3276_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3265
(function(){
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;


	var selector = "#obj3265";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3279();
function playAudioFile_3279() {
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3279")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3279");
			$("#obj_audio_playSoundFile3279").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3278();
function switchText_3278() {
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3298_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3298_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3298").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3298_content");
			setTimeout(function () {
				window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3298 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3431();
function incrementCounter_3431() {
	window.obj3276_onTap_runningActionsCount = obj3276_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3276_onTap_runningActionsCount = window.obj3276_onTap_runningActionsCount - 1;

if (window.obj3276_onTap_runningActionsCount < 0) {
	window.obj3276_onTap_runningActionsCount = 0;
} else if (window.obj3276_onTap_runningActionsCount == 0) {
	obj3276_onTap_actionGroup2();
} }, 1);
}











};
obj3276_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3276_onTap_activeActionGroupIndex = -1;
		$("#obj3276").trigger("obj3276_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3276) {
				console.warn("de-queueing event obj3276." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3276").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3276_onTap_activeActionGroupIndex = 2;
	











































};
obj3267_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onTap_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3267) {
				console.warn("de-queueing event obj3267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3267_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2878
(function(){
	window.obj3267_onTap_runningActionsCount = obj3267_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3270();
function playAudioFile_3270() {
	window.obj3267_onTap_runningActionsCount = obj3267_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3270")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3270");
			$("#obj_audio_playSoundFile3270").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3271();
function switchText_3271() {
	window.obj3267_onTap_runningActionsCount = obj3267_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">=</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3267_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3267_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3267").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3267_content");
			setTimeout(function () {
				window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3267 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3267_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onTap_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3267) {
				console.warn("de-queueing event obj3267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3267_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3273();
function wait_3273() {
	window.obj3267_onTap_runningActionsCount = obj3267_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3267_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3267_onTap_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3267) {
				console.warn("de-queueing event obj3267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3267_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3274();
function switchText_3274() {
	window.obj3267_onTap_runningActionsCount = obj3267_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3267_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3267_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3267").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3267_content");
			setTimeout(function () {
				window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3267 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3267_onTap_runningActionsCount = window.obj3267_onTap_runningActionsCount - 1;

if (window.obj3267_onTap_runningActionsCount < 0) {
	window.obj3267_onTap_runningActionsCount = 0;
} else if (window.obj3267_onTap_runningActionsCount == 0) {
	obj3267_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3267_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3267_onTap_activeActionGroupIndex = -1;
		$("#obj3267").trigger("obj3267_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3267) {
				console.warn("de-queueing event obj3267." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3267").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3267_onTap_activeActionGroupIndex = 3;
	











































};
obj3260_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3260_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3260").trigger("obj3260_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3260) {
				console.warn("de-queueing event obj3260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3260_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3286 
hide_3262();
function hide_3262() {
	var selector = "#obj3286";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3260_SCEventRun_runningActionsCount = obj3260_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3262(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3276 
hide_3263();
function hide_3263() {
	var selector = "#obj3276";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3260_SCEventRun_runningActionsCount = obj3260_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3263(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3267 
hide_3264();
function hide_3264() {
	var selector = "#obj3267";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3260_SCEventRun_runningActionsCount = obj3260_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3264(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3260_SCEventRun_runningActionsCount = window.obj3260_SCEventRun_runningActionsCount - 1;

if (window.obj3260_SCEventRun_runningActionsCount < 0) {
	window.obj3260_SCEventRun_runningActionsCount = 0;
} else if (window.obj3260_SCEventRun_runningActionsCount == 0) {
	obj3260_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3260_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3260_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3260").trigger("obj3260_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3260) {
				console.warn("de-queueing event obj3260." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3260").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3260_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj3354_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3354_onTap_activeActionGroupIndex = -1;
		$("#obj3354").trigger("obj3354_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3354) {
				console.warn("de-queueing event obj3354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3354_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2864
(function(){
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;


	var selector = "#obj2864";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3359();
function playAudioFile_3359() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3359")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3359");
			$("#obj_audio_playSoundFile3359").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3361();
function switchText_3361() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 57px; color: #d6802c;\"><strong>?</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3354_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3354_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3354").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3354_content");
			setTimeout(function () {
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3354 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3354_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3354_onTap_activeActionGroupIndex = -1;
		$("#obj3354").trigger("obj3354_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3354) {
				console.warn("de-queueing event obj3354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3354_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj3342
(function(){
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;


	var selector = "#obj3342";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3332
(function(){
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;


	var selector = "#obj3332";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3323
(function(){
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;


	var selector = "#obj3323";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
































//	action: run action list container
//	target: obj2897 
runActionList_3356();
function runActionList_3356() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj2897").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2902 
runActionList_3357();
function runActionList_3357() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj2902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3089 
runActionList_3358();
function runActionList_3358() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj3089").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3148 
runActionList_3417();
function runActionList_3417() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj3148").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3204 
runActionList_3418();
function runActionList_3418() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj3204").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2977 
runActionList_3419();
function runActionList_3419() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj2977").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}
//	action: run action list container
//	target: obj3260 
runActionList_3420();
function runActionList_3420() {
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	$("#obj3260").trigger('SCEventRun');
	setTimeout(function() {
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup2();
}		
	}, 1);
}







};
obj3354_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3354_onTap_activeActionGroupIndex = -1;
		$("#obj3354").trigger("obj3354_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3354) {
				console.warn("de-queueing event obj3354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3354_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2873 
hide_3362();
function hide_3362() {
	var selector = "#obj2873";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3362(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2876 
hide_3363();
function hide_3363() {
	var selector = "#obj2876";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3363(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj2878 
hide_3364();
function hide_3364() {
	var selector = "#obj2878";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3354_onTap_runningActionsCount = obj3354_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3364(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3354_onTap_runningActionsCount = window.obj3354_onTap_runningActionsCount - 1;

if (window.obj3354_onTap_runningActionsCount < 0) {
	window.obj3354_onTap_runningActionsCount = 0;
} else if (window.obj3354_onTap_runningActionsCount == 0) {
	obj3354_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3354_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3354_onTap_activeActionGroupIndex = -1;
		$("#obj3354").trigger("obj3354_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3354) {
				console.warn("de-queueing event obj3354." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3354").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3354_onTap_activeActionGroupIndex = 3;
	











































};
obj3342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3342_onTap_activeActionGroupIndex = -1;
		$("#obj3342").trigger("obj3342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3342) {
				console.warn("de-queueing event obj3342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3342_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3342_onTap_runningActionsCount = obj3342_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3345();
function playAudioFile_3345() {
	window.obj3342_onTap_runningActionsCount = obj3342_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3345")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3345");
			$("#obj_audio_playSoundFile3345").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3346();
function switchText_3346() {
	window.obj3342_onTap_runningActionsCount = obj3342_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&gt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3342_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3342_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3342").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3342_content");
			setTimeout(function () {
				window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3342 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3342_onTap_activeActionGroupIndex = -1;
		$("#obj3342").trigger("obj3342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3342) {
				console.warn("de-queueing event obj3342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3342_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3348();
function wait_3348() {
	window.obj3342_onTap_runningActionsCount = obj3342_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3342_onTap_activeActionGroupIndex = -1;
		$("#obj3342").trigger("obj3342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3342) {
				console.warn("de-queueing event obj3342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3342_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3349();
function switchText_3349() {
	window.obj3342_onTap_runningActionsCount = obj3342_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&gt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3342_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3342_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3342").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3342_content");
			setTimeout(function () {
				window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3342 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3342_onTap_runningActionsCount = window.obj3342_onTap_runningActionsCount - 1;

if (window.obj3342_onTap_runningActionsCount < 0) {
	window.obj3342_onTap_runningActionsCount = 0;
} else if (window.obj3342_onTap_runningActionsCount == 0) {
	obj3342_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3342_onTap_activeActionGroupIndex = -1;
		$("#obj3342").trigger("obj3342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3342) {
				console.warn("de-queueing event obj3342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3342_onTap_activeActionGroupIndex = 3;
	











































};
obj3332_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3332_onTap_activeActionGroupIndex = -1;
		$("#obj3332").trigger("obj3332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3332) {
				console.warn("de-queueing event obj3332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3332_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj2876
(function(){
	window.obj3332_onTap_runningActionsCount = obj3332_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3373();
function playAudioFile_3373() {
	window.obj3332_onTap_runningActionsCount = obj3332_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3373")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3373");
			$("#obj_audio_playSoundFile3373").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3374();
function switchText_3374() {
	window.obj3332_onTap_runningActionsCount = obj3332_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 50px; font-family: Roboto;\">&lt;</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3332").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3332_content");
			setTimeout(function () {
				window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj3332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj3332_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3332_onTap_activeActionGroupIndex = -1;
		$("#obj3332").trigger("obj3332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3332) {
				console.warn("de-queueing event obj3332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3332_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_3376();
function wait_3376() {
	window.obj3332_onTap_runningActionsCount = obj3332_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup2();
}
	}, 600);
}


























};
obj3332_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3332_onTap_activeActionGroupIndex = -1;
		$("#obj3332").trigger("obj3332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3332) {
				console.warn("de-queueing event obj3332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3332_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_3377();
function switchText_3377() {
	window.obj3332_onTap_runningActionsCount = obj3332_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px;\"><strong><span style=\"font-family: Roboto;\">&lt;</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3332").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3332_content");
			setTimeout(function () {
				window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj3332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3332_onTap_runningActionsCount = window.obj3332_onTap_runningActionsCount - 1;

if (window.obj3332_onTap_runningActionsCount < 0) {
	window.obj3332_onTap_runningActionsCount = 0;
} else if (window.obj3332_onTap_runningActionsCount == 0) {
	obj3332_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj3332_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3332_onTap_activeActionGroupIndex = -1;
		$("#obj3332").trigger("obj3332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3332) {
				console.warn("de-queueing event obj3332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3332_onTap_activeActionGroupIndex = 3;
	











































};
obj3323_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3323_onTap_activeActionGroupIndex = -1;
		$("#obj3323").trigger("obj3323_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3323) {
				console.warn("de-queueing event obj3323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3323_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2864 
hide_3383();
function hide_3383() {
	var selector = "#obj2864";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3383(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3323_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3323_onTap_activeActionGroupIndex = -1;
		$("#obj3323").trigger("obj3323_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3323) {
				console.warn("de-queueing event obj3323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3323_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj2873
(function(){
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;


	var selector = "#obj2873";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2876
(function(){
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;


	var selector = "#obj2876";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2878
(function(){
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;


	var selector = "#obj2878";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3321
(function(){
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;


	var selector = "#obj3321";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_3379();
function playAudioFile_3379() {
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile3379")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile3379");
			$("#obj_audio_playSoundFile3379").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_3378();
function switchText_3378() {
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 72px; color: #2674d3;\"><strong><span style=\"font-family: Roboto;\">=</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3354_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3354_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj3354").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3354_content");
			setTimeout(function () {
				window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3354 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj2462 
incrementCounter_3430();
function incrementCounter_3430() {
	window.obj3323_onTap_runningActionsCount = obj3323_onTap_runningActionsCount + 1;


	var oldValue = obj2462_counterValue;
	obj2462_counterValue = obj2462_counterValue + 1;
	if (! obj2462_counterCanExceedTargetValue && obj2462_counterValue > obj2462_counterTargetValue) {
		obj2462_counterValue = obj2462_counterTargetValue;
	}

	if (oldValue != obj2462_counterValue) {
		$("#obj2462").trigger('SCEventCounterValueChange');
		$("#obj2462").trigger('SCEventCounterIncrease');
		if (obj2462_counterValue == obj2462_counterTargetValue)
			$("#obj2462").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj3323_onTap_runningActionsCount = window.obj3323_onTap_runningActionsCount - 1;

if (window.obj3323_onTap_runningActionsCount < 0) {
	window.obj3323_onTap_runningActionsCount = 0;
} else if (window.obj3323_onTap_runningActionsCount == 0) {
	obj3323_onTap_actionGroup2();
} }, 1);
}











};
obj3323_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3323_onTap_activeActionGroupIndex = -1;
		$("#obj3323").trigger("obj3323_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3323) {
				console.warn("de-queueing event obj3323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3323_onTap_activeActionGroupIndex = 2;
	











































};
obj3316_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3316_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3316").trigger("obj3316_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3316) {
				console.warn("de-queueing event obj3316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3316_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3342 
hide_3318();
function hide_3318() {
	var selector = "#obj3342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3316_SCEventRun_runningActionsCount = obj3316_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3318(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3332 
hide_3319();
function hide_3319() {
	var selector = "#obj3332";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3316_SCEventRun_runningActionsCount = obj3316_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3319(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj3323 
hide_3320();
function hide_3320() {
	var selector = "#obj3323";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3316_SCEventRun_runningActionsCount = obj3316_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3320(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3316_SCEventRun_runningActionsCount = window.obj3316_SCEventRun_runningActionsCount - 1;

if (window.obj3316_SCEventRun_runningActionsCount < 0) {
	window.obj3316_SCEventRun_runningActionsCount = 0;
} else if (window.obj3316_SCEventRun_runningActionsCount == 0) {
	obj3316_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj3316_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3316_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3316").trigger("obj3316_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3316) {
				console.warn("de-queueing event obj3316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3316_SCEventRun_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj2431: Event Touch Down
 *
 */

$("#obj2431").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2431_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2431_onTap is still running");
	return;
}
var obj2431_onTap_runningActionsCount = 0;
var obj2431_onTap_loopCount = 0;
obj2431_onTap_actionGroup0();
});


















/*
 *
 *   obj2434: Event Touch Down
 *
 */

$("#obj2434").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2434_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2434_onTap is still running");
	return;
}
var obj2434_onTap_runningActionsCount = 0;
var obj2434_onTap_loopCount = 0;
obj2434_onTap_actionGroup0();
});
























































/*
 *
 *   obj2441: Event Touch Down
 *
 */

$("#obj2441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2441_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2441_onTap is still running");
	return;
}
var obj2441_onTap_runningActionsCount = 0;
var obj2441_onTap_loopCount = 0;
obj2441_onTap_actionGroup0();
});


















/*
 *
 *   obj2444: Event Touch Down
 *
 */

$("#obj2444").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2444_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2444_onTap is still running");
	return;
}
var obj2444_onTap_runningActionsCount = 0;
var obj2444_onTap_loopCount = 0;
obj2444_onTap_actionGroup0();
});


















/*
 *
 *   obj2450: Event Touch Down
 *
 */

$("#obj2450").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2450_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2450_onTap is still running");
	return;
}
var obj2450_onTap_runningActionsCount = 0;
var obj2450_onTap_loopCount = 0;
obj2450_onTap_actionGroup0();
});




















































































/*
 *
 *   obj2462: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj2462").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj2462_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2462_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj2462_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2462_SCEventCounterReachedTargetValue_loopCount = 0;
obj2462_SCEventCounterReachedTargetValue_actionGroup0();
});




























/*
 *
 *   obj2806: Event Touch Down
 *
 */

$("#obj2806").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2806_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2806_onTap is still running");
	return;
}
var obj2806_onTap_runningActionsCount = 0;
var obj2806_onTap_loopCount = 0;
obj2806_onTap_actionGroup0();
});





































/*
 *
 *   obj2820: Event Touch Down
 *
 */

$("#obj2820").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2820_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2820_onTap is still running");
	return;
}
var obj2820_onTap_runningActionsCount = 0;
var obj2820_onTap_loopCount = 0;
obj2820_onTap_actionGroup0();
});


















/*
 *
 *   obj2848: Event Touch Down
 *
 */

$("#obj2848").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2848_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2848_onTap is still running");
	return;
}
var obj2848_onTap_runningActionsCount = 0;
var obj2848_onTap_loopCount = 0;
obj2848_onTap_actionGroup0();
});


















/*
 *
 *   obj2855: Event Touch Down
 *
 */

$("#obj2855").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2855_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2855_onTap is still running");
	return;
}
var obj2855_onTap_runningActionsCount = 0;
var obj2855_onTap_loopCount = 0;
obj2855_onTap_actionGroup0();
});














































/*
 *
 *   obj2897: Event SCEventRun
 *
 */

$("#obj2897").bind("SCEventRun", function(event) {
	if (window.obj2897_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2897_SCEventRun is still running");
	return;
}
var obj2897_SCEventRun_runningActionsCount = 0;
var obj2897_SCEventRun_loopCount = 0;
obj2897_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj2936: Event Touch Down
 *
 */

$("#obj2936").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2936_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2936_onTap is still running");
	return;
}
var obj2936_onTap_runningActionsCount = 0;
var obj2936_onTap_loopCount = 0;
obj2936_onTap_actionGroup0();
});





































/*
 *
 *   obj2926: Event Touch Down
 *
 */

$("#obj2926").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2926_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2926_onTap is still running");
	return;
}
var obj2926_onTap_runningActionsCount = 0;
var obj2926_onTap_loopCount = 0;
obj2926_onTap_actionGroup0();
});


















/*
 *
 *   obj2916: Event Touch Down
 *
 */

$("#obj2916").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2916_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2916_onTap is still running");
	return;
}
var obj2916_onTap_runningActionsCount = 0;
var obj2916_onTap_loopCount = 0;
obj2916_onTap_actionGroup0();
});


















/*
 *
 *   obj2909: Event Touch Down
 *
 */

$("#obj2909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2909_onTap is still running");
	return;
}
var obj2909_onTap_runningActionsCount = 0;
var obj2909_onTap_loopCount = 0;
obj2909_onTap_actionGroup0();
});














































/*
 *
 *   obj2902: Event SCEventRun
 *
 */

$("#obj2902").bind("SCEventRun", function(event) {
	if (window.obj2902_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2902_SCEventRun is still running");
	return;
}
var obj2902_SCEventRun_runningActionsCount = 0;
var obj2902_SCEventRun_loopCount = 0;
obj2902_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3015: Event Touch Down
 *
 */

$("#obj3015").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3015_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3015_onTap is still running");
	return;
}
var obj3015_onTap_runningActionsCount = 0;
var obj3015_onTap_loopCount = 0;
obj3015_onTap_actionGroup0();
});





































/*
 *
 *   obj3003: Event Touch Down
 *
 */

$("#obj3003").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3003_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3003_onTap is still running");
	return;
}
var obj3003_onTap_runningActionsCount = 0;
var obj3003_onTap_loopCount = 0;
obj3003_onTap_actionGroup0();
});


















/*
 *
 *   obj2993: Event Touch Down
 *
 */

$("#obj2993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2993_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2993_onTap is still running");
	return;
}
var obj2993_onTap_runningActionsCount = 0;
var obj2993_onTap_loopCount = 0;
obj2993_onTap_actionGroup0();
});


















/*
 *
 *   obj2984: Event Touch Down
 *
 */

$("#obj2984").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2984_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2984_onTap is still running");
	return;
}
var obj2984_onTap_runningActionsCount = 0;
var obj2984_onTap_loopCount = 0;
obj2984_onTap_actionGroup0();
});














































/*
 *
 *   obj2977: Event SCEventRun
 *
 */

$("#obj2977").bind("SCEventRun", function(event) {
	if (window.obj2977_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2977_SCEventRun is still running");
	return;
}
var obj2977_SCEventRun_runningActionsCount = 0;
var obj2977_SCEventRun_loopCount = 0;
obj2977_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3127: Event Touch Down
 *
 */

$("#obj3127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3127_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3127_onTap is still running");
	return;
}
var obj3127_onTap_runningActionsCount = 0;
var obj3127_onTap_loopCount = 0;
obj3127_onTap_actionGroup0();
});





































/*
 *
 *   obj3114: Event Touch Down
 *
 */

$("#obj3114").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3114_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3114_onTap is still running");
	return;
}
var obj3114_onTap_runningActionsCount = 0;
var obj3114_onTap_loopCount = 0;
obj3114_onTap_actionGroup0();
});


















/*
 *
 *   obj3105: Event Touch Down
 *
 */

$("#obj3105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3105_onTap is still running");
	return;
}
var obj3105_onTap_runningActionsCount = 0;
var obj3105_onTap_loopCount = 0;
obj3105_onTap_actionGroup0();
});


















/*
 *
 *   obj3096: Event Touch Down
 *
 */

$("#obj3096").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3096_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3096_onTap is still running");
	return;
}
var obj3096_onTap_runningActionsCount = 0;
var obj3096_onTap_loopCount = 0;
obj3096_onTap_actionGroup0();
});














































/*
 *
 *   obj3089: Event SCEventRun
 *
 */

$("#obj3089").bind("SCEventRun", function(event) {
	if (window.obj3089_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3089_SCEventRun is still running");
	return;
}
var obj3089_SCEventRun_runningActionsCount = 0;
var obj3089_SCEventRun_loopCount = 0;
obj3089_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3186: Event Touch Down
 *
 */

$("#obj3186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3186_onTap is still running");
	return;
}
var obj3186_onTap_runningActionsCount = 0;
var obj3186_onTap_loopCount = 0;
obj3186_onTap_actionGroup0();
});





































/*
 *
 *   obj3174: Event Touch Down
 *
 */

$("#obj3174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3174_onTap is still running");
	return;
}
var obj3174_onTap_runningActionsCount = 0;
var obj3174_onTap_loopCount = 0;
obj3174_onTap_actionGroup0();
});


















/*
 *
 *   obj3164: Event Touch Down
 *
 */

$("#obj3164").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3164_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3164_onTap is still running");
	return;
}
var obj3164_onTap_runningActionsCount = 0;
var obj3164_onTap_loopCount = 0;
obj3164_onTap_actionGroup0();
});


















/*
 *
 *   obj3155: Event Touch Down
 *
 */

$("#obj3155").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3155_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3155_onTap is still running");
	return;
}
var obj3155_onTap_runningActionsCount = 0;
var obj3155_onTap_loopCount = 0;
obj3155_onTap_actionGroup0();
});














































/*
 *
 *   obj3148: Event SCEventRun
 *
 */

$("#obj3148").bind("SCEventRun", function(event) {
	if (window.obj3148_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3148_SCEventRun is still running");
	return;
}
var obj3148_SCEventRun_runningActionsCount = 0;
var obj3148_SCEventRun_loopCount = 0;
obj3148_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3242: Event Touch Down
 *
 */

$("#obj3242").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3242_onTap is still running");
	return;
}
var obj3242_onTap_runningActionsCount = 0;
var obj3242_onTap_loopCount = 0;
obj3242_onTap_actionGroup0();
});





































/*
 *
 *   obj3230: Event Touch Down
 *
 */

$("#obj3230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3230_onTap is still running");
	return;
}
var obj3230_onTap_runningActionsCount = 0;
var obj3230_onTap_loopCount = 0;
obj3230_onTap_actionGroup0();
});


















/*
 *
 *   obj3220: Event Touch Down
 *
 */

$("#obj3220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3220_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3220_onTap is still running");
	return;
}
var obj3220_onTap_runningActionsCount = 0;
var obj3220_onTap_loopCount = 0;
obj3220_onTap_actionGroup0();
});


















/*
 *
 *   obj3211: Event Touch Down
 *
 */

$("#obj3211").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3211_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3211_onTap is still running");
	return;
}
var obj3211_onTap_runningActionsCount = 0;
var obj3211_onTap_loopCount = 0;
obj3211_onTap_actionGroup0();
});














































/*
 *
 *   obj3204: Event SCEventRun
 *
 */

$("#obj3204").bind("SCEventRun", function(event) {
	if (window.obj3204_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3204_SCEventRun is still running");
	return;
}
var obj3204_SCEventRun_runningActionsCount = 0;
var obj3204_SCEventRun_loopCount = 0;
obj3204_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3298: Event Touch Down
 *
 */

$("#obj3298").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3298_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3298_onTap is still running");
	return;
}
var obj3298_onTap_runningActionsCount = 0;
var obj3298_onTap_loopCount = 0;
obj3298_onTap_actionGroup0();
});





































/*
 *
 *   obj3286: Event Touch Down
 *
 */

$("#obj3286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3286_onTap is still running");
	return;
}
var obj3286_onTap_runningActionsCount = 0;
var obj3286_onTap_loopCount = 0;
obj3286_onTap_actionGroup0();
});


















/*
 *
 *   obj3276: Event Touch Down
 *
 */

$("#obj3276").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3276_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3276_onTap is still running");
	return;
}
var obj3276_onTap_runningActionsCount = 0;
var obj3276_onTap_loopCount = 0;
obj3276_onTap_actionGroup0();
});


















/*
 *
 *   obj3267: Event Touch Down
 *
 */

$("#obj3267").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3267_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3267_onTap is still running");
	return;
}
var obj3267_onTap_runningActionsCount = 0;
var obj3267_onTap_loopCount = 0;
obj3267_onTap_actionGroup0();
});














































/*
 *
 *   obj3260: Event SCEventRun
 *
 */

$("#obj3260").bind("SCEventRun", function(event) {
	if (window.obj3260_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3260_SCEventRun is still running");
	return;
}
var obj3260_SCEventRun_runningActionsCount = 0;
var obj3260_SCEventRun_loopCount = 0;
obj3260_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj3354: Event Touch Down
 *
 */

$("#obj3354").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3354_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3354_onTap is still running");
	return;
}
var obj3354_onTap_runningActionsCount = 0;
var obj3354_onTap_loopCount = 0;
obj3354_onTap_actionGroup0();
});





































/*
 *
 *   obj3342: Event Touch Down
 *
 */

$("#obj3342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3342_onTap is still running");
	return;
}
var obj3342_onTap_runningActionsCount = 0;
var obj3342_onTap_loopCount = 0;
obj3342_onTap_actionGroup0();
});


















/*
 *
 *   obj3332: Event Touch Down
 *
 */

$("#obj3332").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3332_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3332_onTap is still running");
	return;
}
var obj3332_onTap_runningActionsCount = 0;
var obj3332_onTap_loopCount = 0;
obj3332_onTap_actionGroup0();
});


















/*
 *
 *   obj3323: Event Touch Down
 *
 */

$("#obj3323").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3323_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3323_onTap is still running");
	return;
}
var obj3323_onTap_runningActionsCount = 0;
var obj3323_onTap_loopCount = 0;
obj3323_onTap_actionGroup0();
});














































/*
 *
 *   obj3316: Event SCEventRun
 *
 */

$("#obj3316").bind("SCEventRun", function(event) {
	if (window.obj3316_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3316_SCEventRun is still running");
	return;
}
var obj3316_SCEventRun_runningActionsCount = 0;
var obj3316_SCEventRun_loopCount = 0;
obj3316_SCEventRun_actionGroup0();
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
	
$("#obj2427").trigger('SCEventShow');
$("#obj2429").trigger('SCEventShow');
$("#obj2431").trigger('SCEventShow');
$("#obj2434").trigger('SCEventShow');
$("#obj2437").trigger('SCEventShow');
$("#obj2439").trigger('SCEventShow');
$("#obj2441").trigger('SCEventShow');
$("#obj2444").trigger('SCEventShow');
$("#obj2460").trigger('SCEventShow');
$("#obj2799").trigger('SCEventShow');
$("#obj2806").trigger('SCEventShow');
$("#obj2813").trigger('SCEventShow');
$("#obj2820").trigger('SCEventShow');
$("#obj2848").trigger('SCEventShow');
$("#obj2855").trigger('SCEventShow');
$("#obj2948").trigger('SCEventShow');
$("#obj2936").trigger('SCEventShow');
$("#obj2933").trigger('SCEventShow');
$("#obj3028").trigger('SCEventShow');
$("#obj3015").trigger('SCEventShow');
$("#obj3012").trigger('SCEventShow');
$("#obj3003").trigger('SCEventShow');
$("#obj2993").trigger('SCEventShow');
$("#obj2984").trigger('SCEventShow');
$("#obj3141").trigger('SCEventShow');
$("#obj3127").trigger('SCEventShow');
$("#obj3124").trigger('SCEventShow');
$("#obj3201").trigger('SCEventShow');
$("#obj3186").trigger('SCEventShow');
$("#obj3183").trigger('SCEventShow');
$("#obj3174").trigger('SCEventShow');
$("#obj3164").trigger('SCEventShow');
$("#obj3155").trigger('SCEventShow');
$("#obj3257").trigger('SCEventShow');
$("#obj3242").trigger('SCEventShow');
$("#obj3239").trigger('SCEventShow');
$("#obj3230").trigger('SCEventShow');
$("#obj3220").trigger('SCEventShow');
$("#obj3211").trigger('SCEventShow');
$("#obj3313").trigger('SCEventShow');
$("#obj3298").trigger('SCEventShow');
$("#obj3295").trigger('SCEventShow');
$("#obj3286").trigger('SCEventShow');
$("#obj3276").trigger('SCEventShow');
$("#obj3267").trigger('SCEventShow');
$("#obj3369").trigger('SCEventShow');
$("#obj3354").trigger('SCEventShow');
$("#obj3351").trigger('SCEventShow');
$("#obj3342").trigger('SCEventShow');
$("#obj3332").trigger('SCEventShow');
$("#obj3323").trigger('SCEventShow');
$("#obj2873").trigger('SCEventShow');
$("#obj2876").trigger('SCEventShow');
$("#obj2878").trigger('SCEventShow');
	

});