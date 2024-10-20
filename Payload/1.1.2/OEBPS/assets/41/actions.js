pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 13530;
pubcoder.page.title = pubcoder.page.title || "41";
pubcoder.page.number = pubcoder.page.number || 41;
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
var obj13537_onTap_activeActionGroupIndex = -1;
var obj13537_onTap_runningActionsCount = 0;
var obj13537_onTap_loopCount = 0;
var obj13540_onTap_activeActionGroupIndex = -1;
var obj13540_onTap_runningActionsCount = 0;
var obj13540_onTap_loopCount = 0;
var obj13547_onTap_activeActionGroupIndex = -1;
var obj13547_onTap_runningActionsCount = 0;
var obj13547_onTap_loopCount = 0;
var obj13550_onTap_activeActionGroupIndex = -1;
var obj13550_onTap_runningActionsCount = 0;
var obj13550_onTap_loopCount = 0;
var obj13556_onTap_activeActionGroupIndex = -1;
var obj13556_onTap_runningActionsCount = 0;
var obj13556_onTap_loopCount = 0;
var obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj13568_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13568_SCEventCounterReachedTargetValue_loopCount = 0;
var obj13646_onDrag_activeActionGroupIndex = -1;
var obj13646_onDrag_runningActionsCount = 0;
var obj13646_onDrag_loopCount = 0;
var obj13646_onTouchDown_activeActionGroupIndex = -1;
var obj13646_onTouchDown_runningActionsCount = 0;
var obj13646_onTouchDown_loopCount = 0;
var obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13646_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13646_droppedInsideTargetActions_runningActionsCount = 0;
var obj13646_droppedInsideTargetActions_loopCount = 0;
var obj13718_onDrag_activeActionGroupIndex = -1;
var obj13718_onDrag_runningActionsCount = 0;
var obj13718_onDrag_loopCount = 0;
var obj13718_onTouchDown_activeActionGroupIndex = -1;
var obj13718_onTouchDown_runningActionsCount = 0;
var obj13718_onTouchDown_loopCount = 0;
var obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13718_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13718_droppedInsideTargetActions_runningActionsCount = 0;
var obj13718_droppedInsideTargetActions_loopCount = 0;
var obj13736_onDrag_activeActionGroupIndex = -1;
var obj13736_onDrag_runningActionsCount = 0;
var obj13736_onDrag_loopCount = 0;
var obj13736_onTouchDown_activeActionGroupIndex = -1;
var obj13736_onTouchDown_runningActionsCount = 0;
var obj13736_onTouchDown_loopCount = 0;
var obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13736_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13736_droppedInsideTargetActions_runningActionsCount = 0;
var obj13736_droppedInsideTargetActions_loopCount = 0;
var obj13752_onDrag_activeActionGroupIndex = -1;
var obj13752_onDrag_runningActionsCount = 0;
var obj13752_onDrag_loopCount = 0;
var obj13752_onTouchDown_activeActionGroupIndex = -1;
var obj13752_onTouchDown_runningActionsCount = 0;
var obj13752_onTouchDown_loopCount = 0;
var obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13752_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13752_droppedInsideTargetActions_runningActionsCount = 0;
var obj13752_droppedInsideTargetActions_loopCount = 0;
var obj13766_onDrag_activeActionGroupIndex = -1;
var obj13766_onDrag_runningActionsCount = 0;
var obj13766_onDrag_loopCount = 0;
var obj13766_onTouchDown_activeActionGroupIndex = -1;
var obj13766_onTouchDown_runningActionsCount = 0;
var obj13766_onTouchDown_loopCount = 0;
var obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
var obj13766_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj13766_droppedInsideTargetActions_runningActionsCount = 0;
var obj13766_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj13568_counterValue = 0;
var obj13568_counterTargetValue = 5;
var obj13568_counterCanExceedTargetValue = false;

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
		
obj13537_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13537_onTap_activeActionGroupIndex = -1;
		$("#obj13537").trigger("obj13537_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13537) {
				console.warn("de-queueing event obj13537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13537_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13539();
function goToPage_13539() {
	window.obj13537_onTap_runningActionsCount = obj13537_onTap_runningActionsCount + 1;

	$("#anchor569")[0].click();
	window.obj13537_onTap_runningActionsCount = window.obj13537_onTap_runningActionsCount - 1;

if (window.obj13537_onTap_runningActionsCount < 0) {
	window.obj13537_onTap_runningActionsCount = 0;
} else if (window.obj13537_onTap_runningActionsCount == 0) {
	obj13537_onTap_actionGroup1();
}
}










































};
obj13537_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13537_onTap_activeActionGroupIndex = -1;
		$("#obj13537").trigger("obj13537_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13537) {
				console.warn("de-queueing event obj13537." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13537").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13537_onTap_activeActionGroupIndex = 1;
	











































};
obj13540_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13540_onTap_activeActionGroupIndex = -1;
		$("#obj13540").trigger("obj13540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13540) {
				console.warn("de-queueing event obj13540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13540_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13542();
function goToPage_13542() {
	window.obj13540_onTap_runningActionsCount = obj13540_onTap_runningActionsCount + 1;

	$("#anchor570")[0].click();
	window.obj13540_onTap_runningActionsCount = window.obj13540_onTap_runningActionsCount - 1;

if (window.obj13540_onTap_runningActionsCount < 0) {
	window.obj13540_onTap_runningActionsCount = 0;
} else if (window.obj13540_onTap_runningActionsCount == 0) {
	obj13540_onTap_actionGroup1();
}
}










































};
obj13540_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13540_onTap_activeActionGroupIndex = -1;
		$("#obj13540").trigger("obj13540_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13540) {
				console.warn("de-queueing event obj13540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13540_onTap_activeActionGroupIndex = 1;
	











































};
obj13547_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13547_onTap_activeActionGroupIndex = -1;
		$("#obj13547").trigger("obj13547_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13547) {
				console.warn("de-queueing event obj13547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13547_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_13549();
function goToPage_13549() {
	window.obj13547_onTap_runningActionsCount = obj13547_onTap_runningActionsCount + 1;

	$("#anchor571")[0].click();
	window.obj13547_onTap_runningActionsCount = window.obj13547_onTap_runningActionsCount - 1;

if (window.obj13547_onTap_runningActionsCount < 0) {
	window.obj13547_onTap_runningActionsCount = 0;
} else if (window.obj13547_onTap_runningActionsCount == 0) {
	obj13547_onTap_actionGroup1();
}
}










































};
obj13547_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13547_onTap_activeActionGroupIndex = -1;
		$("#obj13547").trigger("obj13547_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13547) {
				console.warn("de-queueing event obj13547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13547_onTap_activeActionGroupIndex = 1;
	











































};
obj13550_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13550_onTap_activeActionGroupIndex = -1;
		$("#obj13550").trigger("obj13550_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13550) {
				console.warn("de-queueing event obj13550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13550_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13556
(function(){
	window.obj13550_onTap_runningActionsCount = obj13550_onTap_runningActionsCount + 1;


	var selector = "#obj13556";
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
					window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup1();
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
				window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13550_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13550_onTap_activeActionGroupIndex = -1;
		$("#obj13550").trigger("obj13550_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13550) {
				console.warn("de-queueing event obj13550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13550_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13550 
hide_13553();
function hide_13553() {
	var selector = "#obj13550";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13550_onTap_runningActionsCount = obj13550_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13553(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13550_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13550_onTap_activeActionGroupIndex = -1;
		$("#obj13550").trigger("obj13550_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13550) {
				console.warn("de-queueing event obj13550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13550_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj13564
(function(){
	window.obj13550_onTap_runningActionsCount = obj13550_onTap_runningActionsCount + 1;


	var selector = "#obj13564";
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
					window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup3();
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
				window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj13562
(function(){
	window.obj13550_onTap_runningActionsCount = obj13550_onTap_runningActionsCount + 1;


	var selector = "#obj13562";
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
					window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup3();
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
				window.obj13550_onTap_runningActionsCount = window.obj13550_onTap_runningActionsCount - 1;

if (window.obj13550_onTap_runningActionsCount < 0) {
	window.obj13550_onTap_runningActionsCount = 0;
} else if (window.obj13550_onTap_runningActionsCount == 0) {
	obj13550_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13550_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13550_onTap_activeActionGroupIndex = -1;
		$("#obj13550").trigger("obj13550_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13550) {
				console.warn("de-queueing event obj13550." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13550").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13550_onTap_activeActionGroupIndex = 3;
	











































};
obj13556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13556_onTap_activeActionGroupIndex = -1;
		$("#obj13556").trigger("obj13556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13556) {
				console.warn("de-queueing event obj13556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13556_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13550
(function(){
	window.obj13556_onTap_runningActionsCount = obj13556_onTap_runningActionsCount + 1;


	var selector = "#obj13550";
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
					window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup1();
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
				window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj13556_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13556_onTap_activeActionGroupIndex = -1;
		$("#obj13556").trigger("obj13556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13556) {
				console.warn("de-queueing event obj13556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13556_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj13556 
hide_13559();
function hide_13559() {
	var selector = "#obj13556";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13556_onTap_runningActionsCount = obj13556_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13559(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13556_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13556_onTap_activeActionGroupIndex = -1;
		$("#obj13556").trigger("obj13556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13556) {
				console.warn("de-queueing event obj13556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13556_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj13562 
hide_13560();
function hide_13560() {
	var selector = "#obj13562";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13556_onTap_runningActionsCount = obj13556_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13560(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj13564 
hide_13561();
function hide_13561() {
	var selector = "#obj13564";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj13556_onTap_runningActionsCount = obj13556_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_13561(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj13556_onTap_runningActionsCount = window.obj13556_onTap_runningActionsCount - 1;

if (window.obj13556_onTap_runningActionsCount < 0) {
	window.obj13556_onTap_runningActionsCount = 0;
} else if (window.obj13556_onTap_runningActionsCount == 0) {
	obj13556_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj13556_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13556_onTap_activeActionGroupIndex = -1;
		$("#obj13556").trigger("obj13556_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13556) {
				console.warn("de-queueing event obj13556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13556_onTap_activeActionGroupIndex = 3;
	











































};
obj13568_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13568").trigger("obj13568_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13568) {
				console.warn("de-queueing event obj13568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_13570();
function wait_13570() {
	window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = obj13568_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13568_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj13568_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13568").trigger("obj13568_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13568) {
				console.warn("de-queueing event obj13568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_13571();
function goToPage_13571() {
	window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = obj13568_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor572")[0].click();
	window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj13568_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj13568_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj13568_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj13568").trigger("obj13568_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13568) {
				console.warn("de-queueing event obj13568." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13568").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj13646_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13646_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13646");

//	action: dragDrop
//	target: obj13646 
dragDrop_13649();
function dragDrop_13649() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13646_onTouchDown_runningActionsCount = obj13646_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13646');
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
    	window.obj13646_onTouchDown_runningActionsCount = window.obj13646_onTouchDown_runningActionsCount - 1;

if (window.obj13646_onTouchDown_runningActionsCount < 0) {
	window.obj13646_onTouchDown_runningActionsCount = 0;
} else if (window.obj13646_onTouchDown_runningActionsCount == 0) {
	obj13646_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13690");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13649 = false;
    	var dropped_id_13649;
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
					dropped_13649 = true;
					dropped_id_13649 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13649) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13646").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13646_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13646_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13646 
move_13659();
function move_13659() {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13646");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 430;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13658();
function playAudioFile_13658() {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13658")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13658");
			$("#obj_audio_playSoundFile13658").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13646_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13646_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13708
(function(){
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj13708";
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
					window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
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
				window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj13646 
move_13652();
function move_13652() {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13646");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 484;
	var moveY = 278;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13651();
function playAudioFile_13651() {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13651")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13651");
			$("#obj_audio_playSoundFile13651").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
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
				window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13654();
function runjs_13654() {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13646").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13655();
function switchText_13655() {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">60</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13646").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13646_content");
			setTimeout(function () {
				window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj13568 
incrementCounter_13656();
function incrementCounter_13656() {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = obj13646_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj13568_counterValue;
	obj13568_counterValue = obj13568_counterValue + 1;
	if (! obj13568_counterCanExceedTargetValue && obj13568_counterValue > obj13568_counterTargetValue) {
		obj13568_counterValue = obj13568_counterTargetValue;
	}

	if (oldValue != obj13568_counterValue) {
		$("#obj13568").trigger('SCEventCounterValueChange');
		$("#obj13568").trigger('SCEventCounterIncrease');
		if (obj13568_counterValue == obj13568_counterTargetValue)
			$("#obj13568").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13646_droppedInsideTargetActions_runningActionsCount = window.obj13646_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13646_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13646_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13646_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13646_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13646_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13646_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13646").trigger("obj13646_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13646) {
				console.warn("de-queueing event obj13646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13646_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13718_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13718_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13718");

//	action: dragDrop
//	target: obj13718 
dragDrop_13721();
function dragDrop_13721() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13718_onTouchDown_runningActionsCount = obj13718_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13718');
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
    	window.obj13718_onTouchDown_runningActionsCount = window.obj13718_onTouchDown_runningActionsCount - 1;

if (window.obj13718_onTouchDown_runningActionsCount < 0) {
	window.obj13718_onTouchDown_runningActionsCount = 0;
} else if (window.obj13718_onTouchDown_runningActionsCount == 0) {
	obj13718_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13696");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13721 = false;
    	var dropped_id_13721;
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
					dropped_13721 = true;
					dropped_id_13721 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13721) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13718").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13718_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13718_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13718 
move_13731();
function move_13731() {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13718");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 540;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13730();
function playAudioFile_13730() {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13730")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13730");
			$("#obj_audio_playSoundFile13730").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13718_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13780
(function(){
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj13780";
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
					window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
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
				window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj13718 
move_13724();
function move_13724() {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13718");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 831;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13723();
function playAudioFile_13723() {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13723")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13723");
			$("#obj_audio_playSoundFile13723").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
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
				window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13725();
function runjs_13725() {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13718").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13726();
function switchText_13726() {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">7</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13718_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13718_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13718").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13718_content");
			setTimeout(function () {
				window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13718 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj13568 
incrementCounter_13727();
function incrementCounter_13727() {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = obj13718_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj13568_counterValue;
	obj13568_counterValue = obj13568_counterValue + 1;
	if (! obj13568_counterCanExceedTargetValue && obj13568_counterValue > obj13568_counterTargetValue) {
		obj13568_counterValue = obj13568_counterTargetValue;
	}

	if (oldValue != obj13568_counterValue) {
		$("#obj13568").trigger('SCEventCounterValueChange');
		$("#obj13568").trigger('SCEventCounterIncrease');
		if (obj13568_counterValue == obj13568_counterTargetValue)
			$("#obj13568").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13718_droppedInsideTargetActions_runningActionsCount = window.obj13718_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13718_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13718_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13718").trigger("obj13718_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13718) {
				console.warn("de-queueing event obj13718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13718_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13736_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13736_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13736");

//	action: dragDrop
//	target: obj13736 
dragDrop_13739();
function dragDrop_13739() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13736_onTouchDown_runningActionsCount = obj13736_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13736');
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
    	window.obj13736_onTouchDown_runningActionsCount = window.obj13736_onTouchDown_runningActionsCount - 1;

if (window.obj13736_onTouchDown_runningActionsCount < 0) {
	window.obj13736_onTouchDown_runningActionsCount = 0;
} else if (window.obj13736_onTouchDown_runningActionsCount == 0) {
	obj13736_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13688");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13739 = false;
    	var dropped_id_13739;
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
					dropped_13739 = true;
					dropped_id_13739 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13739) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13736").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13736_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13736_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13736 
move_13749();
function move_13749() {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13736");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 650;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13748();
function playAudioFile_13748() {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13748")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13748");
			$("#obj_audio_playSoundFile13748").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13736_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13736_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13734
(function(){
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj13734";
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
					window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
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
				window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj13736 
move_13742();
function move_13742() {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13736");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 281;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13741();
function playAudioFile_13741() {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13741")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13741");
			$("#obj_audio_playSoundFile13741").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
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
				window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13743();
function runjs_13743() {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13736").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13744();
function switchText_13744() {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">20</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13736_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13736_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13736").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13736_content");
			setTimeout(function () {
				window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13736 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj13568 
incrementCounter_13745();
function incrementCounter_13745() {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = obj13736_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj13568_counterValue;
	obj13568_counterValue = obj13568_counterValue + 1;
	if (! obj13568_counterCanExceedTargetValue && obj13568_counterValue > obj13568_counterTargetValue) {
		obj13568_counterValue = obj13568_counterTargetValue;
	}

	if (oldValue != obj13568_counterValue) {
		$("#obj13568").trigger('SCEventCounterValueChange');
		$("#obj13568").trigger('SCEventCounterIncrease');
		if (obj13568_counterValue == obj13568_counterTargetValue)
			$("#obj13568").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13736_droppedInsideTargetActions_runningActionsCount = window.obj13736_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13736_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13736_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13736_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13736_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13736_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13736_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13736").trigger("obj13736_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13736) {
				console.warn("de-queueing event obj13736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13736_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13752_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13752_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13752");

//	action: dragDrop
//	target: obj13752 
dragDrop_13755();
function dragDrop_13755() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13752_onTouchDown_runningActionsCount = obj13752_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13752');
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
    	window.obj13752_onTouchDown_runningActionsCount = window.obj13752_onTouchDown_runningActionsCount - 1;

if (window.obj13752_onTouchDown_runningActionsCount < 0) {
	window.obj13752_onTouchDown_runningActionsCount = 0;
} else if (window.obj13752_onTouchDown_runningActionsCount == 0) {
	obj13752_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13698");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13755 = false;
    	var dropped_id_13755;
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
					dropped_13755 = true;
					dropped_id_13755 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13755) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13752").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13752_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13752_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13752 
move_13765();
function move_13765() {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13752");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 765;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13764();
function playAudioFile_13764() {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13764")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13764");
			$("#obj_audio_playSoundFile13764").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13752_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13752_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13750
(function(){
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj13750";
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
					window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
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
				window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj13752 
move_13758();
function move_13758() {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13752");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1005;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13757();
function playAudioFile_13757() {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13757")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13757");
			$("#obj_audio_playSoundFile13757").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
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
				window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13759();
function runjs_13759() {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13752").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13760();
function switchText_13760() {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">3</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13752").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13752_content");
			setTimeout(function () {
				window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj13568 
incrementCounter_13761();
function incrementCounter_13761() {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = obj13752_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj13568_counterValue;
	obj13568_counterValue = obj13568_counterValue + 1;
	if (! obj13568_counterCanExceedTargetValue && obj13568_counterValue > obj13568_counterTargetValue) {
		obj13568_counterValue = obj13568_counterTargetValue;
	}

	if (oldValue != obj13568_counterValue) {
		$("#obj13568").trigger('SCEventCounterValueChange');
		$("#obj13568").trigger('SCEventCounterIncrease');
		if (obj13568_counterValue == obj13568_counterTargetValue)
			$("#obj13568").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13752_droppedInsideTargetActions_runningActionsCount = window.obj13752_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13752_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13752_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13752_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13752_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13752_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13752_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13752").trigger("obj13752_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13752) {
				console.warn("de-queueing event obj13752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13752_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13766_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj13766");

//	action: dragDrop
//	target: obj13766 
dragDrop_13769();
function dragDrop_13769() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj13766_onTouchDown_runningActionsCount = obj13766_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj13766');
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
    	window.obj13766_onTouchDown_runningActionsCount = window.obj13766_onTouchDown_runningActionsCount - 1;

if (window.obj13766_onTouchDown_runningActionsCount < 0) {
	window.obj13766_onTouchDown_runningActionsCount = 0;
} else if (window.obj13766_onTouchDown_runningActionsCount == 0) {
	obj13766_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj13694");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_13769 = false;
    	var dropped_id_13769;
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
					dropped_13769 = true;
					dropped_id_13769 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_13769) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj13766").trigger('SCActionDragDrop11980_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj13766_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj13766 
move_13779();
function move_13779() {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 875;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13778();
function playAudioFile_13778() {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13778")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13778");
			$("#obj_audio_playSoundFile13778").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
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
				window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj13766_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj13766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj13716
(function(){
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj13716";
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
					window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
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
				window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj13766 
move_13772();
function move_13772() {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj13766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 655;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_13771();
function playAudioFile_13771() {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile13771")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile13771");
			$("#obj_audio_playSoundFile13771").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
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
				window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_13773();
function runjs_13773() {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj13766").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}

//	action: Switch Text
switchText_13774();
function switchText_13774() {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold; font-size: 33px; color: #2665a0;\">10</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj13766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj13766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj13766").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj13766_content");
			setTimeout(function () {
				window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj13766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj13568 
incrementCounter_13775();
function incrementCounter_13775() {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = obj13766_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj13568_counterValue;
	obj13568_counterValue = obj13568_counterValue + 1;
	if (! obj13568_counterCanExceedTargetValue && obj13568_counterValue > obj13568_counterTargetValue) {
		obj13568_counterValue = obj13568_counterTargetValue;
	}

	if (oldValue != obj13568_counterValue) {
		$("#obj13568").trigger('SCEventCounterValueChange');
		$("#obj13568").trigger('SCEventCounterIncrease');
		if (obj13568_counterValue == obj13568_counterTargetValue)
			$("#obj13568").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj13766_droppedInsideTargetActions_runningActionsCount = window.obj13766_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj13766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj13766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj13766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj13766_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj13766_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj13766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj13766").trigger("obj13766_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 13766) {
				console.warn("de-queueing event obj13766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj13766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj13766_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj13537: Event Touch Down
 *
 */

$("#obj13537").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13537_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13537_onTap is still running");
	return;
}
var obj13537_onTap_runningActionsCount = 0;
var obj13537_onTap_loopCount = 0;
obj13537_onTap_actionGroup0();
});


















/*
 *
 *   obj13540: Event Touch Down
 *
 */

$("#obj13540").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13540_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13540_onTap is still running");
	return;
}
var obj13540_onTap_runningActionsCount = 0;
var obj13540_onTap_loopCount = 0;
obj13540_onTap_actionGroup0();
});
























































/*
 *
 *   obj13547: Event Touch Down
 *
 */

$("#obj13547").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13547_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13547_onTap is still running");
	return;
}
var obj13547_onTap_runningActionsCount = 0;
var obj13547_onTap_loopCount = 0;
obj13547_onTap_actionGroup0();
});


















/*
 *
 *   obj13550: Event Touch Down
 *
 */

$("#obj13550").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13550_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13550_onTap is still running");
	return;
}
var obj13550_onTap_runningActionsCount = 0;
var obj13550_onTap_loopCount = 0;
obj13550_onTap_actionGroup0();
});


















/*
 *
 *   obj13556: Event Touch Down
 *
 */

$("#obj13556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj13556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13556_onTap is still running");
	return;
}
var obj13556_onTap_runningActionsCount = 0;
var obj13556_onTap_loopCount = 0;
obj13556_onTap_actionGroup0();
});




















































































/*
 *
 *   obj13568: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj13568").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj13568_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13568_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj13568_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj13568_SCEventCounterReachedTargetValue_loopCount = 0;
obj13568_SCEventCounterReachedTargetValue_actionGroup0();
});







































































































































































































































































































































































































/*
 *
 *   obj13646: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13646");
	var winTarget = document.getElementById("obj13646");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13646").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13646_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13646_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13646_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13646_onTouchDown is still running");
	return;
}
var obj13646_onTouchDown_runningActionsCount = 0;
var obj13646_onTouchDown_loopCount = 0;
obj13646_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13646: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13646").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13646_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13646_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13646: Event droppedInsideTargetActions
 *
 */

$("#obj13646").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13646_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13646_droppedInsideTargetActions is still running");
	return;
}
var obj13646_droppedInsideTargetActions_runningActionsCount = 0;
var obj13646_droppedInsideTargetActions_loopCount = 0;
obj13646_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj13718: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13718");
	var winTarget = document.getElementById("obj13718");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13718").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13718_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13718_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13718_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13718_onTouchDown is still running");
	return;
}
var obj13718_onTouchDown_runningActionsCount = 0;
var obj13718_onTouchDown_loopCount = 0;
obj13718_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13718: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13718").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13718_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13718_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13718: Event droppedInsideTargetActions
 *
 */

$("#obj13718").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13718_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13718_droppedInsideTargetActions is still running");
	return;
}
var obj13718_droppedInsideTargetActions_runningActionsCount = 0;
var obj13718_droppedInsideTargetActions_loopCount = 0;
obj13718_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj13736: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13736");
	var winTarget = document.getElementById("obj13736");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13736").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13736_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13736_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13736_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13736_onTouchDown is still running");
	return;
}
var obj13736_onTouchDown_runningActionsCount = 0;
var obj13736_onTouchDown_loopCount = 0;
obj13736_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13736: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13736").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13736_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13736_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13736: Event droppedInsideTargetActions
 *
 */

$("#obj13736").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13736_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13736_droppedInsideTargetActions is still running");
	return;
}
var obj13736_droppedInsideTargetActions_runningActionsCount = 0;
var obj13736_droppedInsideTargetActions_loopCount = 0;
obj13736_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj13752: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13752");
	var winTarget = document.getElementById("obj13752");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13752").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13752_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13752_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13752_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13752_onTouchDown is still running");
	return;
}
var obj13752_onTouchDown_runningActionsCount = 0;
var obj13752_onTouchDown_loopCount = 0;
obj13752_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13752: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13752").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13752_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13752_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13752: Event droppedInsideTargetActions
 *
 */

$("#obj13752").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13752_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13752_droppedInsideTargetActions is still running");
	return;
}
var obj13752_droppedInsideTargetActions_runningActionsCount = 0;
var obj13752_droppedInsideTargetActions_loopCount = 0;
obj13752_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj13766: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj13766");
	var winTarget = document.getElementById("obj13766");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj13766").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj13766_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj13766_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj13766_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13766_onTouchDown is still running");
	return;
}
var obj13766_onTouchDown_runningActionsCount = 0;
var obj13766_onTouchDown_loopCount = 0;
obj13766_onTouchDown_actionGroup0();
});






/*
 *
 *   obj13766: Event SCActionDragDrop11980_droppedOutsideTargetActions
 *
 */

$("#obj13766").bind("SCActionDragDrop11980_droppedOutsideTargetActions", function(event) {
	if (window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13766_SCActionDragDrop11980_droppedOutsideTargetActions is still running");
	return;
}
var obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_runningActionsCount = 0;
var obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_loopCount = 0;
obj13766_SCActionDragDrop11980_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj13766: Event droppedInsideTargetActions
 *
 */

$("#obj13766").bind("droppedInsideTargetActions", function(event) {
	if (window.obj13766_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj13766_droppedInsideTargetActions is still running");
	return;
}
var obj13766_droppedInsideTargetActions_runningActionsCount = 0;
var obj13766_droppedInsideTargetActions_loopCount = 0;
obj13766_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj13531").trigger('SCEventShow');
$("#obj13535").trigger('SCEventShow');
$("#obj13537").trigger('SCEventShow');
$("#obj13540").trigger('SCEventShow');
$("#obj13543").trigger('SCEventShow');
$("#obj13545").trigger('SCEventShow');
$("#obj13547").trigger('SCEventShow');
$("#obj13550").trigger('SCEventShow');
$("#obj13566").trigger('SCEventShow');
$("#obj13660").trigger('SCEventShow');
$("#obj13662").trigger('SCEventShow');
$("#obj13664").trigger('SCEventShow');
$("#obj13666").trigger('SCEventShow');
$("#obj13668").trigger('SCEventShow');
$("#obj13670").trigger('SCEventShow');
$("#obj13678").trigger('SCEventShow');
$("#obj13680").trigger('SCEventShow');
$("#obj13682").trigger('SCEventShow');
$("#obj13684").trigger('SCEventShow');
$("#obj13686").trigger('SCEventShow');
$("#obj13688").trigger('SCEventShow');
$("#obj13690").trigger('SCEventShow');
$("#obj13694").trigger('SCEventShow');
$("#obj13696").trigger('SCEventShow');
$("#obj13698").trigger('SCEventShow');
$("#obj13700").trigger('SCEventShow');
$("#obj13702").trigger('SCEventShow');
$("#obj13704").trigger('SCEventShow');
$("#obj13706").trigger('SCEventShow');
$("#obj13646").trigger('SCEventShow');
$("#obj13676").trigger('SCEventShow');
$("#obj13718").trigger('SCEventShow');
$("#obj13736").trigger('SCEventShow');
$("#obj13752").trigger('SCEventShow');
$("#obj13766").trigger('SCEventShow');
	

});