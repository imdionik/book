pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 1318;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj1323_onTap_activeActionGroupIndex = -1;
var obj1323_onTap_runningActionsCount = 0;
var obj1323_onTap_loopCount = 0;
var obj1326_onTap_activeActionGroupIndex = -1;
var obj1326_onTap_runningActionsCount = 0;
var obj1326_onTap_loopCount = 0;
var obj1333_onTap_activeActionGroupIndex = -1;
var obj1333_onTap_runningActionsCount = 0;
var obj1333_onTap_loopCount = 0;
var obj1336_onTap_activeActionGroupIndex = -1;
var obj1336_onTap_runningActionsCount = 0;
var obj1336_onTap_loopCount = 0;
var obj1342_onTap_activeActionGroupIndex = -1;
var obj1342_onTap_runningActionsCount = 0;
var obj1342_onTap_loopCount = 0;
var obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1597_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1597_SCEventCounterReachedTargetValue_loopCount = 0;
var obj1584_onDrag_activeActionGroupIndex = -1;
var obj1584_onDrag_runningActionsCount = 0;
var obj1584_onDrag_loopCount = 0;
var obj1584_onTouchDown_activeActionGroupIndex = -1;
var obj1584_onTouchDown_runningActionsCount = 0;
var obj1584_onTouchDown_loopCount = 0;
var obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1584_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj1584_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1584_droppedInsideTargetActions_runningActionsCount = 0;
var obj1584_droppedInsideTargetActions_loopCount = 0;
var obj1630_onDrag_activeActionGroupIndex = -1;
var obj1630_onDrag_runningActionsCount = 0;
var obj1630_onDrag_loopCount = 0;
var obj1630_onTouchDown_activeActionGroupIndex = -1;
var obj1630_onTouchDown_runningActionsCount = 0;
var obj1630_onTouchDown_loopCount = 0;
var obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj1630_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1630_droppedInsideTargetActions_runningActionsCount = 0;
var obj1630_droppedInsideTargetActions_loopCount = 0;
var obj1692_onDrag_activeActionGroupIndex = -1;
var obj1692_onDrag_runningActionsCount = 0;
var obj1692_onDrag_loopCount = 0;
var obj1692_onTouchDown_activeActionGroupIndex = -1;
var obj1692_onTouchDown_runningActionsCount = 0;
var obj1692_onTouchDown_loopCount = 0;
var obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1692_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj1692_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1692_droppedInsideTargetActions_runningActionsCount = 0;
var obj1692_droppedInsideTargetActions_loopCount = 0;
var obj1717_onDrag_activeActionGroupIndex = -1;
var obj1717_onDrag_runningActionsCount = 0;
var obj1717_onDrag_loopCount = 0;
var obj1717_onTouchDown_activeActionGroupIndex = -1;
var obj1717_onTouchDown_runningActionsCount = 0;
var obj1717_onTouchDown_loopCount = 0;
var obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1717_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj1717_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1717_droppedInsideTargetActions_runningActionsCount = 0;
var obj1717_droppedInsideTargetActions_loopCount = 0;
var obj1765_onDrag_activeActionGroupIndex = -1;
var obj1765_onDrag_runningActionsCount = 0;
var obj1765_onDrag_loopCount = 0;
var obj1765_onTouchDown_activeActionGroupIndex = -1;
var obj1765_onTouchDown_runningActionsCount = 0;
var obj1765_onTouchDown_loopCount = 0;
var obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1765_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj1744_onDrag_activeActionGroupIndex = -1;
var obj1744_onDrag_runningActionsCount = 0;
var obj1744_onDrag_loopCount = 0;
var obj1744_onTouchDown_activeActionGroupIndex = -1;
var obj1744_onTouchDown_runningActionsCount = 0;
var obj1744_onTouchDown_loopCount = 0;
var obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1744_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1597_counterValue = 0;
var obj1597_counterTargetValue = 4;
var obj1597_counterCanExceedTargetValue = false;

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
		
obj1323_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1323_onTap_activeActionGroupIndex = -1;
		$("#obj1323").trigger("obj1323_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1323) {
				console.warn("de-queueing event obj1323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1323_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1325();
function goToPage_1325() {
	window.obj1323_onTap_runningActionsCount = obj1323_onTap_runningActionsCount + 1;

	$("#anchor93")[0].click();
	window.obj1323_onTap_runningActionsCount = window.obj1323_onTap_runningActionsCount - 1;

if (window.obj1323_onTap_runningActionsCount < 0) {
	window.obj1323_onTap_runningActionsCount = 0;
} else if (window.obj1323_onTap_runningActionsCount == 0) {
	obj1323_onTap_actionGroup1();
}
}










































};
obj1323_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1323_onTap_activeActionGroupIndex = -1;
		$("#obj1323").trigger("obj1323_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1323) {
				console.warn("de-queueing event obj1323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1323_onTap_activeActionGroupIndex = 1;
	











































};
obj1326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1326_onTap_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1328();
function goToPage_1328() {
	window.obj1326_onTap_runningActionsCount = obj1326_onTap_runningActionsCount + 1;

	$("#anchor94")[0].click();
	window.obj1326_onTap_runningActionsCount = window.obj1326_onTap_runningActionsCount - 1;

if (window.obj1326_onTap_runningActionsCount < 0) {
	window.obj1326_onTap_runningActionsCount = 0;
} else if (window.obj1326_onTap_runningActionsCount == 0) {
	obj1326_onTap_actionGroup1();
}
}










































};
obj1326_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1326_onTap_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onTap_activeActionGroupIndex = 1;
	











































};
obj1333_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1333_onTap_activeActionGroupIndex = -1;
		$("#obj1333").trigger("obj1333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1333) {
				console.warn("de-queueing event obj1333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1333_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1335();
function goToPage_1335() {
	window.obj1333_onTap_runningActionsCount = obj1333_onTap_runningActionsCount + 1;

	$("#anchor95")[0].click();
	window.obj1333_onTap_runningActionsCount = window.obj1333_onTap_runningActionsCount - 1;

if (window.obj1333_onTap_runningActionsCount < 0) {
	window.obj1333_onTap_runningActionsCount = 0;
} else if (window.obj1333_onTap_runningActionsCount == 0) {
	obj1333_onTap_actionGroup1();
}
}










































};
obj1333_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1333_onTap_activeActionGroupIndex = -1;
		$("#obj1333").trigger("obj1333_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1333) {
				console.warn("de-queueing event obj1333." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1333").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1333_onTap_activeActionGroupIndex = 1;
	











































};
obj1336_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1336) {
				console.warn("de-queueing event obj1336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1342
(function(){
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;


	var selector = "#obj1342";
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
					window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup1();
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
				window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1336_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1336) {
				console.warn("de-queueing event obj1336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1336 
hide_1339();
function hide_1339() {
	var selector = "#obj1336";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1339(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1336_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1336) {
				console.warn("de-queueing event obj1336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj1350
(function(){
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;


	var selector = "#obj1350";
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
					window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup3();
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
				window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1348
(function(){
	window.obj1336_onTap_runningActionsCount = obj1336_onTap_runningActionsCount + 1;


	var selector = "#obj1348";
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
					window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup3();
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
				window.obj1336_onTap_runningActionsCount = window.obj1336_onTap_runningActionsCount - 1;

if (window.obj1336_onTap_runningActionsCount < 0) {
	window.obj1336_onTap_runningActionsCount = 0;
} else if (window.obj1336_onTap_runningActionsCount == 0) {
	obj1336_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1336_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1336_onTap_activeActionGroupIndex = -1;
		$("#obj1336").trigger("obj1336_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1336) {
				console.warn("de-queueing event obj1336." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1336").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1336_onTap_activeActionGroupIndex = 3;
	











































};
obj1342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1342_onTap_activeActionGroupIndex = -1;
		$("#obj1342").trigger("obj1342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1342) {
				console.warn("de-queueing event obj1342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1342_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1336
(function(){
	window.obj1342_onTap_runningActionsCount = obj1342_onTap_runningActionsCount + 1;


	var selector = "#obj1336";
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
					window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup1();
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
				window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1342_onTap_activeActionGroupIndex = -1;
		$("#obj1342").trigger("obj1342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1342) {
				console.warn("de-queueing event obj1342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1342_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1342 
hide_1345();
function hide_1345() {
	var selector = "#obj1342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1342_onTap_runningActionsCount = obj1342_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1345(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1342_onTap_activeActionGroupIndex = -1;
		$("#obj1342").trigger("obj1342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1342) {
				console.warn("de-queueing event obj1342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1342_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1348 
hide_1346();
function hide_1346() {
	var selector = "#obj1348";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1342_onTap_runningActionsCount = obj1342_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1346(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj1350 
hide_1347();
function hide_1347() {
	var selector = "#obj1350";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1342_onTap_runningActionsCount = obj1342_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1347(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1342_onTap_runningActionsCount = window.obj1342_onTap_runningActionsCount - 1;

if (window.obj1342_onTap_runningActionsCount < 0) {
	window.obj1342_onTap_runningActionsCount = 0;
} else if (window.obj1342_onTap_runningActionsCount == 0) {
	obj1342_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1342_onTap_activeActionGroupIndex = -1;
		$("#obj1342").trigger("obj1342_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1342) {
				console.warn("de-queueing event obj1342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1342_onTap_activeActionGroupIndex = 3;
	











































};
obj1597_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1597").trigger("obj1597_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1597) {
				console.warn("de-queueing event obj1597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_1742();
function wait_1742() {
	window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = obj1597_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1597_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj1597_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1597").trigger("obj1597_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1597) {
				console.warn("de-queueing event obj1597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_1743();
function goToPage_1743() {
	window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = obj1597_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor96")[0].click();
	window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1597_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1597_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj1597_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1597").trigger("obj1597_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1597) {
				console.warn("de-queueing event obj1597." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1597").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj1584_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1584_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1584");

//	action: dragDrop
//	target: obj1584 
dragDrop_1587();
function dragDrop_1587() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1584_onTouchDown_runningActionsCount = obj1584_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1584');
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
    	window.obj1584_onTouchDown_runningActionsCount = window.obj1584_onTouchDown_runningActionsCount - 1;

if (window.obj1584_onTouchDown_runningActionsCount < 0) {
	window.obj1584_onTouchDown_runningActionsCount = 0;
} else if (window.obj1584_onTouchDown_runningActionsCount == 0) {
	obj1584_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1578");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1587 = false;
    	var dropped_id_1587;
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
					dropped_1587 = true;
					dropped_id_1587 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1587) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1584").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1584_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1584_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1584 
move_1596();
function move_1596() {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1584");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 977;
	var moveY = 337;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1595();
function playAudioFile_1595() {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1595")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1595");
			$("#obj_audio_playSoundFile1595").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1584_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1584_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1623
(function(){
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj1623";
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
					window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
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
				window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1584 
move_1590();
function move_1590() {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1584");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 515;
	var moveY = 210;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1589();
function playAudioFile_1589() {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1589")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1589");
			$("#obj_audio_playSoundFile1589").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
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
				window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1591();
function runjs_1591() {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1584").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_4461();
function switchText_4461() {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px;\"><strong><span style=\"color: #2a6ab8; font-family: Roboto;\">50</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1584_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1584_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj1584").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1584_content");
			setTimeout(function () {
				window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj1584 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj1597 
incrementCounter_1593();
function incrementCounter_1593() {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = obj1584_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1597_counterValue;
	obj1597_counterValue = obj1597_counterValue + 1;
	if (! obj1597_counterCanExceedTargetValue && obj1597_counterValue > obj1597_counterTargetValue) {
		obj1597_counterValue = obj1597_counterTargetValue;
	}

	if (oldValue != obj1597_counterValue) {
		$("#obj1597").trigger('SCEventCounterValueChange');
		$("#obj1597").trigger('SCEventCounterIncrease');
		if (obj1597_counterValue == obj1597_counterTargetValue)
			$("#obj1597").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1584_droppedInsideTargetActions_runningActionsCount = window.obj1584_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1584_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1584_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1584_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1584_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj1584_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1584_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1584").trigger("obj1584_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1584) {
				console.warn("de-queueing event obj1584." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1584").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1584_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1630_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1630");

//	action: dragDrop
//	target: obj1630 
dragDrop_1633();
function dragDrop_1633() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1630_onTouchDown_runningActionsCount = obj1630_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1630');
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
    	window.obj1630_onTouchDown_runningActionsCount = window.obj1630_onTouchDown_runningActionsCount - 1;

if (window.obj1630_onTouchDown_runningActionsCount < 0) {
	window.obj1630_onTouchDown_runningActionsCount = 0;
} else if (window.obj1630_onTouchDown_runningActionsCount == 0) {
	obj1630_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1576");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1633 = false;
    	var dropped_id_1633;
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
					dropped_1633 = true;
					dropped_id_1633 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1633) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1630").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1630_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1630 
move_1648();
function move_1648() {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1630");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 977;
	var moveY = 444;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1647();
function playAudioFile_1647() {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1647");
			$("#obj_audio_playSoundFile1647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1630_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1625
(function(){
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj1625";
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
					window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
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
				window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1625
(function(){
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj1625";
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
					window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
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
				window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1630 
move_1642();
function move_1642() {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1630");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 515;
	var moveY = 325;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1641();
function playAudioFile_1641() {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1641")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1641");
			$("#obj_audio_playSoundFile1641").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
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
				window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1643();
function runjs_1643() {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1630").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj1597 
incrementCounter_1644();
function incrementCounter_1644() {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1597_counterValue;
	obj1597_counterValue = obj1597_counterValue + 1;
	if (! obj1597_counterCanExceedTargetValue && obj1597_counterValue > obj1597_counterTargetValue) {
		obj1597_counterValue = obj1597_counterTargetValue;
	}

	if (oldValue != obj1597_counterValue) {
		$("#obj1597").trigger('SCEventCounterValueChange');
		$("#obj1597").trigger('SCEventCounterIncrease');
		if (obj1597_counterValue == obj1597_counterTargetValue)
			$("#obj1597").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj1630_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_4468();
function switchText_4468() {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = obj1630_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px;\"><strong><span style=\"color: #2a6ab8; font-family: Roboto;\">2</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1630_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1630_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj1630").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1630_content");
			setTimeout(function () {
				window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1630 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1630_droppedInsideTargetActions_runningActionsCount = window.obj1630_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1630_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1630_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1630_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1630_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}












};
obj1630_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1630").trigger("obj1630_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1630) {
				console.warn("de-queueing event obj1630." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1630").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1630_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj1692_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1692_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1692");

//	action: dragDrop
//	target: obj1692 
dragDrop_1695();
function dragDrop_1695() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1692_onTouchDown_runningActionsCount = obj1692_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1692');
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
    	window.obj1692_onTouchDown_runningActionsCount = window.obj1692_onTouchDown_runningActionsCount - 1;

if (window.obj1692_onTouchDown_runningActionsCount < 0) {
	window.obj1692_onTouchDown_runningActionsCount = 0;
} else if (window.obj1692_onTouchDown_runningActionsCount == 0) {
	obj1692_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1568");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1695 = false;
    	var dropped_id_1695;
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
					dropped_1695 = true;
					dropped_id_1695 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1695) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1692").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1692_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1692_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1692 
move_1712();
function move_1712() {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1692");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1082;
	var moveY = 337;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1711();
function playAudioFile_1711() {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1711")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1711");
			$("#obj_audio_playSoundFile1711").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1692_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1715
(function(){
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj1715";
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
					window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
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
				window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1692 
move_1700();
function move_1700() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1692");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 515;
	var moveY = 460;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1699();
function playAudioFile_1699() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1699")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1699");
			$("#obj_audio_playSoundFile1699").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
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
				window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1701();
function runjs_1701() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1692").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_4447();
function runjs_4447() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1692").css("color", "b;ue");
	
	setTimeout(function() {
		window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj1597 
incrementCounter_1702();
function incrementCounter_1702() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1597_counterValue;
	obj1597_counterValue = obj1597_counterValue + 1;
	if (! obj1597_counterCanExceedTargetValue && obj1597_counterValue > obj1597_counterTargetValue) {
		obj1597_counterValue = obj1597_counterTargetValue;
	}

	if (oldValue != obj1597_counterValue) {
		$("#obj1597").trigger('SCEventCounterValueChange');
		$("#obj1597").trigger('SCEventCounterIncrease');
		if (obj1597_counterValue == obj1597_counterTargetValue)
			$("#obj1597").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj1692_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_4469();
function switchText_4469() {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = obj1692_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px;\"><strong><span style=\"color: #2a6ab8; font-family: Roboto;\">80</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1692_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1692_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj1692").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1692_content");
			setTimeout(function () {
				window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1692 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1692_droppedInsideTargetActions_runningActionsCount = window.obj1692_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1692_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1692_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1692_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1692_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}












};
obj1692_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1692").trigger("obj1692_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1692) {
				console.warn("de-queueing event obj1692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1692_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj1717_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1717_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1717");

//	action: dragDrop
//	target: obj1717 
dragDrop_1720();
function dragDrop_1720() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1717_onTouchDown_runningActionsCount = obj1717_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1717');
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
    	window.obj1717_onTouchDown_runningActionsCount = window.obj1717_onTouchDown_runningActionsCount - 1;

if (window.obj1717_onTouchDown_runningActionsCount < 0) {
	window.obj1717_onTouchDown_runningActionsCount = 0;
} else if (window.obj1717_onTouchDown_runningActionsCount == 0) {
	obj1717_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1566");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1720 = false;
    	var dropped_id_1720;
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
					dropped_1720 = true;
					dropped_id_1720 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1720) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1717").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1717_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1717_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1717 
move_1737();
function move_1737() {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1082;
	var moveY = 444;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1736();
function playAudioFile_1736() {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1736")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1736");
			$("#obj_audio_playSoundFile1736").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1717_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1713
(function(){
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj1713";
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
					window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
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
				window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1717 
move_1732();
function move_1732() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 515;
	var moveY = 575;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1731();
function playAudioFile_1731() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1731")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1731");
			$("#obj_audio_playSoundFile1731").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
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
				window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1733();
function runjs_1733() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1717").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_4448();
function runjs_4448() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj1717").css("color", "b;ue");
	
	setTimeout(function() {
		window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj1597 
incrementCounter_1734();
function incrementCounter_1734() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1597_counterValue;
	obj1597_counterValue = obj1597_counterValue + 1;
	if (! obj1597_counterCanExceedTargetValue && obj1597_counterValue > obj1597_counterTargetValue) {
		obj1597_counterValue = obj1597_counterTargetValue;
	}

	if (oldValue != obj1597_counterValue) {
		$("#obj1597").trigger('SCEventCounterValueChange');
		$("#obj1597").trigger('SCEventCounterIncrease');
		if (obj1597_counterValue == obj1597_counterTargetValue)
			$("#obj1597").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj1717_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_4470();
function switchText_4470() {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = obj1717_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 40px;\"><strong><span style=\"color: #2a6ab8; font-family: Roboto;\">7</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1717_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1717_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj1717").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1717_content");
			setTimeout(function () {
				window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1717 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1717_droppedInsideTargetActions_runningActionsCount = window.obj1717_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj1717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1717_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}












};
obj1717_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1717) {
				console.warn("de-queueing event obj1717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1717_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj1765_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1765").trigger("obj1765_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1765) {
				console.warn("de-queueing event obj1765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1765_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1765");

//	action: dragDrop
//	target: obj1765 
dragDrop_1768();
function dragDrop_1768() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1765_onTouchDown_runningActionsCount = obj1765_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1765');
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
    	window.obj1765_onTouchDown_runningActionsCount = window.obj1765_onTouchDown_runningActionsCount - 1;

if (window.obj1765_onTouchDown_runningActionsCount < 0) {
	window.obj1765_onTouchDown_runningActionsCount = 0;
} else if (window.obj1765_onTouchDown_runningActionsCount == 0) {
	obj1765_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1768 = false;
    	var dropped_id_1768;
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
					dropped_1768 = true;
					dropped_id_1768 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1768) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj1765").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1765_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1765").trigger("obj1765_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1765) {
				console.warn("de-queueing event obj1765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1765_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1765").trigger("obj1765_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1765) {
				console.warn("de-queueing event obj1765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1765 
move_1785();
function move_1785() {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 882;
	var moveY = 337;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1784();
function playAudioFile_1784() {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1784")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1784");
			$("#obj_audio_playSoundFile1784").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1765").trigger("obj1765_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1765) {
				console.warn("de-queueing event obj1765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj1744_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1744_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1744) {
				console.warn("de-queueing event obj1744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1744_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1744");

//	action: dragDrop
//	target: obj1744 
dragDrop_1747();
function dragDrop_1747() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1744_onTouchDown_runningActionsCount = obj1744_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1744');
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
    	window.obj1744_onTouchDown_runningActionsCount = window.obj1744_onTouchDown_runningActionsCount - 1;

if (window.obj1744_onTouchDown_runningActionsCount < 0) {
	window.obj1744_onTouchDown_runningActionsCount = 0;
} else if (window.obj1744_onTouchDown_runningActionsCount == 0) {
	obj1744_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array();
    	var actionsOnDrop = new Array() //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1747 = false;
    	var dropped_id_1747;
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
					dropped_1747 = true;
					dropped_id_1747 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1747) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			
$("#obj1744").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj1744_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1744_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1744) {
				console.warn("de-queueing event obj1744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1744_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1744) {
				console.warn("de-queueing event obj1744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj1744 
move_1764();
function move_1764() {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj1744");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 882;
	var moveY = 444;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_1763();
function playAudioFile_1763() {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile1763")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile1763");
			$("#obj_audio_playSoundFile1763").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1744").trigger("obj1744_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1744) {
				console.warn("de-queueing event obj1744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj1323: Event Touch Down
 *
 */

$("#obj1323").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1323_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1323_onTap is still running");
	return;
}
var obj1323_onTap_runningActionsCount = 0;
var obj1323_onTap_loopCount = 0;
obj1323_onTap_actionGroup0();
});


















/*
 *
 *   obj1326: Event Touch Down
 *
 */

$("#obj1326").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1326_onTap is still running");
	return;
}
var obj1326_onTap_runningActionsCount = 0;
var obj1326_onTap_loopCount = 0;
obj1326_onTap_actionGroup0();
});
























































/*
 *
 *   obj1333: Event Touch Down
 *
 */

$("#obj1333").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1333_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1333_onTap is still running");
	return;
}
var obj1333_onTap_runningActionsCount = 0;
var obj1333_onTap_loopCount = 0;
obj1333_onTap_actionGroup0();
});


















/*
 *
 *   obj1336: Event Touch Down
 *
 */

$("#obj1336").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1336_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1336_onTap is still running");
	return;
}
var obj1336_onTap_runningActionsCount = 0;
var obj1336_onTap_loopCount = 0;
obj1336_onTap_actionGroup0();
});


















/*
 *
 *   obj1342: Event Touch Down
 *
 */

$("#obj1342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1342_onTap is still running");
	return;
}
var obj1342_onTap_runningActionsCount = 0;
var obj1342_onTap_loopCount = 0;
obj1342_onTap_actionGroup0();
});


















































































































































































































































































/*
 *
 *   obj1597: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj1597").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1597_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1597_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj1597_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1597_SCEventCounterReachedTargetValue_loopCount = 0;
obj1597_SCEventCounterReachedTargetValue_actionGroup0();
});











/*
 *
 *   obj1584: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1584");
	var winTarget = document.getElementById("obj1584");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1584").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1584_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1584_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1584_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1584_onTouchDown is still running");
	return;
}
var obj1584_onTouchDown_runningActionsCount = 0;
var obj1584_onTouchDown_loopCount = 0;
obj1584_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1584: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1584").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1584_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1584_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1584_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1584_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1584: Event droppedInsideTargetActions
 *
 */

$("#obj1584").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1584_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1584_droppedInsideTargetActions is still running");
	return;
}
var obj1584_droppedInsideTargetActions_runningActionsCount = 0;
var obj1584_droppedInsideTargetActions_loopCount = 0;
obj1584_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1630: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1630");
	var winTarget = document.getElementById("obj1630");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1630").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1630_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1630_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1630_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1630_onTouchDown is still running");
	return;
}
var obj1630_onTouchDown_runningActionsCount = 0;
var obj1630_onTouchDown_loopCount = 0;
obj1630_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1630: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1630").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1630_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1630_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1630_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1630_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1630: Event droppedInsideTargetActions
 *
 */

$("#obj1630").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1630_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1630_droppedInsideTargetActions is still running");
	return;
}
var obj1630_droppedInsideTargetActions_runningActionsCount = 0;
var obj1630_droppedInsideTargetActions_loopCount = 0;
obj1630_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1692: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1692");
	var winTarget = document.getElementById("obj1692");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1692").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1692_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1692_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1692_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1692_onTouchDown is still running");
	return;
}
var obj1692_onTouchDown_runningActionsCount = 0;
var obj1692_onTouchDown_loopCount = 0;
obj1692_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1692: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1692").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1692_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1692_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1692_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1692_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1692: Event droppedInsideTargetActions
 *
 */

$("#obj1692").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1692_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1692_droppedInsideTargetActions is still running");
	return;
}
var obj1692_droppedInsideTargetActions_runningActionsCount = 0;
var obj1692_droppedInsideTargetActions_loopCount = 0;
obj1692_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1717: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1717");
	var winTarget = document.getElementById("obj1717");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1717").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1717_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1717_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1717_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1717_onTouchDown is still running");
	return;
}
var obj1717_onTouchDown_runningActionsCount = 0;
var obj1717_onTouchDown_loopCount = 0;
obj1717_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1717: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1717").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1717_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1717_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1717_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1717_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1717: Event droppedInsideTargetActions
 *
 */

$("#obj1717").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1717_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1717_droppedInsideTargetActions is still running");
	return;
}
var obj1717_droppedInsideTargetActions_runningActionsCount = 0;
var obj1717_droppedInsideTargetActions_loopCount = 0;
obj1717_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1765: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1765");
	var winTarget = document.getElementById("obj1765");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1765").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1765_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1765_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1765_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1765_onTouchDown is still running");
	return;
}
var obj1765_onTouchDown_runningActionsCount = 0;
var obj1765_onTouchDown_loopCount = 0;
obj1765_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1765: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1765").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1765_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1765_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1765_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1765_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});











/*
 *
 *   obj1744: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1744");
	var winTarget = document.getElementById("obj1744");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj1744").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1744_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1744_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1744_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1744_onTouchDown is still running");
	return;
}
var obj1744_onTouchDown_runningActionsCount = 0;
var obj1744_onTouchDown_loopCount = 0;
obj1744_onTouchDown_actionGroup0();
});






/*
 *
 *   obj1744: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj1744").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1744_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj1744_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1744_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj1744_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
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
	
$("#obj1542").trigger('SCEventShow');
$("#obj1321").trigger('SCEventShow');
$("#obj1323").trigger('SCEventShow');
$("#obj1326").trigger('SCEventShow');
$("#obj1329").trigger('SCEventShow');
$("#obj1331").trigger('SCEventShow');
$("#obj1333").trigger('SCEventShow');
$("#obj1336").trigger('SCEventShow');
$("#obj1367").trigger('SCEventShow');
$("#obj1546").trigger('SCEventShow');
$("#obj1570").trigger('SCEventShow');
$("#obj1568").trigger('SCEventShow');
$("#obj1566").trigger('SCEventShow');
$("#obj1572").trigger('SCEventShow');
$("#obj1582").trigger('SCEventShow');
$("#obj1580").trigger('SCEventShow');
$("#obj1578").trigger('SCEventShow');
$("#obj1576").trigger('SCEventShow');
$("#obj1574").trigger('SCEventShow');
$("#obj1584").trigger('SCEventShow');
$("#obj1630").trigger('SCEventShow');
$("#obj1692").trigger('SCEventShow');
$("#obj1717").trigger('SCEventShow');
$("#obj1765").trigger('SCEventShow');
$("#obj1744").trigger('SCEventShow');
	

});