pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 598;
pubcoder.page.title = pubcoder.page.title || "11";
pubcoder.page.number = pubcoder.page.number || 11;
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
var obj603_onTap_activeActionGroupIndex = -1;
var obj603_onTap_runningActionsCount = 0;
var obj603_onTap_loopCount = 0;
var obj606_onTap_activeActionGroupIndex = -1;
var obj606_onTap_runningActionsCount = 0;
var obj606_onTap_loopCount = 0;
var obj613_onTap_activeActionGroupIndex = -1;
var obj613_onTap_runningActionsCount = 0;
var obj613_onTap_loopCount = 0;
var obj634_onTap_activeActionGroupIndex = -1;
var obj634_onTap_runningActionsCount = 0;
var obj634_onTap_loopCount = 0;
var obj626_onTap_activeActionGroupIndex = -1;
var obj626_onTap_runningActionsCount = 0;
var obj626_onTap_loopCount = 0;
var obj656_onDrag_activeActionGroupIndex = -1;
var obj656_onDrag_runningActionsCount = 0;
var obj656_onDrag_loopCount = 0;
var obj656_onTouchDown_activeActionGroupIndex = -1;
var obj656_onTouchDown_runningActionsCount = 0;
var obj656_onTouchDown_loopCount = 0;
var obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj656_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj656_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj656_droppedInsideTargetActions_runningActionsCount = 0;
var obj656_droppedInsideTargetActions_loopCount = 0;
var obj673_onDrag_activeActionGroupIndex = -1;
var obj673_onDrag_runningActionsCount = 0;
var obj673_onDrag_loopCount = 0;
var obj673_onTouchDown_activeActionGroupIndex = -1;
var obj673_onTouchDown_runningActionsCount = 0;
var obj673_onTouchDown_loopCount = 0;
var obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj673_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj673_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj673_droppedInsideTargetActions_runningActionsCount = 0;
var obj673_droppedInsideTargetActions_loopCount = 0;
var obj686_onDrag_activeActionGroupIndex = -1;
var obj686_onDrag_runningActionsCount = 0;
var obj686_onDrag_loopCount = 0;
var obj686_onTouchDown_activeActionGroupIndex = -1;
var obj686_onTouchDown_runningActionsCount = 0;
var obj686_onTouchDown_loopCount = 0;
var obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj686_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj686_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj686_droppedInsideTargetActions_runningActionsCount = 0;
var obj686_droppedInsideTargetActions_loopCount = 0;
var obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj696_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj696_SCEventCounterReachedTargetValue_loopCount = 0;
var obj815_onDrag_activeActionGroupIndex = -1;
var obj815_onDrag_runningActionsCount = 0;
var obj815_onDrag_loopCount = 0;
var obj815_onTouchDown_activeActionGroupIndex = -1;
var obj815_onTouchDown_runningActionsCount = 0;
var obj815_onTouchDown_loopCount = 0;
var obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj815_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj815_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj815_droppedInsideTargetActions_runningActionsCount = 0;
var obj815_droppedInsideTargetActions_loopCount = 0;
var obj802_onDrag_activeActionGroupIndex = -1;
var obj802_onDrag_runningActionsCount = 0;
var obj802_onDrag_loopCount = 0;
var obj802_onTouchDown_activeActionGroupIndex = -1;
var obj802_onTouchDown_runningActionsCount = 0;
var obj802_onTouchDown_loopCount = 0;
var obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj802_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj802_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj802_droppedInsideTargetActions_runningActionsCount = 0;
var obj802_droppedInsideTargetActions_loopCount = 0;
var obj789_onDrag_activeActionGroupIndex = -1;
var obj789_onDrag_runningActionsCount = 0;
var obj789_onDrag_loopCount = 0;
var obj789_onTouchDown_activeActionGroupIndex = -1;
var obj789_onTouchDown_runningActionsCount = 0;
var obj789_onTouchDown_loopCount = 0;
var obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj789_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj789_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj789_droppedInsideTargetActions_runningActionsCount = 0;
var obj789_droppedInsideTargetActions_loopCount = 0;
var obj891_onDrag_activeActionGroupIndex = -1;
var obj891_onDrag_runningActionsCount = 0;
var obj891_onDrag_loopCount = 0;
var obj891_onTouchDown_activeActionGroupIndex = -1;
var obj891_onTouchDown_runningActionsCount = 0;
var obj891_onTouchDown_loopCount = 0;
var obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj891_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj891_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj891_droppedInsideTargetActions_runningActionsCount = 0;
var obj891_droppedInsideTargetActions_loopCount = 0;
var obj878_onDrag_activeActionGroupIndex = -1;
var obj878_onDrag_runningActionsCount = 0;
var obj878_onDrag_loopCount = 0;
var obj878_onTouchDown_activeActionGroupIndex = -1;
var obj878_onTouchDown_runningActionsCount = 0;
var obj878_onTouchDown_loopCount = 0;
var obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj878_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj878_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj878_droppedInsideTargetActions_runningActionsCount = 0;
var obj878_droppedInsideTargetActions_loopCount = 0;
var obj865_onDrag_activeActionGroupIndex = -1;
var obj865_onDrag_runningActionsCount = 0;
var obj865_onDrag_loopCount = 0;
var obj865_onTouchDown_activeActionGroupIndex = -1;
var obj865_onTouchDown_runningActionsCount = 0;
var obj865_onTouchDown_loopCount = 0;
var obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj865_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj865_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj865_droppedInsideTargetActions_runningActionsCount = 0;
var obj865_droppedInsideTargetActions_loopCount = 0;
var obj852_onDrag_activeActionGroupIndex = -1;
var obj852_onDrag_runningActionsCount = 0;
var obj852_onDrag_loopCount = 0;
var obj852_onTouchDown_activeActionGroupIndex = -1;
var obj852_onTouchDown_runningActionsCount = 0;
var obj852_onTouchDown_loopCount = 0;
var obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj852_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj852_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj852_droppedInsideTargetActions_runningActionsCount = 0;
var obj852_droppedInsideTargetActions_loopCount = 0;
var obj937_onDrag_activeActionGroupIndex = -1;
var obj937_onDrag_runningActionsCount = 0;
var obj937_onDrag_loopCount = 0;
var obj937_onTouchDown_activeActionGroupIndex = -1;
var obj937_onTouchDown_runningActionsCount = 0;
var obj937_onTouchDown_loopCount = 0;
var obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj937_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj937_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj937_droppedInsideTargetActions_runningActionsCount = 0;
var obj937_droppedInsideTargetActions_loopCount = 0;
var obj924_onDrag_activeActionGroupIndex = -1;
var obj924_onDrag_runningActionsCount = 0;
var obj924_onDrag_loopCount = 0;
var obj924_onTouchDown_activeActionGroupIndex = -1;
var obj924_onTouchDown_runningActionsCount = 0;
var obj924_onTouchDown_loopCount = 0;
var obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj924_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
var obj924_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj924_droppedInsideTargetActions_runningActionsCount = 0;
var obj924_droppedInsideTargetActions_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj696_counterValue = 0;
var obj696_counterTargetValue = 12;
var obj696_counterCanExceedTargetValue = false;

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
		
obj603_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj603_onTap_activeActionGroupIndex = -1;
		$("#obj603").trigger("obj603_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 603) {
				console.warn("de-queueing event obj603." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj603").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj603_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_605();
function goToPage_605() {
	window.obj603_onTap_runningActionsCount = obj603_onTap_runningActionsCount + 1;

	$("#anchor65")[0].click();
	window.obj603_onTap_runningActionsCount = window.obj603_onTap_runningActionsCount - 1;

if (window.obj603_onTap_runningActionsCount < 0) {
	window.obj603_onTap_runningActionsCount = 0;
} else if (window.obj603_onTap_runningActionsCount == 0) {
	obj603_onTap_actionGroup1();
}
}










































};
obj603_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj603_onTap_activeActionGroupIndex = -1;
		$("#obj603").trigger("obj603_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 603) {
				console.warn("de-queueing event obj603." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj603").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj603_onTap_activeActionGroupIndex = 1;
	











































};
obj606_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj606_onTap_activeActionGroupIndex = -1;
		$("#obj606").trigger("obj606_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 606) {
				console.warn("de-queueing event obj606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj606_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_608();
function goToPage_608() {
	window.obj606_onTap_runningActionsCount = obj606_onTap_runningActionsCount + 1;

	$("#anchor66")[0].click();
	window.obj606_onTap_runningActionsCount = window.obj606_onTap_runningActionsCount - 1;

if (window.obj606_onTap_runningActionsCount < 0) {
	window.obj606_onTap_runningActionsCount = 0;
} else if (window.obj606_onTap_runningActionsCount == 0) {
	obj606_onTap_actionGroup1();
}
}










































};
obj606_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj606_onTap_activeActionGroupIndex = -1;
		$("#obj606").trigger("obj606_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 606) {
				console.warn("de-queueing event obj606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj606_onTap_activeActionGroupIndex = 1;
	











































};
obj613_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj613_onTap_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_615();
function goToPage_615() {
	window.obj613_onTap_runningActionsCount = obj613_onTap_runningActionsCount + 1;

	$("#anchor67")[0].click();
	window.obj613_onTap_runningActionsCount = window.obj613_onTap_runningActionsCount - 1;

if (window.obj613_onTap_runningActionsCount < 0) {
	window.obj613_onTap_runningActionsCount = 0;
} else if (window.obj613_onTap_runningActionsCount == 0) {
	obj613_onTap_actionGroup1();
}
}










































};
obj613_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj613_onTap_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onTap_activeActionGroupIndex = 1;
	











































};
obj634_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj634_onTap_activeActionGroupIndex = -1;
		$("#obj634").trigger("obj634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 634) {
				console.warn("de-queueing event obj634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj634_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj626
(function(){
	window.obj634_onTap_runningActionsCount = obj634_onTap_runningActionsCount + 1;


	var selector = "#obj626";
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
					window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup1();
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
				window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj634_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj634_onTap_activeActionGroupIndex = -1;
		$("#obj634").trigger("obj634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 634) {
				console.warn("de-queueing event obj634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj634_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj634 
hide_638();
function hide_638() {
	var selector = "#obj634";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj634_onTap_runningActionsCount = obj634_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_638(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj634_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj634_onTap_activeActionGroupIndex = -1;
		$("#obj634").trigger("obj634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 634) {
				console.warn("de-queueing event obj634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj634_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj632
(function(){
	window.obj634_onTap_runningActionsCount = obj634_onTap_runningActionsCount + 1;


	var selector = "#obj632";
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
					window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup3();
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
				window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj630
(function(){
	window.obj634_onTap_runningActionsCount = obj634_onTap_runningActionsCount + 1;


	var selector = "#obj630";
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
					window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup3();
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
				window.obj634_onTap_runningActionsCount = window.obj634_onTap_runningActionsCount - 1;

if (window.obj634_onTap_runningActionsCount < 0) {
	window.obj634_onTap_runningActionsCount = 0;
} else if (window.obj634_onTap_runningActionsCount == 0) {
	obj634_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj634_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj634_onTap_activeActionGroupIndex = -1;
		$("#obj634").trigger("obj634_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 634) {
				console.warn("de-queueing event obj634." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj634").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj634_onTap_activeActionGroupIndex = 3;
	











































};
obj626_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj626_onTap_activeActionGroupIndex = -1;
		$("#obj626").trigger("obj626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 626) {
				console.warn("de-queueing event obj626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj626_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj634
(function(){
	window.obj626_onTap_runningActionsCount = obj626_onTap_runningActionsCount + 1;


	var selector = "#obj634";
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
					window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup1();
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
				window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj626_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj626_onTap_activeActionGroupIndex = -1;
		$("#obj626").trigger("obj626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 626) {
				console.warn("de-queueing event obj626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj626_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj626 
hide_640();
function hide_640() {
	var selector = "#obj626";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj626_onTap_runningActionsCount = obj626_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_640(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj626_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj626_onTap_activeActionGroupIndex = -1;
		$("#obj626").trigger("obj626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 626) {
				console.warn("de-queueing event obj626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj626_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj630 
hide_644();
function hide_644() {
	var selector = "#obj630";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj626_onTap_runningActionsCount = obj626_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_644(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj632 
hide_645();
function hide_645() {
	var selector = "#obj632";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj626_onTap_runningActionsCount = obj626_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_645(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj626_onTap_runningActionsCount = window.obj626_onTap_runningActionsCount - 1;

if (window.obj626_onTap_runningActionsCount < 0) {
	window.obj626_onTap_runningActionsCount = 0;
} else if (window.obj626_onTap_runningActionsCount == 0) {
	obj626_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj626_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj626_onTap_activeActionGroupIndex = -1;
		$("#obj626").trigger("obj626_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 626) {
				console.warn("de-queueing event obj626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj626_onTap_activeActionGroupIndex = 3;
	











































};
obj656_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_onTouchDown_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj656");

//	action: dragDrop
//	target: obj656 
dragDrop_663();
function dragDrop_663() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj656_onTouchDown_runningActionsCount = obj656_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj656');
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
    	window.obj656_onTouchDown_runningActionsCount = window.obj656_onTouchDown_runningActionsCount - 1;

if (window.obj656_onTouchDown_runningActionsCount < 0) {
	window.obj656_onTouchDown_runningActionsCount = 0;
} else if (window.obj656_onTouchDown_runningActionsCount == 0) {
	obj656_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj660");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_663 = false;
    	var dropped_id_663;
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
					dropped_663 = true;
					dropped_id_663 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_663) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj656").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj656_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj656_onTouchDown_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj656 
move_666();
function move_666() {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj656");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 530;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_665();
function playAudioFile_665() {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile665")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile665");
			$("#obj_audio_playSoundFile665").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj656_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj656_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj656 
move_668();
function move_668() {
	window.obj656_droppedInsideTargetActions_runningActionsCount = obj656_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj656");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 120;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_683();
function playAudioFile_683() {
	window.obj656_droppedInsideTargetActions_runningActionsCount = obj656_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile683")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile683");
			$("#obj_audio_playSoundFile683").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
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
				window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1034();
function runjs_1034() {
	window.obj656_droppedInsideTargetActions_runningActionsCount = obj656_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj656").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1035();
function runjs_1035() {
	window.obj656_droppedInsideTargetActions_runningActionsCount = obj656_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj656").css("color", "white");
	
	setTimeout(function() {
		window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_700();
function incrementCounter_700() {
	window.obj656_droppedInsideTargetActions_runningActionsCount = obj656_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj656_droppedInsideTargetActions_runningActionsCount = window.obj656_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj656_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj656_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj656_droppedInsideTargetActions_runningActionsCount == 0) {
	obj656_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj656_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj656_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj656").trigger("obj656_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 656) {
				console.warn("de-queueing event obj656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj656_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj673_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj673_onTouchDown_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj673");

//	action: dragDrop
//	target: obj673 
dragDrop_676();
function dragDrop_676() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj673_onTouchDown_runningActionsCount = obj673_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj673');
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
    	window.obj673_onTouchDown_runningActionsCount = window.obj673_onTouchDown_runningActionsCount - 1;

if (window.obj673_onTouchDown_runningActionsCount < 0) {
	window.obj673_onTouchDown_runningActionsCount = 0;
} else if (window.obj673_onTouchDown_runningActionsCount == 0) {
	obj673_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj671");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_676 = false;
    	var dropped_id_676;
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
					dropped_676 = true;
					dropped_id_676 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_676) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj673").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj673_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj673_onTouchDown_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj673 
move_681();
function move_681() {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj673");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 827;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_680();
function playAudioFile_680() {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile680")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile680");
			$("#obj_audio_playSoundFile680").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj673_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj673_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj673 
move_678();
function move_678() {
	window.obj673_droppedInsideTargetActions_runningActionsCount = obj673_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj673");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 220;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_682();
function playAudioFile_682() {
	window.obj673_droppedInsideTargetActions_runningActionsCount = obj673_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile682")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile682");
			$("#obj_audio_playSoundFile682").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
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
				window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1036();
function runjs_1036() {
	window.obj673_droppedInsideTargetActions_runningActionsCount = obj673_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj673").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1037();
function runjs_1037() {
	window.obj673_droppedInsideTargetActions_runningActionsCount = obj673_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj673").css("color", "white");
	
	setTimeout(function() {
		window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_699();
function incrementCounter_699() {
	window.obj673_droppedInsideTargetActions_runningActionsCount = obj673_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj673_droppedInsideTargetActions_runningActionsCount = window.obj673_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj673_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj673_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj673_droppedInsideTargetActions_runningActionsCount == 0) {
	obj673_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj673_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj673_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj673").trigger("obj673_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 673) {
				console.warn("de-queueing event obj673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj673_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj686_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj686_onTouchDown_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj686");

//	action: dragDrop
//	target: obj686 
dragDrop_689();
function dragDrop_689() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj686_onTouchDown_runningActionsCount = obj686_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj686');
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
    	window.obj686_onTouchDown_runningActionsCount = window.obj686_onTouchDown_runningActionsCount - 1;

if (window.obj686_onTouchDown_runningActionsCount < 0) {
	window.obj686_onTouchDown_runningActionsCount = 0;
} else if (window.obj686_onTouchDown_runningActionsCount == 0) {
	obj686_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj684");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_689 = false;
    	var dropped_id_689;
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
					dropped_689 = true;
					dropped_id_689 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_689) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj686").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj686_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj686_onTouchDown_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj686 
move_695();
function move_695() {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 125;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_694();
function playAudioFile_694() {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile694")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile694");
			$("#obj_audio_playSoundFile694").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj686_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj686 
move_692();
function move_692() {
	window.obj686_droppedInsideTargetActions_runningActionsCount = obj686_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 325;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_691();
function playAudioFile_691() {
	window.obj686_droppedInsideTargetActions_runningActionsCount = obj686_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile691")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile691");
			$("#obj_audio_playSoundFile691").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
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
				window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1038();
function runjs_1038() {
	window.obj686_droppedInsideTargetActions_runningActionsCount = obj686_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj686").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1039();
function runjs_1039() {
	window.obj686_droppedInsideTargetActions_runningActionsCount = obj686_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj686").css("color", "white");
	
	setTimeout(function() {
		window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_698();
function incrementCounter_698() {
	window.obj686_droppedInsideTargetActions_runningActionsCount = obj686_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj686_droppedInsideTargetActions_runningActionsCount = window.obj686_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj686_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj686_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj686").trigger("obj686_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 686) {
				console.warn("de-queueing event obj686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj686_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj696_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj696").trigger("obj696_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 696) {
				console.warn("de-queueing event obj696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_960();
function wait_960() {
	window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = obj696_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = window.obj696_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj696_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj696_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj696_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj696_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj696").trigger("obj696_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 696) {
				console.warn("de-queueing event obj696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_961();
function goToPage_961() {
	window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = obj696_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor74")[0].click();
	window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = window.obj696_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj696_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj696_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj696_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj696_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj696_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj696").trigger("obj696_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 696) {
				console.warn("de-queueing event obj696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj815_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj815_onTouchDown_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj815");

//	action: dragDrop
//	target: obj815 
dragDrop_818();
function dragDrop_818() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj815_onTouchDown_runningActionsCount = obj815_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj815');
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
    	window.obj815_onTouchDown_runningActionsCount = window.obj815_onTouchDown_runningActionsCount - 1;

if (window.obj815_onTouchDown_runningActionsCount < 0) {
	window.obj815_onTouchDown_runningActionsCount = 0;
} else if (window.obj815_onTouchDown_runningActionsCount == 0) {
	obj815_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj813");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_818 = false;
    	var dropped_id_818;
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
					dropped_818 = true;
					dropped_id_818 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_818) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj815").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj815_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj815_onTouchDown_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj815 
move_825();
function move_825() {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj815");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 426;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_824();
function playAudioFile_824() {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile824")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile824");
			$("#obj_audio_playSoundFile824").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj815_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj815_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj815 
move_821();
function move_821() {
	window.obj815_droppedInsideTargetActions_runningActionsCount = obj815_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj815");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_820();
function playAudioFile_820() {
	window.obj815_droppedInsideTargetActions_runningActionsCount = obj815_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile820")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile820");
			$("#obj_audio_playSoundFile820").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
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
				window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1040();
function runjs_1040() {
	window.obj815_droppedInsideTargetActions_runningActionsCount = obj815_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj815").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1041();
function runjs_1041() {
	window.obj815_droppedInsideTargetActions_runningActionsCount = obj815_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj815").css("color", "white");
	
	setTimeout(function() {
		window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_822();
function incrementCounter_822() {
	window.obj815_droppedInsideTargetActions_runningActionsCount = obj815_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj815_droppedInsideTargetActions_runningActionsCount = window.obj815_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj815_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj815_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj815_droppedInsideTargetActions_runningActionsCount == 0) {
	obj815_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj815_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj815_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 815) {
				console.warn("de-queueing event obj815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj815_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj802_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj802");

//	action: dragDrop
//	target: obj802 
dragDrop_805();
function dragDrop_805() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj802_onTouchDown_runningActionsCount = obj802_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj802');
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
    	window.obj802_onTouchDown_runningActionsCount = window.obj802_onTouchDown_runningActionsCount - 1;

if (window.obj802_onTouchDown_runningActionsCount < 0) {
	window.obj802_onTouchDown_runningActionsCount = 0;
} else if (window.obj802_onTouchDown_runningActionsCount == 0) {
	obj802_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj800");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_805 = false;
    	var dropped_id_805;
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
					dropped_805 = true;
					dropped_id_805 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_805) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj802").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj802_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj802 
move_812();
function move_812() {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1230;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_811();
function playAudioFile_811() {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile811")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile811");
			$("#obj_audio_playSoundFile811").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj802_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj802 
move_808();
function move_808() {
	window.obj802_droppedInsideTargetActions_runningActionsCount = obj802_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 525;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_807();
function playAudioFile_807() {
	window.obj802_droppedInsideTargetActions_runningActionsCount = obj802_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile807")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile807");
			$("#obj_audio_playSoundFile807").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
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
				window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1042();
function runjs_1042() {
	window.obj802_droppedInsideTargetActions_runningActionsCount = obj802_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj802").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1043();
function runjs_1043() {
	window.obj802_droppedInsideTargetActions_runningActionsCount = obj802_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj802").css("color", "white");
	
	setTimeout(function() {
		window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_809();
function incrementCounter_809() {
	window.obj802_droppedInsideTargetActions_runningActionsCount = obj802_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj802_droppedInsideTargetActions_runningActionsCount = window.obj802_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj802_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj802_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj802").trigger("obj802_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 802) {
				console.warn("de-queueing event obj802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj802_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj789_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj789_onTouchDown_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj789");

//	action: dragDrop
//	target: obj789 
dragDrop_792();
function dragDrop_792() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj789_onTouchDown_runningActionsCount = obj789_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj789');
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
    	window.obj789_onTouchDown_runningActionsCount = window.obj789_onTouchDown_runningActionsCount - 1;

if (window.obj789_onTouchDown_runningActionsCount < 0) {
	window.obj789_onTouchDown_runningActionsCount = 0;
} else if (window.obj789_onTouchDown_runningActionsCount == 0) {
	obj789_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj787");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_792 = false;
    	var dropped_id_792;
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
					dropped_792 = true;
					dropped_id_792 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_792) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj789").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj789_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj789_onTouchDown_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj789 
move_799();
function move_799() {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj789");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 729;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_798();
function playAudioFile_798() {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile798")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile798");
			$("#obj_audio_playSoundFile798").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj789_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj789_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj789 
move_795();
function move_795() {
	window.obj789_droppedInsideTargetActions_runningActionsCount = obj789_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj789");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 625;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_794();
function playAudioFile_794() {
	window.obj789_droppedInsideTargetActions_runningActionsCount = obj789_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile794")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile794");
			$("#obj_audio_playSoundFile794").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
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
				window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1044();
function runjs_1044() {
	window.obj789_droppedInsideTargetActions_runningActionsCount = obj789_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj789").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1045();
function runjs_1045() {
	window.obj789_droppedInsideTargetActions_runningActionsCount = obj789_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj789").css("color", "white");
	
	setTimeout(function() {
		window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_796();
function incrementCounter_796() {
	window.obj789_droppedInsideTargetActions_runningActionsCount = obj789_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj789_droppedInsideTargetActions_runningActionsCount = window.obj789_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj789_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj789_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj789_droppedInsideTargetActions_runningActionsCount == 0) {
	obj789_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj789_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj789_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj789").trigger("obj789_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 789) {
				console.warn("de-queueing event obj789." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj789").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj789_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj891_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj891_onTouchDown_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj891");

//	action: dragDrop
//	target: obj891 
dragDrop_894();
function dragDrop_894() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj891_onTouchDown_runningActionsCount = obj891_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj891');
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
    	window.obj891_onTouchDown_runningActionsCount = window.obj891_onTouchDown_runningActionsCount - 1;

if (window.obj891_onTouchDown_runningActionsCount < 0) {
	window.obj891_onTouchDown_runningActionsCount = 0;
} else if (window.obj891_onTouchDown_runningActionsCount == 0) {
	obj891_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj889");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_894 = false;
    	var dropped_id_894;
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
					dropped_894 = true;
					dropped_id_894 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_894) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj891").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj891_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj891_onTouchDown_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj891 
move_901();
function move_901() {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj891");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 930;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_900();
function playAudioFile_900() {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile900")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile900");
			$("#obj_audio_playSoundFile900").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj891_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj891_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj891 
move_897();
function move_897() {
	window.obj891_droppedInsideTargetActions_runningActionsCount = obj891_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj891");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 725;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_896();
function playAudioFile_896() {
	window.obj891_droppedInsideTargetActions_runningActionsCount = obj891_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile896")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile896");
			$("#obj_audio_playSoundFile896").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
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
				window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1046();
function runjs_1046() {
	window.obj891_droppedInsideTargetActions_runningActionsCount = obj891_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj891").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1047();
function runjs_1047() {
	window.obj891_droppedInsideTargetActions_runningActionsCount = obj891_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj891").css("color", "white");
	
	setTimeout(function() {
		window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_898();
function incrementCounter_898() {
	window.obj891_droppedInsideTargetActions_runningActionsCount = obj891_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj891_droppedInsideTargetActions_runningActionsCount = window.obj891_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj891_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj891_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj891_droppedInsideTargetActions_runningActionsCount == 0) {
	obj891_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj891_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj891_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 891) {
				console.warn("de-queueing event obj891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj891_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj878_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj878");

//	action: dragDrop
//	target: obj878 
dragDrop_881();
function dragDrop_881() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj878_onTouchDown_runningActionsCount = obj878_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj878');
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
    	window.obj878_onTouchDown_runningActionsCount = window.obj878_onTouchDown_runningActionsCount - 1;

if (window.obj878_onTouchDown_runningActionsCount < 0) {
	window.obj878_onTouchDown_runningActionsCount = 0;
} else if (window.obj878_onTouchDown_runningActionsCount == 0) {
	obj878_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj876");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_881 = false;
    	var dropped_id_881;
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
					dropped_881 = true;
					dropped_id_881 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_881) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj878").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj878_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj878 
move_888();
function move_888() {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj878");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1033;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_887();
function playAudioFile_887() {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile887")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile887");
			$("#obj_audio_playSoundFile887").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj878_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj878 
move_884();
function move_884() {
	window.obj878_droppedInsideTargetActions_runningActionsCount = obj878_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj878");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 825;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_883();
function playAudioFile_883() {
	window.obj878_droppedInsideTargetActions_runningActionsCount = obj878_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile883")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile883");
			$("#obj_audio_playSoundFile883").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
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
				window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1048();
function runjs_1048() {
	window.obj878_droppedInsideTargetActions_runningActionsCount = obj878_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj878").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1049();
function runjs_1049() {
	window.obj878_droppedInsideTargetActions_runningActionsCount = obj878_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj878").css("color", "white");
	
	setTimeout(function() {
		window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_885();
function incrementCounter_885() {
	window.obj878_droppedInsideTargetActions_runningActionsCount = obj878_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj878_droppedInsideTargetActions_runningActionsCount = window.obj878_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj878_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj878_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 878) {
				console.warn("de-queueing event obj878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj878_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj865_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj865_onTouchDown_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj865");

//	action: dragDrop
//	target: obj865 
dragDrop_868();
function dragDrop_868() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj865_onTouchDown_runningActionsCount = obj865_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj865');
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
    	window.obj865_onTouchDown_runningActionsCount = window.obj865_onTouchDown_runningActionsCount - 1;

if (window.obj865_onTouchDown_runningActionsCount < 0) {
	window.obj865_onTouchDown_runningActionsCount = 0;
} else if (window.obj865_onTouchDown_runningActionsCount == 0) {
	obj865_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj863");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_868 = false;
    	var dropped_id_868;
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
					dropped_868 = true;
					dropped_id_868 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_868) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj865").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj865_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj865_onTouchDown_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj865 
move_875();
function move_875() {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj865");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 327;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_874();
function playAudioFile_874() {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile874")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile874");
			$("#obj_audio_playSoundFile874").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj865_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj865_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj865 
move_871();
function move_871() {
	window.obj865_droppedInsideTargetActions_runningActionsCount = obj865_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj865");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 930;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_870();
function playAudioFile_870() {
	window.obj865_droppedInsideTargetActions_runningActionsCount = obj865_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile870")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile870");
			$("#obj_audio_playSoundFile870").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
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
				window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1050();
function runjs_1050() {
	window.obj865_droppedInsideTargetActions_runningActionsCount = obj865_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj865").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1051();
function runjs_1051() {
	window.obj865_droppedInsideTargetActions_runningActionsCount = obj865_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj865").css("color", "white");
	
	setTimeout(function() {
		window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_872();
function incrementCounter_872() {
	window.obj865_droppedInsideTargetActions_runningActionsCount = obj865_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj865_droppedInsideTargetActions_runningActionsCount = window.obj865_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj865_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj865_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj865_droppedInsideTargetActions_runningActionsCount == 0) {
	obj865_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj865_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj865_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj865").trigger("obj865_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 865) {
				console.warn("de-queueing event obj865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj865_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj852_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_onTouchDown_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj852");

//	action: dragDrop
//	target: obj852 
dragDrop_855();
function dragDrop_855() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj852_onTouchDown_runningActionsCount = obj852_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj852');
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
    	window.obj852_onTouchDown_runningActionsCount = window.obj852_onTouchDown_runningActionsCount - 1;

if (window.obj852_onTouchDown_runningActionsCount < 0) {
	window.obj852_onTouchDown_runningActionsCount = 0;
} else if (window.obj852_onTouchDown_runningActionsCount == 0) {
	obj852_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj850");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_855 = false;
    	var dropped_id_855;
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
					dropped_855 = true;
					dropped_id_855 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_855) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj852").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj852_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj852_onTouchDown_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj852 
move_862();
function move_862() {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj852");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1135;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_861();
function playAudioFile_861() {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile861")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile861");
			$("#obj_audio_playSoundFile861").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj852_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj852 
move_858();
function move_858() {
	window.obj852_droppedInsideTargetActions_runningActionsCount = obj852_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj852");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1030;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_857();
function playAudioFile_857() {
	window.obj852_droppedInsideTargetActions_runningActionsCount = obj852_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile857")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile857");
			$("#obj_audio_playSoundFile857").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
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
				window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1052();
function runjs_1052() {
	window.obj852_droppedInsideTargetActions_runningActionsCount = obj852_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj852").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1053();
function runjs_1053() {
	window.obj852_droppedInsideTargetActions_runningActionsCount = obj852_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj852").css("color", "white");
	
	setTimeout(function() {
		window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_859();
function incrementCounter_859() {
	window.obj852_droppedInsideTargetActions_runningActionsCount = obj852_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj852_droppedInsideTargetActions_runningActionsCount = window.obj852_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj852_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj852_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 852) {
				console.warn("de-queueing event obj852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj852_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj937_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj937_onTouchDown_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj937");

//	action: dragDrop
//	target: obj937 
dragDrop_940();
function dragDrop_940() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj937_onTouchDown_runningActionsCount = obj937_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj937');
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
    	window.obj937_onTouchDown_runningActionsCount = window.obj937_onTouchDown_runningActionsCount - 1;

if (window.obj937_onTouchDown_runningActionsCount < 0) {
	window.obj937_onTouchDown_runningActionsCount = 0;
} else if (window.obj937_onTouchDown_runningActionsCount == 0) {
	obj937_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj935");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_940 = false;
    	var dropped_id_940;
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
					dropped_940 = true;
					dropped_id_940 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_940) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj937").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj937_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj937_onTouchDown_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj937 
move_947();
function move_947() {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj937");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 222;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_946();
function playAudioFile_946() {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile946")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile946");
			$("#obj_audio_playSoundFile946").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj937_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj937_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj937 
move_943();
function move_943() {
	window.obj937_droppedInsideTargetActions_runningActionsCount = obj937_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj937");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1135;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_942();
function playAudioFile_942() {
	window.obj937_droppedInsideTargetActions_runningActionsCount = obj937_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile942")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile942");
			$("#obj_audio_playSoundFile942").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
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
				window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1054();
function runjs_1054() {
	window.obj937_droppedInsideTargetActions_runningActionsCount = obj937_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj937").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1055();
function runjs_1055() {
	window.obj937_droppedInsideTargetActions_runningActionsCount = obj937_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj937").css("color", "white");
	
	setTimeout(function() {
		window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_944();
function incrementCounter_944() {
	window.obj937_droppedInsideTargetActions_runningActionsCount = obj937_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj937_droppedInsideTargetActions_runningActionsCount = window.obj937_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj937_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj937_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj937_droppedInsideTargetActions_runningActionsCount == 0) {
	obj937_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj937_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj937_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj937").trigger("obj937_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 937) {
				console.warn("de-queueing event obj937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj937_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj924_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj924_onTouchDown_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj924");

//	action: dragDrop
//	target: obj924 
dragDrop_927();
function dragDrop_927() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj924_onTouchDown_runningActionsCount = obj924_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj924');
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
    	window.obj924_onTouchDown_runningActionsCount = window.obj924_onTouchDown_runningActionsCount - 1;

if (window.obj924_onTouchDown_runningActionsCount < 0) {
	window.obj924_onTouchDown_runningActionsCount = 0;
} else if (window.obj924_onTouchDown_runningActionsCount == 0) {
	obj924_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj922");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_927 = false;
    	var dropped_id_927;
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
					dropped_927 = true;
					dropped_id_927 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_927) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj924").trigger('SCActionDragDrop663_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj924_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj924_onTouchDown_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj924 
move_934();
function move_934() {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj924");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 630;
	var moveY = 592;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_933();
function playAudioFile_933() {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile933")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile933");
			$("#obj_audio_playSoundFile933").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
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
				window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_SCActionDragDrop663_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj924_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj924_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_droppedInsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj924 
move_930();
function move_930() {
	window.obj924_droppedInsideTargetActions_runningActionsCount = obj924_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj924");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1240;
	var moveY = 410;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_929();
function playAudioFile_929() {
	window.obj924_droppedInsideTargetActions_runningActionsCount = obj924_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile929")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile929");
			$("#obj_audio_playSoundFile929").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
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
				window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_1056();
function runjs_1056() {
	window.obj924_droppedInsideTargetActions_runningActionsCount = obj924_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj924").css("background-color", "rgba(255,255,255,0)");
	
	setTimeout(function() {
		window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1057();
function runjs_1057() {
	window.obj924_droppedInsideTargetActions_runningActionsCount = obj924_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj924").css("color", "white");
	
	setTimeout(function() {
		window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}


//	action: increment counter
//	target: obj696 
incrementCounter_931();
function incrementCounter_931() {
	window.obj924_droppedInsideTargetActions_runningActionsCount = obj924_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj696_counterValue;
	obj696_counterValue = obj696_counterValue + 1;
	if (! obj696_counterCanExceedTargetValue && obj696_counterValue > obj696_counterTargetValue) {
		obj696_counterValue = obj696_counterTargetValue;
	}

	if (oldValue != obj696_counterValue) {
		$("#obj696").trigger('SCEventCounterValueChange');
		$("#obj696").trigger('SCEventCounterIncrease');
		if (obj696_counterValue == obj696_counterTargetValue)
			$("#obj696").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj924_droppedInsideTargetActions_runningActionsCount = window.obj924_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj924_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj924_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj924_droppedInsideTargetActions_runningActionsCount == 0) {
	obj924_droppedInsideTargetActions_actionGroup1();
} }, 1);
}











};
obj924_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj924_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj924").trigger("obj924_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 924) {
				console.warn("de-queueing event obj924." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj924").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj924_droppedInsideTargetActions_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj603: Event Touch Down
 *
 */

$("#obj603").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj603_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj603_onTap is still running");
	return;
}
var obj603_onTap_runningActionsCount = 0;
var obj603_onTap_loopCount = 0;
obj603_onTap_actionGroup0();
});


















/*
 *
 *   obj606: Event Touch Down
 *
 */

$("#obj606").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj606_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj606_onTap is still running");
	return;
}
var obj606_onTap_runningActionsCount = 0;
var obj606_onTap_loopCount = 0;
obj606_onTap_actionGroup0();
});
























































/*
 *
 *   obj613: Event Touch Down
 *
 */

$("#obj613").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj613_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj613_onTap is still running");
	return;
}
var obj613_onTap_runningActionsCount = 0;
var obj613_onTap_loopCount = 0;
obj613_onTap_actionGroup0();
});


















/*
 *
 *   obj634: Event Touch Down
 *
 */

$("#obj634").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj634_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj634_onTap is still running");
	return;
}
var obj634_onTap_runningActionsCount = 0;
var obj634_onTap_loopCount = 0;
obj634_onTap_actionGroup0();
});


















/*
 *
 *   obj626: Event Touch Down
 *
 */

$("#obj626").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj626_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj626_onTap is still running");
	return;
}
var obj626_onTap_runningActionsCount = 0;
var obj626_onTap_loopCount = 0;
obj626_onTap_actionGroup0();
});


























































/*
 *
 *   obj656: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj656");
	var winTarget = document.getElementById("obj656");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj656").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj656_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj656_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj656_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj656_onTouchDown is still running");
	return;
}
var obj656_onTouchDown_runningActionsCount = 0;
var obj656_onTouchDown_loopCount = 0;
obj656_onTouchDown_actionGroup0();
});






/*
 *
 *   obj656: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj656").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj656_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj656_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj656_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj656_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj656_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj656: Event droppedInsideTargetActions
 *
 */

$("#obj656").bind("droppedInsideTargetActions", function(event) {
	if (window.obj656_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj656_droppedInsideTargetActions is still running");
	return;
}
var obj656_droppedInsideTargetActions_runningActionsCount = 0;
var obj656_droppedInsideTargetActions_loopCount = 0;
obj656_droppedInsideTargetActions_actionGroup0();
});

















































/*
 *
 *   obj673: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj673");
	var winTarget = document.getElementById("obj673");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj673").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj673_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj673_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj673_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj673_onTouchDown is still running");
	return;
}
var obj673_onTouchDown_runningActionsCount = 0;
var obj673_onTouchDown_loopCount = 0;
obj673_onTouchDown_actionGroup0();
});






/*
 *
 *   obj673: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj673").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj673_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj673_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj673_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj673_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj673_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj673: Event droppedInsideTargetActions
 *
 */

$("#obj673").bind("droppedInsideTargetActions", function(event) {
	if (window.obj673_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj673_droppedInsideTargetActions is still running");
	return;
}
var obj673_droppedInsideTargetActions_runningActionsCount = 0;
var obj673_droppedInsideTargetActions_loopCount = 0;
obj673_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj686: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj686");
	var winTarget = document.getElementById("obj686");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj686").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj686_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj686_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj686_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj686_onTouchDown is still running");
	return;
}
var obj686_onTouchDown_runningActionsCount = 0;
var obj686_onTouchDown_loopCount = 0;
obj686_onTouchDown_actionGroup0();
});






/*
 *
 *   obj686: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj686").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj686_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj686_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj686_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj686_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj686_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj686: Event droppedInsideTargetActions
 *
 */

$("#obj686").bind("droppedInsideTargetActions", function(event) {
	if (window.obj686_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj686_droppedInsideTargetActions is still running");
	return;
}
var obj686_droppedInsideTargetActions_runningActionsCount = 0;
var obj686_droppedInsideTargetActions_loopCount = 0;
obj686_droppedInsideTargetActions_actionGroup0();
});





































/*
 *
 *   obj696: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj696").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj696_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj696_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj696_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj696_SCEventCounterReachedTargetValue_loopCount = 0;
obj696_SCEventCounterReachedTargetValue_actionGroup0();
});











/*
 *
 *   obj815: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj815");
	var winTarget = document.getElementById("obj815");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj815").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj815_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj815_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj815_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj815_onTouchDown is still running");
	return;
}
var obj815_onTouchDown_runningActionsCount = 0;
var obj815_onTouchDown_loopCount = 0;
obj815_onTouchDown_actionGroup0();
});






/*
 *
 *   obj815: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj815").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj815_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj815_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj815_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj815_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj815_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj815: Event droppedInsideTargetActions
 *
 */

$("#obj815").bind("droppedInsideTargetActions", function(event) {
	if (window.obj815_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj815_droppedInsideTargetActions is still running");
	return;
}
var obj815_droppedInsideTargetActions_runningActionsCount = 0;
var obj815_droppedInsideTargetActions_loopCount = 0;
obj815_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj802: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj802");
	var winTarget = document.getElementById("obj802");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj802").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj802_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj802_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj802_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj802_onTouchDown is still running");
	return;
}
var obj802_onTouchDown_runningActionsCount = 0;
var obj802_onTouchDown_loopCount = 0;
obj802_onTouchDown_actionGroup0();
});






/*
 *
 *   obj802: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj802").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj802_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj802_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj802_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj802_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj802_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj802: Event droppedInsideTargetActions
 *
 */

$("#obj802").bind("droppedInsideTargetActions", function(event) {
	if (window.obj802_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj802_droppedInsideTargetActions is still running");
	return;
}
var obj802_droppedInsideTargetActions_runningActionsCount = 0;
var obj802_droppedInsideTargetActions_loopCount = 0;
obj802_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj789: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj789");
	var winTarget = document.getElementById("obj789");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj789").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj789_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj789_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj789_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj789_onTouchDown is still running");
	return;
}
var obj789_onTouchDown_runningActionsCount = 0;
var obj789_onTouchDown_loopCount = 0;
obj789_onTouchDown_actionGroup0();
});






/*
 *
 *   obj789: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj789").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj789_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj789_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj789_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj789_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj789_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj789: Event droppedInsideTargetActions
 *
 */

$("#obj789").bind("droppedInsideTargetActions", function(event) {
	if (window.obj789_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj789_droppedInsideTargetActions is still running");
	return;
}
var obj789_droppedInsideTargetActions_runningActionsCount = 0;
var obj789_droppedInsideTargetActions_loopCount = 0;
obj789_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj891: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj891");
	var winTarget = document.getElementById("obj891");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj891").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj891_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj891_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj891_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj891_onTouchDown is still running");
	return;
}
var obj891_onTouchDown_runningActionsCount = 0;
var obj891_onTouchDown_loopCount = 0;
obj891_onTouchDown_actionGroup0();
});






/*
 *
 *   obj891: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj891").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj891_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj891_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj891_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj891_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj891_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj891: Event droppedInsideTargetActions
 *
 */

$("#obj891").bind("droppedInsideTargetActions", function(event) {
	if (window.obj891_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj891_droppedInsideTargetActions is still running");
	return;
}
var obj891_droppedInsideTargetActions_runningActionsCount = 0;
var obj891_droppedInsideTargetActions_loopCount = 0;
obj891_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj878: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj878");
	var winTarget = document.getElementById("obj878");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj878").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj878_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj878_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj878_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj878_onTouchDown is still running");
	return;
}
var obj878_onTouchDown_runningActionsCount = 0;
var obj878_onTouchDown_loopCount = 0;
obj878_onTouchDown_actionGroup0();
});






/*
 *
 *   obj878: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj878").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj878_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj878_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj878_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj878_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj878_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj878: Event droppedInsideTargetActions
 *
 */

$("#obj878").bind("droppedInsideTargetActions", function(event) {
	if (window.obj878_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj878_droppedInsideTargetActions is still running");
	return;
}
var obj878_droppedInsideTargetActions_runningActionsCount = 0;
var obj878_droppedInsideTargetActions_loopCount = 0;
obj878_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj865: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj865");
	var winTarget = document.getElementById("obj865");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj865").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj865_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj865_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj865_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj865_onTouchDown is still running");
	return;
}
var obj865_onTouchDown_runningActionsCount = 0;
var obj865_onTouchDown_loopCount = 0;
obj865_onTouchDown_actionGroup0();
});






/*
 *
 *   obj865: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj865").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj865_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj865_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj865_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj865_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj865_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj865: Event droppedInsideTargetActions
 *
 */

$("#obj865").bind("droppedInsideTargetActions", function(event) {
	if (window.obj865_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj865_droppedInsideTargetActions is still running");
	return;
}
var obj865_droppedInsideTargetActions_runningActionsCount = 0;
var obj865_droppedInsideTargetActions_loopCount = 0;
obj865_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj852: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj852");
	var winTarget = document.getElementById("obj852");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj852").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj852_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj852_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj852_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj852_onTouchDown is still running");
	return;
}
var obj852_onTouchDown_runningActionsCount = 0;
var obj852_onTouchDown_loopCount = 0;
obj852_onTouchDown_actionGroup0();
});






/*
 *
 *   obj852: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj852").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj852_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj852_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj852_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj852_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj852_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj852: Event droppedInsideTargetActions
 *
 */

$("#obj852").bind("droppedInsideTargetActions", function(event) {
	if (window.obj852_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj852_droppedInsideTargetActions is still running");
	return;
}
var obj852_droppedInsideTargetActions_runningActionsCount = 0;
var obj852_droppedInsideTargetActions_loopCount = 0;
obj852_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj937: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj937");
	var winTarget = document.getElementById("obj937");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj937").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj937_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj937_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj937_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj937_onTouchDown is still running");
	return;
}
var obj937_onTouchDown_runningActionsCount = 0;
var obj937_onTouchDown_loopCount = 0;
obj937_onTouchDown_actionGroup0();
});






/*
 *
 *   obj937: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj937").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj937_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj937_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj937_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj937_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj937_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj937: Event droppedInsideTargetActions
 *
 */

$("#obj937").bind("droppedInsideTargetActions", function(event) {
	if (window.obj937_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj937_droppedInsideTargetActions is still running");
	return;
}
var obj937_droppedInsideTargetActions_runningActionsCount = 0;
var obj937_droppedInsideTargetActions_loopCount = 0;
obj937_droppedInsideTargetActions_actionGroup0();
});






























/*
 *
 *   obj924: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj924");
	var winTarget = document.getElementById("obj924");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj924").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj924_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj924_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj924_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj924_onTouchDown is still running");
	return;
}
var obj924_onTouchDown_runningActionsCount = 0;
var obj924_onTouchDown_loopCount = 0;
obj924_onTouchDown_actionGroup0();
});






/*
 *
 *   obj924: Event SCActionDragDrop663_droppedOutsideTargetActions
 *
 */

$("#obj924").bind("SCActionDragDrop663_droppedOutsideTargetActions", function(event) {
	if (window.obj924_SCActionDragDrop663_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj924_SCActionDragDrop663_droppedOutsideTargetActions is still running");
	return;
}
var obj924_SCActionDragDrop663_droppedOutsideTargetActions_runningActionsCount = 0;
var obj924_SCActionDragDrop663_droppedOutsideTargetActions_loopCount = 0;
obj924_SCActionDragDrop663_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj924: Event droppedInsideTargetActions
 *
 */

$("#obj924").bind("droppedInsideTargetActions", function(event) {
	if (window.obj924_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj924_droppedInsideTargetActions is still running");
	return;
}
var obj924_droppedInsideTargetActions_runningActionsCount = 0;
var obj924_droppedInsideTargetActions_loopCount = 0;
obj924_droppedInsideTargetActions_actionGroup0();
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
	
$("#obj654").trigger('SCEventShow');
$("#obj601").trigger('SCEventShow');
$("#obj603").trigger('SCEventShow');
$("#obj606").trigger('SCEventShow');
$("#obj609").trigger('SCEventShow');
$("#obj611").trigger('SCEventShow');
$("#obj613").trigger('SCEventShow');
$("#obj634").trigger('SCEventShow');
$("#obj656").trigger('SCEventShow');
$("#obj660").trigger('SCEventShow');
$("#obj669").trigger('SCEventShow');
$("#obj673").trigger('SCEventShow');
$("#obj671").trigger('SCEventShow');
$("#obj686").trigger('SCEventShow');
$("#obj684").trigger('SCEventShow');
$("#obj815").trigger('SCEventShow');
$("#obj813").trigger('SCEventShow');
$("#obj802").trigger('SCEventShow');
$("#obj800").trigger('SCEventShow');
$("#obj789").trigger('SCEventShow');
$("#obj787").trigger('SCEventShow');
$("#obj891").trigger('SCEventShow');
$("#obj889").trigger('SCEventShow');
$("#obj878").trigger('SCEventShow');
$("#obj876").trigger('SCEventShow');
$("#obj865").trigger('SCEventShow');
$("#obj863").trigger('SCEventShow');
$("#obj852").trigger('SCEventShow');
$("#obj850").trigger('SCEventShow');
$("#obj937").trigger('SCEventShow');
$("#obj935").trigger('SCEventShow');
$("#obj924").trigger('SCEventShow');
$("#obj922").trigger('SCEventShow');
	

});