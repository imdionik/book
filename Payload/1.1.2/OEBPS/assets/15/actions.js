pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 3958;
pubcoder.page.title = pubcoder.page.title || "15";
pubcoder.page.number = pubcoder.page.number || 15;
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
var obj3961_onTap_activeActionGroupIndex = -1;
var obj3961_onTap_runningActionsCount = 0;
var obj3961_onTap_loopCount = 0;
var obj3971_onTap_activeActionGroupIndex = -1;
var obj3971_onTap_runningActionsCount = 0;
var obj3971_onTap_loopCount = 0;
var obj4013_onTap_activeActionGroupIndex = -1;
var obj4013_onTap_runningActionsCount = 0;
var obj4013_onTap_loopCount = 0;
var obj4016_onTap_activeActionGroupIndex = -1;
var obj4016_onTap_runningActionsCount = 0;
var obj4016_onTap_loopCount = 0;
var obj4028_onTap_activeActionGroupIndex = -1;
var obj4028_onTap_runningActionsCount = 0;
var obj4028_onTap_loopCount = 0;
var obj4022_onTap_activeActionGroupIndex = -1;
var obj4022_onTap_runningActionsCount = 0;
var obj4022_onTap_loopCount = 0;
var obj4038_onTap_activeActionGroupIndex = -1;
var obj4038_onTap_runningActionsCount = 0;
var obj4038_onTap_loopCount = 0;
var obj4040_onTap_activeActionGroupIndex = -1;
var obj4040_onTap_runningActionsCount = 0;
var obj4040_onTap_loopCount = 0;
var obj4042_onTap_activeActionGroupIndex = -1;
var obj4042_onTap_runningActionsCount = 0;
var obj4042_onTap_loopCount = 0;
var obj4044_onTap_activeActionGroupIndex = -1;
var obj4044_onTap_runningActionsCount = 0;
var obj4044_onTap_loopCount = 0;
var obj4121_onTap_activeActionGroupIndex = -1;
var obj4121_onTap_runningActionsCount = 0;
var obj4121_onTap_loopCount = 0;
var obj4115_onTap_activeActionGroupIndex = -1;
var obj4115_onTap_runningActionsCount = 0;
var obj4115_onTap_loopCount = 0;
var obj4108_onTap_activeActionGroupIndex = -1;
var obj4108_onTap_runningActionsCount = 0;
var obj4108_onTap_loopCount = 0;
var obj4102_onTap_activeActionGroupIndex = -1;
var obj4102_onTap_runningActionsCount = 0;
var obj4102_onTap_loopCount = 0;
var obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4074_SCEventCounterReachedTargetValue_loopCount = 0;
var obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4077_SCEventCounterReachedTargetValue_loopCount = 0;
var obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4080_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4080_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4074_counterValue = 0;
var obj4074_counterTargetValue = 2;
var obj4074_counterCanExceedTargetValue = false;
var obj4077_counterValue = 0;
var obj4077_counterTargetValue = 2;
var obj4077_counterCanExceedTargetValue = false;
var obj4080_counterValue = 0;
var obj4080_counterTargetValue = 4;
var obj4080_counterCanExceedTargetValue = false;

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
		
obj3961_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3961_onTap_activeActionGroupIndex = -1;
		$("#obj3961").trigger("obj3961_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3961) {
				console.warn("de-queueing event obj3961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3961_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3963();
function goToPage_3963() {
	window.obj3961_onTap_runningActionsCount = obj3961_onTap_runningActionsCount + 1;

	$("#anchor184")[0].click();
	window.obj3961_onTap_runningActionsCount = window.obj3961_onTap_runningActionsCount - 1;

if (window.obj3961_onTap_runningActionsCount < 0) {
	window.obj3961_onTap_runningActionsCount = 0;
} else if (window.obj3961_onTap_runningActionsCount == 0) {
	obj3961_onTap_actionGroup1();
}
}










































};
obj3961_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3961_onTap_activeActionGroupIndex = -1;
		$("#obj3961").trigger("obj3961_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3961) {
				console.warn("de-queueing event obj3961." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3961").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3961_onTap_activeActionGroupIndex = 1;
	











































};
obj3971_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3971_onTap_activeActionGroupIndex = -1;
		$("#obj3971").trigger("obj3971_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3971) {
				console.warn("de-queueing event obj3971." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3971").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3971_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3973();
function goToPage_3973() {
	window.obj3971_onTap_runningActionsCount = obj3971_onTap_runningActionsCount + 1;

	$("#anchor185")[0].click();
	window.obj3971_onTap_runningActionsCount = window.obj3971_onTap_runningActionsCount - 1;

if (window.obj3971_onTap_runningActionsCount < 0) {
	window.obj3971_onTap_runningActionsCount = 0;
} else if (window.obj3971_onTap_runningActionsCount == 0) {
	obj3971_onTap_actionGroup1();
}
}










































};
obj3971_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3971_onTap_activeActionGroupIndex = -1;
		$("#obj3971").trigger("obj3971_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3971) {
				console.warn("de-queueing event obj3971." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3971").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3971_onTap_activeActionGroupIndex = 1;
	











































};
obj4013_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4013_onTap_activeActionGroupIndex = -1;
		$("#obj4013").trigger("obj4013_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4013) {
				console.warn("de-queueing event obj4013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4013_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4035
(function(){
	window.obj4013_onTap_runningActionsCount = obj4013_onTap_runningActionsCount + 1;


	var selector = "#obj4035";
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
					window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
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
				window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4038
(function(){
	window.obj4013_onTap_runningActionsCount = obj4013_onTap_runningActionsCount + 1;


	var selector = "#obj4038";
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
					window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
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
				window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4040
(function(){
	window.obj4013_onTap_runningActionsCount = obj4013_onTap_runningActionsCount + 1;


	var selector = "#obj4040";
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
					window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
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
				window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4042
(function(){
	window.obj4013_onTap_runningActionsCount = obj4013_onTap_runningActionsCount + 1;


	var selector = "#obj4042";
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
					window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
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
				window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4044
(function(){
	window.obj4013_onTap_runningActionsCount = obj4013_onTap_runningActionsCount + 1;


	var selector = "#obj4044";
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
					window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
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
				window.obj4013_onTap_runningActionsCount = window.obj4013_onTap_runningActionsCount - 1;

if (window.obj4013_onTap_runningActionsCount < 0) {
	window.obj4013_onTap_runningActionsCount = 0;
} else if (window.obj4013_onTap_runningActionsCount == 0) {
	obj4013_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4013_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4013_onTap_activeActionGroupIndex = -1;
		$("#obj4013").trigger("obj4013_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4013) {
				console.warn("de-queueing event obj4013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4013_onTap_activeActionGroupIndex = 1;
	











































};
obj4016_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4016_onTap_activeActionGroupIndex = -1;
		$("#obj4016").trigger("obj4016_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4016) {
				console.warn("de-queueing event obj4016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4016_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4163
(function(){
	window.obj4016_onTap_runningActionsCount = obj4016_onTap_runningActionsCount + 1;


	var selector = "#obj4163";
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
					window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
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
				window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4121
(function(){
	window.obj4016_onTap_runningActionsCount = obj4016_onTap_runningActionsCount + 1;


	var selector = "#obj4121";
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
					window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
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
				window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4115
(function(){
	window.obj4016_onTap_runningActionsCount = obj4016_onTap_runningActionsCount + 1;


	var selector = "#obj4115";
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
					window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
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
				window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4108
(function(){
	window.obj4016_onTap_runningActionsCount = obj4016_onTap_runningActionsCount + 1;


	var selector = "#obj4108";
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
					window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
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
				window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4102
(function(){
	window.obj4016_onTap_runningActionsCount = obj4016_onTap_runningActionsCount + 1;


	var selector = "#obj4102";
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
					window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
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
				window.obj4016_onTap_runningActionsCount = window.obj4016_onTap_runningActionsCount - 1;

if (window.obj4016_onTap_runningActionsCount < 0) {
	window.obj4016_onTap_runningActionsCount = 0;
} else if (window.obj4016_onTap_runningActionsCount == 0) {
	obj4016_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4016_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4016_onTap_activeActionGroupIndex = -1;
		$("#obj4016").trigger("obj4016_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4016) {
				console.warn("de-queueing event obj4016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4016_onTap_activeActionGroupIndex = 1;
	











































};
obj4028_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4028_onTap_activeActionGroupIndex = -1;
		$("#obj4028").trigger("obj4028_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4028) {
				console.warn("de-queueing event obj4028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4028_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4022
(function(){
	window.obj4028_onTap_runningActionsCount = obj4028_onTap_runningActionsCount + 1;


	var selector = "#obj4022";
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
					window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup1();
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
				window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4028_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4028_onTap_activeActionGroupIndex = -1;
		$("#obj4028").trigger("obj4028_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4028) {
				console.warn("de-queueing event obj4028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4028_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj4028 
hide_4031();
function hide_4031() {
	var selector = "#obj4028";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4028_onTap_runningActionsCount = obj4028_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4031(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4028_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4028_onTap_activeActionGroupIndex = -1;
		$("#obj4028").trigger("obj4028_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4028) {
				console.warn("de-queueing event obj4028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4028_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj4018
(function(){
	window.obj4028_onTap_runningActionsCount = obj4028_onTap_runningActionsCount + 1;


	var selector = "#obj4018";
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
					window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup3();
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
				window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4020
(function(){
	window.obj4028_onTap_runningActionsCount = obj4028_onTap_runningActionsCount + 1;


	var selector = "#obj4020";
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
					window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup3();
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
				window.obj4028_onTap_runningActionsCount = window.obj4028_onTap_runningActionsCount - 1;

if (window.obj4028_onTap_runningActionsCount < 0) {
	window.obj4028_onTap_runningActionsCount = 0;
} else if (window.obj4028_onTap_runningActionsCount == 0) {
	obj4028_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4028_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4028_onTap_activeActionGroupIndex = -1;
		$("#obj4028").trigger("obj4028_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4028) {
				console.warn("de-queueing event obj4028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4028_onTap_activeActionGroupIndex = 3;
	











































};
obj4022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4022_onTap_activeActionGroupIndex = -1;
		$("#obj4022").trigger("obj4022_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4022) {
				console.warn("de-queueing event obj4022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4022_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4028
(function(){
	window.obj4022_onTap_runningActionsCount = obj4022_onTap_runningActionsCount + 1;


	var selector = "#obj4028";
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
					window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup1();
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
				window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4022_onTap_activeActionGroupIndex = -1;
		$("#obj4022").trigger("obj4022_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4022) {
				console.warn("de-queueing event obj4022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4022_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj4022 
hide_4025();
function hide_4025() {
	var selector = "#obj4022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4022_onTap_runningActionsCount = obj4022_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4025(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4022_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4022_onTap_activeActionGroupIndex = -1;
		$("#obj4022").trigger("obj4022_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4022) {
				console.warn("de-queueing event obj4022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4022_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4020 
hide_4026();
function hide_4026() {
	var selector = "#obj4020";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4022_onTap_runningActionsCount = obj4022_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4026(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4018 
hide_4027();
function hide_4027() {
	var selector = "#obj4018";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4022_onTap_runningActionsCount = obj4022_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4027(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4022_onTap_runningActionsCount = window.obj4022_onTap_runningActionsCount - 1;

if (window.obj4022_onTap_runningActionsCount < 0) {
	window.obj4022_onTap_runningActionsCount = 0;
} else if (window.obj4022_onTap_runningActionsCount == 0) {
	obj4022_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4022_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4022_onTap_activeActionGroupIndex = -1;
		$("#obj4022").trigger("obj4022_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4022) {
				console.warn("de-queueing event obj4022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4022_onTap_activeActionGroupIndex = 3;
	











































};
obj4038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4062
(function(){
	window.obj4038_onTap_runningActionsCount = obj4038_onTap_runningActionsCount + 1;


	var selector = "#obj4062";
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
					window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup1();
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
				window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4038_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4051();
function playAudioFile_4051() {
	window.obj4038_onTap_runningActionsCount = obj4038_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4051")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4051");
			$("#obj_audio_playSoundFile4051").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup2();
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
				window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4038_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4038 
scale_4053();
function scale_4053() {
	window.obj4038_onTap_runningActionsCount = obj4038_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4038";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4038';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4053_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4053_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4053_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4053_completed() {
	setTimeout(function() {
		window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4038_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4054();
function wait_4054() {
	window.obj4038_onTap_runningActionsCount = obj4038_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4038_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4038 
scale_4055();
function scale_4055() {
	window.obj4038_onTap_runningActionsCount = obj4038_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4038";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4038';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4055_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4055_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4055_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4055_completed() {
	setTimeout(function() {
		window.obj4038_onTap_runningActionsCount = window.obj4038_onTap_runningActionsCount - 1;

if (window.obj4038_onTap_runningActionsCount < 0) {
	window.obj4038_onTap_runningActionsCount = 0;
} else if (window.obj4038_onTap_runningActionsCount == 0) {
	obj4038_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4038_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4038_onTap_activeActionGroupIndex = -1;
		$("#obj4038").trigger("obj4038_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4038) {
				console.warn("de-queueing event obj4038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4038_onTap_activeActionGroupIndex = 5;
	











































};
obj4040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4074 
incrementCounter_4092();
function incrementCounter_4092() {
	window.obj4040_onTap_runningActionsCount = obj4040_onTap_runningActionsCount + 1;


	var oldValue = obj4074_counterValue;
	obj4074_counterValue = obj4074_counterValue + 1;
	if (! obj4074_counterCanExceedTargetValue && obj4074_counterValue > obj4074_counterTargetValue) {
		obj4074_counterValue = obj4074_counterTargetValue;
	}

	if (oldValue != obj4074_counterValue) {
		$("#obj4074").trigger('SCEventCounterValueChange');
		$("#obj4074").trigger('SCEventCounterIncrease');
		if (obj4074_counterValue == obj4074_counterTargetValue)
			$("#obj4074").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup1();
} }, 1);
}











};
obj4040_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4064
(function(){
	window.obj4040_onTap_runningActionsCount = obj4040_onTap_runningActionsCount + 1;


	var selector = "#obj4064";
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
					window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup2();
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
				window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4040_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4046();
function playAudioFile_4046() {
	window.obj4040_onTap_runningActionsCount = obj4040_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4046")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4046");
			$("#obj_audio_playSoundFile4046").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup3();
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
				window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4040_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4050();
function runjs_4050() {
	window.obj4040_onTap_runningActionsCount = obj4040_onTap_runningActionsCount + 1;


	$("#obj4040").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup4();
}
	}, 1);
}














};
obj4040_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4080 
incrementCounter_4158();
function incrementCounter_4158() {
	window.obj4040_onTap_runningActionsCount = obj4040_onTap_runningActionsCount + 1;


	var oldValue = obj4080_counterValue;
	obj4080_counterValue = obj4080_counterValue + 1;
	if (! obj4080_counterCanExceedTargetValue && obj4080_counterValue > obj4080_counterTargetValue) {
		obj4080_counterValue = obj4080_counterTargetValue;
	}

	if (oldValue != obj4080_counterValue) {
		$("#obj4080").trigger('SCEventCounterValueChange');
		$("#obj4080").trigger('SCEventCounterIncrease');
		if (obj4080_counterValue == obj4080_counterTargetValue)
			$("#obj4080").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4040_onTap_runningActionsCount = window.obj4040_onTap_runningActionsCount - 1;

if (window.obj4040_onTap_runningActionsCount < 0) {
	window.obj4040_onTap_runningActionsCount = 0;
} else if (window.obj4040_onTap_runningActionsCount == 0) {
	obj4040_onTap_actionGroup5();
} }, 1);
}











};
obj4040_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4040_onTap_activeActionGroupIndex = -1;
		$("#obj4040").trigger("obj4040_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4040) {
				console.warn("de-queueing event obj4040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4040_onTap_activeActionGroupIndex = 5;
	











































};
obj4042_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4066
(function(){
	window.obj4042_onTap_runningActionsCount = obj4042_onTap_runningActionsCount + 1;


	var selector = "#obj4066";
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
					window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup1();
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
				window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4042_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4056();
function playAudioFile_4056() {
	window.obj4042_onTap_runningActionsCount = obj4042_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4056")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4056");
			$("#obj_audio_playSoundFile4056").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup2();
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
				window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4042_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4042 
scale_4057();
function scale_4057() {
	window.obj4042_onTap_runningActionsCount = obj4042_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4042";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4042';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4057_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4057_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4057_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4057_completed() {
	setTimeout(function() {
		window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4042_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4058();
function wait_4058() {
	window.obj4042_onTap_runningActionsCount = obj4042_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4042_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4042 
scale_4059();
function scale_4059() {
	window.obj4042_onTap_runningActionsCount = obj4042_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4042";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4042';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4059_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4059_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4059_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4059_completed() {
	setTimeout(function() {
		window.obj4042_onTap_runningActionsCount = window.obj4042_onTap_runningActionsCount - 1;

if (window.obj4042_onTap_runningActionsCount < 0) {
	window.obj4042_onTap_runningActionsCount = 0;
} else if (window.obj4042_onTap_runningActionsCount == 0) {
	obj4042_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4042_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4042_onTap_activeActionGroupIndex = -1;
		$("#obj4042").trigger("obj4042_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4042) {
				console.warn("de-queueing event obj4042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4042_onTap_activeActionGroupIndex = 5;
	











































};
obj4044_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4074 
incrementCounter_4093();
function incrementCounter_4093() {
	window.obj4044_onTap_runningActionsCount = obj4044_onTap_runningActionsCount + 1;


	var oldValue = obj4074_counterValue;
	obj4074_counterValue = obj4074_counterValue + 1;
	if (! obj4074_counterCanExceedTargetValue && obj4074_counterValue > obj4074_counterTargetValue) {
		obj4074_counterValue = obj4074_counterTargetValue;
	}

	if (oldValue != obj4074_counterValue) {
		$("#obj4074").trigger('SCEventCounterValueChange');
		$("#obj4074").trigger('SCEventCounterIncrease');
		if (obj4074_counterValue == obj4074_counterTargetValue)
			$("#obj4074").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup1();
} }, 1);
}











};
obj4044_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4068
(function(){
	window.obj4044_onTap_runningActionsCount = obj4044_onTap_runningActionsCount + 1;


	var selector = "#obj4068";
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
					window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup2();
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
				window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4044_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4060();
function playAudioFile_4060() {
	window.obj4044_onTap_runningActionsCount = obj4044_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4060")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4060");
			$("#obj_audio_playSoundFile4060").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup3();
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
				window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4044_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4061();
function runjs_4061() {
	window.obj4044_onTap_runningActionsCount = obj4044_onTap_runningActionsCount + 1;


	$("#obj4044").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup4();
}
	}, 1);
}














};
obj4044_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4080 
incrementCounter_4159();
function incrementCounter_4159() {
	window.obj4044_onTap_runningActionsCount = obj4044_onTap_runningActionsCount + 1;


	var oldValue = obj4080_counterValue;
	obj4080_counterValue = obj4080_counterValue + 1;
	if (! obj4080_counterCanExceedTargetValue && obj4080_counterValue > obj4080_counterTargetValue) {
		obj4080_counterValue = obj4080_counterTargetValue;
	}

	if (oldValue != obj4080_counterValue) {
		$("#obj4080").trigger('SCEventCounterValueChange');
		$("#obj4080").trigger('SCEventCounterIncrease');
		if (obj4080_counterValue == obj4080_counterTargetValue)
			$("#obj4080").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4044_onTap_runningActionsCount = window.obj4044_onTap_runningActionsCount - 1;

if (window.obj4044_onTap_runningActionsCount < 0) {
	window.obj4044_onTap_runningActionsCount = 0;
} else if (window.obj4044_onTap_runningActionsCount == 0) {
	obj4044_onTap_actionGroup5();
} }, 1);
}











};
obj4044_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4044_onTap_activeActionGroupIndex = -1;
		$("#obj4044").trigger("obj4044_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4044) {
				console.warn("de-queueing event obj4044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4044_onTap_activeActionGroupIndex = 5;
	











































};
obj4121_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4077 
incrementCounter_4133();
function incrementCounter_4133() {
	window.obj4121_onTap_runningActionsCount = obj4121_onTap_runningActionsCount + 1;


	var oldValue = obj4077_counterValue;
	obj4077_counterValue = obj4077_counterValue + 1;
	if (! obj4077_counterCanExceedTargetValue && obj4077_counterValue > obj4077_counterTargetValue) {
		obj4077_counterValue = obj4077_counterTargetValue;
	}

	if (oldValue != obj4077_counterValue) {
		$("#obj4077").trigger('SCEventCounterValueChange');
		$("#obj4077").trigger('SCEventCounterIncrease');
		if (obj4077_counterValue == obj4077_counterTargetValue)
			$("#obj4077").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup1();
} }, 1);
}











};
obj4121_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4094
(function(){
	window.obj4121_onTap_runningActionsCount = obj4121_onTap_runningActionsCount + 1;


	var selector = "#obj4094";
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
					window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup2();
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
				window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4121_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4131();
function playAudioFile_4131() {
	window.obj4121_onTap_runningActionsCount = obj4121_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4131")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4131");
			$("#obj_audio_playSoundFile4131").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup3();
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
				window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4121_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4132();
function runjs_4132() {
	window.obj4121_onTap_runningActionsCount = obj4121_onTap_runningActionsCount + 1;


	$("#obj4121").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup4();
}
	}, 1);
}














};
obj4121_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4080 
incrementCounter_4160();
function incrementCounter_4160() {
	window.obj4121_onTap_runningActionsCount = obj4121_onTap_runningActionsCount + 1;


	var oldValue = obj4080_counterValue;
	obj4080_counterValue = obj4080_counterValue + 1;
	if (! obj4080_counterCanExceedTargetValue && obj4080_counterValue > obj4080_counterTargetValue) {
		obj4080_counterValue = obj4080_counterTargetValue;
	}

	if (oldValue != obj4080_counterValue) {
		$("#obj4080").trigger('SCEventCounterValueChange');
		$("#obj4080").trigger('SCEventCounterIncrease');
		if (obj4080_counterValue == obj4080_counterTargetValue)
			$("#obj4080").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4121_onTap_runningActionsCount = window.obj4121_onTap_runningActionsCount - 1;

if (window.obj4121_onTap_runningActionsCount < 0) {
	window.obj4121_onTap_runningActionsCount = 0;
} else if (window.obj4121_onTap_runningActionsCount == 0) {
	obj4121_onTap_actionGroup5();
} }, 1);
}











};
obj4121_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4121_onTap_activeActionGroupIndex = -1;
		$("#obj4121").trigger("obj4121_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4121) {
				console.warn("de-queueing event obj4121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4121_onTap_activeActionGroupIndex = 5;
	











































};
obj4115_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4100
(function(){
	window.obj4115_onTap_runningActionsCount = obj4115_onTap_runningActionsCount + 1;


	var selector = "#obj4100";
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
					window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup1();
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
				window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4115_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4135();
function playAudioFile_4135() {
	window.obj4115_onTap_runningActionsCount = obj4115_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4135")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4135");
			$("#obj_audio_playSoundFile4135").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup2();
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
				window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4115_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4115 
scale_4136();
function scale_4136() {
	window.obj4115_onTap_runningActionsCount = obj4115_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4115";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4115';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4136_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4136_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4136_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4136_completed() {
	setTimeout(function() {
		window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4115_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4137();
function wait_4137() {
	window.obj4115_onTap_runningActionsCount = obj4115_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4115_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4115 
scale_4138();
function scale_4138() {
	window.obj4115_onTap_runningActionsCount = obj4115_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4115";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4115';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4138_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4138_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4138_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4138_completed() {
	setTimeout(function() {
		window.obj4115_onTap_runningActionsCount = window.obj4115_onTap_runningActionsCount - 1;

if (window.obj4115_onTap_runningActionsCount < 0) {
	window.obj4115_onTap_runningActionsCount = 0;
} else if (window.obj4115_onTap_runningActionsCount == 0) {
	obj4115_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4115_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4115_onTap_activeActionGroupIndex = -1;
		$("#obj4115").trigger("obj4115_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4115) {
				console.warn("de-queueing event obj4115." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4115").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4115_onTap_activeActionGroupIndex = 5;
	











































};
obj4108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4077 
incrementCounter_4142();
function incrementCounter_4142() {
	window.obj4108_onTap_runningActionsCount = obj4108_onTap_runningActionsCount + 1;


	var oldValue = obj4077_counterValue;
	obj4077_counterValue = obj4077_counterValue + 1;
	if (! obj4077_counterCanExceedTargetValue && obj4077_counterValue > obj4077_counterTargetValue) {
		obj4077_counterValue = obj4077_counterTargetValue;
	}

	if (oldValue != obj4077_counterValue) {
		$("#obj4077").trigger('SCEventCounterValueChange');
		$("#obj4077").trigger('SCEventCounterIncrease');
		if (obj4077_counterValue == obj4077_counterTargetValue)
			$("#obj4077").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup1();
} }, 1);
}











};
obj4108_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4098
(function(){
	window.obj4108_onTap_runningActionsCount = obj4108_onTap_runningActionsCount + 1;


	var selector = "#obj4098";
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
					window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup2();
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
				window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4108_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4140();
function playAudioFile_4140() {
	window.obj4108_onTap_runningActionsCount = obj4108_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4140")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4140");
			$("#obj_audio_playSoundFile4140").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup3();
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
				window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4108_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4141();
function runjs_4141() {
	window.obj4108_onTap_runningActionsCount = obj4108_onTap_runningActionsCount + 1;


	$("#obj4108").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup4();
}
	}, 1);
}














};
obj4108_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4080 
incrementCounter_4161();
function incrementCounter_4161() {
	window.obj4108_onTap_runningActionsCount = obj4108_onTap_runningActionsCount + 1;


	var oldValue = obj4080_counterValue;
	obj4080_counterValue = obj4080_counterValue + 1;
	if (! obj4080_counterCanExceedTargetValue && obj4080_counterValue > obj4080_counterTargetValue) {
		obj4080_counterValue = obj4080_counterTargetValue;
	}

	if (oldValue != obj4080_counterValue) {
		$("#obj4080").trigger('SCEventCounterValueChange');
		$("#obj4080").trigger('SCEventCounterIncrease');
		if (obj4080_counterValue == obj4080_counterTargetValue)
			$("#obj4080").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4108_onTap_runningActionsCount = window.obj4108_onTap_runningActionsCount - 1;

if (window.obj4108_onTap_runningActionsCount < 0) {
	window.obj4108_onTap_runningActionsCount = 0;
} else if (window.obj4108_onTap_runningActionsCount == 0) {
	obj4108_onTap_actionGroup5();
} }, 1);
}











};
obj4108_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4108_onTap_activeActionGroupIndex = -1;
		$("#obj4108").trigger("obj4108_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4108) {
				console.warn("de-queueing event obj4108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4108_onTap_activeActionGroupIndex = 5;
	











































};
obj4102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4096
(function(){
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;


	var selector = "#obj4096";
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
					window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup1();
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
				window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4102_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4154();
function playAudioFile_4154() {
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4154")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4154");
			$("#obj_audio_playSoundFile4154").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup2();
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
				window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4102_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4102 
scale_4155();
function scale_4155() {
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4102";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4102';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4155_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4155_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4155_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4155_completed() {
	setTimeout(function() {
		window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4102_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4156();
function wait_4156() {
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4102_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4102 
scale_4157();
function scale_4157() {
	window.obj4102_onTap_runningActionsCount = obj4102_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4102";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4102';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_4157_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4157_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4157_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4157_completed() {
	setTimeout(function() {
		window.obj4102_onTap_runningActionsCount = window.obj4102_onTap_runningActionsCount - 1;

if (window.obj4102_onTap_runningActionsCount < 0) {
	window.obj4102_onTap_runningActionsCount = 0;
} else if (window.obj4102_onTap_runningActionsCount == 0) {
	obj4102_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4102_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4102_onTap_activeActionGroupIndex = -1;
		$("#obj4102").trigger("obj4102_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4102) {
				console.warn("de-queueing event obj4102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4102_onTap_activeActionGroupIndex = 5;
	











































};
obj4074_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4074").trigger("obj4074_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4074) {
				console.warn("de-queueing event obj4074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj4038 
hide_4479();
function hide_4479() {
	var selector = "#obj4038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4479(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4040 
hide_4481();
function hide_4481() {
	var selector = "#obj4040";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4481(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4042 
hide_4482();
function hide_4482() {
	var selector = "#obj4042";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4482(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4044 
hide_4483();
function hide_4483() {
	var selector = "#obj4044";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4483(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj4066
(function(){
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4066";
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
					window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4064
(function(){
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4064";
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
					window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4062
(function(){
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4062";
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
					window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4068
(function(){
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4068";
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
					window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4074_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4074").trigger("obj4074_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4074) {
				console.warn("de-queueing event obj4074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4503
(function(){
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = obj4074_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4503";
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
					window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4074_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4074_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4074_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4074").trigger("obj4074_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4074) {
				console.warn("de-queueing event obj4074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj4077_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4077").trigger("obj4077_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4077) {
				console.warn("de-queueing event obj4077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj4121 
hide_4484();
function hide_4484() {
	var selector = "#obj4121";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4484(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4115 
hide_4485();
function hide_4485() {
	var selector = "#obj4115";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4485(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4108 
hide_4486();
function hide_4486() {
	var selector = "#obj4108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4486(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4102 
hide_4487();
function hide_4487() {
	var selector = "#obj4102";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4487(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj4098
(function(){
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4098";
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
					window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4100
(function(){
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4100";
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
					window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4096
(function(){
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4096";
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
					window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4094
(function(){
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4094";
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
					window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4077_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4077").trigger("obj4077_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4077) {
				console.warn("de-queueing event obj4077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4500
(function(){
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = obj4077_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4500";
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
					window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4077_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4077_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4077_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4077").trigger("obj4077_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4077) {
				console.warn("de-queueing event obj4077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj4080_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4080").trigger("obj4080_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4080) {
				console.warn("de-queueing event obj4080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_4083();
function wait_4083() {
	window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = obj4080_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4080_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 3000);
}


























};
obj4080_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4080").trigger("obj4080_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4080) {
				console.warn("de-queueing event obj4080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_4084();
function goToPage_4084() {
	window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = obj4080_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor194")[0].click();
	window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4080_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4080_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj4080_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4080").trigger("obj4080_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4080) {
				console.warn("de-queueing event obj4080." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4080").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj3961: Event Touch Down
 *
 */

$("#obj3961").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3961_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3961_onTap is still running");
	return;
}
var obj3961_onTap_runningActionsCount = 0;
var obj3961_onTap_loopCount = 0;
obj3961_onTap_actionGroup0();
});
























































/*
 *
 *   obj3971: Event Touch Down
 *
 */

$("#obj3971").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3971_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3971_onTap is still running");
	return;
}
var obj3971_onTap_runningActionsCount = 0;
var obj3971_onTap_loopCount = 0;
obj3971_onTap_actionGroup0();
});





































/*
 *
 *   obj4013: Event Touch Down
 *
 */

$("#obj4013").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4013_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4013_onTap is still running");
	return;
}
var obj4013_onTap_runningActionsCount = 0;
var obj4013_onTap_loopCount = 0;
obj4013_onTap_actionGroup0();
});


















/*
 *
 *   obj4016: Event Touch Down
 *
 */

$("#obj4016").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4016_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4016_onTap is still running");
	return;
}
var obj4016_onTap_runningActionsCount = 0;
var obj4016_onTap_loopCount = 0;
obj4016_onTap_actionGroup0();
});


















/*
 *
 *   obj4028: Event Touch Down
 *
 */

$("#obj4028").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4028_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4028_onTap is still running");
	return;
}
var obj4028_onTap_runningActionsCount = 0;
var obj4028_onTap_loopCount = 0;
obj4028_onTap_actionGroup0();
});


















/*
 *
 *   obj4022: Event Touch Down
 *
 */

$("#obj4022").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4022_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4022_onTap is still running");
	return;
}
var obj4022_onTap_runningActionsCount = 0;
var obj4022_onTap_loopCount = 0;
obj4022_onTap_actionGroup0();
});











































































/*
 *
 *   obj4038: Event Touch Down
 *
 */

$("#obj4038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4038_onTap is still running");
	return;
}
var obj4038_onTap_runningActionsCount = 0;
var obj4038_onTap_loopCount = 0;
obj4038_onTap_actionGroup0();
});


















/*
 *
 *   obj4040: Event Touch Down
 *
 */

$("#obj4040").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4040_onTap is still running");
	return;
}
var obj4040_onTap_runningActionsCount = 0;
var obj4040_onTap_loopCount = 0;
obj4040_onTap_actionGroup0();
});


















/*
 *
 *   obj4042: Event Touch Down
 *
 */

$("#obj4042").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4042_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4042_onTap is still running");
	return;
}
var obj4042_onTap_runningActionsCount = 0;
var obj4042_onTap_loopCount = 0;
obj4042_onTap_actionGroup0();
});


















/*
 *
 *   obj4044: Event Touch Down
 *
 */

$("#obj4044").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4044_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4044_onTap is still running");
	return;
}
var obj4044_onTap_runningActionsCount = 0;
var obj4044_onTap_loopCount = 0;
obj4044_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj4121: Event Touch Down
 *
 */

$("#obj4121").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4121_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4121_onTap is still running");
	return;
}
var obj4121_onTap_runningActionsCount = 0;
var obj4121_onTap_loopCount = 0;
obj4121_onTap_actionGroup0();
});


















/*
 *
 *   obj4115: Event Touch Down
 *
 */

$("#obj4115").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4115_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4115_onTap is still running");
	return;
}
var obj4115_onTap_runningActionsCount = 0;
var obj4115_onTap_loopCount = 0;
obj4115_onTap_actionGroup0();
});


















/*
 *
 *   obj4108: Event Touch Down
 *
 */

$("#obj4108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4108_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4108_onTap is still running");
	return;
}
var obj4108_onTap_runningActionsCount = 0;
var obj4108_onTap_loopCount = 0;
obj4108_onTap_actionGroup0();
});


















/*
 *
 *   obj4102: Event Touch Down
 *
 */

$("#obj4102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4102_onTap is still running");
	return;
}
var obj4102_onTap_runningActionsCount = 0;
var obj4102_onTap_loopCount = 0;
obj4102_onTap_actionGroup0();
});







































































































/*
 *
 *   obj4074: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4074").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4074_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4074_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4074_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4074_SCEventCounterReachedTargetValue_loopCount = 0;
obj4074_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj4077: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4077").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4077_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4077_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4077_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4077_SCEventCounterReachedTargetValue_loopCount = 0;
obj4077_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj4080: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4080").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4080_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4080_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4080_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4080_SCEventCounterReachedTargetValue_loopCount = 0;
obj4080_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj3959").trigger('SCEventShow');
$("#obj3961").trigger('SCEventShow');
$("#obj3967").trigger('SCEventShow');
$("#obj3969").trigger('SCEventShow');
$("#obj3971").trigger('SCEventShow');
$("#obj4010").trigger('SCEventShow');
$("#obj4013").trigger('SCEventShow');
$("#obj4016").trigger('SCEventShow');
$("#obj4028").trigger('SCEventShow');
	

});