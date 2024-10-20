pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 12921;
pubcoder.page.title = pubcoder.page.title || "34";
pubcoder.page.number = pubcoder.page.number || 34;
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
var obj12928_onTap_activeActionGroupIndex = -1;
var obj12928_onTap_runningActionsCount = 0;
var obj12928_onTap_loopCount = 0;
var obj12931_onTap_activeActionGroupIndex = -1;
var obj12931_onTap_runningActionsCount = 0;
var obj12931_onTap_loopCount = 0;
var obj12938_onTap_activeActionGroupIndex = -1;
var obj12938_onTap_runningActionsCount = 0;
var obj12938_onTap_loopCount = 0;
var obj12941_onTap_activeActionGroupIndex = -1;
var obj12941_onTap_runningActionsCount = 0;
var obj12941_onTap_loopCount = 0;
var obj12947_onTap_activeActionGroupIndex = -1;
var obj12947_onTap_runningActionsCount = 0;
var obj12947_onTap_loopCount = 0;
var obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj12959_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12959_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13074_onDrag_activeActionGroupIndex = -1;
var obj13074_onDrag_runningActionsCount = 0;
var obj13074_onDrag_loopCount = 0;
var obj13074_onTouchDown_activeActionGroupIndex = -1;
var obj13074_onTouchDown_runningActionsCount = 0;
var obj13074_onTouchDown_loopCount = 0;
var obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13074_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13074_droppedInsideTargetActions_runningActionsCount = 0;
var obj13074_droppedInsideTargetActions_loopCount = 0;
var obj13101_onDrag_activeActionGroupIndex = -1;
var obj13101_onDrag_runningActionsCount = 0;
var obj13101_onDrag_loopCount = 0;
var obj13101_onTouchDown_activeActionGroupIndex = -1;
var obj13101_onTouchDown_runningActionsCount = 0;
var obj13101_onTouchDown_loopCount = 0;
var obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13101_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13101_droppedInsideTargetActions_runningActionsCount = 0;
var obj13101_droppedInsideTargetActions_loopCount = 0;
var obj13141_onDrag_activeActionGroupIndex = -1;
var obj13141_onDrag_runningActionsCount = 0;
var obj13141_onDrag_loopCount = 0;
var obj13141_onTouchDown_activeActionGroupIndex = -1;
var obj13141_onTouchDown_runningActionsCount = 0;
var obj13141_onTouchDown_loopCount = 0;
var obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13141_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13141_droppedInsideTargetActions_runningActionsCount = 0;
var obj13141_droppedInsideTargetActions_loopCount = 0;
var obj13127_onDrag_activeActionGroupIndex = -1;
var obj13127_onDrag_runningActionsCount = 0;
var obj13127_onDrag_loopCount = 0;
var obj13127_onTouchDown_activeActionGroupIndex = -1;
var obj13127_onTouchDown_runningActionsCount = 0;
var obj13127_onTouchDown_loopCount = 0;
var obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13127_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13127_droppedInsideTargetActions_runningActionsCount = 0;
var obj13127_droppedInsideTargetActions_loopCount = 0;
var obj13185_onDrag_activeActionGroupIndex = -1;
var obj13185_onDrag_runningActionsCount = 0;
var obj13185_onDrag_loopCount = 0;
var obj13185_onTouchDown_activeActionGroupIndex = -1;
var obj13185_onTouchDown_runningActionsCount = 0;
var obj13185_onTouchDown_loopCount = 0;
var obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13185_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13185_droppedInsideTargetActions_runningActionsCount = 0;
var obj13185_droppedInsideTargetActions_loopCount = 0;
var obj13171_onDrag_activeActionGroupIndex = -1;
var obj13171_onDrag_runningActionsCount = 0;
var obj13171_onDrag_loopCount = 0;
var obj13171_onTouchDown_activeActionGroupIndex = -1;
var obj13171_onTouchDown_runningActionsCount = 0;
var obj13171_onTouchDown_loopCount = 0;
var obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13171_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13171_droppedInsideTargetActions_runningActionsCount = 0;
var obj13171_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj12959_counterValue = 0;
var obj12959_counterTargetValue = 6;
var obj12959_counterCanExceedTargetValue = false;

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
		
obj12928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12928_onTap_activeActionGroupIndex = -1;
		$("#obj12928").trigger("obj12928_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12928) {
				console.warn("de-queueing event obj12928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12928_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12930();
function goToPage_12930() {
	window.obj12928_onTap_runningActionsCount = obj12928_onTap_runningActionsCount + 1;

	$("#anchor518")[0].click();
	window.obj12928_onTap_runningActionsCount = window.obj12928_onTap_runningActionsCount - 1;

if (window.obj12928_onTap_runningActionsCount < 0) {
	window.obj12928_onTap_runningActionsCount = 0;
} else if (window.obj12928_onTap_runningActionsCount == 0) {
	obj12928_onTap_actionGroup1();
}
}










































};
obj12928_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12928_onTap_activeActionGroupIndex = -1;
		$("#obj12928").trigger("obj12928_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12928) {
				console.warn("de-queueing event obj12928." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12928").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12928_onTap_activeActionGroupIndex = 1;
	











































};
obj12931_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12931_onTap_activeActionGroupIndex = -1;
		$("#obj12931").trigger("obj12931_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12931) {
				console.warn("de-queueing event obj12931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12931_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12933();
function goToPage_12933() {
	window.obj12931_onTap_runningActionsCount = obj12931_onTap_runningActionsCount + 1;

	$("#anchor519")[0].click();
	window.obj12931_onTap_runningActionsCount = window.obj12931_onTap_runningActionsCount - 1;

if (window.obj12931_onTap_runningActionsCount < 0) {
	window.obj12931_onTap_runningActionsCount = 0;
} else if (window.obj12931_onTap_runningActionsCount == 0) {
	obj12931_onTap_actionGroup1();
}
}










































};
obj12931_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12931_onTap_activeActionGroupIndex = -1;
		$("#obj12931").trigger("obj12931_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12931) {
				console.warn("de-queueing event obj12931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12931_onTap_activeActionGroupIndex = 1;
	











































};
obj12938_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12938_onTap_activeActionGroupIndex = -1;
		$("#obj12938").trigger("obj12938_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12938) {
				console.warn("de-queueing event obj12938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12938_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_12940();
function goToPage_12940() {
	window.obj12938_onTap_runningActionsCount = obj12938_onTap_runningActionsCount + 1;

	$("#anchor520")[0].click();
	window.obj12938_onTap_runningActionsCount = window.obj12938_onTap_runningActionsCount - 1;

if (window.obj12938_onTap_runningActionsCount < 0) {
	window.obj12938_onTap_runningActionsCount = 0;
} else if (window.obj12938_onTap_runningActionsCount == 0) {
	obj12938_onTap_actionGroup1();
}
}










































};
obj12938_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12938_onTap_activeActionGroupIndex = -1;
		$("#obj12938").trigger("obj12938_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12938) {
				console.warn("de-queueing event obj12938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12938_onTap_activeActionGroupIndex = 1;
	











































};
obj12941_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12941_onTap_activeActionGroupIndex = -1;
		$("#obj12941").trigger("obj12941_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12941) {
				console.warn("de-queueing event obj12941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12941_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12947
(function(){
	window.obj12941_onTap_runningActionsCount = obj12941_onTap_runningActionsCount + 1;


	var selector = "#obj12947";
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
					window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup1();
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
				window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12941_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12941_onTap_activeActionGroupIndex = -1;
		$("#obj12941").trigger("obj12941_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12941) {
				console.warn("de-queueing event obj12941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12941_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12941 
hide_12944();
function hide_12944() {
	var selector = "#obj12941";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12941_onTap_runningActionsCount = obj12941_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12944(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12941_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12941_onTap_activeActionGroupIndex = -1;
		$("#obj12941").trigger("obj12941_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12941) {
				console.warn("de-queueing event obj12941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12941_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj12955
(function(){
	window.obj12941_onTap_runningActionsCount = obj12941_onTap_runningActionsCount + 1;


	var selector = "#obj12955";
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
					window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup3();
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
				window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj12953
(function(){
	window.obj12941_onTap_runningActionsCount = obj12941_onTap_runningActionsCount + 1;


	var selector = "#obj12953";
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
					window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup3();
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
				window.obj12941_onTap_runningActionsCount = window.obj12941_onTap_runningActionsCount - 1;

if (window.obj12941_onTap_runningActionsCount < 0) {
	window.obj12941_onTap_runningActionsCount = 0;
} else if (window.obj12941_onTap_runningActionsCount == 0) {
	obj12941_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12941_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12941_onTap_activeActionGroupIndex = -1;
		$("#obj12941").trigger("obj12941_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12941) {
				console.warn("de-queueing event obj12941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12941_onTap_activeActionGroupIndex = 3;
	











































};
obj12947_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12947_onTap_activeActionGroupIndex = -1;
		$("#obj12947").trigger("obj12947_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12947) {
				console.warn("de-queueing event obj12947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12947_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj12941
(function(){
	window.obj12947_onTap_runningActionsCount = obj12947_onTap_runningActionsCount + 1;


	var selector = "#obj12941";
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
					window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup1();
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
				window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj12947_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12947_onTap_activeActionGroupIndex = -1;
		$("#obj12947").trigger("obj12947_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12947) {
				console.warn("de-queueing event obj12947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12947_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj12947 
hide_12950();
function hide_12950() {
	var selector = "#obj12947";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12947_onTap_runningActionsCount = obj12947_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12950(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12947_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12947_onTap_activeActionGroupIndex = -1;
		$("#obj12947").trigger("obj12947_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12947) {
				console.warn("de-queueing event obj12947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12947_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj12953 
hide_12951();
function hide_12951() {
	var selector = "#obj12953";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12947_onTap_runningActionsCount = obj12947_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12951(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj12955 
hide_12952();
function hide_12952() {
	var selector = "#obj12955";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj12947_onTap_runningActionsCount = obj12947_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_12952(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj12947_onTap_runningActionsCount = window.obj12947_onTap_runningActionsCount - 1;

if (window.obj12947_onTap_runningActionsCount < 0) {
	window.obj12947_onTap_runningActionsCount = 0;
} else if (window.obj12947_onTap_runningActionsCount == 0) {
	obj12947_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj12947_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12947_onTap_activeActionGroupIndex = -1;
		$("#obj12947").trigger("obj12947_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12947) {
				console.warn("de-queueing event obj12947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12947_onTap_activeActionGroupIndex = 3;
	











































};
obj12959_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12959").trigger("obj12959_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12959) {
				console.warn("de-queueing event obj12959." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12959").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_12961();
function wait_12961() {
	window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = obj12959_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12959_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj12959_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12959").trigger("obj12959_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12959) {
				console.warn("de-queueing event obj12959." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12959").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_12962();
function goToPage_12962() {
	window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = obj12959_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor521")[0].click();
	window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj12959_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj12959_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj12959_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj12959").trigger("obj12959_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 12959) {
				console.warn("de-queueing event obj12959." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj12959").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13074_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13074_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13074");

//	action: dragDrop
//	target: obj13074 
dragDrop_13077();
function dragDrop_13077() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13074_onTouchDown_runningActionsCount = obj13074_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13074');
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
    	window.obj13074_onTouchDown_runningActionsCount = window.obj13074_onTouchDown_runningActionsCount - 1;

if (window.obj13074_onTouchDown_runningActionsCount < 0) {
	window.obj13074_onTouchDown_runningActionsCount = 0;
} else if (window.obj13074_onTouchDown_runningActionsCount == 0) {
	obj13074_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13037");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13077 = false;
    	var dropped_id_13077;
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
					dropped_13077 = true;
					dropped_id_13077 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13077) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13074").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13074_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13074_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13074 
move_13086();
function move_13086() {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13074");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 550;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13085();
function playAudioFile_13085() {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13085")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13085");
			$("#obj_audio_playSoundFile13085").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13074_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13074_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13074 
move_13090();
function move_13090() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13074");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 363;
	var moveY = 247;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13088();
function playAudioFile_13088() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13088")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13088");
			$("#obj_audio_playSoundFile13088").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
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
				window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13089();
function runjs_13089() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13074").css("border-color", "rgba(0,0,0,0)"); $("#obj13074").css("border-width", "0px"); $("#obj13074").css("border-style", "solid"); $("#obj13074").css("border-radius", "0px"); $("#obj13074").css("-webkit-border-radius", "0px"); $("#obj13074").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13096();
function runjs_13096() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13074").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13092();
function switchText_13092() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">87</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13074_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13074_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13074").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13074_content");
			setTimeout(function () {
				window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13074 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13093();
function incrementCounter_13093() {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = obj13074_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13074_droppedInsideTargetActions_runningActionsCount = window.obj13074_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13074_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13074_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13074_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13074_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13074_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13074_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13074").trigger("obj13074_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13074) {
				console.warn("de-queueing event obj13074." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13074").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13074_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13101_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13101_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13101");

//	action: dragDrop
//	target: obj13101 
dragDrop_13104();
function dragDrop_13104() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13101_onTouchDown_runningActionsCount = obj13101_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13101');
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
    	window.obj13101_onTouchDown_runningActionsCount = window.obj13101_onTouchDown_runningActionsCount - 1;

if (window.obj13101_onTouchDown_runningActionsCount < 0) {
	window.obj13101_onTouchDown_runningActionsCount = 0;
} else if (window.obj13101_onTouchDown_runningActionsCount == 0) {
	obj13101_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13041");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13104 = false;
    	var dropped_id_13104;
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
					dropped_13104 = true;
					dropped_id_13104 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13104) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13101").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13101_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13101_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13101 
move_13114();
function move_13114() {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13101");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 750;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13113();
function playAudioFile_13113() {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13113")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13113");
			$("#obj_audio_playSoundFile13113").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13101_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13101_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13101 
move_13107();
function move_13107() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13101");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 766;
	var moveY = 247;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13106();
function playAudioFile_13106() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13106")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13106");
			$("#obj_audio_playSoundFile13106").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
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
				window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13108();
function runjs_13108() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13101").css("border-color", "rgba(0,0,0,0)"); $("#obj13101").css("border-width", "0px"); $("#obj13101").css("border-style", "solid"); $("#obj13101").css("border-radius", "0px"); $("#obj13101").css("-webkit-border-radius", "0px"); $("#obj13101").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13109();
function runjs_13109() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13101").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13110();
function switchText_13110() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">89</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13101_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13101_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13101").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13101_content");
			setTimeout(function () {
				window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13101 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13111();
function incrementCounter_13111() {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = obj13101_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13101_droppedInsideTargetActions_runningActionsCount = window.obj13101_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13101_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13101_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13101_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13101_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13101_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13101_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13101").trigger("obj13101_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13101) {
				console.warn("de-queueing event obj13101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13101_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13141_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13141_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13141");

//	action: dragDrop
//	target: obj13141 
dragDrop_13144();
function dragDrop_13144() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13141_onTouchDown_runningActionsCount = obj13141_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13141');
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
    	window.obj13141_onTouchDown_runningActionsCount = window.obj13141_onTouchDown_runningActionsCount - 1;

if (window.obj13141_onTouchDown_runningActionsCount < 0) {
	window.obj13141_onTouchDown_runningActionsCount = 0;
} else if (window.obj13141_onTouchDown_runningActionsCount == 0) {
	obj13141_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13047");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13144 = false;
    	var dropped_id_13144;
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
					dropped_13144 = true;
					dropped_id_13144 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13144) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13141").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13141_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13141_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13141 
move_13154();
function move_13154() {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13141");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 650;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13153();
function playAudioFile_13153() {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13153")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13153");
			$("#obj_audio_playSoundFile13153").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13141_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13141_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13141 
move_13147();
function move_13147() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13141");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 470;
	var moveY = 350;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13146();
function playAudioFile_13146() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13146")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13146");
			$("#obj_audio_playSoundFile13146").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
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
				window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13148();
function runjs_13148() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13141").css("border-color", "rgba(0,0,0,0)"); $("#obj13141").css("border-width", "0px"); $("#obj13141").css("border-style", "solid"); $("#obj13141").css("border-radius", "0px"); $("#obj13141").css("-webkit-border-radius", "0px"); $("#obj13141").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13149();
function runjs_13149() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13141").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13150();
function switchText_13150() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">55</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13141_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13141_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13141").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13141_content");
			setTimeout(function () {
				window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13141 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13151();
function incrementCounter_13151() {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = obj13141_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13141_droppedInsideTargetActions_runningActionsCount = window.obj13141_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13141_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13141_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13141_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13141_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13141_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13141_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13141").trigger("obj13141_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13141) {
				console.warn("de-queueing event obj13141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13141_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13127_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13127_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13127");

//	action: dragDrop
//	target: obj13127 
dragDrop_13130();
function dragDrop_13130() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13127_onTouchDown_runningActionsCount = obj13127_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13127');
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
    	window.obj13127_onTouchDown_runningActionsCount = window.obj13127_onTouchDown_runningActionsCount - 1;

if (window.obj13127_onTouchDown_runningActionsCount < 0) {
	window.obj13127_onTouchDown_runningActionsCount = 0;
} else if (window.obj13127_onTouchDown_runningActionsCount == 0) {
	obj13127_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13043");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13130 = false;
    	var dropped_id_13130;
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
					dropped_13130 = true;
					dropped_id_13130 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13130) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13127").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13127_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13127_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13127 
move_13140();
function move_13140() {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13127");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 850;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13139();
function playAudioFile_13139() {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13139")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13139");
			$("#obj_audio_playSoundFile13139").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13127_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13127_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13127 
move_13133();
function move_13133() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13127");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 874;
	var moveY = 347;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13132();
function playAudioFile_13132() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13132")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13132");
			$("#obj_audio_playSoundFile13132").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
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
				window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13134();
function runjs_13134() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13127").css("border-color", "rgba(0,0,0,0)"); $("#obj13127").css("border-width", "0px"); $("#obj13127").css("border-style", "solid"); $("#obj13127").css("border-radius", "0px"); $("#obj13127").css("-webkit-border-radius", "0px"); $("#obj13127").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13135();
function runjs_13135() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13127").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13136();
function switchText_13136() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">57</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13127").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13127_content");
			setTimeout(function () {
				window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13137();
function incrementCounter_13137() {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = obj13127_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13127_droppedInsideTargetActions_runningActionsCount = window.obj13127_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13127_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13127_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13127_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13127_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13127_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13127_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13127").trigger("obj13127_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13127) {
				console.warn("de-queueing event obj13127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13127_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13185_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13185");

//	action: dragDrop
//	target: obj13185 
dragDrop_13188();
function dragDrop_13188() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13185_onTouchDown_runningActionsCount = obj13185_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13185');
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
    	window.obj13185_onTouchDown_runningActionsCount = window.obj13185_onTouchDown_runningActionsCount - 1;

if (window.obj13185_onTouchDown_runningActionsCount < 0) {
	window.obj13185_onTouchDown_runningActionsCount = 0;
} else if (window.obj13185_onTouchDown_runningActionsCount == 0) {
	obj13185_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13053");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13188 = false;
    	var dropped_id_13188;
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
					dropped_13188 = true;
					dropped_id_13188 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13188) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13185").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13185_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13185_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13185 
move_13198();
function move_13198() {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 950;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13197();
function playAudioFile_13197() {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13197")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13197");
			$("#obj_audio_playSoundFile13197").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13185_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13185_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13185 
move_13191();
function move_13191() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13185");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 577;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13190();
function playAudioFile_13190() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13190")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13190");
			$("#obj_audio_playSoundFile13190").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
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
				window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13192();
function runjs_13192() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13185").css("border-color", "rgba(0,0,0,0)"); $("#obj13185").css("border-width", "0px"); $("#obj13185").css("border-style", "solid"); $("#obj13185").css("border-radius", "0px"); $("#obj13185").css("-webkit-border-radius", "0px"); $("#obj13185").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13193();
function runjs_13193() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13185").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13194();
function switchText_13194() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">36</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13185_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13185_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13185").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13185_content");
			setTimeout(function () {
				window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13185 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13195();
function incrementCounter_13195() {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = obj13185_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13185_droppedInsideTargetActions_runningActionsCount = window.obj13185_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13185_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13185_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13185_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13185_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13185_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13185_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13185").trigger("obj13185_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13185) {
				console.warn("de-queueing event obj13185." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13185").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13185_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13171_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13171_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13171");

//	action: dragDrop
//	target: obj13171 
dragDrop_13174();
function dragDrop_13174() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13171_onTouchDown_runningActionsCount = obj13171_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13171');
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
    	window.obj13171_onTouchDown_runningActionsCount = window.obj13171_onTouchDown_runningActionsCount - 1;

if (window.obj13171_onTouchDown_runningActionsCount < 0) {
	window.obj13171_onTouchDown_runningActionsCount = 0;
} else if (window.obj13171_onTouchDown_runningActionsCount == 0) {
	obj13171_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13049");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13174 = false;
    	var dropped_id_13174;
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
					dropped_13174 = true;
					dropped_id_13174 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13174) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13171").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13171_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13171_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13171 
move_13184();
function move_13184() {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13171");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 450;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13183();
function playAudioFile_13183() {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13183")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13183");
			$("#obj_audio_playSoundFile13183").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13171_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13171_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13171 
move_13177();
function move_13177() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13171");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 980;
	var moveY = 455;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13176();
function playAudioFile_13176() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13176")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13176");
			$("#obj_audio_playSoundFile13176").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
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
				window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13178();
function runjs_13178() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13171").css("border-color", "rgba(0,0,0,0)"); $("#obj13171").css("border-width", "0px"); $("#obj13171").css("border-style", "solid"); $("#obj13171").css("border-radius", "0px"); $("#obj13171").css("-webkit-border-radius", "0px"); $("#obj13171").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_13179();
function runjs_13179() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13171").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13180();
function switchText_13180() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 48px; color: #2665a0;\">38</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13171_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13171_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13171").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13171_content");
			setTimeout(function () {
				window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13171 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj12959 
incrementCounter_13181();
function incrementCounter_13181() {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = obj13171_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj12959_counterValue;
	obj12959_counterValue = obj12959_counterValue + 1;
	if (! obj12959_counterCanExceedTargetValue && obj12959_counterValue > obj12959_counterTargetValue) {
		obj12959_counterValue = obj12959_counterTargetValue;
	}

	if (oldValue != obj12959_counterValue) {
		$("#obj12959").trigger('SCEventCounterValueChange');
		$("#obj12959").trigger('SCEventCounterIncrease');
		if (obj12959_counterValue == obj12959_counterTargetValue)
			$("#obj12959").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13171_droppedInsideTargetActions_runningActionsCount = window.obj13171_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13171_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13171_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13171_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13171_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13171_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13171_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13171").trigger("obj13171_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13171) {
				console.warn("de-queueing event obj13171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13171_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj12928: Event Touch Down
 *
 */

$("#obj12928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12928_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12928_onTap is still running");
	return;
}
var obj12928_onTap_runningActionsCount = 0;
var obj12928_onTap_loopCount = 0;
obj12928_onTap_actionGroup0();
});


















/*
 *
 *   obj12931: Event Touch Down
 *
 */

$("#obj12931").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12931_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12931_onTap is still running");
	return;
}
var obj12931_onTap_runningActionsCount = 0;
var obj12931_onTap_loopCount = 0;
obj12931_onTap_actionGroup0();
});
























































/*
 *
 *   obj12938: Event Touch Down
 *
 */

$("#obj12938").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12938_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12938_onTap is still running");
	return;
}
var obj12938_onTap_runningActionsCount = 0;
var obj12938_onTap_loopCount = 0;
obj12938_onTap_actionGroup0();
});


















/*
 *
 *   obj12941: Event Touch Down
 *
 */

$("#obj12941").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12941_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12941_onTap is still running");
	return;
}
var obj12941_onTap_runningActionsCount = 0;
var obj12941_onTap_loopCount = 0;
obj12941_onTap_actionGroup0();
});


















/*
 *
 *   obj12947: Event Touch Down
 *
 */

$("#obj12947").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj12947_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12947_onTap is still running");
	return;
}
var obj12947_onTap_runningActionsCount = 0;
var obj12947_onTap_loopCount = 0;
obj12947_onTap_actionGroup0();
});




















































































/*
 *
 *   obj12959: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj12959").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj12959_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj12959_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj12959_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj12959_SCEventCounterReachedTargetValue_loopCount = 0;
obj12959_SCEventCounterReachedTargetValue_actionGroup0();
});















































































































































































































































/*
 *
 *   obj13074: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13074");
	var winTarget = document.getElementById("obj13074");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13074").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13074_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13074_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13074_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13074_onTouchDown is still running");
	return;
}
var obj13074_onTouchDown_runningActionsCount = 0;
var obj13074_onTouchDown_loopCount = 0;
obj13074_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13074: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13074").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13074_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13074_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13074: Event droppedInsideTargetActions
 *
 */

$("#obj13074").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13074_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13074_droppedInsideTargetActions is still running");
	return;
}
var obj13074_droppedInsideTargetActions_runningActionsCount = 0;
var obj13074_droppedInsideTargetActions_loopCount = 0;
obj13074_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj13101: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13101");
	var winTarget = document.getElementById("obj13101");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13101").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13101_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13101_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13101_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13101_onTouchDown is still running");
	return;
}
var obj13101_onTouchDown_runningActionsCount = 0;
var obj13101_onTouchDown_loopCount = 0;
obj13101_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13101: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13101").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13101_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13101_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13101: Event droppedInsideTargetActions
 *
 */

$("#obj13101").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13101_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13101_droppedInsideTargetActions is still running");
	return;
}
var obj13101_droppedInsideTargetActions_runningActionsCount = 0;
var obj13101_droppedInsideTargetActions_loopCount = 0;
obj13101_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj13141: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13141");
	var winTarget = document.getElementById("obj13141");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13141").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13141_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13141_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13141_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13141_onTouchDown is still running");
	return;
}
var obj13141_onTouchDown_runningActionsCount = 0;
var obj13141_onTouchDown_loopCount = 0;
obj13141_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13141: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13141").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13141_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13141_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13141: Event droppedInsideTargetActions
 *
 */

$("#obj13141").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13141_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13141_droppedInsideTargetActions is still running");
	return;
}
var obj13141_droppedInsideTargetActions_runningActionsCount = 0;
var obj13141_droppedInsideTargetActions_loopCount = 0;
obj13141_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj13127: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13127");
	var winTarget = document.getElementById("obj13127");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13127").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13127_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13127_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13127_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13127_onTouchDown is still running");
	return;
}
var obj13127_onTouchDown_runningActionsCount = 0;
var obj13127_onTouchDown_loopCount = 0;
obj13127_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13127: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13127").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13127_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13127_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13127: Event droppedInsideTargetActions
 *
 */

$("#obj13127").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13127_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13127_droppedInsideTargetActions is still running");
	return;
}
var obj13127_droppedInsideTargetActions_runningActionsCount = 0;
var obj13127_droppedInsideTargetActions_loopCount = 0;
obj13127_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj13185: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13185");
	var winTarget = document.getElementById("obj13185");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13185").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13185_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13185_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13185_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13185_onTouchDown is still running");
	return;
}
var obj13185_onTouchDown_runningActionsCount = 0;
var obj13185_onTouchDown_loopCount = 0;
obj13185_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13185: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13185").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13185_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13185_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13185: Event droppedInsideTargetActions
 *
 */

$("#obj13185").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13185_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13185_droppedInsideTargetActions is still running");
	return;
}
var obj13185_droppedInsideTargetActions_runningActionsCount = 0;
var obj13185_droppedInsideTargetActions_loopCount = 0;
obj13185_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj13171: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13171");
	var winTarget = document.getElementById("obj13171");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13171").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13171_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13171_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13171_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13171_onTouchDown is still running");
	return;
}
var obj13171_onTouchDown_runningActionsCount = 0;
var obj13171_onTouchDown_loopCount = 0;
obj13171_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13171: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13171").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13171_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13171_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13171: Event droppedInsideTargetActions
 *
 */

$("#obj13171").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13171_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13171_droppedInsideTargetActions is still running");
	return;
}
var obj13171_droppedInsideTargetActions_runningActionsCount = 0;
var obj13171_droppedInsideTargetActions_loopCount = 0;
obj13171_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj12922").trigger('SCEventShow');
$("#obj12926").trigger('SCEventShow');
$("#obj12928").trigger('SCEventShow');
$("#obj12931").trigger('SCEventShow');
$("#obj12934").trigger('SCEventShow');
$("#obj12936").trigger('SCEventShow');
$("#obj12938").trigger('SCEventShow');
$("#obj12941").trigger('SCEventShow');
$("#obj12957").trigger('SCEventShow');
$("#obj13037").trigger('SCEventShow');
$("#obj13039").trigger('SCEventShow');
$("#obj13041").trigger('SCEventShow');
$("#obj13047").trigger('SCEventShow');
$("#obj13045").trigger('SCEventShow');
$("#obj13043").trigger('SCEventShow');
$("#obj13053").trigger('SCEventShow');
$("#obj13051").trigger('SCEventShow');
$("#obj13049").trigger('SCEventShow');
$("#obj13055").trigger('SCEventShow');
$("#obj13057").trigger('SCEventShow');
$("#obj13059").trigger('SCEventShow');
$("#obj13074").trigger('SCEventShow');
$("#obj13101").trigger('SCEventShow');
$("#obj13117").trigger('SCEventShow');
$("#obj13119").trigger('SCEventShow');
$("#obj13141").trigger('SCEventShow');
$("#obj13127").trigger('SCEventShow');
$("#obj13125").trigger('SCEventShow');
$("#obj13123").trigger('SCEventShow');
$("#obj13185").trigger('SCEventShow');
$("#obj13171").trigger('SCEventShow');
$("#obj13169").trigger('SCEventShow');
$("#obj13167").trigger('SCEventShow');
	

});