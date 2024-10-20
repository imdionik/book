pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 4173;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj4176_onTap_activeActionGroupIndex = -1;
var obj4176_onTap_runningActionsCount = 0;
var obj4176_onTap_loopCount = 0;
var obj4186_onTap_activeActionGroupIndex = -1;
var obj4186_onTap_runningActionsCount = 0;
var obj4186_onTap_loopCount = 0;
var obj4191_onTap_activeActionGroupIndex = -1;
var obj4191_onTap_runningActionsCount = 0;
var obj4191_onTap_loopCount = 0;
var obj4199_onTap_activeActionGroupIndex = -1;
var obj4199_onTap_runningActionsCount = 0;
var obj4199_onTap_loopCount = 0;
var obj4207_onTap_activeActionGroupIndex = -1;
var obj4207_onTap_runningActionsCount = 0;
var obj4207_onTap_loopCount = 0;
var obj4213_onTap_activeActionGroupIndex = -1;
var obj4213_onTap_runningActionsCount = 0;
var obj4213_onTap_loopCount = 0;
var obj4225_onTap_activeActionGroupIndex = -1;
var obj4225_onTap_runningActionsCount = 0;
var obj4225_onTap_loopCount = 0;
var obj4232_onTap_activeActionGroupIndex = -1;
var obj4232_onTap_runningActionsCount = 0;
var obj4232_onTap_loopCount = 0;
var obj4239_onTap_activeActionGroupIndex = -1;
var obj4239_onTap_runningActionsCount = 0;
var obj4239_onTap_loopCount = 0;
var obj4246_onTap_activeActionGroupIndex = -1;
var obj4246_onTap_runningActionsCount = 0;
var obj4246_onTap_loopCount = 0;
var obj4265_onTap_activeActionGroupIndex = -1;
var obj4265_onTap_runningActionsCount = 0;
var obj4265_onTap_loopCount = 0;
var obj4272_onTap_activeActionGroupIndex = -1;
var obj4272_onTap_runningActionsCount = 0;
var obj4272_onTap_loopCount = 0;
var obj4279_onTap_activeActionGroupIndex = -1;
var obj4279_onTap_runningActionsCount = 0;
var obj4279_onTap_loopCount = 0;
var obj4286_onTap_activeActionGroupIndex = -1;
var obj4286_onTap_runningActionsCount = 0;
var obj4286_onTap_loopCount = 0;
var obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4303_SCEventCounterReachedTargetValue_loopCount = 0;
var obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4310_SCEventCounterReachedTargetValue_loopCount = 0;
var obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj4317_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4317_SCEventCounterReachedTargetValue_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj4303_counterValue = 0;
var obj4303_counterTargetValue = 2;
var obj4303_counterCanExceedTargetValue = false;
var obj4310_counterValue = 0;
var obj4310_counterTargetValue = 2;
var obj4310_counterCanExceedTargetValue = false;
var obj4317_counterValue = 0;
var obj4317_counterTargetValue = 4;
var obj4317_counterCanExceedTargetValue = false;

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
		
obj4176_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4176_onTap_activeActionGroupIndex = -1;
		$("#obj4176").trigger("obj4176_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4176) {
				console.warn("de-queueing event obj4176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4176_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4178();
function goToPage_4178() {
	window.obj4176_onTap_runningActionsCount = obj4176_onTap_runningActionsCount + 1;

	$("#anchor195")[0].click();
	window.obj4176_onTap_runningActionsCount = window.obj4176_onTap_runningActionsCount - 1;

if (window.obj4176_onTap_runningActionsCount < 0) {
	window.obj4176_onTap_runningActionsCount = 0;
} else if (window.obj4176_onTap_runningActionsCount == 0) {
	obj4176_onTap_actionGroup1();
}
}










































};
obj4176_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4176_onTap_activeActionGroupIndex = -1;
		$("#obj4176").trigger("obj4176_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4176) {
				console.warn("de-queueing event obj4176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4176_onTap_activeActionGroupIndex = 1;
	











































};
obj4186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_onTap_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4188();
function goToPage_4188() {
	window.obj4186_onTap_runningActionsCount = obj4186_onTap_runningActionsCount + 1;

	$("#anchor196")[0].click();
	window.obj4186_onTap_runningActionsCount = window.obj4186_onTap_runningActionsCount - 1;

if (window.obj4186_onTap_runningActionsCount < 0) {
	window.obj4186_onTap_runningActionsCount = 0;
} else if (window.obj4186_onTap_runningActionsCount == 0) {
	obj4186_onTap_actionGroup1();
}
}










































};
obj4186_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_onTap_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_onTap_activeActionGroupIndex = 1;
	











































};
obj4191_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4191_onTap_activeActionGroupIndex = -1;
		$("#obj4191").trigger("obj4191_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4191) {
				console.warn("de-queueing event obj4191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4191_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4223
(function(){
	window.obj4191_onTap_runningActionsCount = obj4191_onTap_runningActionsCount + 1;


	var selector = "#obj4223";
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
					window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
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
				window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4225
(function(){
	window.obj4191_onTap_runningActionsCount = obj4191_onTap_runningActionsCount + 1;


	var selector = "#obj4225";
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
					window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
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
				window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4232
(function(){
	window.obj4191_onTap_runningActionsCount = obj4191_onTap_runningActionsCount + 1;


	var selector = "#obj4232";
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
					window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
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
				window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4239
(function(){
	window.obj4191_onTap_runningActionsCount = obj4191_onTap_runningActionsCount + 1;


	var selector = "#obj4239";
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
					window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
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
				window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4246
(function(){
	window.obj4191_onTap_runningActionsCount = obj4191_onTap_runningActionsCount + 1;


	var selector = "#obj4246";
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
					window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
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
				window.obj4191_onTap_runningActionsCount = window.obj4191_onTap_runningActionsCount - 1;

if (window.obj4191_onTap_runningActionsCount < 0) {
	window.obj4191_onTap_runningActionsCount = 0;
} else if (window.obj4191_onTap_runningActionsCount == 0) {
	obj4191_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4191_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4191_onTap_activeActionGroupIndex = -1;
		$("#obj4191").trigger("obj4191_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4191) {
				console.warn("de-queueing event obj4191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4191_onTap_activeActionGroupIndex = 1;
	











































};
obj4199_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4199_onTap_activeActionGroupIndex = -1;
		$("#obj4199").trigger("obj4199_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4199) {
				console.warn("de-queueing event obj4199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4199_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4263
(function(){
	window.obj4199_onTap_runningActionsCount = obj4199_onTap_runningActionsCount + 1;


	var selector = "#obj4263";
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
					window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
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
				window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4265
(function(){
	window.obj4199_onTap_runningActionsCount = obj4199_onTap_runningActionsCount + 1;


	var selector = "#obj4265";
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
					window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
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
				window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4272
(function(){
	window.obj4199_onTap_runningActionsCount = obj4199_onTap_runningActionsCount + 1;


	var selector = "#obj4272";
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
					window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
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
				window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4279
(function(){
	window.obj4199_onTap_runningActionsCount = obj4199_onTap_runningActionsCount + 1;


	var selector = "#obj4279";
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
					window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
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
				window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4286
(function(){
	window.obj4199_onTap_runningActionsCount = obj4199_onTap_runningActionsCount + 1;


	var selector = "#obj4286";
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
					window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
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
				window.obj4199_onTap_runningActionsCount = window.obj4199_onTap_runningActionsCount - 1;

if (window.obj4199_onTap_runningActionsCount < 0) {
	window.obj4199_onTap_runningActionsCount = 0;
} else if (window.obj4199_onTap_runningActionsCount == 0) {
	obj4199_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4199_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4199_onTap_activeActionGroupIndex = -1;
		$("#obj4199").trigger("obj4199_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4199) {
				console.warn("de-queueing event obj4199." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4199").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4199_onTap_activeActionGroupIndex = 1;
	











































};
obj4207_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4207_onTap_activeActionGroupIndex = -1;
		$("#obj4207").trigger("obj4207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4207) {
				console.warn("de-queueing event obj4207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4207_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4213
(function(){
	window.obj4207_onTap_runningActionsCount = obj4207_onTap_runningActionsCount + 1;


	var selector = "#obj4213";
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
					window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup1();
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
				window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4207_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4207_onTap_activeActionGroupIndex = -1;
		$("#obj4207").trigger("obj4207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4207) {
				console.warn("de-queueing event obj4207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4207_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj4207 
hide_4210();
function hide_4210() {
	var selector = "#obj4207";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4207_onTap_runningActionsCount = obj4207_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4210(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4207_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4207_onTap_activeActionGroupIndex = -1;
		$("#obj4207").trigger("obj4207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4207) {
				console.warn("de-queueing event obj4207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4207_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj4221
(function(){
	window.obj4207_onTap_runningActionsCount = obj4207_onTap_runningActionsCount + 1;


	var selector = "#obj4221";
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
					window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup3();
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
				window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4219
(function(){
	window.obj4207_onTap_runningActionsCount = obj4207_onTap_runningActionsCount + 1;


	var selector = "#obj4219";
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
					window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup3();
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
				window.obj4207_onTap_runningActionsCount = window.obj4207_onTap_runningActionsCount - 1;

if (window.obj4207_onTap_runningActionsCount < 0) {
	window.obj4207_onTap_runningActionsCount = 0;
} else if (window.obj4207_onTap_runningActionsCount == 0) {
	obj4207_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4207_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4207_onTap_activeActionGroupIndex = -1;
		$("#obj4207").trigger("obj4207_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4207) {
				console.warn("de-queueing event obj4207." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4207").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4207_onTap_activeActionGroupIndex = 3;
	











































};
obj4213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4213_onTap_activeActionGroupIndex = -1;
		$("#obj4213").trigger("obj4213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4213) {
				console.warn("de-queueing event obj4213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4213_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4207
(function(){
	window.obj4213_onTap_runningActionsCount = obj4213_onTap_runningActionsCount + 1;


	var selector = "#obj4207";
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
					window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup1();
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
				window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4213_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4213_onTap_activeActionGroupIndex = -1;
		$("#obj4213").trigger("obj4213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4213) {
				console.warn("de-queueing event obj4213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4213_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj4213 
hide_4216();
function hide_4216() {
	var selector = "#obj4213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4213_onTap_runningActionsCount = obj4213_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4216(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4213_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4213_onTap_activeActionGroupIndex = -1;
		$("#obj4213").trigger("obj4213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4213) {
				console.warn("de-queueing event obj4213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4213_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4219 
hide_4217();
function hide_4217() {
	var selector = "#obj4219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4213_onTap_runningActionsCount = obj4213_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4217(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4221 
hide_4218();
function hide_4218() {
	var selector = "#obj4221";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4213_onTap_runningActionsCount = obj4213_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4218(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4213_onTap_runningActionsCount = window.obj4213_onTap_runningActionsCount - 1;

if (window.obj4213_onTap_runningActionsCount < 0) {
	window.obj4213_onTap_runningActionsCount = 0;
} else if (window.obj4213_onTap_runningActionsCount == 0) {
	obj4213_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj4213_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4213_onTap_activeActionGroupIndex = -1;
		$("#obj4213").trigger("obj4213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4213) {
				console.warn("de-queueing event obj4213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4213_onTap_activeActionGroupIndex = 3;
	











































};
obj4225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4303 
incrementCounter_4323();
function incrementCounter_4323() {
	window.obj4225_onTap_runningActionsCount = obj4225_onTap_runningActionsCount + 1;


	var oldValue = obj4303_counterValue;
	obj4303_counterValue = obj4303_counterValue + 1;
	if (! obj4303_counterCanExceedTargetValue && obj4303_counterValue > obj4303_counterTargetValue) {
		obj4303_counterValue = obj4303_counterTargetValue;
	}

	if (oldValue != obj4303_counterValue) {
		$("#obj4303").trigger('SCEventCounterValueChange');
		$("#obj4303").trigger('SCEventCounterIncrease');
		if (obj4303_counterValue == obj4303_counterTargetValue)
			$("#obj4303").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup1();
} }, 1);
}











};
obj4225_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4259
(function(){
	window.obj4225_onTap_runningActionsCount = obj4225_onTap_runningActionsCount + 1;


	var selector = "#obj4259";
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
					window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup2();
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
				window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4225_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4325();
function playAudioFile_4325() {
	window.obj4225_onTap_runningActionsCount = obj4225_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4325")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4325");
			$("#obj_audio_playSoundFile4325").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup3();
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
				window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4225_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4326();
function runjs_4326() {
	window.obj4225_onTap_runningActionsCount = obj4225_onTap_runningActionsCount + 1;


	$("#obj4225").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup4();
}
	}, 1);
}














};
obj4225_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4317 
incrementCounter_4327();
function incrementCounter_4327() {
	window.obj4225_onTap_runningActionsCount = obj4225_onTap_runningActionsCount + 1;


	var oldValue = obj4317_counterValue;
	obj4317_counterValue = obj4317_counterValue + 1;
	if (! obj4317_counterCanExceedTargetValue && obj4317_counterValue > obj4317_counterTargetValue) {
		obj4317_counterValue = obj4317_counterTargetValue;
	}

	if (oldValue != obj4317_counterValue) {
		$("#obj4317").trigger('SCEventCounterValueChange');
		$("#obj4317").trigger('SCEventCounterIncrease');
		if (obj4317_counterValue == obj4317_counterTargetValue)
			$("#obj4317").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4225_onTap_runningActionsCount = window.obj4225_onTap_runningActionsCount - 1;

if (window.obj4225_onTap_runningActionsCount < 0) {
	window.obj4225_onTap_runningActionsCount = 0;
} else if (window.obj4225_onTap_runningActionsCount == 0) {
	obj4225_onTap_actionGroup5();
} }, 1);
}











};
obj4225_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4225_onTap_activeActionGroupIndex = -1;
		$("#obj4225").trigger("obj4225_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4225) {
				console.warn("de-queueing event obj4225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4225_onTap_activeActionGroupIndex = 5;
	











































};
obj4232_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4253
(function(){
	window.obj4232_onTap_runningActionsCount = obj4232_onTap_runningActionsCount + 1;


	var selector = "#obj4253";
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
					window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup1();
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
				window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4232_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4329();
function playAudioFile_4329() {
	window.obj4232_onTap_runningActionsCount = obj4232_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4329")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4329");
			$("#obj_audio_playSoundFile4329").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup2();
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
				window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4232_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4232 
scale_4330();
function scale_4330() {
	window.obj4232_onTap_runningActionsCount = obj4232_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4232";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4232';
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
		scale_4330_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4330_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4330_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4330_completed() {
	setTimeout(function() {
		window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4232_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4331();
function wait_4331() {
	window.obj4232_onTap_runningActionsCount = obj4232_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4232_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4232 
scale_4332();
function scale_4332() {
	window.obj4232_onTap_runningActionsCount = obj4232_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4232";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4232';
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
		scale_4332_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4332_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4332_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4332_completed() {
	setTimeout(function() {
		window.obj4232_onTap_runningActionsCount = window.obj4232_onTap_runningActionsCount - 1;

if (window.obj4232_onTap_runningActionsCount < 0) {
	window.obj4232_onTap_runningActionsCount = 0;
} else if (window.obj4232_onTap_runningActionsCount == 0) {
	obj4232_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4232_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4232_onTap_activeActionGroupIndex = -1;
		$("#obj4232").trigger("obj4232_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4232) {
				console.warn("de-queueing event obj4232." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4232").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4232_onTap_activeActionGroupIndex = 5;
	











































};
obj4239_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4303 
incrementCounter_4333();
function incrementCounter_4333() {
	window.obj4239_onTap_runningActionsCount = obj4239_onTap_runningActionsCount + 1;


	var oldValue = obj4303_counterValue;
	obj4303_counterValue = obj4303_counterValue + 1;
	if (! obj4303_counterCanExceedTargetValue && obj4303_counterValue > obj4303_counterTargetValue) {
		obj4303_counterValue = obj4303_counterTargetValue;
	}

	if (oldValue != obj4303_counterValue) {
		$("#obj4303").trigger('SCEventCounterValueChange');
		$("#obj4303").trigger('SCEventCounterIncrease');
		if (obj4303_counterValue == obj4303_counterTargetValue)
			$("#obj4303").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup1();
} }, 1);
}











};
obj4239_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4255
(function(){
	window.obj4239_onTap_runningActionsCount = obj4239_onTap_runningActionsCount + 1;


	var selector = "#obj4255";
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
					window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup2();
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
				window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4239_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4335();
function playAudioFile_4335() {
	window.obj4239_onTap_runningActionsCount = obj4239_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4335")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4335");
			$("#obj_audio_playSoundFile4335").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup3();
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
				window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4239_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4336();
function runjs_4336() {
	window.obj4239_onTap_runningActionsCount = obj4239_onTap_runningActionsCount + 1;


	$("#obj4239").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup4();
}
	}, 1);
}














};
obj4239_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4317 
incrementCounter_4337();
function incrementCounter_4337() {
	window.obj4239_onTap_runningActionsCount = obj4239_onTap_runningActionsCount + 1;


	var oldValue = obj4317_counterValue;
	obj4317_counterValue = obj4317_counterValue + 1;
	if (! obj4317_counterCanExceedTargetValue && obj4317_counterValue > obj4317_counterTargetValue) {
		obj4317_counterValue = obj4317_counterTargetValue;
	}

	if (oldValue != obj4317_counterValue) {
		$("#obj4317").trigger('SCEventCounterValueChange');
		$("#obj4317").trigger('SCEventCounterIncrease');
		if (obj4317_counterValue == obj4317_counterTargetValue)
			$("#obj4317").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4239_onTap_runningActionsCount = window.obj4239_onTap_runningActionsCount - 1;

if (window.obj4239_onTap_runningActionsCount < 0) {
	window.obj4239_onTap_runningActionsCount = 0;
} else if (window.obj4239_onTap_runningActionsCount == 0) {
	obj4239_onTap_actionGroup5();
} }, 1);
}











};
obj4239_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_onTap_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTap_activeActionGroupIndex = 5;
	











































};
obj4246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4257
(function(){
	window.obj4246_onTap_runningActionsCount = obj4246_onTap_runningActionsCount + 1;


	var selector = "#obj4257";
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
					window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup1();
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
				window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4339();
function playAudioFile_4339() {
	window.obj4246_onTap_runningActionsCount = obj4246_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4339")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4339");
			$("#obj_audio_playSoundFile4339").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup2();
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
				window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4246 
scale_4340();
function scale_4340() {
	window.obj4246_onTap_runningActionsCount = obj4246_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4246";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4246';
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
		scale_4340_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4340_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4340_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4340_completed() {
	setTimeout(function() {
		window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4246_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4341();
function wait_4341() {
	window.obj4246_onTap_runningActionsCount = obj4246_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4246_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4246 
scale_4342();
function scale_4342() {
	window.obj4246_onTap_runningActionsCount = obj4246_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4246";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4246';
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
		scale_4342_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4342_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4342_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4342_completed() {
	setTimeout(function() {
		window.obj4246_onTap_runningActionsCount = window.obj4246_onTap_runningActionsCount - 1;

if (window.obj4246_onTap_runningActionsCount < 0) {
	window.obj4246_onTap_runningActionsCount = 0;
} else if (window.obj4246_onTap_runningActionsCount == 0) {
	obj4246_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4246_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4246_onTap_activeActionGroupIndex = -1;
		$("#obj4246").trigger("obj4246_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4246) {
				console.warn("de-queueing event obj4246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4246_onTap_activeActionGroupIndex = 5;
	











































};
obj4265_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4299
(function(){
	window.obj4265_onTap_runningActionsCount = obj4265_onTap_runningActionsCount + 1;


	var selector = "#obj4299";
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
					window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup1();
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
				window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4265_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4344();
function playAudioFile_4344() {
	window.obj4265_onTap_runningActionsCount = obj4265_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4344")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4344");
			$("#obj_audio_playSoundFile4344").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup2();
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
				window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4265_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4265 
scale_4345();
function scale_4345() {
	window.obj4265_onTap_runningActionsCount = obj4265_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4265";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4265';
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
		scale_4345_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4345_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4345_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4345_completed() {
	setTimeout(function() {
		window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4265_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4346();
function wait_4346() {
	window.obj4265_onTap_runningActionsCount = obj4265_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4265_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4265 
scale_4347();
function scale_4347() {
	window.obj4265_onTap_runningActionsCount = obj4265_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4265";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4265';
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
		scale_4347_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4347_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4347_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4347_completed() {
	setTimeout(function() {
		window.obj4265_onTap_runningActionsCount = window.obj4265_onTap_runningActionsCount - 1;

if (window.obj4265_onTap_runningActionsCount < 0) {
	window.obj4265_onTap_runningActionsCount = 0;
} else if (window.obj4265_onTap_runningActionsCount == 0) {
	obj4265_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4265_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4265_onTap_activeActionGroupIndex = -1;
		$("#obj4265").trigger("obj4265_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4265) {
				console.warn("de-queueing event obj4265." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4265").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4265_onTap_activeActionGroupIndex = 5;
	











































};
obj4272_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4310 
incrementCounter_4348();
function incrementCounter_4348() {
	window.obj4272_onTap_runningActionsCount = obj4272_onTap_runningActionsCount + 1;


	var oldValue = obj4310_counterValue;
	obj4310_counterValue = obj4310_counterValue + 1;
	if (! obj4310_counterCanExceedTargetValue && obj4310_counterValue > obj4310_counterTargetValue) {
		obj4310_counterValue = obj4310_counterTargetValue;
	}

	if (oldValue != obj4310_counterValue) {
		$("#obj4310").trigger('SCEventCounterValueChange');
		$("#obj4310").trigger('SCEventCounterIncrease');
		if (obj4310_counterValue == obj4310_counterTargetValue)
			$("#obj4310").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup1();
} }, 1);
}











};
obj4272_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4293
(function(){
	window.obj4272_onTap_runningActionsCount = obj4272_onTap_runningActionsCount + 1;


	var selector = "#obj4293";
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
					window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup2();
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
				window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4272_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4350();
function playAudioFile_4350() {
	window.obj4272_onTap_runningActionsCount = obj4272_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4350")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4350");
			$("#obj_audio_playSoundFile4350").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup3();
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
				window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4272_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4351();
function runjs_4351() {
	window.obj4272_onTap_runningActionsCount = obj4272_onTap_runningActionsCount + 1;


	$("#obj4272").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup4();
}
	}, 1);
}














};
obj4272_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4317 
incrementCounter_4352();
function incrementCounter_4352() {
	window.obj4272_onTap_runningActionsCount = obj4272_onTap_runningActionsCount + 1;


	var oldValue = obj4317_counterValue;
	obj4317_counterValue = obj4317_counterValue + 1;
	if (! obj4317_counterCanExceedTargetValue && obj4317_counterValue > obj4317_counterTargetValue) {
		obj4317_counterValue = obj4317_counterTargetValue;
	}

	if (oldValue != obj4317_counterValue) {
		$("#obj4317").trigger('SCEventCounterValueChange');
		$("#obj4317").trigger('SCEventCounterIncrease');
		if (obj4317_counterValue == obj4317_counterTargetValue)
			$("#obj4317").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4272_onTap_runningActionsCount = window.obj4272_onTap_runningActionsCount - 1;

if (window.obj4272_onTap_runningActionsCount < 0) {
	window.obj4272_onTap_runningActionsCount = 0;
} else if (window.obj4272_onTap_runningActionsCount == 0) {
	obj4272_onTap_actionGroup5();
} }, 1);
}











};
obj4272_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4272_onTap_activeActionGroupIndex = -1;
		$("#obj4272").trigger("obj4272_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4272) {
				console.warn("de-queueing event obj4272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4272_onTap_activeActionGroupIndex = 5;
	











































};
obj4279_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj4295
(function(){
	window.obj4279_onTap_runningActionsCount = obj4279_onTap_runningActionsCount + 1;


	var selector = "#obj4295";
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
					window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup1();
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
				window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4279_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 1;
	












//	action: playAudioFile
playAudioFile_4359();
function playAudioFile_4359() {
	window.obj4279_onTap_runningActionsCount = obj4279_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4359")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4359");
			$("#obj_audio_playSoundFile4359").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup2();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup2();
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
				window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup2();
}
			}, false);
		} else {
			window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup2();
}
		}
	}

	
	
	
}





































};
obj4279_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 2;
	


















//	action: scale
//	target: obj4279 
scale_4360();
function scale_4360() {
	window.obj4279_onTap_runningActionsCount = obj4279_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4279";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4279';
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
		scale_4360_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4360_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4360_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4360_completed() {
	setTimeout(function() {
		window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup3();
}
	}, 1);
}

























};
obj4279_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 3;
	
















//	action: wait
wait_4361();
function wait_4361() {
	window.obj4279_onTap_runningActionsCount = obj4279_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup4();
}
	}, 500);
}


























};
obj4279_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 4;
	


















//	action: scale
//	target: obj4279 
scale_4362();
function scale_4362() {
	window.obj4279_onTap_runningActionsCount = obj4279_onTap_runningActionsCount + 1;

	
	var targetObjectId = "#obj4279";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj4279';
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
		scale_4362_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4362_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_4362_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_4362_completed() {
	setTimeout(function() {
		window.obj4279_onTap_runningActionsCount = window.obj4279_onTap_runningActionsCount - 1;

if (window.obj4279_onTap_runningActionsCount < 0) {
	window.obj4279_onTap_runningActionsCount = 0;
} else if (window.obj4279_onTap_runningActionsCount == 0) {
	obj4279_onTap_actionGroup5();
}
	}, 1);
}

























};
obj4279_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4279_onTap_activeActionGroupIndex = -1;
		$("#obj4279").trigger("obj4279_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4279) {
				console.warn("de-queueing event obj4279." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4279").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4279_onTap_activeActionGroupIndex = 5;
	











































};
obj4286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 0;
	































//	action: increment counter
//	target: obj4310 
incrementCounter_4353();
function incrementCounter_4353() {
	window.obj4286_onTap_runningActionsCount = obj4286_onTap_runningActionsCount + 1;


	var oldValue = obj4310_counterValue;
	obj4310_counterValue = obj4310_counterValue + 1;
	if (! obj4310_counterCanExceedTargetValue && obj4310_counterValue > obj4310_counterTargetValue) {
		obj4310_counterValue = obj4310_counterTargetValue;
	}

	if (oldValue != obj4310_counterValue) {
		$("#obj4310").trigger('SCEventCounterValueChange');
		$("#obj4310").trigger('SCEventCounterIncrease');
		if (obj4310_counterValue == obj4310_counterTargetValue)
			$("#obj4310").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup1();
} }, 1);
}











};
obj4286_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4297
(function(){
	window.obj4286_onTap_runningActionsCount = obj4286_onTap_runningActionsCount + 1;


	var selector = "#obj4297";
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
					window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup2();
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
				window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4286_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 2;
	












//	action: playAudioFile
playAudioFile_4355();
function playAudioFile_4355() {
	window.obj4286_onTap_runningActionsCount = obj4286_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile4355")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile4355");
			$("#obj_audio_playSoundFile4355").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup3();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup3();
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
				window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup3();
}
			}, false);
		} else {
			window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup3();
}
		}
	}

	
	
	
}





































};
obj4286_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 3;
	





























//	action: Run JavaScript
runjs_4356();
function runjs_4356() {
	window.obj4286_onTap_runningActionsCount = obj4286_onTap_runningActionsCount + 1;


	$("#obj4286").css("color", "#293AE500");
	
	setTimeout(function() {
		window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup4();
}
	}, 1);
}














};
obj4286_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 4;
	































//	action: increment counter
//	target: obj4317 
incrementCounter_4357();
function incrementCounter_4357() {
	window.obj4286_onTap_runningActionsCount = obj4286_onTap_runningActionsCount + 1;


	var oldValue = obj4317_counterValue;
	obj4317_counterValue = obj4317_counterValue + 1;
	if (! obj4317_counterCanExceedTargetValue && obj4317_counterValue > obj4317_counterTargetValue) {
		obj4317_counterValue = obj4317_counterTargetValue;
	}

	if (oldValue != obj4317_counterValue) {
		$("#obj4317").trigger('SCEventCounterValueChange');
		$("#obj4317").trigger('SCEventCounterIncrease');
		if (obj4317_counterValue == obj4317_counterTargetValue)
			$("#obj4317").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj4286_onTap_runningActionsCount = window.obj4286_onTap_runningActionsCount - 1;

if (window.obj4286_onTap_runningActionsCount < 0) {
	window.obj4286_onTap_runningActionsCount = 0;
} else if (window.obj4286_onTap_runningActionsCount == 0) {
	obj4286_onTap_actionGroup5();
} }, 1);
}











};
obj4286_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4286_onTap_activeActionGroupIndex = -1;
		$("#obj4286").trigger("obj4286_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4286) {
				console.warn("de-queueing event obj4286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4286_onTap_activeActionGroupIndex = 5;
	











































};
obj4303_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4303) {
				console.warn("de-queueing event obj4303." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4303").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj4225 
hide_4489();
function hide_4489() {
	var selector = "#obj4225";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4489(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4232 
hide_4490();
function hide_4490() {
	var selector = "#obj4232";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4490(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4239 
hide_4491();
function hide_4491() {
	var selector = "#obj4239";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4491(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4246 
hide_4492();
function hide_4492() {
	var selector = "#obj4246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4492(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj4255
(function(){
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4255";
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
					window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4253
(function(){
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4253";
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
					window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4259
(function(){
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4259";
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
					window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4257
(function(){
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4257";
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
					window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4303_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4303) {
				console.warn("de-queueing event obj4303." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4303").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4507
(function(){
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = obj4303_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4507";
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
					window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4303_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4303_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4303_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4303").trigger("obj4303_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4303) {
				console.warn("de-queueing event obj4303." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4303").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj4310_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4310").trigger("obj4310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4310) {
				console.warn("de-queueing event obj4310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj4265 
hide_4494();
function hide_4494() {
	var selector = "#obj4265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4494(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4272 
hide_4495();
function hide_4495() {
	var selector = "#obj4272";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4495(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4279 
hide_4496();
function hide_4496() {
	var selector = "#obj4279";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4496(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj4286 
hide_4497();
function hide_4497() {
	var selector = "#obj4286";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4497(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj4295
(function(){
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4295";
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
					window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4293
(function(){
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4293";
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
					window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4297
(function(){
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4297";
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
					window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj4299
(function(){
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4299";
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
					window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
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
				window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4310_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4310").trigger("obj4310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4310) {
				console.warn("de-queueing event obj4310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	


//	action: show 
//	selector: #obj4511
(function(){
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = obj4310_SCEventCounterReachedTargetValue_runningActionsCount + 1;


	var selector = "#obj4511";
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
					window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup2();
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
				window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4310_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4310_SCEventCounterReachedTargetValue_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj4310_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4310").trigger("obj4310_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4310) {
				console.warn("de-queueing event obj4310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj4317_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4317").trigger("obj4317_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4317) {
				console.warn("de-queueing event obj4317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_4319();
function wait_4319() {
	window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = obj4317_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4317_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 3000);
}


























};
obj4317_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4317").trigger("obj4317_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4317) {
				console.warn("de-queueing event obj4317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_4320();
function goToPage_4320() {
	window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = obj4317_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor205")[0].click();
	window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj4317_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj4317_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj4317_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj4317").trigger("obj4317_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4317) {
				console.warn("de-queueing event obj4317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj4176: Event Touch Down
 *
 */

$("#obj4176").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4176_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4176_onTap is still running");
	return;
}
var obj4176_onTap_runningActionsCount = 0;
var obj4176_onTap_loopCount = 0;
obj4176_onTap_actionGroup0();
});
























































/*
 *
 *   obj4186: Event Touch Down
 *
 */

$("#obj4186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_onTap is still running");
	return;
}
var obj4186_onTap_runningActionsCount = 0;
var obj4186_onTap_loopCount = 0;
obj4186_onTap_actionGroup0();
});





































/*
 *
 *   obj4191: Event Touch Down
 *
 */

$("#obj4191").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4191_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4191_onTap is still running");
	return;
}
var obj4191_onTap_runningActionsCount = 0;
var obj4191_onTap_loopCount = 0;
obj4191_onTap_actionGroup0();
});


















/*
 *
 *   obj4199: Event Touch Down
 *
 */

$("#obj4199").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4199_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4199_onTap is still running");
	return;
}
var obj4199_onTap_runningActionsCount = 0;
var obj4199_onTap_loopCount = 0;
obj4199_onTap_actionGroup0();
});


















/*
 *
 *   obj4207: Event Touch Down
 *
 */

$("#obj4207").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4207_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4207_onTap is still running");
	return;
}
var obj4207_onTap_runningActionsCount = 0;
var obj4207_onTap_loopCount = 0;
obj4207_onTap_actionGroup0();
});


















/*
 *
 *   obj4213: Event Touch Down
 *
 */

$("#obj4213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4213_onTap is still running");
	return;
}
var obj4213_onTap_runningActionsCount = 0;
var obj4213_onTap_loopCount = 0;
obj4213_onTap_actionGroup0();
});











































































/*
 *
 *   obj4225: Event Touch Down
 *
 */

$("#obj4225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4225_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4225_onTap is still running");
	return;
}
var obj4225_onTap_runningActionsCount = 0;
var obj4225_onTap_loopCount = 0;
obj4225_onTap_actionGroup0();
});


















/*
 *
 *   obj4232: Event Touch Down
 *
 */

$("#obj4232").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4232_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4232_onTap is still running");
	return;
}
var obj4232_onTap_runningActionsCount = 0;
var obj4232_onTap_loopCount = 0;
obj4232_onTap_actionGroup0();
});


















/*
 *
 *   obj4239: Event Touch Down
 *
 */

$("#obj4239").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4239_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_onTap is still running");
	return;
}
var obj4239_onTap_runningActionsCount = 0;
var obj4239_onTap_loopCount = 0;
obj4239_onTap_actionGroup0();
});


















/*
 *
 *   obj4246: Event Touch Down
 *
 */

$("#obj4246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4246_onTap is still running");
	return;
}
var obj4246_onTap_runningActionsCount = 0;
var obj4246_onTap_loopCount = 0;
obj4246_onTap_actionGroup0();
});

















































































































/*
 *
 *   obj4265: Event Touch Down
 *
 */

$("#obj4265").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4265_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4265_onTap is still running");
	return;
}
var obj4265_onTap_runningActionsCount = 0;
var obj4265_onTap_loopCount = 0;
obj4265_onTap_actionGroup0();
});


















/*
 *
 *   obj4272: Event Touch Down
 *
 */

$("#obj4272").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4272_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4272_onTap is still running");
	return;
}
var obj4272_onTap_runningActionsCount = 0;
var obj4272_onTap_loopCount = 0;
obj4272_onTap_actionGroup0();
});


















/*
 *
 *   obj4279: Event Touch Down
 *
 */

$("#obj4279").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4279_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4279_onTap is still running");
	return;
}
var obj4279_onTap_runningActionsCount = 0;
var obj4279_onTap_loopCount = 0;
obj4279_onTap_actionGroup0();
});


















/*
 *
 *   obj4286: Event Touch Down
 *
 */

$("#obj4286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4286_onTap is still running");
	return;
}
var obj4286_onTap_runningActionsCount = 0;
var obj4286_onTap_loopCount = 0;
obj4286_onTap_actionGroup0();
});







































































































/*
 *
 *   obj4303: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4303").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4303_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4303_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4303_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4303_SCEventCounterReachedTargetValue_loopCount = 0;
obj4303_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj4310: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4310").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4310_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4310_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4310_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4310_SCEventCounterReachedTargetValue_loopCount = 0;
obj4310_SCEventCounterReachedTargetValue_actionGroup0();
});


















/*
 *
 *   obj4317: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj4317").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj4317_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4317_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj4317_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj4317_SCEventCounterReachedTargetValue_loopCount = 0;
obj4317_SCEventCounterReachedTargetValue_actionGroup0();
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
	
$("#obj4174").trigger('SCEventShow');
$("#obj4176").trigger('SCEventShow');
$("#obj4182").trigger('SCEventShow');
$("#obj4184").trigger('SCEventShow');
$("#obj4186").trigger('SCEventShow');
$("#obj4189").trigger('SCEventShow');
$("#obj4191").trigger('SCEventShow');
$("#obj4199").trigger('SCEventShow');
$("#obj4207").trigger('SCEventShow');
	

});