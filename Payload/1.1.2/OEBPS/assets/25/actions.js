pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 7163;
pubcoder.page.title = pubcoder.page.title || "25";
pubcoder.page.number = pubcoder.page.number || 25;
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
var obj7168_onTap_activeActionGroupIndex = -1;
var obj7168_onTap_runningActionsCount = 0;
var obj7168_onTap_loopCount = 0;
var obj7171_onTap_activeActionGroupIndex = -1;
var obj7171_onTap_runningActionsCount = 0;
var obj7171_onTap_loopCount = 0;
var obj7178_onTap_activeActionGroupIndex = -1;
var obj7178_onTap_runningActionsCount = 0;
var obj7178_onTap_loopCount = 0;
var obj7181_onTap_activeActionGroupIndex = -1;
var obj7181_onTap_runningActionsCount = 0;
var obj7181_onTap_loopCount = 0;
var obj7187_onTap_activeActionGroupIndex = -1;
var obj7187_onTap_runningActionsCount = 0;
var obj7187_onTap_loopCount = 0;
var obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj7203_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7203_SCEventCounterReachedTargetValue_loopCount = 0;
var obj7313_onTap_activeActionGroupIndex = -1;
var obj7313_onTap_runningActionsCount = 0;
var obj7313_onTap_loopCount = 0;
var obj7332_onTap_activeActionGroupIndex = -1;
var obj7332_onTap_runningActionsCount = 0;
var obj7332_onTap_loopCount = 0;
var obj7349_onTap_activeActionGroupIndex = -1;
var obj7349_onTap_runningActionsCount = 0;
var obj7349_onTap_loopCount = 0;
var obj7356_onTap_activeActionGroupIndex = -1;
var obj7356_onTap_runningActionsCount = 0;
var obj7356_onTap_loopCount = 0;
var obj7371_SCEventRun_activeActionGroupIndex = -1;
var obj7371_SCEventRun_runningActionsCount = 0;
var obj7371_SCEventRun_loopCount = 0;
var obj7406_onTap_activeActionGroupIndex = -1;
var obj7406_onTap_runningActionsCount = 0;
var obj7406_onTap_loopCount = 0;
var obj7399_onTap_activeActionGroupIndex = -1;
var obj7399_onTap_runningActionsCount = 0;
var obj7399_onTap_loopCount = 0;
var obj7392_onTap_activeActionGroupIndex = -1;
var obj7392_onTap_runningActionsCount = 0;
var obj7392_onTap_loopCount = 0;
var obj7385_onTap_activeActionGroupIndex = -1;
var obj7385_onTap_runningActionsCount = 0;
var obj7385_onTap_loopCount = 0;
var obj7517_onTap_activeActionGroupIndex = -1;
var obj7517_onTap_runningActionsCount = 0;
var obj7517_onTap_loopCount = 0;
var obj7508_onTap_activeActionGroupIndex = -1;
var obj7508_onTap_runningActionsCount = 0;
var obj7508_onTap_loopCount = 0;
var obj7501_onTap_activeActionGroupIndex = -1;
var obj7501_onTap_runningActionsCount = 0;
var obj7501_onTap_loopCount = 0;
var obj7494_onTap_activeActionGroupIndex = -1;
var obj7494_onTap_runningActionsCount = 0;
var obj7494_onTap_loopCount = 0;
var obj7596_onTap_activeActionGroupIndex = -1;
var obj7596_onTap_runningActionsCount = 0;
var obj7596_onTap_loopCount = 0;
var obj7589_onTap_activeActionGroupIndex = -1;
var obj7589_onTap_runningActionsCount = 0;
var obj7589_onTap_loopCount = 0;
var obj7582_onTap_activeActionGroupIndex = -1;
var obj7582_onTap_runningActionsCount = 0;
var obj7582_onTap_loopCount = 0;
var obj7575_onTap_activeActionGroupIndex = -1;
var obj7575_onTap_runningActionsCount = 0;
var obj7575_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj7203_counterValue = 0;
var obj7203_counterTargetValue = 4;
var obj7203_counterCanExceedTargetValue = false;

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
		
obj7168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7168_onTap_activeActionGroupIndex = -1;
		$("#obj7168").trigger("obj7168_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7168) {
				console.warn("de-queueing event obj7168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7168_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7170();
function goToPage_7170() {
	window.obj7168_onTap_runningActionsCount = obj7168_onTap_runningActionsCount + 1;

	$("#anchor376")[0].click();
	window.obj7168_onTap_runningActionsCount = window.obj7168_onTap_runningActionsCount - 1;

if (window.obj7168_onTap_runningActionsCount < 0) {
	window.obj7168_onTap_runningActionsCount = 0;
} else if (window.obj7168_onTap_runningActionsCount == 0) {
	obj7168_onTap_actionGroup1();
}
}










































};
obj7168_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7168_onTap_activeActionGroupIndex = -1;
		$("#obj7168").trigger("obj7168_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7168) {
				console.warn("de-queueing event obj7168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7168_onTap_activeActionGroupIndex = 1;
	











































};
obj7171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7171_onTap_activeActionGroupIndex = -1;
		$("#obj7171").trigger("obj7171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7171) {
				console.warn("de-queueing event obj7171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7171_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7173();
function goToPage_7173() {
	window.obj7171_onTap_runningActionsCount = obj7171_onTap_runningActionsCount + 1;

	$("#anchor377")[0].click();
	window.obj7171_onTap_runningActionsCount = window.obj7171_onTap_runningActionsCount - 1;

if (window.obj7171_onTap_runningActionsCount < 0) {
	window.obj7171_onTap_runningActionsCount = 0;
} else if (window.obj7171_onTap_runningActionsCount == 0) {
	obj7171_onTap_actionGroup1();
}
}










































};
obj7171_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7171_onTap_activeActionGroupIndex = -1;
		$("#obj7171").trigger("obj7171_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7171) {
				console.warn("de-queueing event obj7171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7171_onTap_activeActionGroupIndex = 1;
	











































};
obj7178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7178_onTap_activeActionGroupIndex = -1;
		$("#obj7178").trigger("obj7178_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7178) {
				console.warn("de-queueing event obj7178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7178_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_7180();
function goToPage_7180() {
	window.obj7178_onTap_runningActionsCount = obj7178_onTap_runningActionsCount + 1;

	$("#anchor378")[0].click();
	window.obj7178_onTap_runningActionsCount = window.obj7178_onTap_runningActionsCount - 1;

if (window.obj7178_onTap_runningActionsCount < 0) {
	window.obj7178_onTap_runningActionsCount = 0;
} else if (window.obj7178_onTap_runningActionsCount == 0) {
	obj7178_onTap_actionGroup1();
}
}










































};
obj7178_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7178_onTap_activeActionGroupIndex = -1;
		$("#obj7178").trigger("obj7178_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7178) {
				console.warn("de-queueing event obj7178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7178_onTap_activeActionGroupIndex = 1;
	











































};
obj7181_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7181_onTap_activeActionGroupIndex = -1;
		$("#obj7181").trigger("obj7181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7181) {
				console.warn("de-queueing event obj7181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7181_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7187
(function(){
	window.obj7181_onTap_runningActionsCount = obj7181_onTap_runningActionsCount + 1;


	var selector = "#obj7187";
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
					window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup1();
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
				window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7181_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7181_onTap_activeActionGroupIndex = -1;
		$("#obj7181").trigger("obj7181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7181) {
				console.warn("de-queueing event obj7181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7181_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7181 
hide_7184();
function hide_7184() {
	var selector = "#obj7181";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7181_onTap_runningActionsCount = obj7181_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7184(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7181_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7181_onTap_activeActionGroupIndex = -1;
		$("#obj7181").trigger("obj7181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7181) {
				console.warn("de-queueing event obj7181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7181_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj7195
(function(){
	window.obj7181_onTap_runningActionsCount = obj7181_onTap_runningActionsCount + 1;


	var selector = "#obj7195";
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
					window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup3();
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
				window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7193
(function(){
	window.obj7181_onTap_runningActionsCount = obj7181_onTap_runningActionsCount + 1;


	var selector = "#obj7193";
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
					window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup3();
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
				window.obj7181_onTap_runningActionsCount = window.obj7181_onTap_runningActionsCount - 1;

if (window.obj7181_onTap_runningActionsCount < 0) {
	window.obj7181_onTap_runningActionsCount = 0;
} else if (window.obj7181_onTap_runningActionsCount == 0) {
	obj7181_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7181_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7181_onTap_activeActionGroupIndex = -1;
		$("#obj7181").trigger("obj7181_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7181) {
				console.warn("de-queueing event obj7181." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7181").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7181_onTap_activeActionGroupIndex = 3;
	











































};
obj7187_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7187_onTap_activeActionGroupIndex = -1;
		$("#obj7187").trigger("obj7187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7187) {
				console.warn("de-queueing event obj7187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7187_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7181
(function(){
	window.obj7187_onTap_runningActionsCount = obj7187_onTap_runningActionsCount + 1;


	var selector = "#obj7181";
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
					window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup1();
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
				window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7187_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7187_onTap_activeActionGroupIndex = -1;
		$("#obj7187").trigger("obj7187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7187) {
				console.warn("de-queueing event obj7187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7187_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj7187 
hide_7190();
function hide_7190() {
	var selector = "#obj7187";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7187_onTap_runningActionsCount = obj7187_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7190(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7187_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7187_onTap_activeActionGroupIndex = -1;
		$("#obj7187").trigger("obj7187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7187) {
				console.warn("de-queueing event obj7187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7187_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj7193 
hide_7191();
function hide_7191() {
	var selector = "#obj7193";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7187_onTap_runningActionsCount = obj7187_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7191(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj7195 
hide_7192();
function hide_7192() {
	var selector = "#obj7195";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7187_onTap_runningActionsCount = obj7187_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7192(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7187_onTap_runningActionsCount = window.obj7187_onTap_runningActionsCount - 1;

if (window.obj7187_onTap_runningActionsCount < 0) {
	window.obj7187_onTap_runningActionsCount = 0;
} else if (window.obj7187_onTap_runningActionsCount == 0) {
	obj7187_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7187_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7187_onTap_activeActionGroupIndex = -1;
		$("#obj7187").trigger("obj7187_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7187) {
				console.warn("de-queueing event obj7187." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7187").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7187_onTap_activeActionGroupIndex = 3;
	











































};
obj7203_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7203").trigger("obj7203_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7203) {
				console.warn("de-queueing event obj7203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_7205();
function wait_7205() {
	window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = obj7203_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7203_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj7203_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7203").trigger("obj7203_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7203) {
				console.warn("de-queueing event obj7203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_7206();
function goToPage_7206() {
	window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = obj7203_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor379")[0].click();
	window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj7203_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj7203_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj7203_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj7203").trigger("obj7203_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7203) {
				console.warn("de-queueing event obj7203." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7203").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj7313_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7321();
function playAudioFile_7321() {
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7321")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7321");
			$("#obj_audio_playSoundFile7321").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7322();
function switchText_7322() {
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">48 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7313_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7313_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7313").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7313_content");
			setTimeout(function () {
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7313 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj7313_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_7672();
function wait_7672() {
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj7313_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj7406
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7406";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7399
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7399";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7392
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7392";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7385
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7385";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj7203 
incrementCounter_7323();
function incrementCounter_7323() {
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup3();
} }, 1);
}











};
obj7313_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7328 
hide_7327();
function hide_7327() {
	var selector = "#obj7328";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7327(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7313_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7318
(function(){
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;


	var selector = "#obj7318";
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
					window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup5();
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
				window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7313_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj7324 
hide_7536();
function hide_7536() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup6();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7536(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup6();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7313_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 6;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7378();
function runActionList_7378() {
	window.obj7313_onTap_runningActionsCount = obj7313_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7313_onTap_runningActionsCount = window.obj7313_onTap_runningActionsCount - 1;

if (window.obj7313_onTap_runningActionsCount < 0) {
	window.obj7313_onTap_runningActionsCount = 0;
} else if (window.obj7313_onTap_runningActionsCount == 0) {
	obj7313_onTap_actionGroup7();
}		
	}, 1);
}







};
obj7313_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7313_onTap_activeActionGroupIndex = -1;
		$("#obj7313").trigger("obj7313_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7313) {
				console.warn("de-queueing event obj7313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7313_onTap_activeActionGroupIndex = 7;
	











































};
obj7332_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7332_onTap_activeActionGroupIndex = -1;
		$("#obj7332").trigger("obj7332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7332) {
				console.warn("de-queueing event obj7332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7332_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7343
(function(){
	window.obj7332_onTap_runningActionsCount = obj7332_onTap_runningActionsCount + 1;


	var selector = "#obj7343";
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
					window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
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
				window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7334();
function playAudioFile_7334() {
	window.obj7332_onTap_runningActionsCount = obj7332_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7334")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7334");
			$("#obj_audio_playSoundFile7334").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
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
				window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7332_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7332_onTap_activeActionGroupIndex = -1;
		$("#obj7332").trigger("obj7332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7332) {
				console.warn("de-queueing event obj7332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7332_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7340();
function switchText_7340() {
	window.obj7332_onTap_runningActionsCount = obj7332_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7332").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7332_content");
			setTimeout(function () {
				window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7332_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7332_onTap_activeActionGroupIndex = -1;
		$("#obj7332").trigger("obj7332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7332) {
				console.warn("de-queueing event obj7332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7332_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7341();
function wait_7341() {
	window.obj7332_onTap_runningActionsCount = obj7332_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7332_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7332_onTap_activeActionGroupIndex = -1;
		$("#obj7332").trigger("obj7332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7332) {
				console.warn("de-queueing event obj7332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7332_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7342();
function switchText_7342() {
	window.obj7332_onTap_runningActionsCount = obj7332_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7332_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7332_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7332").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7332_content");
			setTimeout(function () {
				window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7332 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7332_onTap_runningActionsCount = window.obj7332_onTap_runningActionsCount - 1;

if (window.obj7332_onTap_runningActionsCount < 0) {
	window.obj7332_onTap_runningActionsCount = 0;
} else if (window.obj7332_onTap_runningActionsCount == 0) {
	obj7332_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7332_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7332_onTap_activeActionGroupIndex = -1;
		$("#obj7332").trigger("obj7332_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7332) {
				console.warn("de-queueing event obj7332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7332_onTap_activeActionGroupIndex = 4;
	











































};
obj7349_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7349_onTap_activeActionGroupIndex = -1;
		$("#obj7349").trigger("obj7349_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7349) {
				console.warn("de-queueing event obj7349." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7349").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7349_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7347
(function(){
	window.obj7349_onTap_runningActionsCount = obj7349_onTap_runningActionsCount + 1;


	var selector = "#obj7347";
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
					window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
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
				window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7351();
function playAudioFile_7351() {
	window.obj7349_onTap_runningActionsCount = obj7349_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7351")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7351");
			$("#obj_audio_playSoundFile7351").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
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
				window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7349_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7349_onTap_activeActionGroupIndex = -1;
		$("#obj7349").trigger("obj7349_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7349) {
				console.warn("de-queueing event obj7349." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7349").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7349_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7353();
function switchText_7353() {
	window.obj7349_onTap_runningActionsCount = obj7349_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7349_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7349_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7349").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7349_content");
			setTimeout(function () {
				window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7349 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7349_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7349_onTap_activeActionGroupIndex = -1;
		$("#obj7349").trigger("obj7349_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7349) {
				console.warn("de-queueing event obj7349." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7349").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7349_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7354();
function wait_7354() {
	window.obj7349_onTap_runningActionsCount = obj7349_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7349_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7349_onTap_activeActionGroupIndex = -1;
		$("#obj7349").trigger("obj7349_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7349) {
				console.warn("de-queueing event obj7349." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7349").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7349_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7355();
function switchText_7355() {
	window.obj7349_onTap_runningActionsCount = obj7349_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7349_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7349_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7349").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7349_content");
			setTimeout(function () {
				window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7349 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7349_onTap_runningActionsCount = window.obj7349_onTap_runningActionsCount - 1;

if (window.obj7349_onTap_runningActionsCount < 0) {
	window.obj7349_onTap_runningActionsCount = 0;
} else if (window.obj7349_onTap_runningActionsCount == 0) {
	obj7349_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7349_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7349_onTap_activeActionGroupIndex = -1;
		$("#obj7349").trigger("obj7349_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7349) {
				console.warn("de-queueing event obj7349." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7349").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7349_onTap_activeActionGroupIndex = 4;
	











































};
obj7356_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7356_onTap_activeActionGroupIndex = -1;
		$("#obj7356").trigger("obj7356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7356) {
				console.warn("de-queueing event obj7356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7356_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7363
(function(){
	window.obj7356_onTap_runningActionsCount = obj7356_onTap_runningActionsCount + 1;


	var selector = "#obj7363";
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
					window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
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
				window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7358();
function playAudioFile_7358() {
	window.obj7356_onTap_runningActionsCount = obj7356_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7358")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7358");
			$("#obj_audio_playSoundFile7358").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
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
				window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7356_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7356_onTap_activeActionGroupIndex = -1;
		$("#obj7356").trigger("obj7356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7356) {
				console.warn("de-queueing event obj7356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7356_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7360();
function switchText_7360() {
	window.obj7356_onTap_runningActionsCount = obj7356_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7356_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7356_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7356").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7356_content");
			setTimeout(function () {
				window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7356 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7356_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7356_onTap_activeActionGroupIndex = -1;
		$("#obj7356").trigger("obj7356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7356) {
				console.warn("de-queueing event obj7356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7356_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7361();
function wait_7361() {
	window.obj7356_onTap_runningActionsCount = obj7356_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7356_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7356_onTap_activeActionGroupIndex = -1;
		$("#obj7356").trigger("obj7356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7356) {
				console.warn("de-queueing event obj7356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7356_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7362();
function switchText_7362() {
	window.obj7356_onTap_runningActionsCount = obj7356_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7356_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7356_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7356").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7356_content");
			setTimeout(function () {
				window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7356 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7356_onTap_runningActionsCount = window.obj7356_onTap_runningActionsCount - 1;

if (window.obj7356_onTap_runningActionsCount < 0) {
	window.obj7356_onTap_runningActionsCount = 0;
} else if (window.obj7356_onTap_runningActionsCount == 0) {
	obj7356_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7356_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7356_onTap_activeActionGroupIndex = -1;
		$("#obj7356").trigger("obj7356_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7356) {
				console.warn("de-queueing event obj7356." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7356").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7356_onTap_activeActionGroupIndex = 4;
	











































};
obj7371_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7371_SCEventRun_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7371) {
				console.warn("de-queueing event obj7371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7371_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj7343 
hide_7373();
function hide_7373() {
	var selector = "#obj7343";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7371_SCEventRun_runningActionsCount = obj7371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7373(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj7347 
hide_7374();
function hide_7374() {
	var selector = "#obj7347";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7371_SCEventRun_runningActionsCount = obj7371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7374(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj7363 
hide_7375();
function hide_7375() {
	var selector = "#obj7363";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7371_SCEventRun_runningActionsCount = obj7371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7375(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj7433 
hide_7376();
function hide_7376() {
	var selector = "#obj7433";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7371_SCEventRun_runningActionsCount = obj7371_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7376(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7371_SCEventRun_runningActionsCount = window.obj7371_SCEventRun_runningActionsCount - 1;

if (window.obj7371_SCEventRun_runningActionsCount < 0) {
	window.obj7371_SCEventRun_runningActionsCount = 0;
} else if (window.obj7371_SCEventRun_runningActionsCount == 0) {
	obj7371_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7371_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7371_SCEventRun_activeActionGroupIndex = -1;
		$("#obj7371").trigger("obj7371_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7371) {
				console.warn("de-queueing event obj7371." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7371").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7371_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj7406_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7406_onTap_activeActionGroupIndex = -1;
		$("#obj7406").trigger("obj7406_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7406) {
				console.warn("de-queueing event obj7406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7406_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7433
(function(){
	window.obj7406_onTap_runningActionsCount = obj7406_onTap_runningActionsCount + 1;


	var selector = "#obj7433";
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
					window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
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
				window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7428();
function playAudioFile_7428() {
	window.obj7406_onTap_runningActionsCount = obj7406_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7428")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7428");
			$("#obj_audio_playSoundFile7428").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
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
				window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7406_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7406_onTap_activeActionGroupIndex = -1;
		$("#obj7406").trigger("obj7406_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7406) {
				console.warn("de-queueing event obj7406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7406_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7430();
function switchText_7430() {
	window.obj7406_onTap_runningActionsCount = obj7406_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">48 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7406_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7406_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7406").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7406_content");
			setTimeout(function () {
				window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7406 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7406_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7406_onTap_activeActionGroupIndex = -1;
		$("#obj7406").trigger("obj7406_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7406) {
				console.warn("de-queueing event obj7406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7406_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7431();
function wait_7431() {
	window.obj7406_onTap_runningActionsCount = obj7406_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7406_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7406_onTap_activeActionGroupIndex = -1;
		$("#obj7406").trigger("obj7406_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7406) {
				console.warn("de-queueing event obj7406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7406_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7432();
function switchText_7432() {
	window.obj7406_onTap_runningActionsCount = obj7406_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">48 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7406_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7406_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7406").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7406_content");
			setTimeout(function () {
				window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7406 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7406_onTap_runningActionsCount = window.obj7406_onTap_runningActionsCount - 1;

if (window.obj7406_onTap_runningActionsCount < 0) {
	window.obj7406_onTap_runningActionsCount = 0;
} else if (window.obj7406_onTap_runningActionsCount == 0) {
	obj7406_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7406_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7406_onTap_activeActionGroupIndex = -1;
		$("#obj7406").trigger("obj7406_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7406) {
				console.warn("de-queueing event obj7406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7406_onTap_activeActionGroupIndex = 4;
	











































};
obj7399_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7420();
function playAudioFile_7420() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7420")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7420");
			$("#obj_audio_playSoundFile7420").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7422();
function switchText_7422() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">59 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7399_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7399_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7399").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7399_content");
			setTimeout(function () {
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7399 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj7399_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_7673();
function wait_7673() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj7399_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj7517
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7517";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7508
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7508";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7501
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7501";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7494
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7494";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj7203 
incrementCounter_7424();
function incrementCounter_7424() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup3();
} }, 1);
}











};
obj7399_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7318 
hide_7426();
function hide_7426() {
	var selector = "#obj7318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7426(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7399_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7435
(function(){
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;


	var selector = "#obj7435";
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
					window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup5();
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
				window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7399_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 5;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7425();
function runActionList_7425() {
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup6();
}		
	}, 1);
}







};
obj7399_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj7324 
hide_7537();
function hide_7537() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7399_onTap_runningActionsCount = obj7399_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7537(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7399_onTap_runningActionsCount = window.obj7399_onTap_runningActionsCount - 1;

if (window.obj7399_onTap_runningActionsCount < 0) {
	window.obj7399_onTap_runningActionsCount = 0;
} else if (window.obj7399_onTap_runningActionsCount == 0) {
	obj7399_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7399_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7399_onTap_activeActionGroupIndex = -1;
		$("#obj7399").trigger("obj7399_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7399) {
				console.warn("de-queueing event obj7399." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7399").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7399_onTap_activeActionGroupIndex = 7;
	











































};
obj7392_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7438();
function playAudioFile_7438() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7438")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7438");
			$("#obj_audio_playSoundFile7438").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7440();
function switchText_7440() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">59 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7392_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7392_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7392").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7392_content");
			setTimeout(function () {
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7392 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj7392_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_7671();
function wait_7671() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj7392_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj7517
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7517";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7508
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7508";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7501
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7501";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7494
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7494";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj7203 
incrementCounter_7442();
function incrementCounter_7442() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup3();
} }, 1);
}











};
obj7392_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7318 
hide_7444();
function hide_7444() {
	var selector = "#obj7318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7444(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7392_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7435
(function(){
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;


	var selector = "#obj7435";
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
					window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup5();
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
				window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7392_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 5;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7443();
function runActionList_7443() {
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup6();
}		
	}, 1);
}







};
obj7392_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj7324 
hide_7538();
function hide_7538() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7392_onTap_runningActionsCount = obj7392_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7538(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7392_onTap_runningActionsCount = window.obj7392_onTap_runningActionsCount - 1;

if (window.obj7392_onTap_runningActionsCount < 0) {
	window.obj7392_onTap_runningActionsCount = 0;
} else if (window.obj7392_onTap_runningActionsCount == 0) {
	obj7392_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7392_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7392_onTap_activeActionGroupIndex = -1;
		$("#obj7392").trigger("obj7392_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7392) {
				console.warn("de-queueing event obj7392." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7392").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7392_onTap_activeActionGroupIndex = 7;
	











































};
obj7385_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7385_onTap_activeActionGroupIndex = -1;
		$("#obj7385").trigger("obj7385_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7385) {
				console.warn("de-queueing event obj7385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7385_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7363
(function(){
	window.obj7385_onTap_runningActionsCount = obj7385_onTap_runningActionsCount + 1;


	var selector = "#obj7363";
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
					window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
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
				window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7387();
function playAudioFile_7387() {
	window.obj7385_onTap_runningActionsCount = obj7385_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7387")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7387");
			$("#obj_audio_playSoundFile7387").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
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
				window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7385_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7385_onTap_activeActionGroupIndex = -1;
		$("#obj7385").trigger("obj7385_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7385) {
				console.warn("de-queueing event obj7385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7385_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7389();
function switchText_7389() {
	window.obj7385_onTap_runningActionsCount = obj7385_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7385_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7385_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7385").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7385_content");
			setTimeout(function () {
				window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7385 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7385_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7385_onTap_activeActionGroupIndex = -1;
		$("#obj7385").trigger("obj7385_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7385) {
				console.warn("de-queueing event obj7385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7385_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7390();
function wait_7390() {
	window.obj7385_onTap_runningActionsCount = obj7385_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7385_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7385_onTap_activeActionGroupIndex = -1;
		$("#obj7385").trigger("obj7385_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7385) {
				console.warn("de-queueing event obj7385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7385_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7391();
function switchText_7391() {
	window.obj7385_onTap_runningActionsCount = obj7385_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7385_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7385_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7385").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7385_content");
			setTimeout(function () {
				window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7385 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7385_onTap_runningActionsCount = window.obj7385_onTap_runningActionsCount - 1;

if (window.obj7385_onTap_runningActionsCount < 0) {
	window.obj7385_onTap_runningActionsCount = 0;
} else if (window.obj7385_onTap_runningActionsCount == 0) {
	obj7385_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7385_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7385_onTap_activeActionGroupIndex = -1;
		$("#obj7385").trigger("obj7385_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7385) {
				console.warn("de-queueing event obj7385." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7385").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7385_onTap_activeActionGroupIndex = 4;
	











































};
obj7517_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7517_onTap_activeActionGroupIndex = -1;
		$("#obj7517").trigger("obj7517_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7517) {
				console.warn("de-queueing event obj7517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7517_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7433
(function(){
	window.obj7517_onTap_runningActionsCount = obj7517_onTap_runningActionsCount + 1;


	var selector = "#obj7433";
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
					window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
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
				window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7637();
function playAudioFile_7637() {
	window.obj7517_onTap_runningActionsCount = obj7517_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7637")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7637");
			$("#obj_audio_playSoundFile7637").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
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
				window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7517_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7517_onTap_activeActionGroupIndex = -1;
		$("#obj7517").trigger("obj7517_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7517) {
				console.warn("de-queueing event obj7517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7517_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7639();
function switchText_7639() {
	window.obj7517_onTap_runningActionsCount = obj7517_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">48 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7517_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7517_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7517").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7517_content");
			setTimeout(function () {
				window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7517 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7517_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7517_onTap_activeActionGroupIndex = -1;
		$("#obj7517").trigger("obj7517_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7517) {
				console.warn("de-queueing event obj7517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7517_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7640();
function wait_7640() {
	window.obj7517_onTap_runningActionsCount = obj7517_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7517_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7517_onTap_activeActionGroupIndex = -1;
		$("#obj7517").trigger("obj7517_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7517) {
				console.warn("de-queueing event obj7517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7517_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7641();
function switchText_7641() {
	window.obj7517_onTap_runningActionsCount = obj7517_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7517_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7517_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7517").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7517_content");
			setTimeout(function () {
				window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7517 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7517_onTap_runningActionsCount = window.obj7517_onTap_runningActionsCount - 1;

if (window.obj7517_onTap_runningActionsCount < 0) {
	window.obj7517_onTap_runningActionsCount = 0;
} else if (window.obj7517_onTap_runningActionsCount == 0) {
	obj7517_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7517_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7517_onTap_activeActionGroupIndex = -1;
		$("#obj7517").trigger("obj7517_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7517) {
				console.warn("de-queueing event obj7517." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7517").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7517_onTap_activeActionGroupIndex = 4;
	











































};
obj7508_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7508_onTap_activeActionGroupIndex = -1;
		$("#obj7508").trigger("obj7508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7508) {
				console.warn("de-queueing event obj7508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7508_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7343
(function(){
	window.obj7508_onTap_runningActionsCount = obj7508_onTap_runningActionsCount + 1;


	var selector = "#obj7343";
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
					window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
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
				window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7510();
function playAudioFile_7510() {
	window.obj7508_onTap_runningActionsCount = obj7508_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7510")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7510");
			$("#obj_audio_playSoundFile7510").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
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
				window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7508_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7508_onTap_activeActionGroupIndex = -1;
		$("#obj7508").trigger("obj7508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7508) {
				console.warn("de-queueing event obj7508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7508_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7512();
function switchText_7512() {
	window.obj7508_onTap_runningActionsCount = obj7508_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7508_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7508_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7508").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7508_content");
			setTimeout(function () {
				window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7508 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7508_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7508_onTap_activeActionGroupIndex = -1;
		$("#obj7508").trigger("obj7508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7508) {
				console.warn("de-queueing event obj7508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7508_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7513();
function wait_7513() {
	window.obj7508_onTap_runningActionsCount = obj7508_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7508_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7508_onTap_activeActionGroupIndex = -1;
		$("#obj7508").trigger("obj7508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7508) {
				console.warn("de-queueing event obj7508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7508_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7514();
function switchText_7514() {
	window.obj7508_onTap_runningActionsCount = obj7508_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7508_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7508_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7508").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7508_content");
			setTimeout(function () {
				window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7508 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7508_onTap_runningActionsCount = window.obj7508_onTap_runningActionsCount - 1;

if (window.obj7508_onTap_runningActionsCount < 0) {
	window.obj7508_onTap_runningActionsCount = 0;
} else if (window.obj7508_onTap_runningActionsCount == 0) {
	obj7508_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7508_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7508_onTap_activeActionGroupIndex = -1;
		$("#obj7508").trigger("obj7508_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7508) {
				console.warn("de-queueing event obj7508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7508_onTap_activeActionGroupIndex = 4;
	











































};
obj7501_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7501_onTap_activeActionGroupIndex = -1;
		$("#obj7501").trigger("obj7501_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7501) {
				console.warn("de-queueing event obj7501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7501_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7347
(function(){
	window.obj7501_onTap_runningActionsCount = obj7501_onTap_runningActionsCount + 1;


	var selector = "#obj7347";
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
					window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
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
				window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7503();
function playAudioFile_7503() {
	window.obj7501_onTap_runningActionsCount = obj7501_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7503")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7503");
			$("#obj_audio_playSoundFile7503").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
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
				window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7501_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7501_onTap_activeActionGroupIndex = -1;
		$("#obj7501").trigger("obj7501_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7501) {
				console.warn("de-queueing event obj7501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7501_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7505();
function switchText_7505() {
	window.obj7501_onTap_runningActionsCount = obj7501_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7501_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7501_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7501").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7501_content");
			setTimeout(function () {
				window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7501 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7501_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7501_onTap_activeActionGroupIndex = -1;
		$("#obj7501").trigger("obj7501_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7501) {
				console.warn("de-queueing event obj7501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7501_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7506();
function wait_7506() {
	window.obj7501_onTap_runningActionsCount = obj7501_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7501_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7501_onTap_activeActionGroupIndex = -1;
		$("#obj7501").trigger("obj7501_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7501) {
				console.warn("de-queueing event obj7501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7501_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7507();
function switchText_7507() {
	window.obj7501_onTap_runningActionsCount = obj7501_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">59 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7501_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7501_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7501").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7501_content");
			setTimeout(function () {
				window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7501 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7501_onTap_runningActionsCount = window.obj7501_onTap_runningActionsCount - 1;

if (window.obj7501_onTap_runningActionsCount < 0) {
	window.obj7501_onTap_runningActionsCount = 0;
} else if (window.obj7501_onTap_runningActionsCount == 0) {
	obj7501_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7501_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7501_onTap_activeActionGroupIndex = -1;
		$("#obj7501").trigger("obj7501_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7501) {
				console.warn("de-queueing event obj7501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7501_onTap_activeActionGroupIndex = 4;
	











































};
obj7494_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7628();
function playAudioFile_7628() {
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7628")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7628");
			$("#obj_audio_playSoundFile7628").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7629();
function switchText_7629() {
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">36 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7494_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7494_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7494").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7494_content");
			setTimeout(function () {
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7494 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj7494_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_7670();
function wait_7670() {
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj7494_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj7596
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7596";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7589
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7589";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7582
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7582";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj7575
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7575";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




























//	action: increment counter
//	target: obj7203 
incrementCounter_7631();
function incrementCounter_7631() {
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup3();
} }, 1);
}











};
obj7494_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj7435 
hide_7632();
function hide_7632() {
	var selector = "#obj7435";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup4();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7632(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup4();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7494_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 4;
	


//	action: show 
//	selector: #obj7626
(function(){
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;


	var selector = "#obj7626";
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
					window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup5();
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
				window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj7494_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 5;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7633();
function runActionList_7633() {
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup6();
}		
	}, 1);
}







};
obj7494_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj7324 
hide_7634();
function hide_7634() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7494_onTap_runningActionsCount = obj7494_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup7();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7634(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7494_onTap_runningActionsCount = window.obj7494_onTap_runningActionsCount - 1;

if (window.obj7494_onTap_runningActionsCount < 0) {
	window.obj7494_onTap_runningActionsCount = 0;
} else if (window.obj7494_onTap_runningActionsCount == 0) {
	obj7494_onTap_actionGroup7();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7494_onTap_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7494_onTap_activeActionGroupIndex = -1;
		$("#obj7494").trigger("obj7494_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7494) {
				console.warn("de-queueing event obj7494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7494_onTap_activeActionGroupIndex = 7;
	











































};
obj7596_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7596_onTap_activeActionGroupIndex = -1;
		$("#obj7596").trigger("obj7596_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7596) {
				console.warn("de-queueing event obj7596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7596_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7433
(function(){
	window.obj7596_onTap_runningActionsCount = obj7596_onTap_runningActionsCount + 1;


	var selector = "#obj7433";
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
					window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
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
				window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7620();
function playAudioFile_7620() {
	window.obj7596_onTap_runningActionsCount = obj7596_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7620")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7620");
			$("#obj_audio_playSoundFile7620").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
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
				window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7596_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7596_onTap_activeActionGroupIndex = -1;
		$("#obj7596").trigger("obj7596_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7596) {
				console.warn("de-queueing event obj7596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7596_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7622();
function switchText_7622() {
	window.obj7596_onTap_runningActionsCount = obj7596_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">48 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7596_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7596_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7596").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7596_content");
			setTimeout(function () {
				window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7596 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7596_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7596_onTap_activeActionGroupIndex = -1;
		$("#obj7596").trigger("obj7596_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7596) {
				console.warn("de-queueing event obj7596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7596_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7623();
function wait_7623() {
	window.obj7596_onTap_runningActionsCount = obj7596_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7596_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7596_onTap_activeActionGroupIndex = -1;
		$("#obj7596").trigger("obj7596_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7596) {
				console.warn("de-queueing event obj7596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7596_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7624();
function switchText_7624() {
	window.obj7596_onTap_runningActionsCount = obj7596_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">48 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7596_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7596_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7596").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7596_content");
			setTimeout(function () {
				window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7596 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7596_onTap_runningActionsCount = window.obj7596_onTap_runningActionsCount - 1;

if (window.obj7596_onTap_runningActionsCount < 0) {
	window.obj7596_onTap_runningActionsCount = 0;
} else if (window.obj7596_onTap_runningActionsCount == 0) {
	obj7596_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7596_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7596_onTap_activeActionGroupIndex = -1;
		$("#obj7596").trigger("obj7596_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7596) {
				console.warn("de-queueing event obj7596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7596_onTap_activeActionGroupIndex = 4;
	











































};
obj7589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7589_onTap_activeActionGroupIndex = -1;
		$("#obj7589").trigger("obj7589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7589) {
				console.warn("de-queueing event obj7589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7589_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
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
				window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7647();
function playAudioFile_7647() {
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7647")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7647");
			$("#obj_audio_playSoundFile7647").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
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
				window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7648();
function switchText_7648() {
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">59 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7589_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7589_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7589").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7589_content");
			setTimeout(function () {
				window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7589 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj7203 
incrementCounter_7654();
function incrementCounter_7654() {
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup1();
} }, 1);
}











};
obj7589_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7589_onTap_activeActionGroupIndex = -1;
		$("#obj7589").trigger("obj7589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7589) {
				console.warn("de-queueing event obj7589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7589_onTap_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7657();
function runActionList_7657() {
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup2();
}		
	}, 1);
}







};
obj7589_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7589_onTap_activeActionGroupIndex = -1;
		$("#obj7589").trigger("obj7589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7589) {
				console.warn("de-queueing event obj7589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7589_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj7324 
hide_7658();
function hide_7658() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7589_onTap_runningActionsCount = obj7589_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7658(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7589_onTap_runningActionsCount = window.obj7589_onTap_runningActionsCount - 1;

if (window.obj7589_onTap_runningActionsCount < 0) {
	window.obj7589_onTap_runningActionsCount = 0;
} else if (window.obj7589_onTap_runningActionsCount == 0) {
	obj7589_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7589_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7589_onTap_activeActionGroupIndex = -1;
		$("#obj7589").trigger("obj7589_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7589) {
				console.warn("de-queueing event obj7589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7589_onTap_activeActionGroupIndex = 3;
	











































};
obj7582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7582_onTap_activeActionGroupIndex = -1;
		$("#obj7582").trigger("obj7582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7582) {
				console.warn("de-queueing event obj7582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7582_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7324
(function(){
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;


	var selector = "#obj7324";
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
					window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
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
				window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7659();
function playAudioFile_7659() {
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7659")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7659");
			$("#obj_audio_playSoundFile7659").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
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
				window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_7660();
function switchText_7660() {
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto-Bold;\"><span style=\"color: #176cee; font-size: 36px;\">59 грн</span><strong><span style=\"color: #176cee; font-size: 36px;\"><br /></span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7582_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7582_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7582").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7582_content");
			setTimeout(function () {
				window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj7582 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
}
		}, 1);
	}
}
//	action: increment counter
//	target: obj7203 
incrementCounter_7662();
function incrementCounter_7662() {
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;


	var oldValue = obj7203_counterValue;
	obj7203_counterValue = obj7203_counterValue + 1;
	if (! obj7203_counterCanExceedTargetValue && obj7203_counterValue > obj7203_counterTargetValue) {
		obj7203_counterValue = obj7203_counterTargetValue;
	}

	if (oldValue != obj7203_counterValue) {
		$("#obj7203").trigger('SCEventCounterValueChange');
		$("#obj7203").trigger('SCEventCounterIncrease');
		if (obj7203_counterValue == obj7203_counterTargetValue)
			$("#obj7203").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup1();
} }, 1);
}











};
obj7582_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7582_onTap_activeActionGroupIndex = -1;
		$("#obj7582").trigger("obj7582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7582) {
				console.warn("de-queueing event obj7582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7582_onTap_activeActionGroupIndex = 1;
	



































//	action: run action list container
//	target: obj7371 
runActionList_7663();
function runActionList_7663() {
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;

	$("#obj7371").trigger('SCEventRun');
	setTimeout(function() {
		window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup2();
}		
	}, 1);
}







};
obj7582_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7582_onTap_activeActionGroupIndex = -1;
		$("#obj7582").trigger("obj7582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7582) {
				console.warn("de-queueing event obj7582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7582_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj7324 
hide_7664();
function hide_7664() {
	var selector = "#obj7324";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj7582_onTap_runningActionsCount = obj7582_onTap_runningActionsCount + 1;

	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_7664(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj7582_onTap_runningActionsCount = window.obj7582_onTap_runningActionsCount - 1;

if (window.obj7582_onTap_runningActionsCount < 0) {
	window.obj7582_onTap_runningActionsCount = 0;
} else if (window.obj7582_onTap_runningActionsCount == 0) {
	obj7582_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj7582_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7582_onTap_activeActionGroupIndex = -1;
		$("#obj7582").trigger("obj7582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7582) {
				console.warn("de-queueing event obj7582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7582_onTap_activeActionGroupIndex = 3;
	











































};
obj7575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7575_onTap_activeActionGroupIndex = -1;
		$("#obj7575").trigger("obj7575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7575) {
				console.warn("de-queueing event obj7575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7575_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj7363
(function(){
	window.obj7575_onTap_runningActionsCount = obj7575_onTap_runningActionsCount + 1;


	var selector = "#obj7363";
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
					window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
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
				window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_7642();
function playAudioFile_7642() {
	window.obj7575_onTap_runningActionsCount = obj7575_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile7642")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile7642");
			$("#obj_audio_playSoundFile7642").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
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
				window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj7575_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7575_onTap_activeActionGroupIndex = -1;
		$("#obj7575").trigger("obj7575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7575) {
				console.warn("de-queueing event obj7575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7575_onTap_activeActionGroupIndex = 1;
	






























//	action: Switch Text
switchText_7644();
function switchText_7644() {
	window.obj7575_onTap_runningActionsCount = obj7575_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7575_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7575_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7575").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7575_content");
			setTimeout(function () {
				window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj7575 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup2();
}
		}, 1);
	}
}












};
obj7575_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7575_onTap_activeActionGroupIndex = -1;
		$("#obj7575").trigger("obj7575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7575) {
				console.warn("de-queueing event obj7575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7575_onTap_activeActionGroupIndex = 2;
	
















//	action: wait
wait_7645();
function wait_7645() {
	window.obj7575_onTap_runningActionsCount = obj7575_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup3();
}
	}, 500);
}


























};
obj7575_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7575_onTap_activeActionGroupIndex = -1;
		$("#obj7575").trigger("obj7575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7575) {
				console.warn("de-queueing event obj7575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7575_onTap_activeActionGroupIndex = 3;
	






























//	action: Switch Text
switchText_7646();
function switchText_7646() {
	window.obj7575_onTap_runningActionsCount = obj7575_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 36px; font-family: Roboto-Bold;\">36 грн</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj7575_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj7575_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj7575").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj7575_content");
			setTimeout(function () {
				window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj7575 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj7575_onTap_runningActionsCount = window.obj7575_onTap_runningActionsCount - 1;

if (window.obj7575_onTap_runningActionsCount < 0) {
	window.obj7575_onTap_runningActionsCount = 0;
} else if (window.obj7575_onTap_runningActionsCount == 0) {
	obj7575_onTap_actionGroup4();
}
		}, 1);
	}
}












};
obj7575_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7575_onTap_activeActionGroupIndex = -1;
		$("#obj7575").trigger("obj7575_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 7575) {
				console.warn("de-queueing event obj7575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj7575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj7575_onTap_activeActionGroupIndex = 4;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj7168: Event Touch Down
 *
 */

$("#obj7168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7168_onTap is still running");
	return;
}
var obj7168_onTap_runningActionsCount = 0;
var obj7168_onTap_loopCount = 0;
obj7168_onTap_actionGroup0();
});


















/*
 *
 *   obj7171: Event Touch Down
 *
 */

$("#obj7171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7171_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7171_onTap is still running");
	return;
}
var obj7171_onTap_runningActionsCount = 0;
var obj7171_onTap_loopCount = 0;
obj7171_onTap_actionGroup0();
});
























































/*
 *
 *   obj7178: Event Touch Down
 *
 */

$("#obj7178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7178_onTap is still running");
	return;
}
var obj7178_onTap_runningActionsCount = 0;
var obj7178_onTap_loopCount = 0;
obj7178_onTap_actionGroup0();
});


















/*
 *
 *   obj7181: Event Touch Down
 *
 */

$("#obj7181").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7181_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7181_onTap is still running");
	return;
}
var obj7181_onTap_runningActionsCount = 0;
var obj7181_onTap_loopCount = 0;
obj7181_onTap_actionGroup0();
});


















/*
 *
 *   obj7187: Event Touch Down
 *
 */

$("#obj7187").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7187_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7187_onTap is still running");
	return;
}
var obj7187_onTap_runningActionsCount = 0;
var obj7187_onTap_loopCount = 0;
obj7187_onTap_actionGroup0();
});




















































































/*
 *
 *   obj7203: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj7203").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj7203_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7203_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj7203_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj7203_SCEventCounterReachedTargetValue_loopCount = 0;
obj7203_SCEventCounterReachedTargetValue_actionGroup0();
});







































































































































































































/*
 *
 *   obj7313: Event Touch Down
 *
 */

$("#obj7313").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7313_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7313_onTap is still running");
	return;
}
var obj7313_onTap_runningActionsCount = 0;
var obj7313_onTap_loopCount = 0;
obj7313_onTap_actionGroup0();
});


















/*
 *
 *   obj7332: Event Touch Down
 *
 */

$("#obj7332").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7332_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7332_onTap is still running");
	return;
}
var obj7332_onTap_runningActionsCount = 0;
var obj7332_onTap_loopCount = 0;
obj7332_onTap_actionGroup0();
});


















/*
 *
 *   obj7349: Event Touch Down
 *
 */

$("#obj7349").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7349_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7349_onTap is still running");
	return;
}
var obj7349_onTap_runningActionsCount = 0;
var obj7349_onTap_loopCount = 0;
obj7349_onTap_actionGroup0();
});


















/*
 *
 *   obj7356: Event Touch Down
 *
 */

$("#obj7356").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7356_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7356_onTap is still running");
	return;
}
var obj7356_onTap_runningActionsCount = 0;
var obj7356_onTap_loopCount = 0;
obj7356_onTap_actionGroup0();
});



























/*
 *
 *   obj7371: Event SCEventRun
 *
 */

$("#obj7371").bind("SCEventRun", function(event) {
	if (window.obj7371_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7371_SCEventRun is still running");
	return;
}
var obj7371_SCEventRun_runningActionsCount = 0;
var obj7371_SCEventRun_loopCount = 0;
obj7371_SCEventRun_actionGroup0();
});









/*
 *
 *   obj7406: Event Touch Down
 *
 */

$("#obj7406").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7406_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7406_onTap is still running");
	return;
}
var obj7406_onTap_runningActionsCount = 0;
var obj7406_onTap_loopCount = 0;
obj7406_onTap_actionGroup0();
});


















/*
 *
 *   obj7399: Event Touch Down
 *
 */

$("#obj7399").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7399_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7399_onTap is still running");
	return;
}
var obj7399_onTap_runningActionsCount = 0;
var obj7399_onTap_loopCount = 0;
obj7399_onTap_actionGroup0();
});


















/*
 *
 *   obj7392: Event Touch Down
 *
 */

$("#obj7392").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7392_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7392_onTap is still running");
	return;
}
var obj7392_onTap_runningActionsCount = 0;
var obj7392_onTap_loopCount = 0;
obj7392_onTap_actionGroup0();
});


















/*
 *
 *   obj7385: Event Touch Down
 *
 */

$("#obj7385").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7385_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7385_onTap is still running");
	return;
}
var obj7385_onTap_runningActionsCount = 0;
var obj7385_onTap_loopCount = 0;
obj7385_onTap_actionGroup0();
});





































/*
 *
 *   obj7517: Event Touch Down
 *
 */

$("#obj7517").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7517_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7517_onTap is still running");
	return;
}
var obj7517_onTap_runningActionsCount = 0;
var obj7517_onTap_loopCount = 0;
obj7517_onTap_actionGroup0();
});


















/*
 *
 *   obj7508: Event Touch Down
 *
 */

$("#obj7508").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7508_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7508_onTap is still running");
	return;
}
var obj7508_onTap_runningActionsCount = 0;
var obj7508_onTap_loopCount = 0;
obj7508_onTap_actionGroup0();
});


















/*
 *
 *   obj7501: Event Touch Down
 *
 */

$("#obj7501").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7501_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7501_onTap is still running");
	return;
}
var obj7501_onTap_runningActionsCount = 0;
var obj7501_onTap_loopCount = 0;
obj7501_onTap_actionGroup0();
});


















/*
 *
 *   obj7494: Event Touch Down
 *
 */

$("#obj7494").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7494_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7494_onTap is still running");
	return;
}
var obj7494_onTap_runningActionsCount = 0;
var obj7494_onTap_loopCount = 0;
obj7494_onTap_actionGroup0();
});





































/*
 *
 *   obj7596: Event Touch Down
 *
 */

$("#obj7596").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7596_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7596_onTap is still running");
	return;
}
var obj7596_onTap_runningActionsCount = 0;
var obj7596_onTap_loopCount = 0;
obj7596_onTap_actionGroup0();
});


















/*
 *
 *   obj7589: Event Touch Down
 *
 */

$("#obj7589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7589_onTap is still running");
	return;
}
var obj7589_onTap_runningActionsCount = 0;
var obj7589_onTap_loopCount = 0;
obj7589_onTap_actionGroup0();
});


















/*
 *
 *   obj7582: Event Touch Down
 *
 */

$("#obj7582").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7582_onTap is still running");
	return;
}
var obj7582_onTap_runningActionsCount = 0;
var obj7582_onTap_loopCount = 0;
obj7582_onTap_actionGroup0();
});


















/*
 *
 *   obj7575: Event Touch Down
 *
 */

$("#obj7575").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj7575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj7575_onTap is still running");
	return;
}
var obj7575_onTap_runningActionsCount = 0;
var obj7575_onTap_loopCount = 0;
obj7575_onTap_actionGroup0();
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
	
$("#obj7164").trigger('SCEventShow');
$("#obj7166").trigger('SCEventShow');
$("#obj7168").trigger('SCEventShow');
$("#obj7171").trigger('SCEventShow');
$("#obj7174").trigger('SCEventShow');
$("#obj7176").trigger('SCEventShow');
$("#obj7178").trigger('SCEventShow');
$("#obj7181").trigger('SCEventShow');
$("#obj7197").trigger('SCEventShow');
$("#obj7296").trigger('SCEventShow');
$("#obj7298").trigger('SCEventShow');
$("#obj7300").trigger('SCEventShow');
$("#obj7302").trigger('SCEventShow');
$("#obj7304").trigger('SCEventShow');
$("#obj7306").trigger('SCEventShow');
$("#obj7293").trigger('SCEventShow');
$("#obj7315").trigger('SCEventShow');
$("#obj7328").trigger('SCEventShow');
$("#obj7313").trigger('SCEventShow');
$("#obj7332").trigger('SCEventShow');
$("#obj7349").trigger('SCEventShow');
$("#obj7356").trigger('SCEventShow');
	

});