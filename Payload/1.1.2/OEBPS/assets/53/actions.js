pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 21379;
pubcoder.page.title = pubcoder.page.title || "53";
pubcoder.page.number = pubcoder.page.number || 53;
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
var obj21384_onTap_activeActionGroupIndex = -1;
var obj21384_onTap_runningActionsCount = 0;
var obj21384_onTap_loopCount = 0;
var obj21387_onTap_activeActionGroupIndex = -1;
var obj21387_onTap_runningActionsCount = 0;
var obj21387_onTap_loopCount = 0;
var obj21394_onTap_activeActionGroupIndex = -1;
var obj21394_onTap_runningActionsCount = 0;
var obj21394_onTap_loopCount = 0;
var obj21397_onTap_activeActionGroupIndex = -1;
var obj21397_onTap_runningActionsCount = 0;
var obj21397_onTap_loopCount = 0;
var obj21403_onTap_activeActionGroupIndex = -1;
var obj21403_onTap_runningActionsCount = 0;
var obj21403_onTap_loopCount = 0;
var obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj21413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj21413_SCEventCounterReachedTargetValue_loopCount = 0;
var obj21773_onDrag_activeActionGroupIndex = -1;
var obj21773_onDrag_runningActionsCount = 0;
var obj21773_onDrag_loopCount = 0;
var obj21773_onTouchDown_activeActionGroupIndex = -1;
var obj21773_onTouchDown_runningActionsCount = 0;
var obj21773_onTouchDown_loopCount = 0;
var obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
var obj21773_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj21773_droppedInsideTargetActions_runningActionsCount = 0;
var obj21773_droppedInsideTargetActions_loopCount = 0;
var obj21806_onDrag_activeActionGroupIndex = -1;
var obj21806_onDrag_runningActionsCount = 0;
var obj21806_onDrag_loopCount = 0;
var obj21806_onTouchDown_activeActionGroupIndex = -1;
var obj21806_onTouchDown_runningActionsCount = 0;
var obj21806_onTouchDown_loopCount = 0;
var obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
var obj21806_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj21806_droppedInsideTargetActions_runningActionsCount = 0;
var obj21806_droppedInsideTargetActions_loopCount = 0;
var obj21823_onDrag_activeActionGroupIndex = -1;
var obj21823_onDrag_runningActionsCount = 0;
var obj21823_onDrag_loopCount = 0;
var obj21823_onTouchDown_activeActionGroupIndex = -1;
var obj21823_onTouchDown_runningActionsCount = 0;
var obj21823_onTouchDown_loopCount = 0;
var obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
var obj21823_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj21823_droppedInsideTargetActions_runningActionsCount = 0;
var obj21823_droppedInsideTargetActions_loopCount = 0;
var obj21838_onDrag_activeActionGroupIndex = -1;
var obj21838_onDrag_runningActionsCount = 0;
var obj21838_onDrag_loopCount = 0;
var obj21838_onTouchDown_activeActionGroupIndex = -1;
var obj21838_onTouchDown_runningActionsCount = 0;
var obj21838_onTouchDown_loopCount = 0;
var obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
var obj21838_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj21838_droppedInsideTargetActions_runningActionsCount = 0;
var obj21838_droppedInsideTargetActions_loopCount = 0;
var obj21853_onDrag_activeActionGroupIndex = -1;
var obj21853_onDrag_runningActionsCount = 0;
var obj21853_onDrag_loopCount = 0;
var obj21853_onTouchDown_activeActionGroupIndex = -1;
var obj21853_onTouchDown_runningActionsCount = 0;
var obj21853_onTouchDown_loopCount = 0;
var obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
var obj21853_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj21853_droppedInsideTargetActions_runningActionsCount = 0;
var obj21853_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj21413_counterValue = 0;
var obj21413_counterTargetValue = 5;
var obj21413_counterCanExceedTargetValue = false;

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
		
obj21384_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21384_onTap_activeActionGroupIndex = -1;
		$("#obj21384").trigger("obj21384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21384) {
				console.warn("de-queueing event obj21384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21384_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21386();
function goToPage_21386() {
	window.obj21384_onTap_runningActionsCount = obj21384_onTap_runningActionsCount + 1;

	$("#anchor859")[0].click();
	window.obj21384_onTap_runningActionsCount = window.obj21384_onTap_runningActionsCount - 1;

if (window.obj21384_onTap_runningActionsCount < 0) {
	window.obj21384_onTap_runningActionsCount = 0;
} else if (window.obj21384_onTap_runningActionsCount == 0) {
	obj21384_onTap_actionGroup1();
}
}










































};
obj21384_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21384_onTap_activeActionGroupIndex = -1;
		$("#obj21384").trigger("obj21384_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21384) {
				console.warn("de-queueing event obj21384." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21384").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21384_onTap_activeActionGroupIndex = 1;
	











































};
obj21387_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21387_onTap_activeActionGroupIndex = -1;
		$("#obj21387").trigger("obj21387_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21387) {
				console.warn("de-queueing event obj21387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21387_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21389();
function goToPage_21389() {
	window.obj21387_onTap_runningActionsCount = obj21387_onTap_runningActionsCount + 1;

	$("#anchor860")[0].click();
	window.obj21387_onTap_runningActionsCount = window.obj21387_onTap_runningActionsCount - 1;

if (window.obj21387_onTap_runningActionsCount < 0) {
	window.obj21387_onTap_runningActionsCount = 0;
} else if (window.obj21387_onTap_runningActionsCount == 0) {
	obj21387_onTap_actionGroup1();
}
}










































};
obj21387_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21387_onTap_activeActionGroupIndex = -1;
		$("#obj21387").trigger("obj21387_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21387) {
				console.warn("de-queueing event obj21387." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21387").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21387_onTap_activeActionGroupIndex = 1;
	











































};
obj21394_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21394_onTap_activeActionGroupIndex = -1;
		$("#obj21394").trigger("obj21394_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21394) {
				console.warn("de-queueing event obj21394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21394_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21396();
function goToPage_21396() {
	window.obj21394_onTap_runningActionsCount = obj21394_onTap_runningActionsCount + 1;

	$("#anchor861")[0].click();
	window.obj21394_onTap_runningActionsCount = window.obj21394_onTap_runningActionsCount - 1;

if (window.obj21394_onTap_runningActionsCount < 0) {
	window.obj21394_onTap_runningActionsCount = 0;
} else if (window.obj21394_onTap_runningActionsCount == 0) {
	obj21394_onTap_actionGroup1();
}
}










































};
obj21394_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21394_onTap_activeActionGroupIndex = -1;
		$("#obj21394").trigger("obj21394_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21394) {
				console.warn("de-queueing event obj21394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21394_onTap_activeActionGroupIndex = 1;
	











































};
obj21397_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21397_onTap_activeActionGroupIndex = -1;
		$("#obj21397").trigger("obj21397_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21397) {
				console.warn("de-queueing event obj21397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21397_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21403
(function(){
	window.obj21397_onTap_runningActionsCount = obj21397_onTap_runningActionsCount + 1;


	var selector = "#obj21403";
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
					window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup1();
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
				window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21397_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21397_onTap_activeActionGroupIndex = -1;
		$("#obj21397").trigger("obj21397_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21397) {
				console.warn("de-queueing event obj21397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21397_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj21397 
hide_21400();
function hide_21400() {
	var selector = "#obj21397";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21397_onTap_runningActionsCount = obj21397_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21400(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21397_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21397_onTap_activeActionGroupIndex = -1;
		$("#obj21397").trigger("obj21397_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21397) {
				console.warn("de-queueing event obj21397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21397_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj21411
(function(){
	window.obj21397_onTap_runningActionsCount = obj21397_onTap_runningActionsCount + 1;


	var selector = "#obj21411";
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
					window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup3();
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
				window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj21409
(function(){
	window.obj21397_onTap_runningActionsCount = obj21397_onTap_runningActionsCount + 1;


	var selector = "#obj21409";
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
					window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup3();
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
				window.obj21397_onTap_runningActionsCount = window.obj21397_onTap_runningActionsCount - 1;

if (window.obj21397_onTap_runningActionsCount < 0) {
	window.obj21397_onTap_runningActionsCount = 0;
} else if (window.obj21397_onTap_runningActionsCount == 0) {
	obj21397_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21397_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21397_onTap_activeActionGroupIndex = -1;
		$("#obj21397").trigger("obj21397_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21397) {
				console.warn("de-queueing event obj21397." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21397").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21397_onTap_activeActionGroupIndex = 3;
	











































};
obj21403_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21403_onTap_activeActionGroupIndex = -1;
		$("#obj21403").trigger("obj21403_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21403) {
				console.warn("de-queueing event obj21403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21403_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21397
(function(){
	window.obj21403_onTap_runningActionsCount = obj21403_onTap_runningActionsCount + 1;


	var selector = "#obj21397";
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
					window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup1();
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
				window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21403_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21403_onTap_activeActionGroupIndex = -1;
		$("#obj21403").trigger("obj21403_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21403) {
				console.warn("de-queueing event obj21403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21403_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj21403 
hide_21406();
function hide_21406() {
	var selector = "#obj21403";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21403_onTap_runningActionsCount = obj21403_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21406(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21403_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21403_onTap_activeActionGroupIndex = -1;
		$("#obj21403").trigger("obj21403_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21403) {
				console.warn("de-queueing event obj21403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21403_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj21409 
hide_21407();
function hide_21407() {
	var selector = "#obj21409";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21403_onTap_runningActionsCount = obj21403_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21407(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj21411 
hide_21408();
function hide_21408() {
	var selector = "#obj21411";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21403_onTap_runningActionsCount = obj21403_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21408(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21403_onTap_runningActionsCount = window.obj21403_onTap_runningActionsCount - 1;

if (window.obj21403_onTap_runningActionsCount < 0) {
	window.obj21403_onTap_runningActionsCount = 0;
} else if (window.obj21403_onTap_runningActionsCount == 0) {
	obj21403_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21403_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21403_onTap_activeActionGroupIndex = -1;
		$("#obj21403").trigger("obj21403_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21403) {
				console.warn("de-queueing event obj21403." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21403").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21403_onTap_activeActionGroupIndex = 3;
	











































};
obj21413_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21413").trigger("obj21413_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21413) {
				console.warn("de-queueing event obj21413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_21415();
function wait_21415() {
	window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = obj21413_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj21413_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj21413_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21413").trigger("obj21413_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21413) {
				console.warn("de-queueing event obj21413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_21416();
function goToPage_21416() {
	window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = obj21413_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor862")[0].click();
	window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj21413_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj21413_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj21413_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21413").trigger("obj21413_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21413) {
				console.warn("de-queueing event obj21413." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21413").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj21773_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21773_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj21773");

//	action: dragDrop
//	target: obj21773 
dragDrop_21788();
function dragDrop_21788() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj21773_onTouchDown_runningActionsCount = obj21773_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj21773');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj21773_onTouchDown_runningActionsCount = window.obj21773_onTouchDown_runningActionsCount - 1;

if (window.obj21773_onTouchDown_runningActionsCount < 0) {
	window.obj21773_onTouchDown_runningActionsCount = 0;
} else if (window.obj21773_onTouchDown_runningActionsCount == 0) {
	obj21773_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj21757");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_21788 = false;
    	var dropped_id_21788;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_21788 = true;
					dropped_id_21788 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_21788) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj21773").trigger('SCActionDragDrop21788_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj21773_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21773_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj21773 
move_21800();
function move_21800() {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21773");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 939;
	var moveY = 241;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21799();
function playAudioFile_21799() {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21799")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21799");
			$("#obj_audio_playSoundFile21799").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
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
				window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj21773_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21792
(function(){
	window.obj21773_droppedInsideTargetActions_runningActionsCount = obj21773_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj21792";
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
					window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
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
				window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj21773 
move_21791();
function move_21791() {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = obj21773_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21773");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 332;
	var moveY = 438;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21790();
function playAudioFile_21790() {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = obj21773_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21790")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21790");
			$("#obj_audio_playSoundFile21790").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
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
				window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_21796();
function switchText_21796() {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = obj21773_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #2665a0; font-size: 51px;\"><strong><span style=\"font-family: Roboto;\">26</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj21773_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj21773_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj21773").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj21773_content");
			setTimeout(function () {
				window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj21773 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}












};
obj21773_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj21413 
incrementCounter_21795();
function incrementCounter_21795() {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = obj21773_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj21413_counterValue;
	obj21413_counterValue = obj21413_counterValue + 1;
	if (! obj21413_counterCanExceedTargetValue && obj21413_counterValue > obj21413_counterTargetValue) {
		obj21413_counterValue = obj21413_counterTargetValue;
	}

	if (oldValue != obj21413_counterValue) {
		$("#obj21413").trigger('SCEventCounterValueChange');
		$("#obj21413").trigger('SCEventCounterIncrease');
		if (obj21413_counterValue == obj21413_counterTargetValue)
			$("#obj21413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj21773_droppedInsideTargetActions_runningActionsCount = window.obj21773_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21773_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21773_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21773_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21773_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj21773_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21773").trigger("obj21773_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21773) {
				console.warn("de-queueing event obj21773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21773_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj21806_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21806_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj21806");

//	action: dragDrop
//	target: obj21806 
dragDrop_21809();
function dragDrop_21809() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj21806_onTouchDown_runningActionsCount = obj21806_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj21806');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj21806_onTouchDown_runningActionsCount = window.obj21806_onTouchDown_runningActionsCount - 1;

if (window.obj21806_onTouchDown_runningActionsCount < 0) {
	window.obj21806_onTouchDown_runningActionsCount = 0;
} else if (window.obj21806_onTouchDown_runningActionsCount == 0) {
	obj21806_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj21727");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_21809 = false;
    	var dropped_id_21809;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_21809 = true;
					dropped_id_21809 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_21809) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj21806").trigger('SCActionDragDrop21788_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj21806_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21806_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj21806 
move_21818();
function move_21818() {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21806");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 939;
	var moveY = 345;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21817();
function playAudioFile_21817() {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21817")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21817");
			$("#obj_audio_playSoundFile21817").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
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
				window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj21806_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21804
(function(){
	window.obj21806_droppedInsideTargetActions_runningActionsCount = obj21806_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj21804";
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
					window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
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
				window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj21806 
move_21812();
function move_21812() {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = obj21806_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21806");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 141;
	var moveY = 242;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21811();
function playAudioFile_21811() {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = obj21806_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21811")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21811");
			$("#obj_audio_playSoundFile21811").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
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
				window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_21814();
function switchText_21814() {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = obj21806_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #2665a0; font-size: 51px;\"><strong><span style=\"font-family: Roboto;\">82</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj21806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj21806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj21806").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj21806_content");
			setTimeout(function () {
				window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj21806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}












};
obj21806_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj21413 
incrementCounter_21815();
function incrementCounter_21815() {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = obj21806_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj21413_counterValue;
	obj21413_counterValue = obj21413_counterValue + 1;
	if (! obj21413_counterCanExceedTargetValue && obj21413_counterValue > obj21413_counterTargetValue) {
		obj21413_counterValue = obj21413_counterTargetValue;
	}

	if (oldValue != obj21413_counterValue) {
		$("#obj21413").trigger('SCEventCounterValueChange');
		$("#obj21413").trigger('SCEventCounterIncrease');
		if (obj21413_counterValue == obj21413_counterTargetValue)
			$("#obj21413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj21806_droppedInsideTargetActions_runningActionsCount = window.obj21806_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21806_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj21806_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21806").trigger("obj21806_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21806) {
				console.warn("de-queueing event obj21806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21806_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj21823_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21823_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj21823");

//	action: dragDrop
//	target: obj21823 
dragDrop_21826();
function dragDrop_21826() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj21823_onTouchDown_runningActionsCount = obj21823_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj21823');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj21823_onTouchDown_runningActionsCount = window.obj21823_onTouchDown_runningActionsCount - 1;

if (window.obj21823_onTouchDown_runningActionsCount < 0) {
	window.obj21823_onTouchDown_runningActionsCount = 0;
} else if (window.obj21823_onTouchDown_runningActionsCount == 0) {
	obj21823_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj21737");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_21826 = false;
    	var dropped_id_21826;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_21826 = true;
					dropped_id_21826 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_21826) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj21823").trigger('SCActionDragDrop21788_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj21823_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21823_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj21823 
move_21835();
function move_21835() {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 939;
	var moveY = 450;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21834();
function playAudioFile_21834() {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21834")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21834");
			$("#obj_audio_playSoundFile21834").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
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
				window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj21823_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21821
(function(){
	window.obj21823_droppedInsideTargetActions_runningActionsCount = obj21823_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj21821";
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
					window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
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
				window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj21823 
move_21829();
function move_21829() {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = obj21823_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21823");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 531;
	var moveY = 242;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21828();
function playAudioFile_21828() {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = obj21823_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21828")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21828");
			$("#obj_audio_playSoundFile21828").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
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
				window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_21831();
function switchText_21831() {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = obj21823_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #2665a0; font-size: 51px;\"><strong><span style=\"font-family: Roboto;\">98</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj21823_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj21823_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj21823").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj21823_content");
			setTimeout(function () {
				window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj21823 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}












};
obj21823_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj21413 
incrementCounter_21832();
function incrementCounter_21832() {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = obj21823_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj21413_counterValue;
	obj21413_counterValue = obj21413_counterValue + 1;
	if (! obj21413_counterCanExceedTargetValue && obj21413_counterValue > obj21413_counterTargetValue) {
		obj21413_counterValue = obj21413_counterTargetValue;
	}

	if (oldValue != obj21413_counterValue) {
		$("#obj21413").trigger('SCEventCounterValueChange');
		$("#obj21413").trigger('SCEventCounterIncrease');
		if (obj21413_counterValue == obj21413_counterTargetValue)
			$("#obj21413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj21823_droppedInsideTargetActions_runningActionsCount = window.obj21823_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21823_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21823_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21823_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21823_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj21823_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21823").trigger("obj21823_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21823) {
				console.warn("de-queueing event obj21823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21823_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj21838_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj21838");

//	action: dragDrop
//	target: obj21838 
dragDrop_21841();
function dragDrop_21841() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj21838_onTouchDown_runningActionsCount = obj21838_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj21838');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj21838_onTouchDown_runningActionsCount = window.obj21838_onTouchDown_runningActionsCount - 1;

if (window.obj21838_onTouchDown_runningActionsCount < 0) {
	window.obj21838_onTouchDown_runningActionsCount = 0;
} else if (window.obj21838_onTouchDown_runningActionsCount == 0) {
	obj21838_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj21765");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_21841 = false;
    	var dropped_id_21841;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_21841 = true;
					dropped_id_21841 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_21841) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj21838").trigger('SCActionDragDrop21788_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj21838_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj21838 
move_21850();
function move_21850() {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 944;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21849();
function playAudioFile_21849() {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21849")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21849");
			$("#obj_audio_playSoundFile21849").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
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
				window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj21838_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21836
(function(){
	window.obj21838_droppedInsideTargetActions_runningActionsCount = obj21838_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj21836";
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
					window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
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
				window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj21838 
move_21844();
function move_21844() {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = obj21838_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 529;
	var moveY = 664;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21843();
function playAudioFile_21843() {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = obj21838_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21843")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21843");
			$("#obj_audio_playSoundFile21843").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
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
				window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_21846();
function switchText_21846() {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = obj21838_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #2665a0; font-size: 51px;\"><strong><span style=\"font-family: Roboto;\">79</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj21838_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj21838_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj21838").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj21838_content");
			setTimeout(function () {
				window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj21838 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}












};
obj21838_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj21413 
incrementCounter_21847();
function incrementCounter_21847() {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = obj21838_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj21413_counterValue;
	obj21413_counterValue = obj21413_counterValue + 1;
	if (! obj21413_counterCanExceedTargetValue && obj21413_counterValue > obj21413_counterTargetValue) {
		obj21413_counterValue = obj21413_counterTargetValue;
	}

	if (oldValue != obj21413_counterValue) {
		$("#obj21413").trigger('SCEventCounterValueChange');
		$("#obj21413").trigger('SCEventCounterIncrease');
		if (obj21413_counterValue == obj21413_counterTargetValue)
			$("#obj21413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj21838_droppedInsideTargetActions_runningActionsCount = window.obj21838_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21838_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj21838_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21838").trigger("obj21838_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21838) {
				console.warn("de-queueing event obj21838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21838_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj21853_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21853_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj21853");

//	action: dragDrop
//	target: obj21853 
dragDrop_21856();
function dragDrop_21856() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj21853_onTouchDown_runningActionsCount = obj21853_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj21853');
	var page = $('.SCPage');

	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();

	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container

	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;

	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});

	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj21853_onTouchDown_runningActionsCount = window.obj21853_onTouchDown_runningActionsCount - 1;

if (window.obj21853_onTouchDown_runningActionsCount < 0) {
	window.obj21853_onTouchDown_runningActionsCount = 0;
} else if (window.obj21853_onTouchDown_runningActionsCount == 0) {
	obj21853_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj21763");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_21856 = false;
    	var dropped_id_21856;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_21856 = true;
					dropped_id_21856 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_21856) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj21853").trigger('SCActionDragDrop21788_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj21853_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21853_onTouchDown_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj21853 
move_21865();
function move_21865() {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21853");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 944;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21864();
function playAudioFile_21864() {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21864")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21864");
			$("#obj_audio_playSoundFile21864").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
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
				window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj21853_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21851
(function(){
	window.obj21853_droppedInsideTargetActions_runningActionsCount = obj21853_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj21851";
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
					window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
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
				window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj21853 
move_21859();
function move_21859() {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = obj21853_droppedInsideTargetActions_runningActionsCount + 1;


	var easing = "ease";

	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}

	var targetObject = $("#obj21853");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 331;
	var moveY = 664;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_21858();
function playAudioFile_21858() {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = obj21853_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile21858")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile21858");
			$("#obj_audio_playSoundFile21858").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
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
				window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_21861();
function switchText_21861() {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = obj21853_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #2665a0; font-size: 51px;\"><strong><span style=\"font-family: Roboto;\">42</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj21853_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj21853_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj21853").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj21853_content");
			setTimeout(function () {
				window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj21853 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}












};
obj21853_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj21413 
incrementCounter_21862();
function incrementCounter_21862() {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = obj21853_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj21413_counterValue;
	obj21413_counterValue = obj21413_counterValue + 1;
	if (! obj21413_counterCanExceedTargetValue && obj21413_counterValue > obj21413_counterTargetValue) {
		obj21413_counterValue = obj21413_counterTargetValue;
	}

	if (oldValue != obj21413_counterValue) {
		$("#obj21413").trigger('SCEventCounterValueChange');
		$("#obj21413").trigger('SCEventCounterIncrease');
		if (obj21413_counterValue == obj21413_counterTargetValue)
			$("#obj21413").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj21853_droppedInsideTargetActions_runningActionsCount = window.obj21853_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj21853_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj21853_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj21853_droppedInsideTargetActions_runningActionsCount == 0) {
	obj21853_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj21853_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj21853").trigger("obj21853_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21853) {
				console.warn("de-queueing event obj21853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21853_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj21384: Event Touch Down
 *
 */

$("#obj21384").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21384_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21384_onTap is still running");
	return;
}
var obj21384_onTap_runningActionsCount = 0;
var obj21384_onTap_loopCount = 0;
obj21384_onTap_actionGroup0();
});


















/*
 *
 *   obj21387: Event Touch Down
 *
 */

$("#obj21387").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21387_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21387_onTap is still running");
	return;
}
var obj21387_onTap_runningActionsCount = 0;
var obj21387_onTap_loopCount = 0;
obj21387_onTap_actionGroup0();
});
























































/*
 *
 *   obj21394: Event Touch Down
 *
 */

$("#obj21394").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21394_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21394_onTap is still running");
	return;
}
var obj21394_onTap_runningActionsCount = 0;
var obj21394_onTap_loopCount = 0;
obj21394_onTap_actionGroup0();
});


















/*
 *
 *   obj21397: Event Touch Down
 *
 */

$("#obj21397").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21397_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21397_onTap is still running");
	return;
}
var obj21397_onTap_runningActionsCount = 0;
var obj21397_onTap_loopCount = 0;
obj21397_onTap_actionGroup0();
});


















/*
 *
 *   obj21403: Event Touch Down
 *
 */

$("#obj21403").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21403_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21403_onTap is still running");
	return;
}
var obj21403_onTap_runningActionsCount = 0;
var obj21403_onTap_loopCount = 0;
obj21403_onTap_actionGroup0();
});

































































/*
 *
 *   obj21413: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj21413").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj21413_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21413_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj21413_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj21413_SCEventCounterReachedTargetValue_loopCount = 0;
obj21413_SCEventCounterReachedTargetValue_actionGroup0();
});













































































































































































































































































































































































































































/*
 *
 *   obj21773: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj21773");
	var winTarget = document.getElementById("obj21773");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj21773").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj21773_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj21773_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj21773_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21773_onTouchDown is still running");
	return;
}
var obj21773_onTouchDown_runningActionsCount = 0;
var obj21773_onTouchDown_loopCount = 0;
obj21773_onTouchDown_actionGroup0();
});






/*
 *
 *   obj21773: Event SCActionDragDrop21788_droppedOutsideTargetActions
 *
 */

$("#obj21773").bind("SCActionDragDrop21788_droppedOutsideTargetActions", function(event) {
	if (window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21773_SCActionDragDrop21788_droppedOutsideTargetActions is still running");
	return;
}
var obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
obj21773_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj21773: Event droppedInsideTargetActions
 *
 */

$("#obj21773").bind("droppedInsideTargetActions", function(event) {
	if (window.obj21773_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21773_droppedInsideTargetActions is still running");
	return;
}
var obj21773_droppedInsideTargetActions_runningActionsCount = 0;
var obj21773_droppedInsideTargetActions_loopCount = 0;
obj21773_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj21806: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj21806");
	var winTarget = document.getElementById("obj21806");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj21806").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj21806_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj21806_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj21806_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21806_onTouchDown is still running");
	return;
}
var obj21806_onTouchDown_runningActionsCount = 0;
var obj21806_onTouchDown_loopCount = 0;
obj21806_onTouchDown_actionGroup0();
});






/*
 *
 *   obj21806: Event SCActionDragDrop21788_droppedOutsideTargetActions
 *
 */

$("#obj21806").bind("SCActionDragDrop21788_droppedOutsideTargetActions", function(event) {
	if (window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21806_SCActionDragDrop21788_droppedOutsideTargetActions is still running");
	return;
}
var obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
obj21806_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj21806: Event droppedInsideTargetActions
 *
 */

$("#obj21806").bind("droppedInsideTargetActions", function(event) {
	if (window.obj21806_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21806_droppedInsideTargetActions is still running");
	return;
}
var obj21806_droppedInsideTargetActions_runningActionsCount = 0;
var obj21806_droppedInsideTargetActions_loopCount = 0;
obj21806_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj21823: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj21823");
	var winTarget = document.getElementById("obj21823");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj21823").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj21823_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj21823_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj21823_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21823_onTouchDown is still running");
	return;
}
var obj21823_onTouchDown_runningActionsCount = 0;
var obj21823_onTouchDown_loopCount = 0;
obj21823_onTouchDown_actionGroup0();
});






/*
 *
 *   obj21823: Event SCActionDragDrop21788_droppedOutsideTargetActions
 *
 */

$("#obj21823").bind("SCActionDragDrop21788_droppedOutsideTargetActions", function(event) {
	if (window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21823_SCActionDragDrop21788_droppedOutsideTargetActions is still running");
	return;
}
var obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
obj21823_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj21823: Event droppedInsideTargetActions
 *
 */

$("#obj21823").bind("droppedInsideTargetActions", function(event) {
	if (window.obj21823_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21823_droppedInsideTargetActions is still running");
	return;
}
var obj21823_droppedInsideTargetActions_runningActionsCount = 0;
var obj21823_droppedInsideTargetActions_loopCount = 0;
obj21823_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj21838: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj21838");
	var winTarget = document.getElementById("obj21838");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj21838").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj21838_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj21838_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj21838_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21838_onTouchDown is still running");
	return;
}
var obj21838_onTouchDown_runningActionsCount = 0;
var obj21838_onTouchDown_loopCount = 0;
obj21838_onTouchDown_actionGroup0();
});






/*
 *
 *   obj21838: Event SCActionDragDrop21788_droppedOutsideTargetActions
 *
 */

$("#obj21838").bind("SCActionDragDrop21788_droppedOutsideTargetActions", function(event) {
	if (window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21838_SCActionDragDrop21788_droppedOutsideTargetActions is still running");
	return;
}
var obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
obj21838_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj21838: Event droppedInsideTargetActions
 *
 */

$("#obj21838").bind("droppedInsideTargetActions", function(event) {
	if (window.obj21838_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21838_droppedInsideTargetActions is still running");
	return;
}
var obj21838_droppedInsideTargetActions_runningActionsCount = 0;
var obj21838_droppedInsideTargetActions_loopCount = 0;
obj21838_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj21853: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj21853");
	var winTarget = document.getElementById("obj21853");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj21853").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj21853_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj21853_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj21853_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21853_onTouchDown is still running");
	return;
}
var obj21853_onTouchDown_runningActionsCount = 0;
var obj21853_onTouchDown_loopCount = 0;
obj21853_onTouchDown_actionGroup0();
});






/*
 *
 *   obj21853: Event SCActionDragDrop21788_droppedOutsideTargetActions
 *
 */

$("#obj21853").bind("SCActionDragDrop21788_droppedOutsideTargetActions", function(event) {
	if (window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21853_SCActionDragDrop21788_droppedOutsideTargetActions is still running");
	return;
}
var obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_runningActionsCount = 0;
var obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_loopCount = 0;
obj21853_SCActionDragDrop21788_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj21853: Event droppedInsideTargetActions
 *
 */

$("#obj21853").bind("droppedInsideTargetActions", function(event) {
	if (window.obj21853_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21853_droppedInsideTargetActions is still running");
	return;
}
var obj21853_droppedInsideTargetActions_runningActionsCount = 0;
var obj21853_droppedInsideTargetActions_loopCount = 0;
obj21853_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj21380").trigger('SCEventShow');
$("#obj21784").trigger('SCEventShow');
$("#obj21382").trigger('SCEventShow');
$("#obj21384").trigger('SCEventShow');
$("#obj21387").trigger('SCEventShow');
$("#obj21390").trigger('SCEventShow');
$("#obj21392").trigger('SCEventShow');
$("#obj21394").trigger('SCEventShow');
$("#obj21397").trigger('SCEventShow');
$("#obj21417").trigger('SCEventShow');
$("#obj21727").trigger('SCEventShow');
$("#obj21729").trigger('SCEventShow');
$("#obj21733").trigger('SCEventShow');
$("#obj21735").trigger('SCEventShow');
$("#obj21737").trigger('SCEventShow');
$("#obj21741").trigger('SCEventShow');
$("#obj21743").trigger('SCEventShow');
$("#obj21745").trigger('SCEventShow');
$("#obj21747").trigger('SCEventShow');
$("#obj21749").trigger('SCEventShow');
$("#obj21751").trigger('SCEventShow');
$("#obj21753").trigger('SCEventShow');
$("#obj21755").trigger('SCEventShow');
$("#obj21757").trigger('SCEventShow');
$("#obj21759").trigger('SCEventShow');
$("#obj21761").trigger('SCEventShow');
$("#obj21763").trigger('SCEventShow');
$("#obj21765").trigger('SCEventShow');
$("#obj21767").trigger('SCEventShow');
$("#obj21769").trigger('SCEventShow');
$("#obj21771").trigger('SCEventShow');
$("#obj21773").trigger('SCEventShow');
$("#obj21806").trigger('SCEventShow');
$("#obj21823").trigger('SCEventShow');
$("#obj21838").trigger('SCEventShow');
$("#obj21853").trigger('SCEventShow');
	

});