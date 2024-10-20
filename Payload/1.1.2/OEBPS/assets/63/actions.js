pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 24501;
pubcoder.page.title = pubcoder.page.title || "63";
pubcoder.page.number = pubcoder.page.number || 63;
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
var obj24506_onTap_activeActionGroupIndex = -1;
var obj24506_onTap_runningActionsCount = 0;
var obj24506_onTap_loopCount = 0;
var obj24516_onTap_activeActionGroupIndex = -1;
var obj24516_onTap_runningActionsCount = 0;
var obj24516_onTap_loopCount = 0;
var obj24519_onTap_activeActionGroupIndex = -1;
var obj24519_onTap_runningActionsCount = 0;
var obj24519_onTap_loopCount = 0;
var obj24525_onTap_activeActionGroupIndex = -1;
var obj24525_onTap_runningActionsCount = 0;
var obj24525_onTap_loopCount = 0;
var obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj24531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj24531_SCEventCounterReachedTargetValue_loopCount = 0;
var obj24683_onTap_activeActionGroupIndex = -1;
var obj24683_onTap_runningActionsCount = 0;
var obj24683_onTap_loopCount = 0;
var obj24685_onTap_activeActionGroupIndex = -1;
var obj24685_onTap_runningActionsCount = 0;
var obj24685_onTap_loopCount = 0;
var obj24748_onTap_activeActionGroupIndex = -1;
var obj24748_onTap_runningActionsCount = 0;
var obj24748_onTap_loopCount = 0;
var obj24739_onTap_activeActionGroupIndex = -1;
var obj24739_onTap_runningActionsCount = 0;
var obj24739_onTap_loopCount = 0;
var obj24787_onTap_activeActionGroupIndex = -1;
var obj24787_onTap_runningActionsCount = 0;
var obj24787_onTap_loopCount = 0;
var obj24780_onTap_activeActionGroupIndex = -1;
var obj24780_onTap_runningActionsCount = 0;
var obj24780_onTap_loopCount = 0;
var obj24831_onTap_activeActionGroupIndex = -1;
var obj24831_onTap_runningActionsCount = 0;
var obj24831_onTap_loopCount = 0;
var obj24822_onTap_activeActionGroupIndex = -1;
var obj24822_onTap_runningActionsCount = 0;
var obj24822_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj24531_counterValue = 0;
var obj24531_counterTargetValue = 4;
var obj24531_counterCanExceedTargetValue = false;

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
		
obj24506_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24508();
function goToPage_24508() {
	window.obj24506_onTap_runningActionsCount = obj24506_onTap_runningActionsCount + 1;

	$("#anchor945")[0].click();
	window.obj24506_onTap_runningActionsCount = window.obj24506_onTap_runningActionsCount - 1;

if (window.obj24506_onTap_runningActionsCount < 0) {
	window.obj24506_onTap_runningActionsCount = 0;
} else if (window.obj24506_onTap_runningActionsCount == 0) {
	obj24506_onTap_actionGroup1();
}
}










































};
obj24506_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24506_onTap_activeActionGroupIndex = -1;
		$("#obj24506").trigger("obj24506_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24506) {
				console.warn("de-queueing event obj24506." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24506").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24506_onTap_activeActionGroupIndex = 1;
	











































};
obj24516_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24516_onTap_activeActionGroupIndex = -1;
		$("#obj24516").trigger("obj24516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24516) {
				console.warn("de-queueing event obj24516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24516_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_24518();
function goToPage_24518() {
	window.obj24516_onTap_runningActionsCount = obj24516_onTap_runningActionsCount + 1;

	$("#anchor946")[0].click();
	window.obj24516_onTap_runningActionsCount = window.obj24516_onTap_runningActionsCount - 1;

if (window.obj24516_onTap_runningActionsCount < 0) {
	window.obj24516_onTap_runningActionsCount = 0;
} else if (window.obj24516_onTap_runningActionsCount == 0) {
	obj24516_onTap_actionGroup1();
}
}










































};
obj24516_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24516_onTap_activeActionGroupIndex = -1;
		$("#obj24516").trigger("obj24516_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24516) {
				console.warn("de-queueing event obj24516." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24516").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24516_onTap_activeActionGroupIndex = 1;
	











































};
obj24519_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24519_onTap_activeActionGroupIndex = -1;
		$("#obj24519").trigger("obj24519_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24519) {
				console.warn("de-queueing event obj24519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24519_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24525
(function(){
	window.obj24519_onTap_runningActionsCount = obj24519_onTap_runningActionsCount + 1;


	var selector = "#obj24525";
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
					window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup1();
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
				window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24519_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24519_onTap_activeActionGroupIndex = -1;
		$("#obj24519").trigger("obj24519_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24519) {
				console.warn("de-queueing event obj24519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24519_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24519 
hide_24522();
function hide_24522() {
	var selector = "#obj24519";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24519_onTap_runningActionsCount = obj24519_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24522(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24519_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24519_onTap_activeActionGroupIndex = -1;
		$("#obj24519").trigger("obj24519_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24519) {
				console.warn("de-queueing event obj24519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24519_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj24605
(function(){
	window.obj24519_onTap_runningActionsCount = obj24519_onTap_runningActionsCount + 1;


	var selector = "#obj24605";
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
					window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup3();
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
				window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24603
(function(){
	window.obj24519_onTap_runningActionsCount = obj24519_onTap_runningActionsCount + 1;


	var selector = "#obj24603";
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
					window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup3();
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
				window.obj24519_onTap_runningActionsCount = window.obj24519_onTap_runningActionsCount - 1;

if (window.obj24519_onTap_runningActionsCount < 0) {
	window.obj24519_onTap_runningActionsCount = 0;
} else if (window.obj24519_onTap_runningActionsCount == 0) {
	obj24519_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24519_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24519_onTap_activeActionGroupIndex = -1;
		$("#obj24519").trigger("obj24519_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24519) {
				console.warn("de-queueing event obj24519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24519_onTap_activeActionGroupIndex = 3;
	











































};
obj24525_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24525_onTap_activeActionGroupIndex = -1;
		$("#obj24525").trigger("obj24525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24525) {
				console.warn("de-queueing event obj24525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24525_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24519
(function(){
	window.obj24525_onTap_runningActionsCount = obj24525_onTap_runningActionsCount + 1;


	var selector = "#obj24519";
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
					window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup1();
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
				window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24525_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24525_onTap_activeActionGroupIndex = -1;
		$("#obj24525").trigger("obj24525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24525) {
				console.warn("de-queueing event obj24525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24525_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj24525 
hide_24528();
function hide_24528() {
	var selector = "#obj24525";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24525_onTap_runningActionsCount = obj24525_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24528(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24525_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24525_onTap_activeActionGroupIndex = -1;
		$("#obj24525").trigger("obj24525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24525) {
				console.warn("de-queueing event obj24525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24525_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj24603 
hide_24529();
function hide_24529() {
	var selector = "#obj24603";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24525_onTap_runningActionsCount = obj24525_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24529(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj24605 
hide_24530();
function hide_24530() {
	var selector = "#obj24605";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24525_onTap_runningActionsCount = obj24525_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24530(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24525_onTap_runningActionsCount = window.obj24525_onTap_runningActionsCount - 1;

if (window.obj24525_onTap_runningActionsCount < 0) {
	window.obj24525_onTap_runningActionsCount = 0;
} else if (window.obj24525_onTap_runningActionsCount == 0) {
	obj24525_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj24525_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24525_onTap_activeActionGroupIndex = -1;
		$("#obj24525").trigger("obj24525_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24525) {
				console.warn("de-queueing event obj24525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24525_onTap_activeActionGroupIndex = 3;
	











































};
obj24531_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24531").trigger("obj24531_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24531) {
				console.warn("de-queueing event obj24531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_24533();
function wait_24533() {
	window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = obj24531_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj24531_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj24531_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24531").trigger("obj24531_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24531) {
				console.warn("de-queueing event obj24531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_24534();
function goToPage_24534() {
	window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = obj24531_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor947")[0].click();
	window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj24531_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj24531_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj24531_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj24531").trigger("obj24531_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24531) {
				console.warn("de-queueing event obj24531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj24683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24683_onTap_activeActionGroupIndex = -1;
		$("#obj24683").trigger("obj24683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24683) {
				console.warn("de-queueing event obj24683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24683_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24695
(function(){
	window.obj24683_onTap_runningActionsCount = obj24683_onTap_runningActionsCount + 1;


	var selector = "#obj24695";
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
					window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
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
				window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24694();
function playAudioFile_24694() {
	window.obj24683_onTap_runningActionsCount = obj24683_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24694")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24694");
			$("#obj_audio_playSoundFile24694").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
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
				window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj24692 
scale_24701();
function scale_24701() {
	window.obj24683_onTap_runningActionsCount = obj24683_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24692";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24692';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24701_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24701_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24701_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24701_completed() {
	setTimeout(function() {
		window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup1();
}
	}, 1);
}

























};
obj24683_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24683_onTap_activeActionGroupIndex = -1;
		$("#obj24683").trigger("obj24683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24683) {
				console.warn("de-queueing event obj24683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24683_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24702();
function wait_24702() {
	window.obj24683_onTap_runningActionsCount = obj24683_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup2();
}
	}, 300);
}


























};
obj24683_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24683_onTap_activeActionGroupIndex = -1;
		$("#obj24683").trigger("obj24683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24683) {
				console.warn("de-queueing event obj24683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24683_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24692 
scale_24703();
function scale_24703() {
	window.obj24683_onTap_runningActionsCount = obj24683_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24692";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24692';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24703_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24703_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24703_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24703_completed() {
	setTimeout(function() {
		window.obj24683_onTap_runningActionsCount = window.obj24683_onTap_runningActionsCount - 1;

if (window.obj24683_onTap_runningActionsCount < 0) {
	window.obj24683_onTap_runningActionsCount = 0;
} else if (window.obj24683_onTap_runningActionsCount == 0) {
	obj24683_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24683_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24683_onTap_activeActionGroupIndex = -1;
		$("#obj24683").trigger("obj24683_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24683) {
				console.warn("de-queueing event obj24683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24683_onTap_activeActionGroupIndex = 3;
	











































};
obj24685_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24698
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24698";
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
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24695
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24695";
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
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24704();
function playAudioFile_24704() {
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24704")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24704");
			$("#obj_audio_playSoundFile24704").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24685_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj24705
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24705";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup2();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24685_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_24852();
function wait_24852() {
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup3();
}
	}, 400);
}


























};
obj24685_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj24692 
hide_24707();
function hide_24707() {
	var selector = "#obj24692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24707(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24710
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24710";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24748
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24748";
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
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24739
(function(){
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var selector = "#obj24739";
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
					window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
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
				window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24685_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj24531 
incrementCounter_24731();
function incrementCounter_24731() {
	window.obj24685_onTap_runningActionsCount = obj24685_onTap_runningActionsCount + 1;


	var oldValue = obj24531_counterValue;
	obj24531_counterValue = obj24531_counterValue + 1;
	if (! obj24531_counterCanExceedTargetValue && obj24531_counterValue > obj24531_counterTargetValue) {
		obj24531_counterValue = obj24531_counterTargetValue;
	}

	if (oldValue != obj24531_counterValue) {
		$("#obj24531").trigger('SCEventCounterValueChange');
		$("#obj24531").trigger('SCEventCounterIncrease');
		if (obj24531_counterValue == obj24531_counterTargetValue)
			$("#obj24531").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24685_onTap_runningActionsCount = window.obj24685_onTap_runningActionsCount - 1;

if (window.obj24685_onTap_runningActionsCount < 0) {
	window.obj24685_onTap_runningActionsCount = 0;
} else if (window.obj24685_onTap_runningActionsCount == 0) {
	obj24685_onTap_actionGroup5();
} }, 1);
}











};
obj24685_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24685_onTap_activeActionGroupIndex = -1;
		$("#obj24685").trigger("obj24685_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24685) {
				console.warn("de-queueing event obj24685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24685_onTap_activeActionGroupIndex = 5;
	











































};
obj24748_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24737
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24737";
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
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24735
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24735";
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
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24757();
function playAudioFile_24757() {
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24757")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24757");
			$("#obj_audio_playSoundFile24757").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24748_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj24733
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24733";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup2();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24748_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_24851();
function wait_24851() {
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup3();
}
	}, 400);
}


























};
obj24748_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj24710 
hide_24761();
function hide_24761() {
	var selector = "#obj24710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24761(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24770
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24770";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24787
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24787";
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
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24780
(function(){
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var selector = "#obj24780";
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
					window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
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
				window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24748_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj24531 
incrementCounter_24763();
function incrementCounter_24763() {
	window.obj24748_onTap_runningActionsCount = obj24748_onTap_runningActionsCount + 1;


	var oldValue = obj24531_counterValue;
	obj24531_counterValue = obj24531_counterValue + 1;
	if (! obj24531_counterCanExceedTargetValue && obj24531_counterValue > obj24531_counterTargetValue) {
		obj24531_counterValue = obj24531_counterTargetValue;
	}

	if (oldValue != obj24531_counterValue) {
		$("#obj24531").trigger('SCEventCounterValueChange');
		$("#obj24531").trigger('SCEventCounterIncrease');
		if (obj24531_counterValue == obj24531_counterTargetValue)
			$("#obj24531").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24748_onTap_runningActionsCount = window.obj24748_onTap_runningActionsCount - 1;

if (window.obj24748_onTap_runningActionsCount < 0) {
	window.obj24748_onTap_runningActionsCount = 0;
} else if (window.obj24748_onTap_runningActionsCount == 0) {
	obj24748_onTap_actionGroup5();
} }, 1);
}











};
obj24748_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24748_onTap_activeActionGroupIndex = -1;
		$("#obj24748").trigger("obj24748_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24748) {
				console.warn("de-queueing event obj24748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24748_onTap_activeActionGroupIndex = 5;
	











































};
obj24739_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24739_onTap_activeActionGroupIndex = -1;
		$("#obj24739").trigger("obj24739_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24739) {
				console.warn("de-queueing event obj24739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24739_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24735
(function(){
	window.obj24739_onTap_runningActionsCount = obj24739_onTap_runningActionsCount + 1;


	var selector = "#obj24735";
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
					window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
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
				window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24764();
function playAudioFile_24764() {
	window.obj24739_onTap_runningActionsCount = obj24739_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24764")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24764");
			$("#obj_audio_playSoundFile24764").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
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
				window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj24710 
scale_24766();
function scale_24766() {
	window.obj24739_onTap_runningActionsCount = obj24739_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24710";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24710';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24766_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24766_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24766_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24766_completed() {
	setTimeout(function() {
		window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup1();
}
	}, 1);
}

























};
obj24739_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24739_onTap_activeActionGroupIndex = -1;
		$("#obj24739").trigger("obj24739_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24739) {
				console.warn("de-queueing event obj24739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24739_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24767();
function wait_24767() {
	window.obj24739_onTap_runningActionsCount = obj24739_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup2();
}
	}, 300);
}


























};
obj24739_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24739_onTap_activeActionGroupIndex = -1;
		$("#obj24739").trigger("obj24739_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24739) {
				console.warn("de-queueing event obj24739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24739_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24710 
scale_24768();
function scale_24768() {
	window.obj24739_onTap_runningActionsCount = obj24739_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24710";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24710';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24768_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24768_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24768_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24768_completed() {
	setTimeout(function() {
		window.obj24739_onTap_runningActionsCount = window.obj24739_onTap_runningActionsCount - 1;

if (window.obj24739_onTap_runningActionsCount < 0) {
	window.obj24739_onTap_runningActionsCount = 0;
} else if (window.obj24739_onTap_runningActionsCount == 0) {
	obj24739_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24739_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24739_onTap_activeActionGroupIndex = -1;
		$("#obj24739").trigger("obj24739_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24739) {
				console.warn("de-queueing event obj24739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24739_onTap_activeActionGroupIndex = 3;
	











































};
obj24787_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24787_onTap_activeActionGroupIndex = -1;
		$("#obj24787").trigger("obj24787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24787) {
				console.warn("de-queueing event obj24787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24787_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24778
(function(){
	window.obj24787_onTap_runningActionsCount = obj24787_onTap_runningActionsCount + 1;


	var selector = "#obj24778";
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
					window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
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
				window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24811();
function playAudioFile_24811() {
	window.obj24787_onTap_runningActionsCount = obj24787_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24811")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24811");
			$("#obj_audio_playSoundFile24811").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
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
				window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj24770 
scale_24813();
function scale_24813() {
	window.obj24787_onTap_runningActionsCount = obj24787_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24770";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24770';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24813_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24813_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24813_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24813_completed() {
	setTimeout(function() {
		window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup1();
}
	}, 1);
}

























};
obj24787_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24787_onTap_activeActionGroupIndex = -1;
		$("#obj24787").trigger("obj24787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24787) {
				console.warn("de-queueing event obj24787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24787_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24814();
function wait_24814() {
	window.obj24787_onTap_runningActionsCount = obj24787_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup2();
}
	}, 300);
}


























};
obj24787_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24787_onTap_activeActionGroupIndex = -1;
		$("#obj24787").trigger("obj24787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24787) {
				console.warn("de-queueing event obj24787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24787_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24770 
scale_24815();
function scale_24815() {
	window.obj24787_onTap_runningActionsCount = obj24787_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24770";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24770';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24815_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24815_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24815_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24815_completed() {
	setTimeout(function() {
		window.obj24787_onTap_runningActionsCount = window.obj24787_onTap_runningActionsCount - 1;

if (window.obj24787_onTap_runningActionsCount < 0) {
	window.obj24787_onTap_runningActionsCount = 0;
} else if (window.obj24787_onTap_runningActionsCount == 0) {
	obj24787_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24787_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24787_onTap_activeActionGroupIndex = -1;
		$("#obj24787").trigger("obj24787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24787) {
				console.warn("de-queueing event obj24787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24787_onTap_activeActionGroupIndex = 3;
	











































};
obj24780_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24778
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24778";
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
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24776
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24776";
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
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24804();
function playAudioFile_24804() {
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24804")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24804");
			$("#obj_audio_playSoundFile24804").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24780_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj24774
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24774";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup2();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24780_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_24850();
function wait_24850() {
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup3();
}
	}, 400);
}


























};
obj24780_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj24770 
hide_24808();
function hide_24808() {
	var selector = "#obj24770";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_24808(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj24772
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24772";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24831
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24831";
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
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24822
(function(){
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var selector = "#obj24822";
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
					window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
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
				window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24780_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj24531 
incrementCounter_24810();
function incrementCounter_24810() {
	window.obj24780_onTap_runningActionsCount = obj24780_onTap_runningActionsCount + 1;


	var oldValue = obj24531_counterValue;
	obj24531_counterValue = obj24531_counterValue + 1;
	if (! obj24531_counterCanExceedTargetValue && obj24531_counterValue > obj24531_counterTargetValue) {
		obj24531_counterValue = obj24531_counterTargetValue;
	}

	if (oldValue != obj24531_counterValue) {
		$("#obj24531").trigger('SCEventCounterValueChange');
		$("#obj24531").trigger('SCEventCounterIncrease');
		if (obj24531_counterValue == obj24531_counterTargetValue)
			$("#obj24531").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24780_onTap_runningActionsCount = window.obj24780_onTap_runningActionsCount - 1;

if (window.obj24780_onTap_runningActionsCount < 0) {
	window.obj24780_onTap_runningActionsCount = 0;
} else if (window.obj24780_onTap_runningActionsCount == 0) {
	obj24780_onTap_actionGroup5();
} }, 1);
}











};
obj24780_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24780_onTap_activeActionGroupIndex = -1;
		$("#obj24780").trigger("obj24780_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24780) {
				console.warn("de-queueing event obj24780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24780_onTap_activeActionGroupIndex = 5;
	











































};
obj24831_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24831_onTap_activeActionGroupIndex = -1;
		$("#obj24831").trigger("obj24831_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24831) {
				console.warn("de-queueing event obj24831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24831_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24818
(function(){
	window.obj24831_onTap_runningActionsCount = obj24831_onTap_runningActionsCount + 1;


	var selector = "#obj24818";
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
					window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
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
				window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj24820
(function(){
	window.obj24831_onTap_runningActionsCount = obj24831_onTap_runningActionsCount + 1;


	var selector = "#obj24820";
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
					window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
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
				window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24838();
function playAudioFile_24838() {
	window.obj24831_onTap_runningActionsCount = obj24831_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24838")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24838");
			$("#obj_audio_playSoundFile24838").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
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
				window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj24831_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24831_onTap_activeActionGroupIndex = -1;
		$("#obj24831").trigger("obj24831_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24831) {
				console.warn("de-queueing event obj24831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24831_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj24816
(function(){
	window.obj24831_onTap_runningActionsCount = obj24831_onTap_runningActionsCount + 1;


	var selector = "#obj24816";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup2();
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
				window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj24831_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24831_onTap_activeActionGroupIndex = -1;
		$("#obj24831").trigger("obj24831_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24831) {
				console.warn("de-queueing event obj24831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24831_onTap_activeActionGroupIndex = 2;
	































//	action: increment counter
//	target: obj24531 
incrementCounter_24844();
function incrementCounter_24844() {
	window.obj24831_onTap_runningActionsCount = obj24831_onTap_runningActionsCount + 1;


	var oldValue = obj24531_counterValue;
	obj24531_counterValue = obj24531_counterValue + 1;
	if (! obj24531_counterCanExceedTargetValue && obj24531_counterValue > obj24531_counterTargetValue) {
		obj24531_counterValue = obj24531_counterTargetValue;
	}

	if (oldValue != obj24531_counterValue) {
		$("#obj24531").trigger('SCEventCounterValueChange');
		$("#obj24531").trigger('SCEventCounterIncrease');
		if (obj24531_counterValue == obj24531_counterTargetValue)
			$("#obj24531").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj24831_onTap_runningActionsCount = window.obj24831_onTap_runningActionsCount - 1;

if (window.obj24831_onTap_runningActionsCount < 0) {
	window.obj24831_onTap_runningActionsCount = 0;
} else if (window.obj24831_onTap_runningActionsCount == 0) {
	obj24831_onTap_actionGroup3();
} }, 1);
}











};
obj24831_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24831_onTap_activeActionGroupIndex = -1;
		$("#obj24831").trigger("obj24831_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24831) {
				console.warn("de-queueing event obj24831." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24831").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24831_onTap_activeActionGroupIndex = 3;
	











































};
obj24822_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24822_onTap_activeActionGroupIndex = -1;
		$("#obj24822").trigger("obj24822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24822) {
				console.warn("de-queueing event obj24822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24822_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj24818
(function(){
	window.obj24822_onTap_runningActionsCount = obj24822_onTap_runningActionsCount + 1;


	var selector = "#obj24818";
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
					window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
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
				window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_24845();
function playAudioFile_24845() {
	window.obj24822_onTap_runningActionsCount = obj24822_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile24845")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile24845");
			$("#obj_audio_playSoundFile24845").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
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
				window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
}
		}
	}

	
	
	
}












//	action: scale
//	target: obj24772 
scale_24847();
function scale_24847() {
	window.obj24822_onTap_runningActionsCount = obj24822_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24772";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24772';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24847_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24847_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24847_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24847_completed() {
	setTimeout(function() {
		window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup1();
}
	}, 1);
}

























};
obj24822_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24822_onTap_activeActionGroupIndex = -1;
		$("#obj24822").trigger("obj24822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24822) {
				console.warn("de-queueing event obj24822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24822_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_24848();
function wait_24848() {
	window.obj24822_onTap_runningActionsCount = obj24822_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup2();
}
	}, 300);
}


























};
obj24822_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj24822_onTap_activeActionGroupIndex = -1;
		$("#obj24822").trigger("obj24822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24822) {
				console.warn("de-queueing event obj24822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24822_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj24772 
scale_24849();
function scale_24849() {
	window.obj24822_onTap_runningActionsCount = obj24822_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj24772";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj24772';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_24849_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24849_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_24849_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_24849_completed() {
	setTimeout(function() {
		window.obj24822_onTap_runningActionsCount = window.obj24822_onTap_runningActionsCount - 1;

if (window.obj24822_onTap_runningActionsCount < 0) {
	window.obj24822_onTap_runningActionsCount = 0;
} else if (window.obj24822_onTap_runningActionsCount == 0) {
	obj24822_onTap_actionGroup3();
}
	}, 1);
}

























};
obj24822_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj24822_onTap_activeActionGroupIndex = -1;
		$("#obj24822").trigger("obj24822_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 24822) {
				console.warn("de-queueing event obj24822." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj24822").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj24822_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj24506: Event Touch Down
 *
 */

$("#obj24506").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24506_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24506_onTap is still running");
	return;
}
var obj24506_onTap_runningActionsCount = 0;
var obj24506_onTap_loopCount = 0;
obj24506_onTap_actionGroup0();
});
























































/*
 *
 *   obj24516: Event Touch Down
 *
 */

$("#obj24516").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24516_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24516_onTap is still running");
	return;
}
var obj24516_onTap_runningActionsCount = 0;
var obj24516_onTap_loopCount = 0;
obj24516_onTap_actionGroup0();
});


















/*
 *
 *   obj24519: Event Touch Down
 *
 */

$("#obj24519").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24519_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24519_onTap is still running");
	return;
}
var obj24519_onTap_runningActionsCount = 0;
var obj24519_onTap_loopCount = 0;
obj24519_onTap_actionGroup0();
});


















/*
 *
 *   obj24525: Event Touch Down
 *
 */

$("#obj24525").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24525_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24525_onTap is still running");
	return;
}
var obj24525_onTap_runningActionsCount = 0;
var obj24525_onTap_loopCount = 0;
obj24525_onTap_actionGroup0();
});



























/*
 *
 *   obj24531: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj24531").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj24531_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24531_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj24531_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj24531_SCEventCounterReachedTargetValue_loopCount = 0;
obj24531_SCEventCounterReachedTargetValue_actionGroup0();
});




























/*
 *
 *   obj24683: Event Touch Down
 *
 */

$("#obj24683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24683_onTap is still running");
	return;
}
var obj24683_onTap_runningActionsCount = 0;
var obj24683_onTap_loopCount = 0;
obj24683_onTap_actionGroup0();
});


















/*
 *
 *   obj24685: Event Touch Down
 *
 */

$("#obj24685").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24685_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24685_onTap is still running");
	return;
}
var obj24685_onTap_runningActionsCount = 0;
var obj24685_onTap_loopCount = 0;
obj24685_onTap_actionGroup0();
});





























































































































































































/*
 *
 *   obj24748: Event Touch Down
 *
 */

$("#obj24748").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24748_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24748_onTap is still running");
	return;
}
var obj24748_onTap_runningActionsCount = 0;
var obj24748_onTap_loopCount = 0;
obj24748_onTap_actionGroup0();
});


















/*
 *
 *   obj24739: Event Touch Down
 *
 */

$("#obj24739").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24739_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24739_onTap is still running");
	return;
}
var obj24739_onTap_runningActionsCount = 0;
var obj24739_onTap_loopCount = 0;
obj24739_onTap_actionGroup0();
});






























































































/*
 *
 *   obj24787: Event Touch Down
 *
 */

$("#obj24787").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24787_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24787_onTap is still running");
	return;
}
var obj24787_onTap_runningActionsCount = 0;
var obj24787_onTap_loopCount = 0;
obj24787_onTap_actionGroup0();
});


















/*
 *
 *   obj24780: Event Touch Down
 *
 */

$("#obj24780").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24780_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24780_onTap is still running");
	return;
}
var obj24780_onTap_runningActionsCount = 0;
var obj24780_onTap_loopCount = 0;
obj24780_onTap_actionGroup0();
});






























































































/*
 *
 *   obj24831: Event Touch Down
 *
 */

$("#obj24831").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24831_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24831_onTap is still running");
	return;
}
var obj24831_onTap_runningActionsCount = 0;
var obj24831_onTap_loopCount = 0;
obj24831_onTap_actionGroup0();
});


















/*
 *
 *   obj24822: Event Touch Down
 *
 */

$("#obj24822").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj24822_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj24822_onTap is still running");
	return;
}
var obj24822_onTap_runningActionsCount = 0;
var obj24822_onTap_loopCount = 0;
obj24822_onTap_actionGroup0();
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
	
$("#obj24504").trigger('SCEventShow');
$("#obj24506").trigger('SCEventShow');
$("#obj24512").trigger('SCEventShow');
$("#obj24514").trigger('SCEventShow');
$("#obj24516").trigger('SCEventShow');
$("#obj24519").trigger('SCEventShow');
$("#obj24535").trigger('SCEventShow');
$("#obj24683").trigger('SCEventShow');
$("#obj24685").trigger('SCEventShow');
$("#obj24687").trigger('SCEventShow');
$("#obj24689").trigger('SCEventShow');
$("#obj24692").trigger('SCEventShow');
	

});