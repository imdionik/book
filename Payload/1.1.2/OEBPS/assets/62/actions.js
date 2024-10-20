pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 23656;
pubcoder.page.title = pubcoder.page.title || "62";
pubcoder.page.number = pubcoder.page.number || 62;
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
var obj23659_onTap_activeActionGroupIndex = -1;
var obj23659_onTap_runningActionsCount = 0;
var obj23659_onTap_loopCount = 0;
var obj23662_onTap_activeActionGroupIndex = -1;
var obj23662_onTap_runningActionsCount = 0;
var obj23662_onTap_loopCount = 0;
var obj23669_onTap_activeActionGroupIndex = -1;
var obj23669_onTap_runningActionsCount = 0;
var obj23669_onTap_loopCount = 0;
var obj23672_onTap_activeActionGroupIndex = -1;
var obj23672_onTap_runningActionsCount = 0;
var obj23672_onTap_loopCount = 0;
var obj23678_onTap_activeActionGroupIndex = -1;
var obj23678_onTap_runningActionsCount = 0;
var obj23678_onTap_loopCount = 0;
var obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj23684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23684_SCEventCounterReachedTargetValue_loopCount = 0;
var obj24057_onTap_activeActionGroupIndex = -1;
var obj24057_onTap_runningActionsCount = 0;
var obj24057_onTap_loopCount = 0;
var obj24065_onTap_activeActionGroupIndex = -1;
var obj24065_onTap_runningActionsCount = 0;
var obj24065_onTap_loopCount = 0;
var obj24080_onTap_activeActionGroupIndex = -1;
var obj24080_onTap_runningActionsCount = 0;
var obj24080_onTap_loopCount = 0;
var obj24086_onTap_activeActionGroupIndex = -1;
var obj24086_onTap_runningActionsCount = 0;
var obj24086_onTap_loopCount = 0;
var obj24100_SCEventRun_activeActionGroupIndex = -1;
var obj24100_SCEventRun_runningActionsCount = 0;
var obj24100_SCEventRun_loopCount = 0;
var obj24114_SCEventRun_activeActionGroupIndex = -1;
var obj24114_SCEventRun_runningActionsCount = 0;
var obj24114_SCEventRun_loopCount = 0;
var obj24171_onTap_activeActionGroupIndex = -1;
var obj24171_onTap_runningActionsCount = 0;
var obj24171_onTap_loopCount = 0;
var obj24158_onTap_activeActionGroupIndex = -1;
var obj24158_onTap_runningActionsCount = 0;
var obj24158_onTap_loopCount = 0;
var obj24151_onTap_activeActionGroupIndex = -1;
var obj24151_onTap_runningActionsCount = 0;
var obj24151_onTap_loopCount = 0;
var obj24144_onTap_activeActionGroupIndex = -1;
var obj24144_onTap_runningActionsCount = 0;
var obj24144_onTap_loopCount = 0;
var obj24137_SCEventRun_activeActionGroupIndex = -1;
var obj24137_SCEventRun_runningActionsCount = 0;
var obj24137_SCEventRun_loopCount = 0;
var obj24248_onTap_activeActionGroupIndex = -1;
var obj24248_onTap_runningActionsCount = 0;
var obj24248_onTap_loopCount = 0;
var obj24237_onTap_activeActionGroupIndex = -1;
var obj24237_onTap_runningActionsCount = 0;
var obj24237_onTap_loopCount = 0;
var obj24230_onTap_activeActionGroupIndex = -1;
var obj24230_onTap_runningActionsCount = 0;
var obj24230_onTap_loopCount = 0;
var obj24220_onTap_activeActionGroupIndex = -1;
var obj24220_onTap_runningActionsCount = 0;
var obj24220_onTap_loopCount = 0;
var obj24213_SCEventRun_activeActionGroupIndex = -1;
var obj24213_SCEventRun_runningActionsCount = 0;
var obj24213_SCEventRun_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj23684_counterValue = 0;
var obj23684_counterTargetValue = 3;
var obj23684_counterCanExceedTargetValue = false;

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
		
obj23659_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23659_onTap_activeActionGroupIndex = -1;
		$("#obj23659").trigger("obj23659_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23659) {
				console.warn("de-queueing event obj23659." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23659").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23659_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23661();
function goToPage_23661() {
	window.obj23659_onTap_runningActionsCount = obj23659_onTap_runningActionsCount + 1;

	$("#anchor929")[0].click();
	window.obj23659_onTap_runningActionsCount = window.obj23659_onTap_runningActionsCount - 1;

if (window.obj23659_onTap_runningActionsCount < 0) {
	window.obj23659_onTap_runningActionsCount = 0;
} else if (window.obj23659_onTap_runningActionsCount == 0) {
	obj23659_onTap_actionGroup1();
}
}










































};
obj23659_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23659_onTap_activeActionGroupIndex = -1;
		$("#obj23659").trigger("obj23659_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23659) {
				console.warn("de-queueing event obj23659." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23659").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23659_onTap_activeActionGroupIndex = 1;
	











































};
obj23662_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23662_onTap_activeActionGroupIndex = -1;
		$("#obj23662").trigger("obj23662_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23662) {
				console.warn("de-queueing event obj23662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23662_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23664();
function goToPage_23664() {
	window.obj23662_onTap_runningActionsCount = obj23662_onTap_runningActionsCount + 1;

	$("#anchor930")[0].click();
	window.obj23662_onTap_runningActionsCount = window.obj23662_onTap_runningActionsCount - 1;

if (window.obj23662_onTap_runningActionsCount < 0) {
	window.obj23662_onTap_runningActionsCount = 0;
} else if (window.obj23662_onTap_runningActionsCount == 0) {
	obj23662_onTap_actionGroup1();
}
}










































};
obj23662_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23662_onTap_activeActionGroupIndex = -1;
		$("#obj23662").trigger("obj23662_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23662) {
				console.warn("de-queueing event obj23662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23662_onTap_activeActionGroupIndex = 1;
	











































};
obj23669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23669_onTap_activeActionGroupIndex = -1;
		$("#obj23669").trigger("obj23669_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23669) {
				console.warn("de-queueing event obj23669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23669_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_23671();
function goToPage_23671() {
	window.obj23669_onTap_runningActionsCount = obj23669_onTap_runningActionsCount + 1;

	$("#anchor931")[0].click();
	window.obj23669_onTap_runningActionsCount = window.obj23669_onTap_runningActionsCount - 1;

if (window.obj23669_onTap_runningActionsCount < 0) {
	window.obj23669_onTap_runningActionsCount = 0;
} else if (window.obj23669_onTap_runningActionsCount == 0) {
	obj23669_onTap_actionGroup1();
}
}










































};
obj23669_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23669_onTap_activeActionGroupIndex = -1;
		$("#obj23669").trigger("obj23669_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23669) {
				console.warn("de-queueing event obj23669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23669_onTap_activeActionGroupIndex = 1;
	











































};
obj23672_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23672_onTap_activeActionGroupIndex = -1;
		$("#obj23672").trigger("obj23672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23672) {
				console.warn("de-queueing event obj23672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23672_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23678
(function(){
	window.obj23672_onTap_runningActionsCount = obj23672_onTap_runningActionsCount + 1;


	var selector = "#obj23678";
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
					window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup1();
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
				window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23672_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23672_onTap_activeActionGroupIndex = -1;
		$("#obj23672").trigger("obj23672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23672) {
				console.warn("de-queueing event obj23672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23672_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj23672 
hide_23675();
function hide_23675() {
	var selector = "#obj23672";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23672_onTap_runningActionsCount = obj23672_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23675(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23672_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23672_onTap_activeActionGroupIndex = -1;
		$("#obj23672").trigger("obj23672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23672) {
				console.warn("de-queueing event obj23672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23672_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj23692
(function(){
	window.obj23672_onTap_runningActionsCount = obj23672_onTap_runningActionsCount + 1;


	var selector = "#obj23692";
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
					window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup3();
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
				window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj23690
(function(){
	window.obj23672_onTap_runningActionsCount = obj23672_onTap_runningActionsCount + 1;


	var selector = "#obj23690";
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
					window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup3();
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
				window.obj23672_onTap_runningActionsCount = window.obj23672_onTap_runningActionsCount - 1;

if (window.obj23672_onTap_runningActionsCount < 0) {
	window.obj23672_onTap_runningActionsCount = 0;
} else if (window.obj23672_onTap_runningActionsCount == 0) {
	obj23672_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23672_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23672_onTap_activeActionGroupIndex = -1;
		$("#obj23672").trigger("obj23672_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23672) {
				console.warn("de-queueing event obj23672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23672_onTap_activeActionGroupIndex = 3;
	











































};
obj23678_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23678_onTap_activeActionGroupIndex = -1;
		$("#obj23678").trigger("obj23678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23678) {
				console.warn("de-queueing event obj23678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23678_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj23672
(function(){
	window.obj23678_onTap_runningActionsCount = obj23678_onTap_runningActionsCount + 1;


	var selector = "#obj23672";
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
					window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup1();
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
				window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj23678_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23678_onTap_activeActionGroupIndex = -1;
		$("#obj23678").trigger("obj23678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23678) {
				console.warn("de-queueing event obj23678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23678_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj23678 
hide_23681();
function hide_23681() {
	var selector = "#obj23678";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23678_onTap_runningActionsCount = obj23678_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23681(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23678_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23678_onTap_activeActionGroupIndex = -1;
		$("#obj23678").trigger("obj23678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23678) {
				console.warn("de-queueing event obj23678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23678_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj23690 
hide_23682();
function hide_23682() {
	var selector = "#obj23690";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23678_onTap_runningActionsCount = obj23678_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23682(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj23692 
hide_23683();
function hide_23683() {
	var selector = "#obj23692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj23678_onTap_runningActionsCount = obj23678_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_23683(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj23678_onTap_runningActionsCount = window.obj23678_onTap_runningActionsCount - 1;

if (window.obj23678_onTap_runningActionsCount < 0) {
	window.obj23678_onTap_runningActionsCount = 0;
} else if (window.obj23678_onTap_runningActionsCount == 0) {
	obj23678_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj23678_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23678_onTap_activeActionGroupIndex = -1;
		$("#obj23678").trigger("obj23678_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23678) {
				console.warn("de-queueing event obj23678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23678_onTap_activeActionGroupIndex = 3;
	











































};
obj23684_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23684").trigger("obj23684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23684) {
				console.warn("de-queueing event obj23684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_23686();
function wait_23686() {
	window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = obj23684_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23684_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj23684_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23684").trigger("obj23684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23684) {
				console.warn("de-queueing event obj23684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_23687();
function goToPage_23687() {
	window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = obj23684_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor932")[0].click();
	window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj23684_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj23684_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj23684_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj23684").trigger("obj23684_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 23684) {
				console.warn("de-queueing event obj23684." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj23684").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj24057_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24057_onTap_activeActionGroupIndex = -1;
		$("#obj24057").trigger("obj24057_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24057) {
				console.warn("de-queueing event obj24057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24057_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24071 
hide_24092();
function hide_24092() {
	var selector = "#obj24071";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24092(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24073
(function(){
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	var selector = "#obj24073";
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
					window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24065
(function(){
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	var selector = "#obj24065";
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
					window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24080
(function(){
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	var selector = "#obj24080";
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
					window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24086
(function(){
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	var selector = "#obj24086";
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
					window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24069
(function(){
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	var selector = "#obj24069";
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
					window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24136();
function playAudioFile_24136() {
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24136")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24136");
			$("#obj_audio_playSoundFile24136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
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
				window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24077();
function runjs_24077() {
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;


	$("#obj24061").css("background-color", "#38B581");
	
	setTimeout(function() {
		window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}
	}, 1);
}






//	action: run action list container
//	target: obj24100 
runActionList_24105();
function runActionList_24105() {
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;

	$("#obj24100").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24137 
runActionList_24185();
function runActionList_24185() {
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;

	$("#obj24137").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24213 
runActionList_24275();
function runActionList_24275() {
	window.obj24057_onTap_runningActionsCount = obj24057_onTap_runningActionsCount + 1;

	$("#obj24213").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24057_onTap_runningActionsCount = window.obj24057_onTap_runningActionsCount - 1;

if (window.obj24057_onTap_runningActionsCount < 0) {
	window.obj24057_onTap_runningActionsCount = 0;
} else if (window.obj24057_onTap_runningActionsCount == 0) {
	obj24057_onTap_actionGroup1();
}		
	}, 1);
}







};
obj24057_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24057_onTap_activeActionGroupIndex = -1;
		$("#obj24057").trigger("obj24057_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24057) {
				console.warn("de-queueing event obj24057." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24057").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24057_onTap_activeActionGroupIndex = 1;
	











































};
obj24065_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24065_onTap_activeActionGroupIndex = -1;
		$("#obj24065").trigger("obj24065_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24065) {
				console.warn("de-queueing event obj24065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24065_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24069 
hide_24113();
function hide_24113() {
	var selector = "#obj24069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24113(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24108
(function(){
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	var selector = "#obj24108";
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
					window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
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
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24075
(function(){
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	var selector = "#obj24075";
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
					window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
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
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24071
(function(){
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	var selector = "#obj24071";
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
					window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
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
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24106();
function playAudioFile_24106() {
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24106")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24106");
			$("#obj_audio_playSoundFile24106").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
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
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24107();
function runjs_24107() {
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	$("#obj24063").css("background-color", "#38B581");
	
	setTimeout(function() {
		window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup1();
}
	}, 1);
}














};
obj24065_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24065_onTap_activeActionGroupIndex = -1;
		$("#obj24065").trigger("obj24065_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24065) {
				console.warn("de-queueing event obj24065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24065_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj23684 
incrementCounter_24119();
function incrementCounter_24119() {
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	var oldValue = obj23684_counterValue;
	obj23684_counterValue = obj23684_counterValue + 1;
	if (! obj23684_counterCanExceedTargetValue && obj23684_counterValue > obj23684_counterTargetValue) {
		obj23684_counterValue = obj23684_counterTargetValue;
	}

	if (oldValue != obj23684_counterValue) {
		$("#obj23684").trigger('SCEventCounterValueChange');
		$("#obj23684").trigger('SCEventCounterIncrease');
		if (obj23684_counterValue == obj23684_counterTargetValue)
			$("#obj23684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup2();
} }, 1);
}











};
obj24065_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24065_onTap_activeActionGroupIndex = -1;
		$("#obj24065").trigger("obj24065_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24065) {
				console.warn("de-queueing event obj24065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24065_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24207
(function(){
	window.obj24065_onTap_runningActionsCount = obj24065_onTap_runningActionsCount + 1;


	var selector = "#obj24207";
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
					window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup3();
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
				window.obj24065_onTap_runningActionsCount = window.obj24065_onTap_runningActionsCount - 1;

if (window.obj24065_onTap_runningActionsCount < 0) {
	window.obj24065_onTap_runningActionsCount = 0;
} else if (window.obj24065_onTap_runningActionsCount == 0) {
	obj24065_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24065_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24065_onTap_activeActionGroupIndex = -1;
		$("#obj24065").trigger("obj24065_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24065) {
				console.warn("de-queueing event obj24065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24065_onTap_activeActionGroupIndex = 3;
	











































};
obj24080_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24080_onTap_activeActionGroupIndex = -1;
		$("#obj24080").trigger("obj24080_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24080) {
				console.warn("de-queueing event obj24080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24080_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24096
(function(){
	window.obj24080_onTap_runningActionsCount = obj24080_onTap_runningActionsCount + 1;


	var selector = "#obj24096";
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
					window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
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
				window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24126();
function playAudioFile_24126() {
	window.obj24080_onTap_runningActionsCount = obj24080_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24126")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24126");
			$("#obj_audio_playSoundFile24126").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
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
				window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24128();
function switchText_24128() {
	window.obj24080_onTap_runningActionsCount = obj24080_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 42px;\">13 + 34</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24080_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24080_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24080").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24080_content");
			setTimeout(function () {
				window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24080 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24080_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24080_onTap_activeActionGroupIndex = -1;
		$("#obj24080").trigger("obj24080_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24080) {
				console.warn("de-queueing event obj24080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24080_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24129();
function wait_24129() {
	window.obj24080_onTap_runningActionsCount = obj24080_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24080_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24080_onTap_activeActionGroupIndex = -1;
		$("#obj24080").trigger("obj24080_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24080) {
				console.warn("de-queueing event obj24080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24080_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24130();
function switchText_24130() {
	window.obj24080_onTap_runningActionsCount = obj24080_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">13 + 34</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24080_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24080_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24080").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24080_content");
			setTimeout(function () {
				window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24080 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24080_onTap_runningActionsCount = window.obj24080_onTap_runningActionsCount - 1;

if (window.obj24080_onTap_runningActionsCount < 0) {
	window.obj24080_onTap_runningActionsCount = 0;
} else if (window.obj24080_onTap_runningActionsCount == 0) {
	obj24080_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24080_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24080_onTap_activeActionGroupIndex = -1;
		$("#obj24080").trigger("obj24080_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24080) {
				console.warn("de-queueing event obj24080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24080_onTap_activeActionGroupIndex = 3;
	











































};
obj24086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24086_onTap_activeActionGroupIndex = -1;
		$("#obj24086").trigger("obj24086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24086) {
				console.warn("de-queueing event obj24086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24086_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24098
(function(){
	window.obj24086_onTap_runningActionsCount = obj24086_onTap_runningActionsCount + 1;


	var selector = "#obj24098";
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
					window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
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
				window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24131();
function playAudioFile_24131() {
	window.obj24086_onTap_runningActionsCount = obj24086_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24131")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24131");
			$("#obj_audio_playSoundFile24131").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
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
				window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24133();
function switchText_24133() {
	window.obj24086_onTap_runningActionsCount = obj24086_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto;\"><strong><span style=\"font-size: 42px;\">99 – 39</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24086_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24086_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24086").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24086_content");
			setTimeout(function () {
				window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24086 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24086_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24086_onTap_activeActionGroupIndex = -1;
		$("#obj24086").trigger("obj24086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24086) {
				console.warn("de-queueing event obj24086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24086_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24134();
function wait_24134() {
	window.obj24086_onTap_runningActionsCount = obj24086_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24086_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24086_onTap_activeActionGroupIndex = -1;
		$("#obj24086").trigger("obj24086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24086) {
				console.warn("de-queueing event obj24086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24086_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24135();
function switchText_24135() {
	window.obj24086_onTap_runningActionsCount = obj24086_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">99 – 39</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24086_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24086_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24086").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24086_content");
			setTimeout(function () {
				window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24086 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24086_onTap_runningActionsCount = window.obj24086_onTap_runningActionsCount - 1;

if (window.obj24086_onTap_runningActionsCount < 0) {
	window.obj24086_onTap_runningActionsCount = 0;
} else if (window.obj24086_onTap_runningActionsCount == 0) {
	obj24086_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24086_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24086_onTap_activeActionGroupIndex = -1;
		$("#obj24086").trigger("obj24086_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24086) {
				console.warn("de-queueing event obj24086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24086_onTap_activeActionGroupIndex = 3;
	











































};
obj24100_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24100_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24100").trigger("obj24100_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24100) {
				console.warn("de-queueing event obj24100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24100_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24075 
hide_24210();
function hide_24210() {
	var selector = "#obj24075";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24100_SCEventRun_runningActionsCount = obj24100_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24210(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24096 
hide_24211();
function hide_24211() {
	var selector = "#obj24096";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24100_SCEventRun_runningActionsCount = obj24100_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24211(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24098 
hide_24212();
function hide_24212() {
	var selector = "#obj24098";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24100_SCEventRun_runningActionsCount = obj24100_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24212(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24100_SCEventRun_runningActionsCount = window.obj24100_SCEventRun_runningActionsCount - 1;

if (window.obj24100_SCEventRun_runningActionsCount < 0) {
	window.obj24100_SCEventRun_runningActionsCount = 0;
} else if (window.obj24100_SCEventRun_runningActionsCount == 0) {
	obj24100_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24100_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24100_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24100").trigger("obj24100_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24100) {
				console.warn("de-queueing event obj24100." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24100").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24100_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj24114_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24114_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24114").trigger("obj24114_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24114) {
				console.warn("de-queueing event obj24114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24114_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24065 
hide_24116();
function hide_24116() {
	var selector = "#obj24065";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24114_SCEventRun_runningActionsCount = obj24114_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24116(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24080 
hide_24117();
function hide_24117() {
	var selector = "#obj24080";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24114_SCEventRun_runningActionsCount = obj24114_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24117(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24086 
hide_24118();
function hide_24118() {
	var selector = "#obj24086";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24114_SCEventRun_runningActionsCount = obj24114_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24118(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24114_SCEventRun_runningActionsCount = window.obj24114_SCEventRun_runningActionsCount - 1;

if (window.obj24114_SCEventRun_runningActionsCount < 0) {
	window.obj24114_SCEventRun_runningActionsCount = 0;
} else if (window.obj24114_SCEventRun_runningActionsCount == 0) {
	obj24114_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24114_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24114_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24114").trigger("obj24114_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24114) {
				console.warn("de-queueing event obj24114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24114_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj24171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24171_onTap_activeActionGroupIndex = -1;
		$("#obj24171").trigger("obj24171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24171) {
				console.warn("de-queueing event obj24171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24171_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24071 
hide_24179();
function hide_24179() {
	var selector = "#obj24071";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24179(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24182
(function(){
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	var selector = "#obj24182";
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
					window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24158
(function(){
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	var selector = "#obj24158";
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
					window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24151
(function(){
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	var selector = "#obj24151";
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
					window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24144
(function(){
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	var selector = "#obj24144";
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
					window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24069
(function(){
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	var selector = "#obj24069";
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
					window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24173();
function playAudioFile_24173() {
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24173")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24173");
			$("#obj_audio_playSoundFile24173").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
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
				window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24180();
function runjs_24180() {
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;


	$("#obj24167").css("background-color", "#FAC910");
	
	setTimeout(function() {
		window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}
	}, 1);
}






//	action: run action list container
//	target: obj24100 
runActionList_24181();
function runActionList_24181() {
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;

	$("#obj24100").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24114 
runActionList_24184();
function runActionList_24184() {
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;

	$("#obj24114").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24213 
runActionList_24274();
function runActionList_24274() {
	window.obj24171_onTap_runningActionsCount = obj24171_onTap_runningActionsCount + 1;

	$("#obj24213").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24171_onTap_runningActionsCount = window.obj24171_onTap_runningActionsCount - 1;

if (window.obj24171_onTap_runningActionsCount < 0) {
	window.obj24171_onTap_runningActionsCount = 0;
} else if (window.obj24171_onTap_runningActionsCount == 0) {
	obj24171_onTap_actionGroup1();
}		
	}, 1);
}







};
obj24171_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24171_onTap_activeActionGroupIndex = -1;
		$("#obj24171").trigger("obj24171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24171) {
				console.warn("de-queueing event obj24171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24171_onTap_activeActionGroupIndex = 1;
	











































};
obj24158_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24158_onTap_activeActionGroupIndex = -1;
		$("#obj24158").trigger("obj24158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24158) {
				console.warn("de-queueing event obj24158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24158_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24075
(function(){
	window.obj24158_onTap_runningActionsCount = obj24158_onTap_runningActionsCount + 1;


	var selector = "#obj24075";
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
					window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
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
				window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24193();
function playAudioFile_24193() {
	window.obj24158_onTap_runningActionsCount = obj24158_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24193")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24193");
			$("#obj_audio_playSoundFile24193").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
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
				window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24195();
function switchText_24195() {
	window.obj24158_onTap_runningActionsCount = obj24158_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 42px;\">44 + 52</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24158_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24158_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24158").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24158_content");
			setTimeout(function () {
				window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24158 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24158_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24158_onTap_activeActionGroupIndex = -1;
		$("#obj24158").trigger("obj24158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24158) {
				console.warn("de-queueing event obj24158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24158_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24196();
function wait_24196() {
	window.obj24158_onTap_runningActionsCount = obj24158_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24158_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24158_onTap_activeActionGroupIndex = -1;
		$("#obj24158").trigger("obj24158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24158) {
				console.warn("de-queueing event obj24158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24158_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24197();
function switchText_24197() {
	window.obj24158_onTap_runningActionsCount = obj24158_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">44 + 52</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24158_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24158_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24158").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24158_content");
			setTimeout(function () {
				window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24158 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24158_onTap_runningActionsCount = window.obj24158_onTap_runningActionsCount - 1;

if (window.obj24158_onTap_runningActionsCount < 0) {
	window.obj24158_onTap_runningActionsCount = 0;
} else if (window.obj24158_onTap_runningActionsCount == 0) {
	obj24158_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24158_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24158_onTap_activeActionGroupIndex = -1;
		$("#obj24158").trigger("obj24158_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24158) {
				console.warn("de-queueing event obj24158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24158_onTap_activeActionGroupIndex = 3;
	











































};
obj24151_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24151_onTap_activeActionGroupIndex = -1;
		$("#obj24151").trigger("obj24151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24151) {
				console.warn("de-queueing event obj24151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24151_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24096
(function(){
	window.obj24151_onTap_runningActionsCount = obj24151_onTap_runningActionsCount + 1;


	var selector = "#obj24096";
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
					window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
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
				window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24153();
function playAudioFile_24153() {
	window.obj24151_onTap_runningActionsCount = obj24151_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24153")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24153");
			$("#obj_audio_playSoundFile24153").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
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
				window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24155();
function switchText_24155() {
	window.obj24151_onTap_runningActionsCount = obj24151_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 42px;\">13 + 34</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24151_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24151_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24151").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24151_content");
			setTimeout(function () {
				window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24151 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24151_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24151_onTap_activeActionGroupIndex = -1;
		$("#obj24151").trigger("obj24151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24151) {
				console.warn("de-queueing event obj24151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24151_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24156();
function wait_24156() {
	window.obj24151_onTap_runningActionsCount = obj24151_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24151_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24151_onTap_activeActionGroupIndex = -1;
		$("#obj24151").trigger("obj24151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24151) {
				console.warn("de-queueing event obj24151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24151_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24157();
function switchText_24157() {
	window.obj24151_onTap_runningActionsCount = obj24151_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">13 + 34</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24151_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24151_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24151").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24151_content");
			setTimeout(function () {
				window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24151 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24151_onTap_runningActionsCount = window.obj24151_onTap_runningActionsCount - 1;

if (window.obj24151_onTap_runningActionsCount < 0) {
	window.obj24151_onTap_runningActionsCount = 0;
} else if (window.obj24151_onTap_runningActionsCount == 0) {
	obj24151_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24151_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24151_onTap_activeActionGroupIndex = -1;
		$("#obj24151").trigger("obj24151_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24151) {
				console.warn("de-queueing event obj24151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24151_onTap_activeActionGroupIndex = 3;
	











































};
obj24144_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24144_onTap_activeActionGroupIndex = -1;
		$("#obj24144").trigger("obj24144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24144) {
				console.warn("de-queueing event obj24144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24144_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24069 
hide_24191();
function hide_24191() {
	var selector = "#obj24069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24191(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24142
(function(){
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	var selector = "#obj24142";
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
					window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
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
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24202
(function(){
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	var selector = "#obj24202";
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
					window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
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
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24098
(function(){
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	var selector = "#obj24098";
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
					window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
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
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24071
(function(){
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	var selector = "#obj24071";
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
					window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
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
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24186();
function playAudioFile_24186() {
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24186")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24186");
			$("#obj_audio_playSoundFile24186").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
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
				window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24187();
function runjs_24187() {
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	$("#obj24088").css("background-color", "#FAC910");
	
	setTimeout(function() {
		window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup1();
}
	}, 1);
}














};
obj24144_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24144_onTap_activeActionGroupIndex = -1;
		$("#obj24144").trigger("obj24144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24144) {
				console.warn("de-queueing event obj24144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24144_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj23684 
incrementCounter_24192();
function incrementCounter_24192() {
	window.obj24144_onTap_runningActionsCount = obj24144_onTap_runningActionsCount + 1;


	var oldValue = obj23684_counterValue;
	obj23684_counterValue = obj23684_counterValue + 1;
	if (! obj23684_counterCanExceedTargetValue && obj23684_counterValue > obj23684_counterTargetValue) {
		obj23684_counterValue = obj23684_counterTargetValue;
	}

	if (oldValue != obj23684_counterValue) {
		$("#obj23684").trigger('SCEventCounterValueChange');
		$("#obj23684").trigger('SCEventCounterIncrease');
		if (obj23684_counterValue == obj23684_counterTargetValue)
			$("#obj23684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24144_onTap_runningActionsCount = window.obj24144_onTap_runningActionsCount - 1;

if (window.obj24144_onTap_runningActionsCount < 0) {
	window.obj24144_onTap_runningActionsCount = 0;
} else if (window.obj24144_onTap_runningActionsCount == 0) {
	obj24144_onTap_actionGroup2();
} }, 1);
}











};
obj24144_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24144_onTap_activeActionGroupIndex = -1;
		$("#obj24144").trigger("obj24144_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24144) {
				console.warn("de-queueing event obj24144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24144_onTap_activeActionGroupIndex = 2;
	











































};
obj24137_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24137_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24137").trigger("obj24137_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24137) {
				console.warn("de-queueing event obj24137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24137_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24158 
hide_24139();
function hide_24139() {
	var selector = "#obj24158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24137_SCEventRun_runningActionsCount = obj24137_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24139(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24151 
hide_24140();
function hide_24140() {
	var selector = "#obj24151";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24137_SCEventRun_runningActionsCount = obj24137_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24140(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24144 
hide_24141();
function hide_24141() {
	var selector = "#obj24144";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24137_SCEventRun_runningActionsCount = obj24137_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24141(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24137_SCEventRun_runningActionsCount = window.obj24137_SCEventRun_runningActionsCount - 1;

if (window.obj24137_SCEventRun_runningActionsCount < 0) {
	window.obj24137_SCEventRun_runningActionsCount = 0;
} else if (window.obj24137_SCEventRun_runningActionsCount == 0) {
	obj24137_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24137_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24137_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24137").trigger("obj24137_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24137) {
				console.warn("de-queueing event obj24137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24137_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj24248_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24248_onTap_activeActionGroupIndex = -1;
		$("#obj24248").trigger("obj24248_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24248) {
				console.warn("de-queueing event obj24248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24248_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24071 
hide_24256();
function hide_24256() {
	var selector = "#obj24071";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24256(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24276
(function(){
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	var selector = "#obj24276";
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
					window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24237
(function(){
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	var selector = "#obj24237";
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
					window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24230
(function(){
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	var selector = "#obj24230";
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
					window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24220
(function(){
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	var selector = "#obj24220";
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
					window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24069
(function(){
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	var selector = "#obj24069";
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
					window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24250();
function playAudioFile_24250() {
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24250")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24250");
			$("#obj_audio_playSoundFile24250").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
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
				window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24257();
function runjs_24257() {
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;


	$("#obj24244").css("background-color", "#E96700");
	
	setTimeout(function() {
		window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}
	}, 1);
}






//	action: run action list container
//	target: obj24100 
runActionList_24258();
function runActionList_24258() {
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;

	$("#obj24100").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24114 
runActionList_24259();
function runActionList_24259() {
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;

	$("#obj24114").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj24137 
runActionList_24273();
function runActionList_24273() {
	window.obj24248_onTap_runningActionsCount = obj24248_onTap_runningActionsCount + 1;

	$("#obj24137").trigger('SCEventRun');
	setTimeout(function() {
		window.obj24248_onTap_runningActionsCount = window.obj24248_onTap_runningActionsCount - 1;

if (window.obj24248_onTap_runningActionsCount < 0) {
	window.obj24248_onTap_runningActionsCount = 0;
} else if (window.obj24248_onTap_runningActionsCount == 0) {
	obj24248_onTap_actionGroup1();
}		
	}, 1);
}







};
obj24248_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24248_onTap_activeActionGroupIndex = -1;
		$("#obj24248").trigger("obj24248_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24248) {
				console.warn("de-queueing event obj24248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24248_onTap_activeActionGroupIndex = 1;
	











































};
obj24237_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24237_onTap_activeActionGroupIndex = -1;
		$("#obj24237").trigger("obj24237_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24237) {
				console.warn("de-queueing event obj24237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24237_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24075
(function(){
	window.obj24237_onTap_runningActionsCount = obj24237_onTap_runningActionsCount + 1;


	var selector = "#obj24075";
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
					window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
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
				window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24239();
function playAudioFile_24239() {
	window.obj24237_onTap_runningActionsCount = obj24237_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24239")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24239");
			$("#obj_audio_playSoundFile24239").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
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
				window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24241();
function switchText_24241() {
	window.obj24237_onTap_runningActionsCount = obj24237_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 42px;\">44 + 52</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24237_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24237_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24237").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24237_content");
			setTimeout(function () {
				window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24237 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24237_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24237_onTap_activeActionGroupIndex = -1;
		$("#obj24237").trigger("obj24237_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24237) {
				console.warn("de-queueing event obj24237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24237_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24242();
function wait_24242() {
	window.obj24237_onTap_runningActionsCount = obj24237_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24237_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24237_onTap_activeActionGroupIndex = -1;
		$("#obj24237").trigger("obj24237_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24237) {
				console.warn("de-queueing event obj24237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24237_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24243();
function switchText_24243() {
	window.obj24237_onTap_runningActionsCount = obj24237_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">44 + 52</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24237_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24237_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24237").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24237_content");
			setTimeout(function () {
				window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24237 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24237_onTap_runningActionsCount = window.obj24237_onTap_runningActionsCount - 1;

if (window.obj24237_onTap_runningActionsCount < 0) {
	window.obj24237_onTap_runningActionsCount = 0;
} else if (window.obj24237_onTap_runningActionsCount == 0) {
	obj24237_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24237_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24237_onTap_activeActionGroupIndex = -1;
		$("#obj24237").trigger("obj24237_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24237) {
				console.warn("de-queueing event obj24237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24237_onTap_activeActionGroupIndex = 3;
	











































};
obj24230_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24230_onTap_activeActionGroupIndex = -1;
		$("#obj24230").trigger("obj24230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24230) {
				console.warn("de-queueing event obj24230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24230_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24069 
hide_24266();
function hide_24266() {
	var selector = "#obj24069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24266(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24218
(function(){
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	var selector = "#obj24218";
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
					window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
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
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24205
(function(){
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	var selector = "#obj24205";
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
					window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
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
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24096
(function(){
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	var selector = "#obj24096";
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
					window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
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
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24071
(function(){
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	var selector = "#obj24071";
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
					window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
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
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24260();
function playAudioFile_24260() {
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24260")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24260");
			$("#obj_audio_playSoundFile24260").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
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
				window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_24261();
function runjs_24261() {
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	$("#obj24078").css("background-color", "#E96700");
	
	setTimeout(function() {
		window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup1();
}
	}, 1);
}














};
obj24230_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24230_onTap_activeActionGroupIndex = -1;
		$("#obj24230").trigger("obj24230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24230) {
				console.warn("de-queueing event obj24230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24230_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj23684 
incrementCounter_24267();
function incrementCounter_24267() {
	window.obj24230_onTap_runningActionsCount = obj24230_onTap_runningActionsCount + 1;


	var oldValue = obj23684_counterValue;
	obj23684_counterValue = obj23684_counterValue + 1;
	if (! obj23684_counterCanExceedTargetValue && obj23684_counterValue > obj23684_counterTargetValue) {
		obj23684_counterValue = obj23684_counterTargetValue;
	}

	if (oldValue != obj23684_counterValue) {
		$("#obj23684").trigger('SCEventCounterValueChange');
		$("#obj23684").trigger('SCEventCounterIncrease');
		if (obj23684_counterValue == obj23684_counterTargetValue)
			$("#obj23684").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24230_onTap_runningActionsCount = window.obj24230_onTap_runningActionsCount - 1;

if (window.obj24230_onTap_runningActionsCount < 0) {
	window.obj24230_onTap_runningActionsCount = 0;
} else if (window.obj24230_onTap_runningActionsCount == 0) {
	obj24230_onTap_actionGroup2();
} }, 1);
}











};
obj24230_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24230_onTap_activeActionGroupIndex = -1;
		$("#obj24230").trigger("obj24230_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24230) {
				console.warn("de-queueing event obj24230." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24230").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24230_onTap_activeActionGroupIndex = 2;
	











































};
obj24220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24220_onTap_activeActionGroupIndex = -1;
		$("#obj24220").trigger("obj24220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24220) {
				console.warn("de-queueing event obj24220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24220_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24098
(function(){
	window.obj24220_onTap_runningActionsCount = obj24220_onTap_runningActionsCount + 1;


	var selector = "#obj24098";
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
					window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
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
				window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24268();
function playAudioFile_24268() {
	window.obj24220_onTap_runningActionsCount = obj24220_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24268")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24268");
			$("#obj_audio_playSoundFile24268").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
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
				window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_24270();
function switchText_24270() {
	window.obj24220_onTap_runningActionsCount = obj24220_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 42px;\">99 – 39</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24220_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24220_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24220").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24220_content");
			setTimeout(function () {
				window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj24220 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj24220_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24220_onTap_activeActionGroupIndex = -1;
		$("#obj24220").trigger("obj24220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24220) {
				console.warn("de-queueing event obj24220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24220_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24271();
function wait_24271() {
	window.obj24220_onTap_runningActionsCount = obj24220_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj24220_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24220_onTap_activeActionGroupIndex = -1;
		$("#obj24220").trigger("obj24220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24220) {
				console.warn("de-queueing event obj24220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24220_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_24272();
function switchText_24272() {
	window.obj24220_onTap_runningActionsCount = obj24220_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto; font-size: 48px;\">99 – 39</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj24220_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj24220_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj24220").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj24220_content");
			setTimeout(function () {
				window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj24220 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj24220_onTap_runningActionsCount = window.obj24220_onTap_runningActionsCount - 1;

if (window.obj24220_onTap_runningActionsCount < 0) {
	window.obj24220_onTap_runningActionsCount = 0;
} else if (window.obj24220_onTap_runningActionsCount == 0) {
	obj24220_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj24220_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24220_onTap_activeActionGroupIndex = -1;
		$("#obj24220").trigger("obj24220_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24220) {
				console.warn("de-queueing event obj24220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24220_onTap_activeActionGroupIndex = 3;
	











































};
obj24213_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24213_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24213").trigger("obj24213_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24213) {
				console.warn("de-queueing event obj24213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24213_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj24237 
hide_24215();
function hide_24215() {
	var selector = "#obj24237";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24213_SCEventRun_runningActionsCount = obj24213_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24215(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24230 
hide_24216();
function hide_24216() {
	var selector = "#obj24230";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24213_SCEventRun_runningActionsCount = obj24213_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24216(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24220 
hide_24217();
function hide_24217() {
	var selector = "#obj24220";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24213_SCEventRun_runningActionsCount = obj24213_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24217(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24213_SCEventRun_runningActionsCount = window.obj24213_SCEventRun_runningActionsCount - 1;

if (window.obj24213_SCEventRun_runningActionsCount < 0) {
	window.obj24213_SCEventRun_runningActionsCount = 0;
} else if (window.obj24213_SCEventRun_runningActionsCount == 0) {
	obj24213_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24213_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24213_SCEventRun_activeActionGroupIndex = -1;
		$("#obj24213").trigger("obj24213_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24213) {
				console.warn("de-queueing event obj24213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24213_SCEventRun_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj23659: Event Touch Down
 *
 */

$("#obj23659").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23659_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23659_onTap is still running");
	return;
}
var obj23659_onTap_runningActionsCount = 0;
var obj23659_onTap_loopCount = 0;
obj23659_onTap_actionGroup0();
});


















/*
 *
 *   obj23662: Event Touch Down
 *
 */

$("#obj23662").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23662_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23662_onTap is still running");
	return;
}
var obj23662_onTap_runningActionsCount = 0;
var obj23662_onTap_loopCount = 0;
obj23662_onTap_actionGroup0();
});
























































/*
 *
 *   obj23669: Event Touch Down
 *
 */

$("#obj23669").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23669_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23669_onTap is still running");
	return;
}
var obj23669_onTap_runningActionsCount = 0;
var obj23669_onTap_loopCount = 0;
obj23669_onTap_actionGroup0();
});


















/*
 *
 *   obj23672: Event Touch Down
 *
 */

$("#obj23672").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23672_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23672_onTap is still running");
	return;
}
var obj23672_onTap_runningActionsCount = 0;
var obj23672_onTap_loopCount = 0;
obj23672_onTap_actionGroup0();
});


















/*
 *
 *   obj23678: Event Touch Down
 *
 */

$("#obj23678").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj23678_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23678_onTap is still running");
	return;
}
var obj23678_onTap_runningActionsCount = 0;
var obj23678_onTap_loopCount = 0;
obj23678_onTap_actionGroup0();
});



























/*
 *
 *   obj23684: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj23684").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj23684_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj23684_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj23684_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj23684_SCEventCounterReachedTargetValue_loopCount = 0;
obj23684_SCEventCounterReachedTargetValue_actionGroup0();
});





















































































/*
 *
 *   obj24057: Event Touch Down
 *
 */

$("#obj24057").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24057_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24057_onTap is still running");
	return;
}
var obj24057_onTap_runningActionsCount = 0;
var obj24057_onTap_loopCount = 0;
obj24057_onTap_actionGroup0();
});










































































































































































/*
 *
 *   obj24065: Event Touch Down
 *
 */

$("#obj24065").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24065_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24065_onTap is still running");
	return;
}
var obj24065_onTap_runningActionsCount = 0;
var obj24065_onTap_loopCount = 0;
obj24065_onTap_actionGroup0();
});


















/*
 *
 *   obj24080: Event Touch Down
 *
 */

$("#obj24080").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24080_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24080_onTap is still running");
	return;
}
var obj24080_onTap_runningActionsCount = 0;
var obj24080_onTap_loopCount = 0;
obj24080_onTap_actionGroup0();
});


















/*
 *
 *   obj24086: Event Touch Down
 *
 */

$("#obj24086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24086_onTap is still running");
	return;
}
var obj24086_onTap_runningActionsCount = 0;
var obj24086_onTap_loopCount = 0;
obj24086_onTap_actionGroup0();
});



























/*
 *
 *   obj24100: Event SCEventRun
 *
 */

$("#obj24100").bind("SCEventRun", function(event) {
	if (window.obj24100_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24100_SCEventRun is still running");
	return;
}
var obj24100_SCEventRun_runningActionsCount = 0;
var obj24100_SCEventRun_loopCount = 0;
obj24100_SCEventRun_actionGroup0();
});





































/*
 *
 *   obj24114: Event SCEventRun
 *
 */

$("#obj24114").bind("SCEventRun", function(event) {
	if (window.obj24114_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24114_SCEventRun is still running");
	return;
}
var obj24114_SCEventRun_runningActionsCount = 0;
var obj24114_SCEventRun_loopCount = 0;
obj24114_SCEventRun_actionGroup0();
});









/*
 *
 *   obj24171: Event Touch Down
 *
 */

$("#obj24171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24171_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24171_onTap is still running");
	return;
}
var obj24171_onTap_runningActionsCount = 0;
var obj24171_onTap_loopCount = 0;
obj24171_onTap_actionGroup0();
});
























































/*
 *
 *   obj24158: Event Touch Down
 *
 */

$("#obj24158").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24158_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24158_onTap is still running");
	return;
}
var obj24158_onTap_runningActionsCount = 0;
var obj24158_onTap_loopCount = 0;
obj24158_onTap_actionGroup0();
});


















/*
 *
 *   obj24151: Event Touch Down
 *
 */

$("#obj24151").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24151_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24151_onTap is still running");
	return;
}
var obj24151_onTap_runningActionsCount = 0;
var obj24151_onTap_loopCount = 0;
obj24151_onTap_actionGroup0();
});


















/*
 *
 *   obj24144: Event Touch Down
 *
 */

$("#obj24144").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24144_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24144_onTap is still running");
	return;
}
var obj24144_onTap_runningActionsCount = 0;
var obj24144_onTap_loopCount = 0;
obj24144_onTap_actionGroup0();
});














































/*
 *
 *   obj24137: Event SCEventRun
 *
 */

$("#obj24137").bind("SCEventRun", function(event) {
	if (window.obj24137_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24137_SCEventRun is still running");
	return;
}
var obj24137_SCEventRun_runningActionsCount = 0;
var obj24137_SCEventRun_loopCount = 0;
obj24137_SCEventRun_actionGroup0();
});















































/*
 *
 *   obj24248: Event Touch Down
 *
 */

$("#obj24248").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24248_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24248_onTap is still running");
	return;
}
var obj24248_onTap_runningActionsCount = 0;
var obj24248_onTap_loopCount = 0;
obj24248_onTap_actionGroup0();
});
























































/*
 *
 *   obj24237: Event Touch Down
 *
 */

$("#obj24237").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24237_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24237_onTap is still running");
	return;
}
var obj24237_onTap_runningActionsCount = 0;
var obj24237_onTap_loopCount = 0;
obj24237_onTap_actionGroup0();
});


















/*
 *
 *   obj24230: Event Touch Down
 *
 */

$("#obj24230").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24230_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24230_onTap is still running");
	return;
}
var obj24230_onTap_runningActionsCount = 0;
var obj24230_onTap_loopCount = 0;
obj24230_onTap_actionGroup0();
});


















/*
 *
 *   obj24220: Event Touch Down
 *
 */

$("#obj24220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24220_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24220_onTap is still running");
	return;
}
var obj24220_onTap_runningActionsCount = 0;
var obj24220_onTap_loopCount = 0;
obj24220_onTap_actionGroup0();
});














































/*
 *
 *   obj24213: Event SCEventRun
 *
 */

$("#obj24213").bind("SCEventRun", function(event) {
	if (window.obj24213_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24213_SCEventRun is still running");
	return;
}
var obj24213_SCEventRun_runningActionsCount = 0;
var obj24213_SCEventRun_loopCount = 0;
obj24213_SCEventRun_actionGroup0();
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
	
$("#obj23657").trigger('SCEventShow');
$("#obj23659").trigger('SCEventShow');
$("#obj23662").trigger('SCEventShow');
$("#obj23665").trigger('SCEventShow');
$("#obj23667").trigger('SCEventShow');
$("#obj23669").trigger('SCEventShow');
$("#obj23672").trigger('SCEventShow');
$("#obj24048").trigger('SCEventShow');
$("#obj24046").trigger('SCEventShow');
$("#obj24057").trigger('SCEventShow');
$("#obj24059").trigger('SCEventShow');
$("#obj24061").trigger('SCEventShow');
$("#obj24067").trigger('SCEventShow');
$("#obj24082").trigger('SCEventShow');
$("#obj24078").trigger('SCEventShow');
$("#obj24084").trigger('SCEventShow');
$("#obj24088").trigger('SCEventShow');
$("#obj24065").trigger('SCEventShow');
$("#obj24080").trigger('SCEventShow');
$("#obj24086").trigger('SCEventShow');
$("#obj24171").trigger('SCEventShow');
$("#obj24169").trigger('SCEventShow');
$("#obj24167").trigger('SCEventShow');
$("#obj24063").trigger('SCEventShow');
$("#obj24248").trigger('SCEventShow');
$("#obj24246").trigger('SCEventShow');
$("#obj24244").trigger('SCEventShow');
$("#obj24071").trigger('SCEventShow');
	

});