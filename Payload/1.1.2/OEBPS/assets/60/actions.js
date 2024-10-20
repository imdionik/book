pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 22632;
pubcoder.page.title = pubcoder.page.title || "60";
pubcoder.page.number = pubcoder.page.number || 60;
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
var obj22639_onTap_activeActionGroupIndex = -1;
var obj22639_onTap_runningActionsCount = 0;
var obj22639_onTap_loopCount = 0;
var obj22642_onTap_activeActionGroupIndex = -1;
var obj22642_onTap_runningActionsCount = 0;
var obj22642_onTap_loopCount = 0;
var obj22649_onTap_activeActionGroupIndex = -1;
var obj22649_onTap_runningActionsCount = 0;
var obj22649_onTap_loopCount = 0;
var obj22652_onTap_activeActionGroupIndex = -1;
var obj22652_onTap_runningActionsCount = 0;
var obj22652_onTap_loopCount = 0;
var obj22658_onTap_activeActionGroupIndex = -1;
var obj22658_onTap_runningActionsCount = 0;
var obj22658_onTap_loopCount = 0;
var obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj22668_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj22668_SCEventCounterReachedTargetValue_loopCount = 0;
var obj22808_onDrag_activeActionGroupIndex = -1;
var obj22808_onDrag_runningActionsCount = 0;
var obj22808_onDrag_loopCount = 0;
var obj22808_onTouchDown_activeActionGroupIndex = -1;
var obj22808_onTouchDown_runningActionsCount = 0;
var obj22808_onTouchDown_loopCount = 0;
var obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
var obj22808_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj22808_droppedInsideTargetActions_runningActionsCount = 0;
var obj22808_droppedInsideTargetActions_loopCount = 0;
var obj22824_onDrag_activeActionGroupIndex = -1;
var obj22824_onDrag_runningActionsCount = 0;
var obj22824_onDrag_loopCount = 0;
var obj22824_onTouchDown_activeActionGroupIndex = -1;
var obj22824_onTouchDown_runningActionsCount = 0;
var obj22824_onTouchDown_loopCount = 0;
var obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
var obj22824_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj22824_droppedInsideTargetActions_runningActionsCount = 0;
var obj22824_droppedInsideTargetActions_loopCount = 0;
var obj22847_onDrag_activeActionGroupIndex = -1;
var obj22847_onDrag_runningActionsCount = 0;
var obj22847_onDrag_loopCount = 0;
var obj22847_onTouchDown_activeActionGroupIndex = -1;
var obj22847_onTouchDown_runningActionsCount = 0;
var obj22847_onTouchDown_loopCount = 0;
var obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
var obj22847_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj22847_droppedInsideTargetActions_runningActionsCount = 0;
var obj22847_droppedInsideTargetActions_loopCount = 0;
var obj22870_onDrag_activeActionGroupIndex = -1;
var obj22870_onDrag_runningActionsCount = 0;
var obj22870_onDrag_loopCount = 0;
var obj22870_onTouchDown_activeActionGroupIndex = -1;
var obj22870_onTouchDown_runningActionsCount = 0;
var obj22870_onTouchDown_loopCount = 0;
var obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
var obj22870_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj22870_droppedInsideTargetActions_runningActionsCount = 0;
var obj22870_droppedInsideTargetActions_loopCount = 0;
var obj22909_onDrag_activeActionGroupIndex = -1;
var obj22909_onDrag_runningActionsCount = 0;
var obj22909_onDrag_loopCount = 0;
var obj22909_onTouchDown_activeActionGroupIndex = -1;
var obj22909_onTouchDown_runningActionsCount = 0;
var obj22909_onTouchDown_loopCount = 0;
var obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
var obj22909_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj22909_droppedInsideTargetActions_runningActionsCount = 0;
var obj22909_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj22668_counterValue = 0;
var obj22668_counterTargetValue = 5;
var obj22668_counterCanExceedTargetValue = false;

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
		
obj22639_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22639_onTap_activeActionGroupIndex = -1;
		$("#obj22639").trigger("obj22639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22639) {
				console.warn("de-queueing event obj22639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22639_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22641();
function goToPage_22641() {
	window.obj22639_onTap_runningActionsCount = obj22639_onTap_runningActionsCount + 1;

	$("#anchor899")[0].click();
	window.obj22639_onTap_runningActionsCount = window.obj22639_onTap_runningActionsCount - 1;

if (window.obj22639_onTap_runningActionsCount < 0) {
	window.obj22639_onTap_runningActionsCount = 0;
} else if (window.obj22639_onTap_runningActionsCount == 0) {
	obj22639_onTap_actionGroup1();
}
}










































};
obj22639_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22639_onTap_activeActionGroupIndex = -1;
		$("#obj22639").trigger("obj22639_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22639) {
				console.warn("de-queueing event obj22639." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22639").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22639_onTap_activeActionGroupIndex = 1;
	











































};
obj22642_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22642_onTap_activeActionGroupIndex = -1;
		$("#obj22642").trigger("obj22642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22642) {
				console.warn("de-queueing event obj22642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22642_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22644();
function goToPage_22644() {
	window.obj22642_onTap_runningActionsCount = obj22642_onTap_runningActionsCount + 1;

	$("#anchor900")[0].click();
	window.obj22642_onTap_runningActionsCount = window.obj22642_onTap_runningActionsCount - 1;

if (window.obj22642_onTap_runningActionsCount < 0) {
	window.obj22642_onTap_runningActionsCount = 0;
} else if (window.obj22642_onTap_runningActionsCount == 0) {
	obj22642_onTap_actionGroup1();
}
}










































};
obj22642_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22642_onTap_activeActionGroupIndex = -1;
		$("#obj22642").trigger("obj22642_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22642) {
				console.warn("de-queueing event obj22642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22642_onTap_activeActionGroupIndex = 1;
	











































};
obj22649_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22649_onTap_activeActionGroupIndex = -1;
		$("#obj22649").trigger("obj22649_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22649) {
				console.warn("de-queueing event obj22649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22649_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_22651();
function goToPage_22651() {
	window.obj22649_onTap_runningActionsCount = obj22649_onTap_runningActionsCount + 1;

	$("#anchor901")[0].click();
	window.obj22649_onTap_runningActionsCount = window.obj22649_onTap_runningActionsCount - 1;

if (window.obj22649_onTap_runningActionsCount < 0) {
	window.obj22649_onTap_runningActionsCount = 0;
} else if (window.obj22649_onTap_runningActionsCount == 0) {
	obj22649_onTap_actionGroup1();
}
}










































};
obj22649_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22649_onTap_activeActionGroupIndex = -1;
		$("#obj22649").trigger("obj22649_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22649) {
				console.warn("de-queueing event obj22649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22649_onTap_activeActionGroupIndex = 1;
	











































};
obj22652_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22652_onTap_activeActionGroupIndex = -1;
		$("#obj22652").trigger("obj22652_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22652) {
				console.warn("de-queueing event obj22652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22652_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22658
(function(){
	window.obj22652_onTap_runningActionsCount = obj22652_onTap_runningActionsCount + 1;


	var selector = "#obj22658";
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
					window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup1();
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
				window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj22652_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22652_onTap_activeActionGroupIndex = -1;
		$("#obj22652").trigger("obj22652_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22652) {
				console.warn("de-queueing event obj22652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22652_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj22652 
hide_22655();
function hide_22655() {
	var selector = "#obj22652";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj22652_onTap_runningActionsCount = obj22652_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22655(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj22652_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22652_onTap_activeActionGroupIndex = -1;
		$("#obj22652").trigger("obj22652_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22652) {
				console.warn("de-queueing event obj22652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22652_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj22666
(function(){
	window.obj22652_onTap_runningActionsCount = obj22652_onTap_runningActionsCount + 1;


	var selector = "#obj22666";
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
					window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup3();
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
				window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj22664
(function(){
	window.obj22652_onTap_runningActionsCount = obj22652_onTap_runningActionsCount + 1;


	var selector = "#obj22664";
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
					window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup3();
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
				window.obj22652_onTap_runningActionsCount = window.obj22652_onTap_runningActionsCount - 1;

if (window.obj22652_onTap_runningActionsCount < 0) {
	window.obj22652_onTap_runningActionsCount = 0;
} else if (window.obj22652_onTap_runningActionsCount == 0) {
	obj22652_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj22652_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22652_onTap_activeActionGroupIndex = -1;
		$("#obj22652").trigger("obj22652_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22652) {
				console.warn("de-queueing event obj22652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22652_onTap_activeActionGroupIndex = 3;
	











































};
obj22658_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22658_onTap_activeActionGroupIndex = -1;
		$("#obj22658").trigger("obj22658_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22658) {
				console.warn("de-queueing event obj22658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22658_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22652
(function(){
	window.obj22658_onTap_runningActionsCount = obj22658_onTap_runningActionsCount + 1;


	var selector = "#obj22652";
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
					window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup1();
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
				window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj22658_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22658_onTap_activeActionGroupIndex = -1;
		$("#obj22658").trigger("obj22658_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22658) {
				console.warn("de-queueing event obj22658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22658_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj22658 
hide_22661();
function hide_22661() {
	var selector = "#obj22658";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj22658_onTap_runningActionsCount = obj22658_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22661(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj22658_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22658_onTap_activeActionGroupIndex = -1;
		$("#obj22658").trigger("obj22658_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22658) {
				console.warn("de-queueing event obj22658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22658_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj22664 
hide_22662();
function hide_22662() {
	var selector = "#obj22664";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj22658_onTap_runningActionsCount = obj22658_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22662(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj22666 
hide_22663();
function hide_22663() {
	var selector = "#obj22666";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj22658_onTap_runningActionsCount = obj22658_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22663(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj22658_onTap_runningActionsCount = window.obj22658_onTap_runningActionsCount - 1;

if (window.obj22658_onTap_runningActionsCount < 0) {
	window.obj22658_onTap_runningActionsCount = 0;
} else if (window.obj22658_onTap_runningActionsCount == 0) {
	obj22658_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj22658_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22658_onTap_activeActionGroupIndex = -1;
		$("#obj22658").trigger("obj22658_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22658) {
				console.warn("de-queueing event obj22658." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22658").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22658_onTap_activeActionGroupIndex = 3;
	











































};
obj22668_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22668").trigger("obj22668_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22668) {
				console.warn("de-queueing event obj22668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_22670();
function wait_22670() {
	window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = obj22668_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj22668_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj22668_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22668").trigger("obj22668_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22668) {
				console.warn("de-queueing event obj22668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_22671();
function goToPage_22671() {
	window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = obj22668_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor902")[0].click();
	window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj22668_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj22668_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj22668_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj22668").trigger("obj22668_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22668) {
				console.warn("de-queueing event obj22668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj22808_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22808_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj22808");

//	action: dragDrop
//	target: obj22808 
dragDrop_22811();
function dragDrop_22811() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj22808_onTouchDown_runningActionsCount = obj22808_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj22808');
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
    	window.obj22808_onTouchDown_runningActionsCount = window.obj22808_onTouchDown_runningActionsCount - 1;

if (window.obj22808_onTouchDown_runningActionsCount < 0) {
	window.obj22808_onTouchDown_runningActionsCount = 0;
} else if (window.obj22808_onTouchDown_runningActionsCount == 0) {
	obj22808_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj22934");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_22811 = false;
    	var dropped_id_22811;
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
					dropped_22811 = true;
					dropped_id_22811 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_22811) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj22808").trigger('SCActionDragDrop22811_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj22808_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22808_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj22808 
move_22814();
function move_22814() {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1252;
	var moveY = 250;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22813();
function playAudioFile_22813() {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22813")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22813");
			$("#obj_audio_playSoundFile22813").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
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
				window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj22808_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22932
(function(){
	window.obj22808_droppedInsideTargetActions_runningActionsCount = obj22808_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj22932";
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
					window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
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
				window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj22808 
move_22817();
function move_22817() {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = obj22808_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 813;
	var moveY = 475;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22816();
function playAudioFile_22816() {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = obj22808_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22816")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22816");
			$("#obj_audio_playSoundFile22816").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
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
				window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22808_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj22668 
incrementCounter_22950();
function incrementCounter_22950() {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = obj22808_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj22668_counterValue;
	obj22668_counterValue = obj22668_counterValue + 1;
	if (! obj22668_counterCanExceedTargetValue && obj22668_counterValue > obj22668_counterTargetValue) {
		obj22668_counterValue = obj22668_counterTargetValue;
	}

	if (oldValue != obj22668_counterValue) {
		$("#obj22668").trigger('SCEventCounterValueChange');
		$("#obj22668").trigger('SCEventCounterIncrease');
		if (obj22668_counterValue == obj22668_counterTargetValue)
			$("#obj22668").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj22808_droppedInsideTargetActions_runningActionsCount = window.obj22808_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22808_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj22808_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22808").trigger("obj22808_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22808) {
				console.warn("de-queueing event obj22808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22808_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj22824_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj22824");

//	action: dragDrop
//	target: obj22824 
dragDrop_22827();
function dragDrop_22827() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj22824_onTouchDown_runningActionsCount = obj22824_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj22824');
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
    	window.obj22824_onTouchDown_runningActionsCount = window.obj22824_onTouchDown_runningActionsCount - 1;

if (window.obj22824_onTouchDown_runningActionsCount < 0) {
	window.obj22824_onTouchDown_runningActionsCount = 0;
} else if (window.obj22824_onTouchDown_runningActionsCount == 0) {
	obj22824_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj22806");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_22827 = false;
    	var dropped_id_22827;
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
					dropped_22827 = true;
					dropped_id_22827 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_22827) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj22824").trigger('SCActionDragDrop22811_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj22824_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22824_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj22824 
move_22834();
function move_22834() {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1252;
	var moveY = 361;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22833();
function playAudioFile_22833() {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22833")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22833");
			$("#obj_audio_playSoundFile22833").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
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
				window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj22824_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22819
(function(){
	window.obj22824_droppedInsideTargetActions_runningActionsCount = obj22824_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj22819";
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
					window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
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
				window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj22824 
move_22830();
function move_22830() {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = obj22824_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22824");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 574;
	var moveY = 251;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22829();
function playAudioFile_22829() {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = obj22824_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22829")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22829");
			$("#obj_audio_playSoundFile22829").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
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
				window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22824_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj22668 
incrementCounter_22951();
function incrementCounter_22951() {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = obj22824_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj22668_counterValue;
	obj22668_counterValue = obj22668_counterValue + 1;
	if (! obj22668_counterCanExceedTargetValue && obj22668_counterValue > obj22668_counterTargetValue) {
		obj22668_counterValue = obj22668_counterTargetValue;
	}

	if (oldValue != obj22668_counterValue) {
		$("#obj22668").trigger('SCEventCounterValueChange');
		$("#obj22668").trigger('SCEventCounterIncrease');
		if (obj22668_counterValue == obj22668_counterTargetValue)
			$("#obj22668").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj22824_droppedInsideTargetActions_runningActionsCount = window.obj22824_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22824_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22824_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22824_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22824_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj22824_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22824").trigger("obj22824_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22824) {
				console.warn("de-queueing event obj22824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22824_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj22847_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj22847");

//	action: dragDrop
//	target: obj22847 
dragDrop_22850();
function dragDrop_22850() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj22847_onTouchDown_runningActionsCount = obj22847_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj22847');
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
    	window.obj22847_onTouchDown_runningActionsCount = window.obj22847_onTouchDown_runningActionsCount - 1;

if (window.obj22847_onTouchDown_runningActionsCount < 0) {
	window.obj22847_onTouchDown_runningActionsCount = 0;
} else if (window.obj22847_onTouchDown_runningActionsCount == 0) {
	obj22847_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj22897");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_22850 = false;
    	var dropped_id_22850;
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
					dropped_22850 = true;
					dropped_id_22850 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_22850) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj22847").trigger('SCActionDragDrop22811_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj22847_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj22847 
move_22857();
function move_22857() {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1252;
	var moveY = 475;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22856();
function playAudioFile_22856() {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22856")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22856");
			$("#obj_audio_playSoundFile22856").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
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
				window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj22847_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22895
(function(){
	window.obj22847_droppedInsideTargetActions_runningActionsCount = obj22847_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj22895";
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
					window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
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
				window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj22847 
move_22853();
function move_22853() {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = obj22847_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 813;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22852();
function playAudioFile_22852() {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = obj22847_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22852")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22852");
			$("#obj_audio_playSoundFile22852").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
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
				window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22847_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj22668 
incrementCounter_22952();
function incrementCounter_22952() {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = obj22847_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj22668_counterValue;
	obj22668_counterValue = obj22668_counterValue + 1;
	if (! obj22668_counterCanExceedTargetValue && obj22668_counterValue > obj22668_counterTargetValue) {
		obj22668_counterValue = obj22668_counterTargetValue;
	}

	if (oldValue != obj22668_counterValue) {
		$("#obj22668").trigger('SCEventCounterValueChange');
		$("#obj22668").trigger('SCEventCounterIncrease');
		if (obj22668_counterValue == obj22668_counterTargetValue)
			$("#obj22668").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj22847_droppedInsideTargetActions_runningActionsCount = window.obj22847_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22847_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj22847_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22847").trigger("obj22847_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22847) {
				console.warn("de-queueing event obj22847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22847_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj22870_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22870_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj22870");

//	action: dragDrop
//	target: obj22870 
dragDrop_22873();
function dragDrop_22873() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj22870_onTouchDown_runningActionsCount = obj22870_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj22870');
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
    	window.obj22870_onTouchDown_runningActionsCount = window.obj22870_onTouchDown_runningActionsCount - 1;

if (window.obj22870_onTouchDown_runningActionsCount < 0) {
	window.obj22870_onTouchDown_runningActionsCount = 0;
} else if (window.obj22870_onTouchDown_runningActionsCount == 0) {
	obj22870_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj22901");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_22873 = false;
    	var dropped_id_22873;
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
					dropped_22873 = true;
					dropped_id_22873 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_22873) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj22870").trigger('SCActionDragDrop22811_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj22870_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22870_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj22870 
move_22880();
function move_22880() {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22870");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1252;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22879();
function playAudioFile_22879() {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22879")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22879");
			$("#obj_audio_playSoundFile22879").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
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
				window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj22870_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22899
(function(){
	window.obj22870_droppedInsideTargetActions_runningActionsCount = obj22870_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj22899";
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
					window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
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
				window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj22870 
move_22876();
function move_22876() {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = obj22870_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22870");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 813;
	var moveY = 692;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22875();
function playAudioFile_22875() {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = obj22870_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22875")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22875");
			$("#obj_audio_playSoundFile22875").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
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
				window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22870_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj22668 
incrementCounter_22953();
function incrementCounter_22953() {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = obj22870_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj22668_counterValue;
	obj22668_counterValue = obj22668_counterValue + 1;
	if (! obj22668_counterCanExceedTargetValue && obj22668_counterValue > obj22668_counterTargetValue) {
		obj22668_counterValue = obj22668_counterTargetValue;
	}

	if (oldValue != obj22668_counterValue) {
		$("#obj22668").trigger('SCEventCounterValueChange');
		$("#obj22668").trigger('SCEventCounterIncrease');
		if (obj22668_counterValue == obj22668_counterTargetValue)
			$("#obj22668").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj22870_droppedInsideTargetActions_runningActionsCount = window.obj22870_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22870_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22870_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22870_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22870_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj22870_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22870").trigger("obj22870_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22870) {
				console.warn("de-queueing event obj22870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22870_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj22909_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22909_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj22909");

//	action: dragDrop
//	target: obj22909 
dragDrop_22912();
function dragDrop_22912() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj22909_onTouchDown_runningActionsCount = obj22909_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj22909');
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
    	window.obj22909_onTouchDown_runningActionsCount = window.obj22909_onTouchDown_runningActionsCount - 1;

if (window.obj22909_onTouchDown_runningActionsCount < 0) {
	window.obj22909_onTouchDown_runningActionsCount = 0;
} else if (window.obj22909_onTouchDown_runningActionsCount == 0) {
	obj22909_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj22835");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_22912 = false;
    	var dropped_id_22912;
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
					dropped_22912 = true;
					dropped_id_22912 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_22912) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj22909").trigger('SCActionDragDrop22811_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj22909_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22909_onTouchDown_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj22909 
move_22919();
function move_22919() {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22909");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1252;
	var moveY = 694;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22918();
function playAudioFile_22918() {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22918")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22918");
			$("#obj_audio_playSoundFile22918").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
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
				window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj22909_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22822
(function(){
	window.obj22909_droppedInsideTargetActions_runningActionsCount = obj22909_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj22822";
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
					window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
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
				window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj22909 
move_22915();
function move_22915() {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = obj22909_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj22909");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 574;
	var moveY = 360;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_22914();
function playAudioFile_22914() {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = obj22909_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22914")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22914");
			$("#obj_audio_playSoundFile22914").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
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
				window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22909_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj22668 
incrementCounter_22954();
function incrementCounter_22954() {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = obj22909_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj22668_counterValue;
	obj22668_counterValue = obj22668_counterValue + 1;
	if (! obj22668_counterCanExceedTargetValue && obj22668_counterValue > obj22668_counterTargetValue) {
		obj22668_counterValue = obj22668_counterTargetValue;
	}

	if (oldValue != obj22668_counterValue) {
		$("#obj22668").trigger('SCEventCounterValueChange');
		$("#obj22668").trigger('SCEventCounterIncrease');
		if (obj22668_counterValue == obj22668_counterTargetValue)
			$("#obj22668").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj22909_droppedInsideTargetActions_runningActionsCount = window.obj22909_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj22909_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj22909_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj22909_droppedInsideTargetActions_runningActionsCount == 0) {
	obj22909_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj22909_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj22909").trigger("obj22909_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22909) {
				console.warn("de-queueing event obj22909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22909_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj22639: Event Touch Down
 *
 */

$("#obj22639").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22639_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22639_onTap is still running");
	return;
}
var obj22639_onTap_runningActionsCount = 0;
var obj22639_onTap_loopCount = 0;
obj22639_onTap_actionGroup0();
});


















/*
 *
 *   obj22642: Event Touch Down
 *
 */

$("#obj22642").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22642_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22642_onTap is still running");
	return;
}
var obj22642_onTap_runningActionsCount = 0;
var obj22642_onTap_loopCount = 0;
obj22642_onTap_actionGroup0();
});
























































/*
 *
 *   obj22649: Event Touch Down
 *
 */

$("#obj22649").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22649_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22649_onTap is still running");
	return;
}
var obj22649_onTap_runningActionsCount = 0;
var obj22649_onTap_loopCount = 0;
obj22649_onTap_actionGroup0();
});


















/*
 *
 *   obj22652: Event Touch Down
 *
 */

$("#obj22652").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22652_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22652_onTap is still running");
	return;
}
var obj22652_onTap_runningActionsCount = 0;
var obj22652_onTap_loopCount = 0;
obj22652_onTap_actionGroup0();
});


















/*
 *
 *   obj22658: Event Touch Down
 *
 */

$("#obj22658").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22658_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22658_onTap is still running");
	return;
}
var obj22658_onTap_runningActionsCount = 0;
var obj22658_onTap_loopCount = 0;
obj22658_onTap_actionGroup0();
});



























/*
 *
 *   obj22668: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj22668").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj22668_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22668_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj22668_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj22668_SCEventCounterReachedTargetValue_loopCount = 0;
obj22668_SCEventCounterReachedTargetValue_actionGroup0();
});
















































































































































































































































































































































































































































































































































































































































































































































































/*
 *
 *   obj22808: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj22808");
	var winTarget = document.getElementById("obj22808");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj22808").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj22808_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj22808_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj22808_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22808_onTouchDown is still running");
	return;
}
var obj22808_onTouchDown_runningActionsCount = 0;
var obj22808_onTouchDown_loopCount = 0;
obj22808_onTouchDown_actionGroup0();
});






/*
 *
 *   obj22808: Event SCActionDragDrop22811_droppedOutsideTargetActions
 *
 */

$("#obj22808").bind("SCActionDragDrop22811_droppedOutsideTargetActions", function(event) {
	if (window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22808_SCActionDragDrop22811_droppedOutsideTargetActions is still running");
	return;
}
var obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
obj22808_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj22808: Event droppedInsideTargetActions
 *
 */

$("#obj22808").bind("droppedInsideTargetActions", function(event) {
	if (window.obj22808_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22808_droppedInsideTargetActions is still running");
	return;
}
var obj22808_droppedInsideTargetActions_runningActionsCount = 0;
var obj22808_droppedInsideTargetActions_loopCount = 0;
obj22808_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj22824: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj22824");
	var winTarget = document.getElementById("obj22824");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj22824").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj22824_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj22824_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj22824_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22824_onTouchDown is still running");
	return;
}
var obj22824_onTouchDown_runningActionsCount = 0;
var obj22824_onTouchDown_loopCount = 0;
obj22824_onTouchDown_actionGroup0();
});






/*
 *
 *   obj22824: Event SCActionDragDrop22811_droppedOutsideTargetActions
 *
 */

$("#obj22824").bind("SCActionDragDrop22811_droppedOutsideTargetActions", function(event) {
	if (window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22824_SCActionDragDrop22811_droppedOutsideTargetActions is still running");
	return;
}
var obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
obj22824_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj22824: Event droppedInsideTargetActions
 *
 */

$("#obj22824").bind("droppedInsideTargetActions", function(event) {
	if (window.obj22824_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22824_droppedInsideTargetActions is still running");
	return;
}
var obj22824_droppedInsideTargetActions_runningActionsCount = 0;
var obj22824_droppedInsideTargetActions_loopCount = 0;
obj22824_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj22847: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj22847");
	var winTarget = document.getElementById("obj22847");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj22847").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj22847_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj22847_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj22847_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22847_onTouchDown is still running");
	return;
}
var obj22847_onTouchDown_runningActionsCount = 0;
var obj22847_onTouchDown_loopCount = 0;
obj22847_onTouchDown_actionGroup0();
});






/*
 *
 *   obj22847: Event SCActionDragDrop22811_droppedOutsideTargetActions
 *
 */

$("#obj22847").bind("SCActionDragDrop22811_droppedOutsideTargetActions", function(event) {
	if (window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22847_SCActionDragDrop22811_droppedOutsideTargetActions is still running");
	return;
}
var obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
obj22847_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj22847: Event droppedInsideTargetActions
 *
 */

$("#obj22847").bind("droppedInsideTargetActions", function(event) {
	if (window.obj22847_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22847_droppedInsideTargetActions is still running");
	return;
}
var obj22847_droppedInsideTargetActions_runningActionsCount = 0;
var obj22847_droppedInsideTargetActions_loopCount = 0;
obj22847_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj22870: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj22870");
	var winTarget = document.getElementById("obj22870");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj22870").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj22870_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj22870_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj22870_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22870_onTouchDown is still running");
	return;
}
var obj22870_onTouchDown_runningActionsCount = 0;
var obj22870_onTouchDown_loopCount = 0;
obj22870_onTouchDown_actionGroup0();
});






/*
 *
 *   obj22870: Event SCActionDragDrop22811_droppedOutsideTargetActions
 *
 */

$("#obj22870").bind("SCActionDragDrop22811_droppedOutsideTargetActions", function(event) {
	if (window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22870_SCActionDragDrop22811_droppedOutsideTargetActions is still running");
	return;
}
var obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
obj22870_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj22870: Event droppedInsideTargetActions
 *
 */

$("#obj22870").bind("droppedInsideTargetActions", function(event) {
	if (window.obj22870_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22870_droppedInsideTargetActions is still running");
	return;
}
var obj22870_droppedInsideTargetActions_runningActionsCount = 0;
var obj22870_droppedInsideTargetActions_loopCount = 0;
obj22870_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj22909: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj22909");
	var winTarget = document.getElementById("obj22909");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj22909").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj22909_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj22909_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj22909_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22909_onTouchDown is still running");
	return;
}
var obj22909_onTouchDown_runningActionsCount = 0;
var obj22909_onTouchDown_loopCount = 0;
obj22909_onTouchDown_actionGroup0();
});






/*
 *
 *   obj22909: Event SCActionDragDrop22811_droppedOutsideTargetActions
 *
 */

$("#obj22909").bind("SCActionDragDrop22811_droppedOutsideTargetActions", function(event) {
	if (window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22909_SCActionDragDrop22811_droppedOutsideTargetActions is still running");
	return;
}
var obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_runningActionsCount = 0;
var obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_loopCount = 0;
obj22909_SCActionDragDrop22811_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj22909: Event droppedInsideTargetActions
 *
 */

$("#obj22909").bind("droppedInsideTargetActions", function(event) {
	if (window.obj22909_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22909_droppedInsideTargetActions is still running");
	return;
}
var obj22909_droppedInsideTargetActions_runningActionsCount = 0;
var obj22909_droppedInsideTargetActions_loopCount = 0;
obj22909_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj22633").trigger('SCEventShow');
$("#obj22637").trigger('SCEventShow');
$("#obj22639").trigger('SCEventShow');
$("#obj22642").trigger('SCEventShow');
$("#obj22645").trigger('SCEventShow');
$("#obj22647").trigger('SCEventShow');
$("#obj22649").trigger('SCEventShow');
$("#obj22652").trigger('SCEventShow');
$("#obj22672").trigger('SCEventShow');
$("#obj22791").trigger('SCEventShow');
$("#obj22793").trigger('SCEventShow');
$("#obj22798").trigger('SCEventShow');
$("#obj22800").trigger('SCEventShow');
$("#obj22802").trigger('SCEventShow');
$("#obj22804").trigger('SCEventShow');
$("#obj22806").trigger('SCEventShow');
$("#obj22843").trigger('SCEventShow');
$("#obj22841").trigger('SCEventShow');
$("#obj22839").trigger('SCEventShow');
$("#obj22837").trigger('SCEventShow');
$("#obj22835").trigger('SCEventShow');
$("#obj22866").trigger('SCEventShow');
$("#obj22864").trigger('SCEventShow');
$("#obj22862").trigger('SCEventShow');
$("#obj22860").trigger('SCEventShow');
$("#obj22858").trigger('SCEventShow');
$("#obj22889").trigger('SCEventShow');
$("#obj22887").trigger('SCEventShow');
$("#obj22885").trigger('SCEventShow');
$("#obj22883").trigger('SCEventShow');
$("#obj22881").trigger('SCEventShow');
$("#obj22891").trigger('SCEventShow');
$("#obj22893").trigger('SCEventShow');
$("#obj22897").trigger('SCEventShow');
$("#obj22928").trigger('SCEventShow');
$("#obj22926").trigger('SCEventShow');
$("#obj22924").trigger('SCEventShow');
$("#obj22922").trigger('SCEventShow');
$("#obj22920").trigger('SCEventShow');
$("#obj22905").trigger('SCEventShow');
$("#obj22903").trigger('SCEventShow');
$("#obj22901").trigger('SCEventShow');
$("#obj22930").trigger('SCEventShow');
$("#obj22936").trigger('SCEventShow');
$("#obj22934").trigger('SCEventShow');
$("#obj22808").trigger('SCEventShow');
$("#obj22824").trigger('SCEventShow');
$("#obj22847").trigger('SCEventShow');
$("#obj22870").trigger('SCEventShow');
$("#obj22909").trigger('SCEventShow');
	

});