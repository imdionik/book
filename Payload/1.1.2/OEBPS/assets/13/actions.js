pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 1830;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj1835_onTap_activeActionGroupIndex = -1;
var obj1835_onTap_runningActionsCount = 0;
var obj1835_onTap_loopCount = 0;
var obj1838_onTap_activeActionGroupIndex = -1;
var obj1838_onTap_runningActionsCount = 0;
var obj1838_onTap_loopCount = 0;
var obj1845_onTap_activeActionGroupIndex = -1;
var obj1845_onTap_runningActionsCount = 0;
var obj1845_onTap_loopCount = 0;
var obj1848_onTap_activeActionGroupIndex = -1;
var obj1848_onTap_runningActionsCount = 0;
var obj1848_onTap_loopCount = 0;
var obj1854_onTap_activeActionGroupIndex = -1;
var obj1854_onTap_runningActionsCount = 0;
var obj1854_onTap_loopCount = 0;
var obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj1890_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1890_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2051_onDrag_activeActionGroupIndex = -1;
var obj2051_onDrag_runningActionsCount = 0;
var obj2051_onDrag_loopCount = 0;
var obj2051_onTouchDown_activeActionGroupIndex = -1;
var obj2051_onTouchDown_runningActionsCount = 0;
var obj2051_onTouchDown_loopCount = 0;
var obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_3_loopCount = 0;
var obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_2_loopCount = 0;
var obj2051_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2051_droppedInsideTargetActions_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_loopCount = 0;
var obj2087_onDrag_activeActionGroupIndex = -1;
var obj2087_onDrag_runningActionsCount = 0;
var obj2087_onDrag_loopCount = 0;
var obj2087_onTouchDown_activeActionGroupIndex = -1;
var obj2087_onTouchDown_runningActionsCount = 0;
var obj2087_onTouchDown_loopCount = 0;
var obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_3_loopCount = 0;
var obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_2_loopCount = 0;
var obj2087_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2087_droppedInsideTargetActions_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_loopCount = 0;
var obj2120_onDrag_activeActionGroupIndex = -1;
var obj2120_onDrag_runningActionsCount = 0;
var obj2120_onDrag_loopCount = 0;
var obj2120_onTouchDown_activeActionGroupIndex = -1;
var obj2120_onTouchDown_runningActionsCount = 0;
var obj2120_onTouchDown_loopCount = 0;
var obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_3_loopCount = 0;
var obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_2_loopCount = 0;
var obj2120_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2120_droppedInsideTargetActions_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_loopCount = 0;
var obj2219_onDrag_activeActionGroupIndex = -1;
var obj2219_onDrag_runningActionsCount = 0;
var obj2219_onDrag_loopCount = 0;
var obj2219_onTouchDown_activeActionGroupIndex = -1;
var obj2219_onTouchDown_runningActionsCount = 0;
var obj2219_onTouchDown_loopCount = 0;
var obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_3_loopCount = 0;
var obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_2_loopCount = 0;
var obj2219_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2219_droppedInsideTargetActions_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_loopCount = 0;
var obj2188_onDrag_activeActionGroupIndex = -1;
var obj2188_onDrag_runningActionsCount = 0;
var obj2188_onDrag_loopCount = 0;
var obj2188_onTouchDown_activeActionGroupIndex = -1;
var obj2188_onTouchDown_runningActionsCount = 0;
var obj2188_onTouchDown_loopCount = 0;
var obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_3_loopCount = 0;
var obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_2_loopCount = 0;
var obj2188_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2188_droppedInsideTargetActions_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_loopCount = 0;
var obj2157_onDrag_activeActionGroupIndex = -1;
var obj2157_onDrag_runningActionsCount = 0;
var obj2157_onDrag_loopCount = 0;
var obj2157_onTouchDown_activeActionGroupIndex = -1;
var obj2157_onTouchDown_runningActionsCount = 0;
var obj2157_onTouchDown_loopCount = 0;
var obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_3_loopCount = 0;
var obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_2_loopCount = 0;
var obj2157_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2157_droppedInsideTargetActions_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_loopCount = 0;
var obj2337_onDrag_activeActionGroupIndex = -1;
var obj2337_onDrag_runningActionsCount = 0;
var obj2337_onDrag_loopCount = 0;
var obj2337_onTouchDown_activeActionGroupIndex = -1;
var obj2337_onTouchDown_runningActionsCount = 0;
var obj2337_onTouchDown_loopCount = 0;
var obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_3_loopCount = 0;
var obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_2_loopCount = 0;
var obj2337_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2337_droppedInsideTargetActions_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_loopCount = 0;
var obj2306_onDrag_activeActionGroupIndex = -1;
var obj2306_onDrag_runningActionsCount = 0;
var obj2306_onDrag_loopCount = 0;
var obj2306_onTouchDown_activeActionGroupIndex = -1;
var obj2306_onTouchDown_runningActionsCount = 0;
var obj2306_onTouchDown_loopCount = 0;
var obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_3_loopCount = 0;
var obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_2_loopCount = 0;
var obj2306_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2306_droppedInsideTargetActions_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_loopCount = 0;
var obj2275_onDrag_activeActionGroupIndex = -1;
var obj2275_onDrag_runningActionsCount = 0;
var obj2275_onDrag_loopCount = 0;
var obj2275_onTouchDown_activeActionGroupIndex = -1;
var obj2275_onTouchDown_runningActionsCount = 0;
var obj2275_onTouchDown_loopCount = 0;
var obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
var obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_3_loopCount = 0;
var obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_2_loopCount = 0;
var obj2275_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2275_droppedInsideTargetActions_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_loopCount = 0;
var obj4656_onTap_activeActionGroupIndex = -1;
var obj4656_onTap_runningActionsCount = 0;
var obj4656_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj1890_counterValue = 0;
var obj1890_counterTargetValue = 9;
var obj1890_counterCanExceedTargetValue = false;

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
		
obj1835_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1835_onTap_activeActionGroupIndex = -1;
		$("#obj1835").trigger("obj1835_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1835) {
				console.warn("de-queueing event obj1835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1835_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1837();
function goToPage_1837() {
	window.obj1835_onTap_runningActionsCount = obj1835_onTap_runningActionsCount + 1;

	$("#anchor107")[0].click();
	window.obj1835_onTap_runningActionsCount = window.obj1835_onTap_runningActionsCount - 1;

if (window.obj1835_onTap_runningActionsCount < 0) {
	window.obj1835_onTap_runningActionsCount = 0;
} else if (window.obj1835_onTap_runningActionsCount == 0) {
	obj1835_onTap_actionGroup1();
}
}










































};
obj1835_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1835_onTap_activeActionGroupIndex = -1;
		$("#obj1835").trigger("obj1835_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1835) {
				console.warn("de-queueing event obj1835." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1835").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1835_onTap_activeActionGroupIndex = 1;
	











































};
obj1838_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1838_onTap_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1838) {
				console.warn("de-queueing event obj1838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1838_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1840();
function goToPage_1840() {
	window.obj1838_onTap_runningActionsCount = obj1838_onTap_runningActionsCount + 1;

	$("#anchor108")[0].click();
	window.obj1838_onTap_runningActionsCount = window.obj1838_onTap_runningActionsCount - 1;

if (window.obj1838_onTap_runningActionsCount < 0) {
	window.obj1838_onTap_runningActionsCount = 0;
} else if (window.obj1838_onTap_runningActionsCount == 0) {
	obj1838_onTap_actionGroup1();
}
}










































};
obj1838_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1838_onTap_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1838) {
				console.warn("de-queueing event obj1838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1838_onTap_activeActionGroupIndex = 1;
	











































};
obj1845_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1845_onTap_activeActionGroupIndex = -1;
		$("#obj1845").trigger("obj1845_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1845) {
				console.warn("de-queueing event obj1845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1845_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1847();
function goToPage_1847() {
	window.obj1845_onTap_runningActionsCount = obj1845_onTap_runningActionsCount + 1;

	$("#anchor109")[0].click();
	window.obj1845_onTap_runningActionsCount = window.obj1845_onTap_runningActionsCount - 1;

if (window.obj1845_onTap_runningActionsCount < 0) {
	window.obj1845_onTap_runningActionsCount = 0;
} else if (window.obj1845_onTap_runningActionsCount == 0) {
	obj1845_onTap_actionGroup1();
}
}










































};
obj1845_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1845_onTap_activeActionGroupIndex = -1;
		$("#obj1845").trigger("obj1845_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1845) {
				console.warn("de-queueing event obj1845." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1845").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1845_onTap_activeActionGroupIndex = 1;
	











































};
obj1848_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1848_onTap_activeActionGroupIndex = -1;
		$("#obj1848").trigger("obj1848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1848) {
				console.warn("de-queueing event obj1848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1848_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1854
(function(){
	window.obj1848_onTap_runningActionsCount = obj1848_onTap_runningActionsCount + 1;


	var selector = "#obj1854";
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
					window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup1();
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
				window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1848_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1848_onTap_activeActionGroupIndex = -1;
		$("#obj1848").trigger("obj1848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1848) {
				console.warn("de-queueing event obj1848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1848_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1848 
hide_1851();
function hide_1851() {
	var selector = "#obj1848";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1848_onTap_runningActionsCount = obj1848_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1851(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1848_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1848_onTap_activeActionGroupIndex = -1;
		$("#obj1848").trigger("obj1848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1848) {
				console.warn("de-queueing event obj1848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1848_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj1862
(function(){
	window.obj1848_onTap_runningActionsCount = obj1848_onTap_runningActionsCount + 1;


	var selector = "#obj1862";
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
					window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup3();
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
				window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1860
(function(){
	window.obj1848_onTap_runningActionsCount = obj1848_onTap_runningActionsCount + 1;


	var selector = "#obj1860";
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
					window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup3();
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
				window.obj1848_onTap_runningActionsCount = window.obj1848_onTap_runningActionsCount - 1;

if (window.obj1848_onTap_runningActionsCount < 0) {
	window.obj1848_onTap_runningActionsCount = 0;
} else if (window.obj1848_onTap_runningActionsCount == 0) {
	obj1848_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1848_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1848_onTap_activeActionGroupIndex = -1;
		$("#obj1848").trigger("obj1848_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1848) {
				console.warn("de-queueing event obj1848." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1848").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1848_onTap_activeActionGroupIndex = 3;
	











































};
obj1854_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1854) {
				console.warn("de-queueing event obj1854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj1848
(function(){
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;


	var selector = "#obj1848";
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
					window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
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
				window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj1854_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1854) {
				console.warn("de-queueing event obj1854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1854 
hide_1857();
function hide_1857() {
	var selector = "#obj1854";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1857(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1854_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1854) {
				console.warn("de-queueing event obj1854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1860 
hide_1858();
function hide_1858() {
	var selector = "#obj1860";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1858(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj1862 
hide_1859();
function hide_1859() {
	var selector = "#obj1862";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1859(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;

if (window.obj1854_onTap_runningActionsCount < 0) {
	window.obj1854_onTap_runningActionsCount = 0;
} else if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj1854_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1854) {
				console.warn("de-queueing event obj1854." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1854").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 3;
	











































};
obj1890_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_1892();
function wait_1892() {
	window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = obj1890_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1890_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj1890_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_1893();
function goToPage_1893() {
	window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = obj1890_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor110")[0].click();
	window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj1890_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj1890_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj1890_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj2051_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2051");

//	action: dragDrop
//	target: obj2051 
dragDrop_2054();
function dragDrop_2054() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2051_onTouchDown_runningActionsCount = obj2051_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2051');
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
    	window.obj2051_onTouchDown_runningActionsCount = window.obj2051_onTouchDown_runningActionsCount - 1;

if (window.obj2051_onTouchDown_runningActionsCount < 0) {
	window.obj2051_onTouchDown_runningActionsCount = 0;
} else if (window.obj2051_onTouchDown_runningActionsCount == 0) {
	obj2051_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2014","#obj2016","#obj2018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2054 = false;
    	var dropped_id_2054;
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
					dropped_2054 = true;
					dropped_id_2054 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2054) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2051").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2051_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2051_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2051 
move_2084();
function move_2084() {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2051");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1113;
	var moveY = 720;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2085();
function playAudioFile_2085() {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2085")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2085");
			$("#obj_audio_playSoundFile2085").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2051_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2018 
hide_19849();
function hide_19849() {
	var selector = "#obj2018";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19849(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2031
(function(){
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2031";
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
					window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19877
(function(){
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19877";
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
					window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2051 
move_2080();
function move_2080() {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2051");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2079();
function playAudioFile_2079() {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2079")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2079");
			$("#obj_audio_playSoundFile2079").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2077();
function runjs_2077() {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2078();
function runjs_2078() {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2051").css("color", "black");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2051_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2081();
function incrementCounter_2081() {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = obj2051_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2051_droppedInsideTargetActions_3_runningActionsCount = window.obj2051_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2051_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2051_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2016 
hide_19848();
function hide_19848() {
	var selector = "#obj2016";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19848(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2033
(function(){
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2033";
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
					window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19879
(function(){
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19879";
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
					window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2051 
move_2072();
function move_2072() {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2051");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2071();
function playAudioFile_2071() {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2071")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2071");
			$("#obj_audio_playSoundFile2071").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2069();
function runjs_2069() {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2070();
function runjs_2070() {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2051").css("color", "black");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2051_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2073();
function incrementCounter_2073() {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = obj2051_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2051_droppedInsideTargetActions_2_runningActionsCount = window.obj2051_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2051_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2051_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2014 
hide_19847();
function hide_19847() {
	var selector = "#obj2014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19847(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2035
(function(){
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2035";
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
					window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19881
(function(){
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19881";
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
					window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2051 
move_2060();
function move_2060() {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2051");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2059();
function playAudioFile_2059() {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2059")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2059");
			$("#obj_audio_playSoundFile2059").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
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
				window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2058();
function runjs_2058() {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2063();
function runjs_2063() {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2051").css("color", "black");
	
	setTimeout(function() {
		window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2051_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2061();
function incrementCounter_2061() {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = obj2051_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2051_droppedInsideTargetActions_runningActionsCount = window.obj2051_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2051_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2051_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2051_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2051_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2051_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2051").trigger("obj2051_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2051) {
				console.warn("de-queueing event obj2051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2051_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2087_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2087");

//	action: dragDrop
//	target: obj2087 
dragDrop_2090();
function dragDrop_2090() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2087_onTouchDown_runningActionsCount = obj2087_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2087');
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
    	window.obj2087_onTouchDown_runningActionsCount = window.obj2087_onTouchDown_runningActionsCount - 1;

if (window.obj2087_onTouchDown_runningActionsCount < 0) {
	window.obj2087_onTouchDown_runningActionsCount = 0;
} else if (window.obj2087_onTouchDown_runningActionsCount == 0) {
	obj2087_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2014","#obj2016","#obj2018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2090 = false;
    	var dropped_id_2090;
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
					dropped_2090 = true;
					dropped_id_2090 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2090) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2087").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2087_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2087_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2087 
move_2117();
function move_2117() {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2087");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 651;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2116();
function playAudioFile_2116() {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2116")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2116");
			$("#obj_audio_playSoundFile2116").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2087_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2018 
hide_19852();
function hide_19852() {
	var selector = "#obj2018";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19852(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2031
(function(){
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2031";
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
					window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19877
(function(){
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19877";
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
					window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2087 
move_2113();
function move_2113() {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2087");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2112();
function playAudioFile_2112() {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2112")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2112");
			$("#obj_audio_playSoundFile2112").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2110();
function runjs_2110() {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2087").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2111();
function runjs_2111() {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2087").css("color", "black");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2087_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2114();
function incrementCounter_2114() {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = obj2087_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2087_droppedInsideTargetActions_3_runningActionsCount = window.obj2087_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2087_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2087_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2016 
hide_19851();
function hide_19851() {
	var selector = "#obj2016";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19851(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2033
(function(){
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2033";
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
					window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19879
(function(){
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19879";
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
					window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2087 
move_2105();
function move_2105() {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2087");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2104();
function playAudioFile_2104() {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2104")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2104");
			$("#obj_audio_playSoundFile2104").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2102();
function runjs_2102() {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2087").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2103();
function runjs_2103() {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2087").css("color", "black");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2087_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2106();
function incrementCounter_2106() {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = obj2087_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2087_droppedInsideTargetActions_2_runningActionsCount = window.obj2087_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2087_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2087_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2014 
hide_19850();
function hide_19850() {
	var selector = "#obj2014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19850(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2035
(function(){
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2035";
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
					window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19881
(function(){
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19881";
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
					window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2087 
move_2097();
function move_2097() {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2087");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2096();
function playAudioFile_2096() {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2096")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2096");
			$("#obj_audio_playSoundFile2096").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
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
				window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2094();
function runjs_2094() {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2087").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2095();
function runjs_2095() {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2087").css("color", "black");
	
	setTimeout(function() {
		window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2087_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2098();
function incrementCounter_2098() {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = obj2087_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2087_droppedInsideTargetActions_runningActionsCount = window.obj2087_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2087_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2087_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2087_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2087_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2087_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2087").trigger("obj2087_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2087) {
				console.warn("de-queueing event obj2087." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2087").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2087_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2120_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2120");

//	action: dragDrop
//	target: obj2120 
dragDrop_2123();
function dragDrop_2123() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2120_onTouchDown_runningActionsCount = obj2120_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2120');
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
    	window.obj2120_onTouchDown_runningActionsCount = window.obj2120_onTouchDown_runningActionsCount - 1;

if (window.obj2120_onTouchDown_runningActionsCount < 0) {
	window.obj2120_onTouchDown_runningActionsCount = 0;
} else if (window.obj2120_onTouchDown_runningActionsCount == 0) {
	obj2120_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2014","#obj2016","#obj2018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2123 = false;
    	var dropped_id_2123;
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
					dropped_2123 = true;
					dropped_id_2123 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2123) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2120").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2120_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2120_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2120 
move_2150();
function move_2150() {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2120");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 126;
	var moveY = 722;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2149();
function playAudioFile_2149() {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2149")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2149");
			$("#obj_audio_playSoundFile2149").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2120_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2018 
hide_19855();
function hide_19855() {
	var selector = "#obj2018";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19855(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2031
(function(){
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2031";
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
					window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19877
(function(){
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19877";
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
					window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2120 
move_2146();
function move_2146() {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2120");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2145();
function playAudioFile_2145() {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2145")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2145");
			$("#obj_audio_playSoundFile2145").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2143();
function runjs_2143() {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2120").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2144();
function runjs_2144() {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2120").css("color", "black");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2120_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2147();
function incrementCounter_2147() {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = obj2120_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2120_droppedInsideTargetActions_3_runningActionsCount = window.obj2120_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2120_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2120_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2016 
hide_19854();
function hide_19854() {
	var selector = "#obj2016";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19854(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2033
(function(){
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2033";
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
					window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19879
(function(){
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19879";
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
					window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2120 
move_2138();
function move_2138() {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2120");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2137();
function playAudioFile_2137() {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2137")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2137");
			$("#obj_audio_playSoundFile2137").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2135();
function runjs_2135() {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2120").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2136();
function runjs_2136() {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2120").css("color", "black");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2120_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2139();
function incrementCounter_2139() {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = obj2120_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2120_droppedInsideTargetActions_2_runningActionsCount = window.obj2120_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2120_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2120_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2014 
hide_19853();
function hide_19853() {
	var selector = "#obj2014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19853(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj2035
(function(){
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2035";
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
					window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19881
(function(){
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19881";
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
					window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2120 
move_2130();
function move_2130() {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2120");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 141;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2129();
function playAudioFile_2129() {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2129")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2129");
			$("#obj_audio_playSoundFile2129").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
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
				window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2127();
function runjs_2127() {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2120").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2128();
function runjs_2128() {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2120").css("color", "black");
	
	setTimeout(function() {
		window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2120_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2131();
function incrementCounter_2131() {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = obj2120_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2120_droppedInsideTargetActions_runningActionsCount = window.obj2120_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2120_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2120_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2120_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2120_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2120_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2120").trigger("obj2120_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2120) {
				console.warn("de-queueing event obj2120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2120_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2219_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2219");

//	action: dragDrop
//	target: obj2219 
dragDrop_2222();
function dragDrop_2222() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2219_onTouchDown_runningActionsCount = obj2219_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2219');
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
    	window.obj2219_onTouchDown_runningActionsCount = window.obj2219_onTouchDown_runningActionsCount - 1;

if (window.obj2219_onTouchDown_runningActionsCount < 0) {
	window.obj2219_onTouchDown_runningActionsCount = 0;
} else if (window.obj2219_onTouchDown_runningActionsCount == 0) {
	obj2219_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2260","#obj2258","#obj2256");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2222 = false;
    	var dropped_id_2222;
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
					dropped_2222 = true;
					dropped_id_2222 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2222) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2219").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2219_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2219_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2219 
move_2249();
function move_2249() {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2219");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 126;
	var moveY = 647;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2248();
function playAudioFile_2248() {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2248")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2248");
			$("#obj_audio_playSoundFile2248").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2219_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2256 
hide_19913();
function hide_19913() {
	var selector = "#obj2256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19913(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19871
(function(){
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19871";
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
					window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2250
(function(){
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2250";
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
					window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2219 
move_2245();
function move_2245() {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2219");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2244();
function playAudioFile_2244() {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2244")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2244");
			$("#obj_audio_playSoundFile2244").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2242();
function runjs_2242() {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2243();
function runjs_2243() {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2219").css("color", "black");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2219_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2246();
function incrementCounter_2246() {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = obj2219_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2219_droppedInsideTargetActions_3_runningActionsCount = window.obj2219_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2219_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2219_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2258 
hide_19911();
function hide_19911() {
	var selector = "#obj2258";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19911(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19873
(function(){
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19873";
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
					window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2252
(function(){
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2252";
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
					window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2219 
move_2237();
function move_2237() {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2219");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2236();
function playAudioFile_2236() {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2236")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2236");
			$("#obj_audio_playSoundFile2236").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2234();
function runjs_2234() {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2235();
function runjs_2235() {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2219").css("color", "black");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2219_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2238();
function incrementCounter_2238() {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = obj2219_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2219_droppedInsideTargetActions_2_runningActionsCount = window.obj2219_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2219_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2219_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2260 
hide_19910();
function hide_19910() {
	var selector = "#obj2260";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19910(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19875
(function(){
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19875";
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
					window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2254
(function(){
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2254";
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
					window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2219 
move_2229();
function move_2229() {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2219");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2228();
function playAudioFile_2228() {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2228")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2228");
			$("#obj_audio_playSoundFile2228").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
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
				window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2226();
function runjs_2226() {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2227();
function runjs_2227() {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2219").css("color", "black");
	
	setTimeout(function() {
		window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2219_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2230();
function incrementCounter_2230() {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = obj2219_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2219_droppedInsideTargetActions_runningActionsCount = window.obj2219_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2219_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2219_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2219_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2219_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2219_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2219").trigger("obj2219_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2219) {
				console.warn("de-queueing event obj2219." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2219").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2219_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2188_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2188");

//	action: dragDrop
//	target: obj2188 
dragDrop_2191();
function dragDrop_2191() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2188_onTouchDown_runningActionsCount = obj2188_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2188');
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
    	window.obj2188_onTouchDown_runningActionsCount = window.obj2188_onTouchDown_runningActionsCount - 1;

if (window.obj2188_onTouchDown_runningActionsCount < 0) {
	window.obj2188_onTouchDown_runningActionsCount = 0;
} else if (window.obj2188_onTouchDown_runningActionsCount == 0) {
	obj2188_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2260","#obj2258","#obj2256");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2191 = false;
    	var dropped_id_2191;
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
					dropped_2191 = true;
					dropped_id_2191 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2191) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2188").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2188_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2188 
move_2218();
function move_2218() {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2188");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 387;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2217();
function playAudioFile_2217() {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2217")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2217");
			$("#obj_audio_playSoundFile2217").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2188_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2256 
hide_19920();
function hide_19920() {
	var selector = "#obj2256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19920(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19871
(function(){
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19871";
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
					window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2250
(function(){
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2250";
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
					window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2188 
move_2214();
function move_2214() {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2188");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2213();
function playAudioFile_2213() {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2213")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2213");
			$("#obj_audio_playSoundFile2213").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2211();
function runjs_2211() {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2212();
function runjs_2212() {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2188").css("color", "black");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2188_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2215();
function incrementCounter_2215() {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = obj2188_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2188_droppedInsideTargetActions_3_runningActionsCount = window.obj2188_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2188_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2188_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2258 
hide_19918();
function hide_19918() {
	var selector = "#obj2258";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19918(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19873
(function(){
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19873";
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
					window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2252
(function(){
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2252";
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
					window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2188 
move_2206();
function move_2206() {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2188");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2205();
function playAudioFile_2205() {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2205")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2205");
			$("#obj_audio_playSoundFile2205").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2203();
function runjs_2203() {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2204();
function runjs_2204() {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2188").css("color", "black");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2188_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2207();
function incrementCounter_2207() {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = obj2188_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2188_droppedInsideTargetActions_2_runningActionsCount = window.obj2188_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2188_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2188_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2260 
hide_19917();
function hide_19917() {
	var selector = "#obj2260";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19917(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19875
(function(){
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19875";
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
					window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2254
(function(){
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2254";
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
					window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2188 
move_2198();
function move_2198() {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2188");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 652;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2197();
function playAudioFile_2197() {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2197")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2197");
			$("#obj_audio_playSoundFile2197").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
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
				window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2195();
function runjs_2195() {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2188").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2196();
function runjs_2196() {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2188").css("color", "black");
	
	setTimeout(function() {
		window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2188_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2199();
function incrementCounter_2199() {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = obj2188_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2188_droppedInsideTargetActions_runningActionsCount = window.obj2188_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2188_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2188_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2188_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2188_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2188_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2188").trigger("obj2188_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2188) {
				console.warn("de-queueing event obj2188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2188_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2157_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2157");

//	action: dragDrop
//	target: obj2157 
dragDrop_2160();
function dragDrop_2160() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2157_onTouchDown_runningActionsCount = obj2157_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2157');
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
    	window.obj2157_onTouchDown_runningActionsCount = window.obj2157_onTouchDown_runningActionsCount - 1;

if (window.obj2157_onTouchDown_runningActionsCount < 0) {
	window.obj2157_onTouchDown_runningActionsCount = 0;
} else if (window.obj2157_onTouchDown_runningActionsCount == 0) {
	obj2157_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2260","#obj2258","#obj2256");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2160 = false;
    	var dropped_id_2160;
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
					dropped_2160 = true;
					dropped_id_2160 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2160) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2157").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2157_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2157 
move_2187();
function move_2187() {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2157");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 773;
	var moveY = 719;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2186();
function playAudioFile_2186() {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2186")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2186");
			$("#obj_audio_playSoundFile2186").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2157_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2256 
hide_19926();
function hide_19926() {
	var selector = "#obj2256";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19926(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19871
(function(){
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19871";
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
					window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2250
(function(){
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2250";
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
					window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2157 
move_2183();
function move_2183() {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2157");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 619;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2182();
function playAudioFile_2182() {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2182")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2182");
			$("#obj_audio_playSoundFile2182").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2180();
function runjs_2180() {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2157").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2181();
function runjs_2181() {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2157").css("color", "black");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2157_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2184();
function incrementCounter_2184() {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = obj2157_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2157_droppedInsideTargetActions_3_runningActionsCount = window.obj2157_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2157_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2157_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2258 
hide_19924();
function hide_19924() {
	var selector = "#obj2258";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19924(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19873
(function(){
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19873";
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
					window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2252
(function(){
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2252";
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
					window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2157 
move_2175();
function move_2175() {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2157");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 618;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2174();
function playAudioFile_2174() {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2174")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2174");
			$("#obj_audio_playSoundFile2174").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2172();
function runjs_2172() {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2157").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2173();
function runjs_2173() {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2157").css("color", "black");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2157_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2176();
function incrementCounter_2176() {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = obj2157_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2157_droppedInsideTargetActions_2_runningActionsCount = window.obj2157_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2157_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2157_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2260 
hide_19922();
function hide_19922() {
	var selector = "#obj2260";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19922(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19875
(function(){
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19875";
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
					window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2254
(function(){
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2254";
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
					window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2157 
move_2167();
function move_2167() {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2157");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 619;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2166();
function playAudioFile_2166() {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2166")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2166");
			$("#obj_audio_playSoundFile2166").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
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
				window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2164();
function runjs_2164() {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2157").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2165();
function runjs_2165() {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2157").css("color", "black");
	
	setTimeout(function() {
		window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2157_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2168();
function incrementCounter_2168() {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = obj2157_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2157_droppedInsideTargetActions_runningActionsCount = window.obj2157_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2157_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2157_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2157_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2157_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2157_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2157").trigger("obj2157_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2157) {
				console.warn("de-queueing event obj2157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2157_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2337_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2337");

//	action: dragDrop
//	target: obj2337 
dragDrop_2340();
function dragDrop_2340() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2337_onTouchDown_runningActionsCount = obj2337_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2337');
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
    	window.obj2337_onTouchDown_runningActionsCount = window.obj2337_onTouchDown_runningActionsCount - 1;

if (window.obj2337_onTouchDown_runningActionsCount < 0) {
	window.obj2337_onTouchDown_runningActionsCount = 0;
} else if (window.obj2337_onTouchDown_runningActionsCount == 0) {
	obj2337_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2378","#obj2376","#obj2374");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2340 = false;
    	var dropped_id_2340;
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
					dropped_2340 = true;
					dropped_id_2340 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2340) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2337").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2337_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2337_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2337 
move_2367();
function move_2367() {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1113;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2366();
function playAudioFile_2366() {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2366")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2366");
			$("#obj_audio_playSoundFile2366").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2337_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2374 
hide_19932();
function hide_19932() {
	var selector = "#obj2374";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19932(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19865
(function(){
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19865";
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
					window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2368
(function(){
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2368";
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
					window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2337 
move_2363();
function move_2363() {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2362();
function playAudioFile_2362() {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2362")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2362");
			$("#obj_audio_playSoundFile2362").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2360();
function runjs_2360() {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2337").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2361();
function runjs_2361() {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2337").css("color", "black");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2337_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2364();
function incrementCounter_2364() {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = obj2337_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2337_droppedInsideTargetActions_3_runningActionsCount = window.obj2337_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2337_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2337_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2376 
hide_19930();
function hide_19930() {
	var selector = "#obj2376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19930(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19867
(function(){
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19867";
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
					window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2370
(function(){
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2370";
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
					window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2337 
move_2355();
function move_2355() {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2354();
function playAudioFile_2354() {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2354")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2354");
			$("#obj_audio_playSoundFile2354").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2352();
function runjs_2352() {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2337").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2353();
function runjs_2353() {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2337").css("color", "black");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2337_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2356();
function incrementCounter_2356() {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = obj2337_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2337_droppedInsideTargetActions_2_runningActionsCount = window.obj2337_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2337_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2337_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2378 
hide_19928();
function hide_19928() {
	var selector = "#obj2378";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19928(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19869
(function(){
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19869";
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
					window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2372
(function(){
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2372";
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
					window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2337 
move_2347();
function move_2347() {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2346();
function playAudioFile_2346() {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2346")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2346");
			$("#obj_audio_playSoundFile2346").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
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
				window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2344();
function runjs_2344() {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2337").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2345();
function runjs_2345() {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2337").css("color", "black");
	
	setTimeout(function() {
		window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2337_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2348();
function incrementCounter_2348() {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = obj2337_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2337_droppedInsideTargetActions_runningActionsCount = window.obj2337_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2337_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2337_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2337_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2337_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2337_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2337").trigger("obj2337_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2337) {
				console.warn("de-queueing event obj2337." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2337").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2337_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2306_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2306");

//	action: dragDrop
//	target: obj2306 
dragDrop_2309();
function dragDrop_2309() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2306_onTouchDown_runningActionsCount = obj2306_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2306');
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
    	window.obj2306_onTouchDown_runningActionsCount = window.obj2306_onTouchDown_runningActionsCount - 1;

if (window.obj2306_onTouchDown_runningActionsCount < 0) {
	window.obj2306_onTouchDown_runningActionsCount = 0;
} else if (window.obj2306_onTouchDown_runningActionsCount == 0) {
	obj2306_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2378","#obj2376","#obj2374");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2309 = false;
    	var dropped_id_2309;
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
					dropped_2309 = true;
					dropped_id_2309 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2309) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2306").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2306_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2306_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2306 
move_2336();
function move_2336() {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 881;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2335();
function playAudioFile_2335() {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2335")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2335");
			$("#obj_audio_playSoundFile2335").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2306_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2374 
hide_19938();
function hide_19938() {
	var selector = "#obj2374";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19938(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19865
(function(){
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19865";
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
					window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2368
(function(){
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2368";
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
					window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2306 
move_2332();
function move_2332() {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2331();
function playAudioFile_2331() {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2331")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2331");
			$("#obj_audio_playSoundFile2331").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2329();
function runjs_2329() {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2330();
function runjs_2330() {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2306").css("color", "black");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2306_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2333();
function incrementCounter_2333() {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = obj2306_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2306_droppedInsideTargetActions_3_runningActionsCount = window.obj2306_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2306_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2306_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2376 
hide_19936();
function hide_19936() {
	var selector = "#obj2376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19936(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19867
(function(){
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19867";
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
					window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2370
(function(){
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2370";
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
					window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2306 
move_2324();
function move_2324() {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1070;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2323();
function playAudioFile_2323() {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2323")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2323");
			$("#obj_audio_playSoundFile2323").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2321();
function runjs_2321() {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2322();
function runjs_2322() {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2306").css("color", "black");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2306_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2325();
function incrementCounter_2325() {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = obj2306_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2306_droppedInsideTargetActions_2_runningActionsCount = window.obj2306_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2306_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2306_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2378 
hide_19934();
function hide_19934() {
	var selector = "#obj2378";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19934(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19869
(function(){
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19869";
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
					window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2372
(function(){
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2372";
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
					window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2306 
move_2316();
function move_2316() {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2306");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1078;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2315();
function playAudioFile_2315() {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2315")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2315");
			$("#obj_audio_playSoundFile2315").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
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
				window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2313();
function runjs_2313() {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2314();
function runjs_2314() {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2306").css("color", "black");
	
	setTimeout(function() {
		window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2306_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2317();
function incrementCounter_2317() {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = obj2306_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2306_droppedInsideTargetActions_runningActionsCount = window.obj2306_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2306_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2306_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2306_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2306_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2306_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2306").trigger("obj2306_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2306) {
				console.warn("de-queueing event obj2306." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2306").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2306_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj2275_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_onTouchDown_activeActionGroupIndex = 0;
	



















//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2275");

//	action: dragDrop
//	target: obj2275 
dragDrop_2278();
function dragDrop_2278() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2275_onTouchDown_runningActionsCount = obj2275_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2275');
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
    	window.obj2275_onTouchDown_runningActionsCount = window.obj2275_onTouchDown_runningActionsCount - 1;

if (window.obj2275_onTouchDown_runningActionsCount < 0) {
	window.obj2275_onTouchDown_runningActionsCount = 0;
} else if (window.obj2275_onTouchDown_runningActionsCount == 0) {
	obj2275_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2378","#obj2376","#obj2374");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2278 = false;
    	var dropped_id_2278;
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
					dropped_2278 = true;
					dropped_id_2278 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2278) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2275").trigger('SCActionDragDrop2054_droppedOutsideTargetActions');
		}
    };

	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}























};
obj2275_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_onTouchDown_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_onTouchDown_activeActionGroupIndex = 1;
	











































};
obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	



//	action: move
//	target: obj2275 
move_2305();
function move_2305() {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 452;
	var moveY = 721;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2304();
function playAudioFile_2304() {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2304")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2304");
			$("#obj_audio_playSoundFile2304").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
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
				window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount - 1;

if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	











































};
obj2275_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2374 
hide_19944();
function hide_19944() {
	var selector = "#obj2374";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19944(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19865
(function(){
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj19865";
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
					window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2368
(function(){
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


	var selector = "#obj2368";
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
					window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2275 
move_2301();
function move_2301() {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


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

	var targetObject = $("#obj2275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1037;
	var moveY = 560;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2300();
function playAudioFile_2300() {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2300")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2300");
			$("#obj_audio_playSoundFile2300").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
			}, false);
		} else {
			window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2298();
function runjs_2298() {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2275").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2299();
function runjs_2299() {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


	$("#obj2275").css("color", "black");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}














};
obj2275_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2302();
function incrementCounter_2302() {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = obj2275_droppedInsideTargetActions_3_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2275_droppedInsideTargetActions_3_runningActionsCount = window.obj2275_droppedInsideTargetActions_3_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_3_actionGroup2();
} }, 1);
}











};
obj2275_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_3_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	











































};
obj2275_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2376 
hide_19942();
function hide_19942() {
	var selector = "#obj2376";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19942(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19867
(function(){
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj19867";
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
					window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2370
(function(){
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


	var selector = "#obj2370";
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
					window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2275 
move_2293();
function move_2293() {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


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

	var targetObject = $("#obj2275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1037;
	var moveY = 465;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2292();
function playAudioFile_2292() {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2292")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2292");
			$("#obj_audio_playSoundFile2292").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
			}, false);
		} else {
			window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2290();
function runjs_2290() {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2275").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2291();
function runjs_2291() {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


	$("#obj2275").css("color", "black");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}














};
obj2275_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2294();
function incrementCounter_2294() {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = obj2275_droppedInsideTargetActions_2_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2275_droppedInsideTargetActions_2_runningActionsCount = window.obj2275_droppedInsideTargetActions_2_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_2_actionGroup2();
} }, 1);
}











};
obj2275_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_2_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	











































};
obj2275_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2378 
hide_19940();
function hide_19940() {
	var selector = "#obj2378";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19940(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19869
(function(){
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj19869";
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
					window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2372
(function(){
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


	var selector = "#obj2372";
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
					window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2275 
move_2285();
function move_2285() {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


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

	var targetObject = $("#obj2275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1037;
	var moveY = 362;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}








//	action: playAudioFile
playAudioFile_2284();
function playAudioFile_2284() {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile2284")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile2284");
			$("#obj_audio_playSoundFile2284").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
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
				window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
			}, false);
		} else {
			window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
		}
	}

	
	
	
}























//	action: Run JavaScript
runjs_2282();
function runjs_2282() {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2275").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}
//	action: Run JavaScript
runjs_2283();
function runjs_2283() {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


	$("#obj2275").css("color", "black");
	
	setTimeout(function() {
		window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}














};
obj2275_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj1890 
incrementCounter_2286();
function incrementCounter_2286() {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = obj2275_droppedInsideTargetActions_runningActionsCount + 1;


	var oldValue = obj1890_counterValue;
	obj1890_counterValue = obj1890_counterValue + 1;
	if (! obj1890_counterCanExceedTargetValue && obj1890_counterValue > obj1890_counterTargetValue) {
		obj1890_counterValue = obj1890_counterTargetValue;
	}

	if (oldValue != obj1890_counterValue) {
		$("#obj1890").trigger('SCEventCounterValueChange');
		$("#obj1890").trigger('SCEventCounterIncrease');
		if (obj1890_counterValue == obj1890_counterTargetValue)
			$("#obj1890").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj2275_droppedInsideTargetActions_runningActionsCount = window.obj2275_droppedInsideTargetActions_runningActionsCount - 1;

if (window.obj2275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2275_droppedInsideTargetActions_actionGroup2();
} }, 1);
}











};
obj2275_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_droppedInsideTargetActions_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_droppedInsideTargetActions_activeActionGroupIndex = 2;
	











































};
obj4656_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4656_onTap_activeActionGroupIndex = -1;
		$("#obj4656").trigger("obj4656_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4656) {
				console.warn("de-queueing event obj4656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4656_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4658();
function goToPage_4658() {
	window.obj4656_onTap_runningActionsCount = obj4656_onTap_runningActionsCount + 1;

	$("#anchor147")[0].click();
	window.obj4656_onTap_runningActionsCount = window.obj4656_onTap_runningActionsCount - 1;

if (window.obj4656_onTap_runningActionsCount < 0) {
	window.obj4656_onTap_runningActionsCount = 0;
} else if (window.obj4656_onTap_runningActionsCount == 0) {
	obj4656_onTap_actionGroup1();
}
}










































};
obj4656_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4656_onTap_activeActionGroupIndex = -1;
		$("#obj4656").trigger("obj4656_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4656) {
				console.warn("de-queueing event obj4656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4656_onTap_activeActionGroupIndex = 1;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj1835: Event Touch Down
 *
 */

$("#obj1835").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1835_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1835_onTap is still running");
	return;
}
var obj1835_onTap_runningActionsCount = 0;
var obj1835_onTap_loopCount = 0;
obj1835_onTap_actionGroup0();
});


















/*
 *
 *   obj1838: Event Touch Down
 *
 */

$("#obj1838").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1838_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1838_onTap is still running");
	return;
}
var obj1838_onTap_runningActionsCount = 0;
var obj1838_onTap_loopCount = 0;
obj1838_onTap_actionGroup0();
});
























































/*
 *
 *   obj1845: Event Touch Down
 *
 */

$("#obj1845").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1845_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1845_onTap is still running");
	return;
}
var obj1845_onTap_runningActionsCount = 0;
var obj1845_onTap_loopCount = 0;
obj1845_onTap_actionGroup0();
});


















/*
 *
 *   obj1848: Event Touch Down
 *
 */

$("#obj1848").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1848_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1848_onTap is still running");
	return;
}
var obj1848_onTap_runningActionsCount = 0;
var obj1848_onTap_loopCount = 0;
obj1848_onTap_actionGroup0();
});


















/*
 *
 *   obj1854: Event Touch Down
 *
 */

$("#obj1854").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1854_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1854_onTap is still running");
	return;
}
var obj1854_onTap_runningActionsCount = 0;
var obj1854_onTap_loopCount = 0;
obj1854_onTap_actionGroup0();
});




















































































/*
 *
 *   obj1890: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj1890").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj1890_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1890_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj1890_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj1890_SCEventCounterReachedTargetValue_loopCount = 0;
obj1890_SCEventCounterReachedTargetValue_actionGroup0();
});



















































































































































































































































































































































































































































































/*
 *
 *   obj2051: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2051");
	var winTarget = document.getElementById("obj2051");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2051").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2051_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2051_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2051_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2051_onTouchDown is still running");
	return;
}
var obj2051_onTouchDown_runningActionsCount = 0;
var obj2051_onTouchDown_loopCount = 0;
obj2051_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2051: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2051").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2051_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2051_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2051: Event droppedInsideTargetActions_3
 *
 */

$("#obj2051").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2051_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2051_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2051_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_3_loopCount = 0;
obj2051_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2051: Event droppedInsideTargetActions_2
 *
 */

$("#obj2051").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2051_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2051_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2051_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_2_loopCount = 0;
obj2051_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2051: Event droppedInsideTargetActions
 *
 */

$("#obj2051").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2051_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2051_droppedInsideTargetActions is still running");
	return;
}
var obj2051_droppedInsideTargetActions_runningActionsCount = 0;
var obj2051_droppedInsideTargetActions_loopCount = 0;
obj2051_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2087: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2087");
	var winTarget = document.getElementById("obj2087");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2087").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2087_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2087_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2087_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2087_onTouchDown is still running");
	return;
}
var obj2087_onTouchDown_runningActionsCount = 0;
var obj2087_onTouchDown_loopCount = 0;
obj2087_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2087: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2087").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2087_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2087_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2087: Event droppedInsideTargetActions_3
 *
 */

$("#obj2087").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2087_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2087_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2087_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_3_loopCount = 0;
obj2087_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2087: Event droppedInsideTargetActions_2
 *
 */

$("#obj2087").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2087_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2087_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2087_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_2_loopCount = 0;
obj2087_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2087: Event droppedInsideTargetActions
 *
 */

$("#obj2087").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2087_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2087_droppedInsideTargetActions is still running");
	return;
}
var obj2087_droppedInsideTargetActions_runningActionsCount = 0;
var obj2087_droppedInsideTargetActions_loopCount = 0;
obj2087_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2120: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2120");
	var winTarget = document.getElementById("obj2120");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2120").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2120_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2120_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2120_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2120_onTouchDown is still running");
	return;
}
var obj2120_onTouchDown_runningActionsCount = 0;
var obj2120_onTouchDown_loopCount = 0;
obj2120_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2120: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2120").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2120_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2120_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2120: Event droppedInsideTargetActions_3
 *
 */

$("#obj2120").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2120_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2120_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2120_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_3_loopCount = 0;
obj2120_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2120: Event droppedInsideTargetActions_2
 *
 */

$("#obj2120").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2120_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2120_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2120_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_2_loopCount = 0;
obj2120_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2120: Event droppedInsideTargetActions
 *
 */

$("#obj2120").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2120_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2120_droppedInsideTargetActions is still running");
	return;
}
var obj2120_droppedInsideTargetActions_runningActionsCount = 0;
var obj2120_droppedInsideTargetActions_loopCount = 0;
obj2120_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2219: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2219");
	var winTarget = document.getElementById("obj2219");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2219").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2219_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2219_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2219_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2219_onTouchDown is still running");
	return;
}
var obj2219_onTouchDown_runningActionsCount = 0;
var obj2219_onTouchDown_loopCount = 0;
obj2219_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2219: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2219").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2219_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2219_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2219: Event droppedInsideTargetActions_3
 *
 */

$("#obj2219").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2219_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2219_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2219_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_3_loopCount = 0;
obj2219_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2219: Event droppedInsideTargetActions_2
 *
 */

$("#obj2219").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2219_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2219_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2219_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_2_loopCount = 0;
obj2219_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2219: Event droppedInsideTargetActions
 *
 */

$("#obj2219").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2219_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2219_droppedInsideTargetActions is still running");
	return;
}
var obj2219_droppedInsideTargetActions_runningActionsCount = 0;
var obj2219_droppedInsideTargetActions_loopCount = 0;
obj2219_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2188: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2188");
	var winTarget = document.getElementById("obj2188");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2188").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2188_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2188_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2188_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_onTouchDown is still running");
	return;
}
var obj2188_onTouchDown_runningActionsCount = 0;
var obj2188_onTouchDown_loopCount = 0;
obj2188_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2188: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2188").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2188_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2188: Event droppedInsideTargetActions_3
 *
 */

$("#obj2188").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2188_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2188_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_3_loopCount = 0;
obj2188_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2188: Event droppedInsideTargetActions_2
 *
 */

$("#obj2188").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2188_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2188_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_2_loopCount = 0;
obj2188_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2188: Event droppedInsideTargetActions
 *
 */

$("#obj2188").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2188_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2188_droppedInsideTargetActions is still running");
	return;
}
var obj2188_droppedInsideTargetActions_runningActionsCount = 0;
var obj2188_droppedInsideTargetActions_loopCount = 0;
obj2188_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2157: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2157");
	var winTarget = document.getElementById("obj2157");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2157").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2157_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2157_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2157_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2157_onTouchDown is still running");
	return;
}
var obj2157_onTouchDown_runningActionsCount = 0;
var obj2157_onTouchDown_loopCount = 0;
obj2157_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2157: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2157").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2157_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2157_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2157: Event droppedInsideTargetActions_3
 *
 */

$("#obj2157").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2157_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2157_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2157_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_3_loopCount = 0;
obj2157_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2157: Event droppedInsideTargetActions_2
 *
 */

$("#obj2157").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2157_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2157_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2157_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_2_loopCount = 0;
obj2157_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2157: Event droppedInsideTargetActions
 *
 */

$("#obj2157").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2157_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2157_droppedInsideTargetActions is still running");
	return;
}
var obj2157_droppedInsideTargetActions_runningActionsCount = 0;
var obj2157_droppedInsideTargetActions_loopCount = 0;
obj2157_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2337: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2337");
	var winTarget = document.getElementById("obj2337");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2337").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2337_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2337_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2337_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2337_onTouchDown is still running");
	return;
}
var obj2337_onTouchDown_runningActionsCount = 0;
var obj2337_onTouchDown_loopCount = 0;
obj2337_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2337: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2337").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2337_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2337_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2337: Event droppedInsideTargetActions_3
 *
 */

$("#obj2337").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2337_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2337_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2337_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_3_loopCount = 0;
obj2337_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2337: Event droppedInsideTargetActions_2
 *
 */

$("#obj2337").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2337_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2337_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2337_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_2_loopCount = 0;
obj2337_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2337: Event droppedInsideTargetActions
 *
 */

$("#obj2337").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2337_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2337_droppedInsideTargetActions is still running");
	return;
}
var obj2337_droppedInsideTargetActions_runningActionsCount = 0;
var obj2337_droppedInsideTargetActions_loopCount = 0;
obj2337_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2306: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2306");
	var winTarget = document.getElementById("obj2306");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2306").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2306_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2306_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2306_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2306_onTouchDown is still running");
	return;
}
var obj2306_onTouchDown_runningActionsCount = 0;
var obj2306_onTouchDown_loopCount = 0;
obj2306_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2306: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2306").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2306_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2306_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2306: Event droppedInsideTargetActions_3
 *
 */

$("#obj2306").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2306_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2306_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2306_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_3_loopCount = 0;
obj2306_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2306: Event droppedInsideTargetActions_2
 *
 */

$("#obj2306").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2306_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2306_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2306_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_2_loopCount = 0;
obj2306_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2306: Event droppedInsideTargetActions
 *
 */

$("#obj2306").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2306_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2306_droppedInsideTargetActions is still running");
	return;
}
var obj2306_droppedInsideTargetActions_runningActionsCount = 0;
var obj2306_droppedInsideTargetActions_loopCount = 0;
obj2306_droppedInsideTargetActions_actionGroup0();
});











/*
 *
 *   obj2275: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2275");
	var winTarget = document.getElementById("obj2275");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }

$("#obj2275").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2275_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2275_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2275_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_onTouchDown is still running");
	return;
}
var obj2275_onTouchDown_runningActionsCount = 0;
var obj2275_onTouchDown_loopCount = 0;
obj2275_onTouchDown_actionGroup0();
});






/*
 *
 *   obj2275: Event SCActionDragDrop2054_droppedOutsideTargetActions
 *
 */

$("#obj2275").bind("SCActionDragDrop2054_droppedOutsideTargetActions", function(event) {
	if (window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_SCActionDragDrop2054_droppedOutsideTargetActions is still running");
	return;
}
var obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_loopCount = 0;
obj2275_SCActionDragDrop2054_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2275: Event droppedInsideTargetActions_3
 *
 */

$("#obj2275").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2275_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2275_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_3_loopCount = 0;
obj2275_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2275: Event droppedInsideTargetActions_2
 *
 */

$("#obj2275").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2275_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2275_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_2_loopCount = 0;
obj2275_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2275: Event droppedInsideTargetActions
 *
 */

$("#obj2275").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2275_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_droppedInsideTargetActions is still running");
	return;
}
var obj2275_droppedInsideTargetActions_runningActionsCount = 0;
var obj2275_droppedInsideTargetActions_loopCount = 0;
obj2275_droppedInsideTargetActions_actionGroup0();
});




















































































































































































/*
 *
 *   obj4656: Event Touch Down
 *
 */

$("#obj4656").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4656_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4656_onTap is still running");
	return;
}
var obj4656_onTap_runningActionsCount = 0;
var obj4656_onTap_loopCount = 0;
obj4656_onTap_actionGroup0();
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
	
$("#obj1831").trigger('SCEventShow');
$("#obj1833").trigger('SCEventShow');
$("#obj1835").trigger('SCEventShow');
$("#obj1838").trigger('SCEventShow');
$("#obj1841").trigger('SCEventShow');
$("#obj1843").trigger('SCEventShow');
$("#obj1845").trigger('SCEventShow');
$("#obj1848").trigger('SCEventShow');
$("#obj1864").trigger('SCEventShow');
$("#obj2001").trigger('SCEventShow');
$("#obj2004").trigger('SCEventShow');
$("#obj2008").trigger('SCEventShow');
$("#obj2006").trigger('SCEventShow');
$("#obj2010").trigger('SCEventShow');
$("#obj2012").trigger('SCEventShow');
$("#obj2014").trigger('SCEventShow');
$("#obj2016").trigger('SCEventShow');
$("#obj2018").trigger('SCEventShow');
$("#obj2260").trigger('SCEventShow');
$("#obj2258").trigger('SCEventShow');
$("#obj2256").trigger('SCEventShow');
$("#obj2378").trigger('SCEventShow');
$("#obj2376").trigger('SCEventShow');
$("#obj2374").trigger('SCEventShow');
$("#obj2035").trigger('SCEventShow');
$("#obj2033").trigger('SCEventShow');
$("#obj2031").trigger('SCEventShow');
$("#obj2254").trigger('SCEventShow');
$("#obj2252").trigger('SCEventShow');
$("#obj2250").trigger('SCEventShow');
$("#obj2051").trigger('SCEventShow');
$("#obj2087").trigger('SCEventShow');
$("#obj2120").trigger('SCEventShow');
$("#obj2219").trigger('SCEventShow');
$("#obj2188").trigger('SCEventShow');
$("#obj2157").trigger('SCEventShow');
$("#obj2337").trigger('SCEventShow');
$("#obj2306").trigger('SCEventShow');
$("#obj2275").trigger('SCEventShow');
$("#obj19881").trigger('SCEventShow');
$("#obj19879").trigger('SCEventShow');
$("#obj19877").trigger('SCEventShow');
$("#obj19875").trigger('SCEventShow');
$("#obj19873").trigger('SCEventShow');
$("#obj19871").trigger('SCEventShow');
$("#obj4656").trigger('SCEventShow');
	

});