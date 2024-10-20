pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 15430;
pubcoder.page.title = pubcoder.page.title || "43";
pubcoder.page.number = pubcoder.page.number || 43;
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
var obj15435_onTap_activeActionGroupIndex = -1;
var obj15435_onTap_runningActionsCount = 0;
var obj15435_onTap_loopCount = 0;
var obj15438_onTap_activeActionGroupIndex = -1;
var obj15438_onTap_runningActionsCount = 0;
var obj15438_onTap_loopCount = 0;
var obj15445_onTap_activeActionGroupIndex = -1;
var obj15445_onTap_runningActionsCount = 0;
var obj15445_onTap_loopCount = 0;
var obj15448_onTap_activeActionGroupIndex = -1;
var obj15448_onTap_runningActionsCount = 0;
var obj15448_onTap_loopCount = 0;
var obj15454_onTap_activeActionGroupIndex = -1;
var obj15454_onTap_runningActionsCount = 0;
var obj15454_onTap_loopCount = 0;
var obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj15464_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15464_SCEventCounterReachedTargetValue_loopCount = 0;
var obj15521_SCEventRun_activeActionGroupIndex = -1;
var obj15521_SCEventRun_runningActionsCount = 0;
var obj15521_SCEventRun_loopCount = 0;
var obj15824_onTap_activeActionGroupIndex = -1;
var obj15824_onTap_runningActionsCount = 0;
var obj15824_onTap_loopCount = 0;
var obj15858_onTap_activeActionGroupIndex = -1;
var obj15858_onTap_runningActionsCount = 0;
var obj15858_onTap_loopCount = 0;
var obj15891_onTap_activeActionGroupIndex = -1;
var obj15891_onTap_runningActionsCount = 0;
var obj15891_onTap_loopCount = 0;
var obj15901_onTap_activeActionGroupIndex = -1;
var obj15901_onTap_runningActionsCount = 0;
var obj15901_onTap_loopCount = 0;
var obj15909_onTap_activeActionGroupIndex = -1;
var obj15909_onTap_runningActionsCount = 0;
var obj15909_onTap_loopCount = 0;
var obj15921_onTap_activeActionGroupIndex = -1;
var obj15921_onTap_runningActionsCount = 0;
var obj15921_onTap_loopCount = 0;
var obj15950_SCEventRun_activeActionGroupIndex = -1;
var obj15950_SCEventRun_runningActionsCount = 0;
var obj15950_SCEventRun_loopCount = 0;
var obj16010_onTap_activeActionGroupIndex = -1;
var obj16010_onTap_runningActionsCount = 0;
var obj16010_onTap_loopCount = 0;
var obj15998_onTap_activeActionGroupIndex = -1;
var obj15998_onTap_runningActionsCount = 0;
var obj15998_onTap_loopCount = 0;
var obj15990_onTap_activeActionGroupIndex = -1;
var obj15990_onTap_runningActionsCount = 0;
var obj15990_onTap_loopCount = 0;
var obj15982_onTap_activeActionGroupIndex = -1;
var obj15982_onTap_runningActionsCount = 0;
var obj15982_onTap_loopCount = 0;
var obj15972_onTap_activeActionGroupIndex = -1;
var obj15972_onTap_runningActionsCount = 0;
var obj15972_onTap_loopCount = 0;
var obj15964_onTap_activeActionGroupIndex = -1;
var obj15964_onTap_runningActionsCount = 0;
var obj15964_onTap_loopCount = 0;
var obj15957_SCEventRun_activeActionGroupIndex = -1;
var obj15957_SCEventRun_runningActionsCount = 0;
var obj15957_SCEventRun_loopCount = 0;
var obj16089_onTap_activeActionGroupIndex = -1;
var obj16089_onTap_runningActionsCount = 0;
var obj16089_onTap_loopCount = 0;
var obj16077_onTap_activeActionGroupIndex = -1;
var obj16077_onTap_runningActionsCount = 0;
var obj16077_onTap_loopCount = 0;
var obj16069_onTap_activeActionGroupIndex = -1;
var obj16069_onTap_runningActionsCount = 0;
var obj16069_onTap_loopCount = 0;
var obj16061_onTap_activeActionGroupIndex = -1;
var obj16061_onTap_runningActionsCount = 0;
var obj16061_onTap_loopCount = 0;
var obj16053_onTap_activeActionGroupIndex = -1;
var obj16053_onTap_runningActionsCount = 0;
var obj16053_onTap_loopCount = 0;
var obj16043_onTap_activeActionGroupIndex = -1;
var obj16043_onTap_runningActionsCount = 0;
var obj16043_onTap_loopCount = 0;
var obj16036_SCEventRun_activeActionGroupIndex = -1;
var obj16036_SCEventRun_runningActionsCount = 0;
var obj16036_SCEventRun_loopCount = 0;
var obj16172_onTap_activeActionGroupIndex = -1;
var obj16172_onTap_runningActionsCount = 0;
var obj16172_onTap_loopCount = 0;
var obj16160_onTap_activeActionGroupIndex = -1;
var obj16160_onTap_runningActionsCount = 0;
var obj16160_onTap_loopCount = 0;
var obj16152_onTap_activeActionGroupIndex = -1;
var obj16152_onTap_runningActionsCount = 0;
var obj16152_onTap_loopCount = 0;
var obj16142_onTap_activeActionGroupIndex = -1;
var obj16142_onTap_runningActionsCount = 0;
var obj16142_onTap_loopCount = 0;
var obj16126_onTap_activeActionGroupIndex = -1;
var obj16126_onTap_runningActionsCount = 0;
var obj16126_onTap_loopCount = 0;
var obj16134_onTap_activeActionGroupIndex = -1;
var obj16134_onTap_runningActionsCount = 0;
var obj16134_onTap_loopCount = 0;
var obj16119_SCEventRun_activeActionGroupIndex = -1;
var obj16119_SCEventRun_runningActionsCount = 0;
var obj16119_SCEventRun_loopCount = 0;
var obj16259_onTap_activeActionGroupIndex = -1;
var obj16259_onTap_runningActionsCount = 0;
var obj16259_onTap_loopCount = 0;
var obj16247_onTap_activeActionGroupIndex = -1;
var obj16247_onTap_runningActionsCount = 0;
var obj16247_onTap_loopCount = 0;
var obj16239_onTap_activeActionGroupIndex = -1;
var obj16239_onTap_runningActionsCount = 0;
var obj16239_onTap_loopCount = 0;
var obj16229_onTap_activeActionGroupIndex = -1;
var obj16229_onTap_runningActionsCount = 0;
var obj16229_onTap_loopCount = 0;
var obj16221_onTap_activeActionGroupIndex = -1;
var obj16221_onTap_runningActionsCount = 0;
var obj16221_onTap_loopCount = 0;
var obj16213_onTap_activeActionGroupIndex = -1;
var obj16213_onTap_runningActionsCount = 0;
var obj16213_onTap_loopCount = 0;
var obj20072_onTap_activeActionGroupIndex = -1;
var obj20072_onTap_runningActionsCount = 0;
var obj20072_onTap_loopCount = 0;
var obj16206_SCEventRun_activeActionGroupIndex = -1;
var obj16206_SCEventRun_runningActionsCount = 0;
var obj16206_SCEventRun_loopCount = 0;
var obj20036_onTap_activeActionGroupIndex = -1;
var obj20036_onTap_runningActionsCount = 0;
var obj20036_onTap_loopCount = 0;
var obj20052_onTap_activeActionGroupIndex = -1;
var obj20052_onTap_runningActionsCount = 0;
var obj20052_onTap_loopCount = 0;
var obj20063_onTap_activeActionGroupIndex = -1;
var obj20063_onTap_runningActionsCount = 0;
var obj20063_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj15464_counterValue = 0;
var obj15464_counterTargetValue = 8;
var obj15464_counterCanExceedTargetValue = false;

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
		
obj15435_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15435_onTap_activeActionGroupIndex = -1;
		$("#obj15435").trigger("obj15435_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15435) {
				console.warn("de-queueing event obj15435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15435_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_15437();
function goToPage_15437() {
	window.obj15435_onTap_runningActionsCount = obj15435_onTap_runningActionsCount + 1;

	$("#anchor611")[0].click();
	window.obj15435_onTap_runningActionsCount = window.obj15435_onTap_runningActionsCount - 1;

if (window.obj15435_onTap_runningActionsCount < 0) {
	window.obj15435_onTap_runningActionsCount = 0;
} else if (window.obj15435_onTap_runningActionsCount == 0) {
	obj15435_onTap_actionGroup1();
}
}










































};
obj15435_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15435_onTap_activeActionGroupIndex = -1;
		$("#obj15435").trigger("obj15435_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15435) {
				console.warn("de-queueing event obj15435." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15435").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15435_onTap_activeActionGroupIndex = 1;
	











































};
obj15438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15438_onTap_activeActionGroupIndex = -1;
		$("#obj15438").trigger("obj15438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15438) {
				console.warn("de-queueing event obj15438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15438_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_15440();
function goToPage_15440() {
	window.obj15438_onTap_runningActionsCount = obj15438_onTap_runningActionsCount + 1;

	$("#anchor612")[0].click();
	window.obj15438_onTap_runningActionsCount = window.obj15438_onTap_runningActionsCount - 1;

if (window.obj15438_onTap_runningActionsCount < 0) {
	window.obj15438_onTap_runningActionsCount = 0;
} else if (window.obj15438_onTap_runningActionsCount == 0) {
	obj15438_onTap_actionGroup1();
}
}










































};
obj15438_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15438_onTap_activeActionGroupIndex = -1;
		$("#obj15438").trigger("obj15438_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15438) {
				console.warn("de-queueing event obj15438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15438_onTap_activeActionGroupIndex = 1;
	











































};
obj15445_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15445_onTap_activeActionGroupIndex = -1;
		$("#obj15445").trigger("obj15445_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15445) {
				console.warn("de-queueing event obj15445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15445_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_15447();
function goToPage_15447() {
	window.obj15445_onTap_runningActionsCount = obj15445_onTap_runningActionsCount + 1;

	$("#anchor613")[0].click();
	window.obj15445_onTap_runningActionsCount = window.obj15445_onTap_runningActionsCount - 1;

if (window.obj15445_onTap_runningActionsCount < 0) {
	window.obj15445_onTap_runningActionsCount = 0;
} else if (window.obj15445_onTap_runningActionsCount == 0) {
	obj15445_onTap_actionGroup1();
}
}










































};
obj15445_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15445_onTap_activeActionGroupIndex = -1;
		$("#obj15445").trigger("obj15445_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15445) {
				console.warn("de-queueing event obj15445." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15445").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15445_onTap_activeActionGroupIndex = 1;
	











































};
obj15448_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15448_onTap_activeActionGroupIndex = -1;
		$("#obj15448").trigger("obj15448_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15448) {
				console.warn("de-queueing event obj15448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15448_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15454
(function(){
	window.obj15448_onTap_runningActionsCount = obj15448_onTap_runningActionsCount + 1;


	var selector = "#obj15454";
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
					window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup1();
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
				window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15448_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15448_onTap_activeActionGroupIndex = -1;
		$("#obj15448").trigger("obj15448_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15448) {
				console.warn("de-queueing event obj15448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15448_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15448 
hide_15451();
function hide_15451() {
	var selector = "#obj15448";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15448_onTap_runningActionsCount = obj15448_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15451(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15448_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15448_onTap_activeActionGroupIndex = -1;
		$("#obj15448").trigger("obj15448_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15448) {
				console.warn("de-queueing event obj15448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15448_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj15462
(function(){
	window.obj15448_onTap_runningActionsCount = obj15448_onTap_runningActionsCount + 1;


	var selector = "#obj15462";
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
					window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup3();
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
				window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15460
(function(){
	window.obj15448_onTap_runningActionsCount = obj15448_onTap_runningActionsCount + 1;


	var selector = "#obj15460";
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
					window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup3();
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
				window.obj15448_onTap_runningActionsCount = window.obj15448_onTap_runningActionsCount - 1;

if (window.obj15448_onTap_runningActionsCount < 0) {
	window.obj15448_onTap_runningActionsCount = 0;
} else if (window.obj15448_onTap_runningActionsCount == 0) {
	obj15448_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15448_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15448_onTap_activeActionGroupIndex = -1;
		$("#obj15448").trigger("obj15448_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15448) {
				console.warn("de-queueing event obj15448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15448_onTap_activeActionGroupIndex = 3;
	











































};
obj15454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_onTap_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15454) {
				console.warn("de-queueing event obj15454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15454_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15448
(function(){
	window.obj15454_onTap_runningActionsCount = obj15454_onTap_runningActionsCount + 1;


	var selector = "#obj15448";
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
					window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup1();
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
				window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj15454_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_onTap_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15454) {
				console.warn("de-queueing event obj15454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15454_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj15454 
hide_15457();
function hide_15457() {
	var selector = "#obj15454";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15454_onTap_runningActionsCount = obj15454_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15457(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15454_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15454_onTap_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15454) {
				console.warn("de-queueing event obj15454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15454_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj15460 
hide_15458();
function hide_15458() {
	var selector = "#obj15460";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15454_onTap_runningActionsCount = obj15454_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15458(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15462 
hide_15459();
function hide_15459() {
	var selector = "#obj15462";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15454_onTap_runningActionsCount = obj15454_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15459(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15454_onTap_runningActionsCount = window.obj15454_onTap_runningActionsCount - 1;

if (window.obj15454_onTap_runningActionsCount < 0) {
	window.obj15454_onTap_runningActionsCount = 0;
} else if (window.obj15454_onTap_runningActionsCount == 0) {
	obj15454_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15454_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15454_onTap_activeActionGroupIndex = -1;
		$("#obj15454").trigger("obj15454_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15454) {
				console.warn("de-queueing event obj15454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15454_onTap_activeActionGroupIndex = 3;
	











































};
obj15464_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15464").trigger("obj15464_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15464) {
				console.warn("de-queueing event obj15464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_15466();
function wait_15466() {
	window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = obj15464_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15464_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj15464_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15464").trigger("obj15464_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15464) {
				console.warn("de-queueing event obj15464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_15467();
function goToPage_15467() {
	window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = obj15464_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor614")[0].click();
	window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj15464_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj15464_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj15464_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj15464").trigger("obj15464_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15464) {
				console.warn("de-queueing event obj15464." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15464").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj15521_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15521_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15521").trigger("obj15521_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15521) {
				console.warn("de-queueing event obj15521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15521_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15882 
hide_15523();
function hide_15523() {
	var selector = "#obj15882";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15523(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15889 
hide_15524();
function hide_15524() {
	var selector = "#obj15889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15524(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15899 
hide_15525();
function hide_15525() {
	var selector = "#obj15899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15525(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15917 
hide_15942();
function hide_15942() {
	var selector = "#obj15917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15942(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15919 
hide_15943();
function hide_15943() {
	var selector = "#obj15919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15943(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj20087 
hide_20090();
function hide_20090() {
	var selector = "#obj20087";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15521_SCEventRun_runningActionsCount = obj15521_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_20090(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15521_SCEventRun_runningActionsCount = window.obj15521_SCEventRun_runningActionsCount - 1;

if (window.obj15521_SCEventRun_runningActionsCount < 0) {
	window.obj15521_SCEventRun_runningActionsCount = 0;
} else if (window.obj15521_SCEventRun_runningActionsCount == 0) {
	obj15521_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15521_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15521_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15521").trigger("obj15521_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15521) {
				console.warn("de-queueing event obj15521." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15521").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15521_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj15824_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15824_onTap_activeActionGroupIndex = -1;
		$("#obj15824").trigger("obj15824_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15824) {
				console.warn("de-queueing event obj15824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15824_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15933 
hide_15935();
function hide_15935() {
	var selector = "#obj15933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15935(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15822
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15822";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15931
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15931";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15858
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15858";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15891
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15891";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15901
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15901";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15909
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15909";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15921
(function(){
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;


	var selector = "#obj15921";
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
					window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15826();
function playAudioFile_15826() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15826")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15826");
			$("#obj_audio_playSoundFile15826").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
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
				window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15957 
runActionList_15946();
function runActionList_15946() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	$("#obj15957").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15521 
runActionList_16023();
function runActionList_16023() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	$("#obj15521").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16036 
runActionList_16104();
function runActionList_16104() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	$("#obj16036").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16119 
runActionList_16189();
function runActionList_16189() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	$("#obj16119").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16206 
runActionList_16278();
function runActionList_16278() {
	window.obj15824_onTap_runningActionsCount = obj15824_onTap_runningActionsCount + 1;

	$("#obj16206").trigger('SCEventRun');
	setTimeout(function() {
		window.obj15824_onTap_runningActionsCount = window.obj15824_onTap_runningActionsCount - 1;

if (window.obj15824_onTap_runningActionsCount < 0) {
	window.obj15824_onTap_runningActionsCount = 0;
} else if (window.obj15824_onTap_runningActionsCount == 0) {
	obj15824_onTap_actionGroup1();
}		
	}, 1);
}







};
obj15824_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15824_onTap_activeActionGroupIndex = -1;
		$("#obj15824").trigger("obj15824_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15824) {
				console.warn("de-queueing event obj15824." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15824").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15824_onTap_activeActionGroupIndex = 1;
	











































};
obj15858_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15858_onTap_activeActionGroupIndex = -1;
		$("#obj15858").trigger("obj15858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15858) {
				console.warn("de-queueing event obj15858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15858_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15882
(function(){
	window.obj15858_onTap_runningActionsCount = obj15858_onTap_runningActionsCount + 1;


	var selector = "#obj15882";
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
					window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
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
				window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15881();
function playAudioFile_15881() {
	window.obj15858_onTap_runningActionsCount = obj15858_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15881")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15881");
			$("#obj_audio_playSoundFile15881").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
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
				window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15885();
function switchText_15885() {
	window.obj15858_onTap_runningActionsCount = obj15858_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>28</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15858").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15858_content");
			setTimeout(function () {
				window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15858_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15858_onTap_activeActionGroupIndex = -1;
		$("#obj15858").trigger("obj15858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15858) {
				console.warn("de-queueing event obj15858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15858_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15886();
function wait_15886() {
	window.obj15858_onTap_runningActionsCount = obj15858_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15858_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15858_onTap_activeActionGroupIndex = -1;
		$("#obj15858").trigger("obj15858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15858) {
				console.warn("de-queueing event obj15858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15858_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15888();
function switchText_15888() {
	window.obj15858_onTap_runningActionsCount = obj15858_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">28</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15858").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15858_content");
			setTimeout(function () {
				window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15858_onTap_runningActionsCount = window.obj15858_onTap_runningActionsCount - 1;

if (window.obj15858_onTap_runningActionsCount < 0) {
	window.obj15858_onTap_runningActionsCount = 0;
} else if (window.obj15858_onTap_runningActionsCount == 0) {
	obj15858_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15858_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15858_onTap_activeActionGroupIndex = -1;
		$("#obj15858").trigger("obj15858_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15858) {
				console.warn("de-queueing event obj15858." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15858").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15858_onTap_activeActionGroupIndex = 3;
	











































};
obj15891_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15891_onTap_activeActionGroupIndex = -1;
		$("#obj15891").trigger("obj15891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15891) {
				console.warn("de-queueing event obj15891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15891_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15889
(function(){
	window.obj15891_onTap_runningActionsCount = obj15891_onTap_runningActionsCount + 1;


	var selector = "#obj15889";
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
					window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
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
				window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15893();
function playAudioFile_15893() {
	window.obj15891_onTap_runningActionsCount = obj15891_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15893")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15893");
			$("#obj_audio_playSoundFile15893").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
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
				window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15895();
function switchText_15895() {
	window.obj15891_onTap_runningActionsCount = obj15891_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>–</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15891_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15891_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15891").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15891_content");
			setTimeout(function () {
				window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15891 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15891_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15891_onTap_activeActionGroupIndex = -1;
		$("#obj15891").trigger("obj15891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15891) {
				console.warn("de-queueing event obj15891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15891_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15896();
function wait_15896() {
	window.obj15891_onTap_runningActionsCount = obj15891_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15891_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15891_onTap_activeActionGroupIndex = -1;
		$("#obj15891").trigger("obj15891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15891) {
				console.warn("de-queueing event obj15891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15891_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15897();
function switchText_15897() {
	window.obj15891_onTap_runningActionsCount = obj15891_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">–</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15891_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15891_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15891").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15891_content");
			setTimeout(function () {
				window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15891 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15891_onTap_runningActionsCount = window.obj15891_onTap_runningActionsCount - 1;

if (window.obj15891_onTap_runningActionsCount < 0) {
	window.obj15891_onTap_runningActionsCount = 0;
} else if (window.obj15891_onTap_runningActionsCount == 0) {
	obj15891_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15891_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15891_onTap_activeActionGroupIndex = -1;
		$("#obj15891").trigger("obj15891_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15891) {
				console.warn("de-queueing event obj15891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15891_onTap_activeActionGroupIndex = 3;
	











































};
obj15901_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15901_onTap_activeActionGroupIndex = -1;
		$("#obj15901").trigger("obj15901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15901) {
				console.warn("de-queueing event obj15901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15901_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15899
(function(){
	window.obj15901_onTap_runningActionsCount = obj15901_onTap_runningActionsCount + 1;


	var selector = "#obj15899";
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
					window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
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
				window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15903();
function playAudioFile_15903() {
	window.obj15901_onTap_runningActionsCount = obj15901_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15903")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15903");
			$("#obj_audio_playSoundFile15903").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
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
				window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15905();
function switchText_15905() {
	window.obj15901_onTap_runningActionsCount = obj15901_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>18</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15901_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15901_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15901").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15901_content");
			setTimeout(function () {
				window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15901 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15901_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15901_onTap_activeActionGroupIndex = -1;
		$("#obj15901").trigger("obj15901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15901) {
				console.warn("de-queueing event obj15901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15901_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15906();
function wait_15906() {
	window.obj15901_onTap_runningActionsCount = obj15901_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15901_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15901_onTap_activeActionGroupIndex = -1;
		$("#obj15901").trigger("obj15901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15901) {
				console.warn("de-queueing event obj15901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15901_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15907();
function switchText_15907() {
	window.obj15901_onTap_runningActionsCount = obj15901_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">18</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15901_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15901_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15901").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15901_content");
			setTimeout(function () {
				window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15901 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15901_onTap_runningActionsCount = window.obj15901_onTap_runningActionsCount - 1;

if (window.obj15901_onTap_runningActionsCount < 0) {
	window.obj15901_onTap_runningActionsCount = 0;
} else if (window.obj15901_onTap_runningActionsCount == 0) {
	obj15901_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15901_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15901_onTap_activeActionGroupIndex = -1;
		$("#obj15901").trigger("obj15901_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15901) {
				console.warn("de-queueing event obj15901." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15901").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15901_onTap_activeActionGroupIndex = 3;
	











































};
obj15909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15909_onTap_activeActionGroupIndex = -1;
		$("#obj15909").trigger("obj15909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15909) {
				console.warn("de-queueing event obj15909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15909_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15931 
hide_15948();
function hide_15948() {
	var selector = "#obj15931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15948(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15822 
hide_15930();
function hide_15930() {
	var selector = "#obj15822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15930(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15917
(function(){
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;


	var selector = "#obj15917";
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
					window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
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
				window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15933
(function(){
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;


	var selector = "#obj15933";
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
					window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
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
				window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15820
(function(){
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;


	var selector = "#obj15820";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
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
				window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15911();
function playAudioFile_15911() {
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15911")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15911");
			$("#obj_audio_playSoundFile15911").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
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
				window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj15464 
incrementCounter_15945();
function incrementCounter_15945() {
	window.obj15909_onTap_runningActionsCount = obj15909_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15909_onTap_runningActionsCount = window.obj15909_onTap_runningActionsCount - 1;

if (window.obj15909_onTap_runningActionsCount < 0) {
	window.obj15909_onTap_runningActionsCount = 0;
} else if (window.obj15909_onTap_runningActionsCount == 0) {
	obj15909_onTap_actionGroup1();
} }, 1);
}











};
obj15909_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15909_onTap_activeActionGroupIndex = -1;
		$("#obj15909").trigger("obj15909_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15909) {
				console.warn("de-queueing event obj15909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15909_onTap_activeActionGroupIndex = 1;
	











































};
obj15921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15921_onTap_activeActionGroupIndex = -1;
		$("#obj15921").trigger("obj15921_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15921) {
				console.warn("de-queueing event obj15921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15921_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15919
(function(){
	window.obj15921_onTap_runningActionsCount = obj15921_onTap_runningActionsCount + 1;


	var selector = "#obj15919";
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
					window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
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
				window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15923();
function playAudioFile_15923() {
	window.obj15921_onTap_runningActionsCount = obj15921_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15923")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15923");
			$("#obj_audio_playSoundFile15923").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
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
				window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15925();
function switchText_15925() {
	window.obj15921_onTap_runningActionsCount = obj15921_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>24</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15921_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15921_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15921").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15921_content");
			setTimeout(function () {
				window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15921 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15921_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15921_onTap_activeActionGroupIndex = -1;
		$("#obj15921").trigger("obj15921_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15921) {
				console.warn("de-queueing event obj15921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15921_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15926();
function wait_15926() {
	window.obj15921_onTap_runningActionsCount = obj15921_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15921_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15921_onTap_activeActionGroupIndex = -1;
		$("#obj15921").trigger("obj15921_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15921) {
				console.warn("de-queueing event obj15921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15921_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15927();
function switchText_15927() {
	window.obj15921_onTap_runningActionsCount = obj15921_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">24</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15921_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15921_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15921").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15921_content");
			setTimeout(function () {
				window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15921 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15921_onTap_runningActionsCount = window.obj15921_onTap_runningActionsCount - 1;

if (window.obj15921_onTap_runningActionsCount < 0) {
	window.obj15921_onTap_runningActionsCount = 0;
} else if (window.obj15921_onTap_runningActionsCount == 0) {
	obj15921_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15921_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15921_onTap_activeActionGroupIndex = -1;
		$("#obj15921").trigger("obj15921_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15921) {
				console.warn("de-queueing event obj15921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15921_onTap_activeActionGroupIndex = 3;
	











































};
obj15950_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15950_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15950").trigger("obj15950_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15950) {
				console.warn("de-queueing event obj15950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15950_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15858 
hide_15952();
function hide_15952() {
	var selector = "#obj15858";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15950_SCEventRun_runningActionsCount = obj15950_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15952(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15891 
hide_15953();
function hide_15953() {
	var selector = "#obj15891";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15950_SCEventRun_runningActionsCount = obj15950_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15953(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15901 
hide_15954();
function hide_15954() {
	var selector = "#obj15901";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15950_SCEventRun_runningActionsCount = obj15950_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15954(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15909 
hide_15955();
function hide_15955() {
	var selector = "#obj15909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15950_SCEventRun_runningActionsCount = obj15950_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15955(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15921 
hide_15956();
function hide_15956() {
	var selector = "#obj15921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15950_SCEventRun_runningActionsCount = obj15950_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15956(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15950_SCEventRun_runningActionsCount = window.obj15950_SCEventRun_runningActionsCount - 1;

if (window.obj15950_SCEventRun_runningActionsCount < 0) {
	window.obj15950_SCEventRun_runningActionsCount = 0;
} else if (window.obj15950_SCEventRun_runningActionsCount == 0) {
	obj15950_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15950_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15950_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15950").trigger("obj15950_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15950) {
				console.warn("de-queueing event obj15950." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15950").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15950_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj16010_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16010_onTap_activeActionGroupIndex = -1;
		$("#obj16010").trigger("obj16010_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16010) {
				console.warn("de-queueing event obj16010." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16010").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16010_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15933 
hide_16014();
function hide_16014() {
	var selector = "#obj15933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16014(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16008
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj16008";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15931
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15931";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15998
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15998";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15990
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15990";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15982
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15982";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15972
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15972";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15964
(function(){
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;


	var selector = "#obj15964";
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
					window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16012();
function playAudioFile_16012() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16012")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16012");
			$("#obj_audio_playSoundFile16012").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
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
				window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15521 
runActionList_16021();
function runActionList_16021() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	$("#obj15521").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16036 
runActionList_16103();
function runActionList_16103() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	$("#obj16036").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15950 
runActionList_16022();
function runActionList_16022() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	$("#obj15950").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16119 
runActionList_16188();
function runActionList_16188() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	$("#obj16119").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16206 
runActionList_16277();
function runActionList_16277() {
	window.obj16010_onTap_runningActionsCount = obj16010_onTap_runningActionsCount + 1;

	$("#obj16206").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16010_onTap_runningActionsCount = window.obj16010_onTap_runningActionsCount - 1;

if (window.obj16010_onTap_runningActionsCount < 0) {
	window.obj16010_onTap_runningActionsCount = 0;
} else if (window.obj16010_onTap_runningActionsCount == 0) {
	obj16010_onTap_actionGroup1();
}		
	}, 1);
}







};
obj16010_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16010_onTap_activeActionGroupIndex = -1;
		$("#obj16010").trigger("obj16010_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16010) {
				console.warn("de-queueing event obj16010." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16010").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16010_onTap_activeActionGroupIndex = 1;
	











































};
obj15998_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15998_onTap_activeActionGroupIndex = -1;
		$("#obj15998").trigger("obj15998_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15998) {
				console.warn("de-queueing event obj15998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15998_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15882
(function(){
	window.obj15998_onTap_runningActionsCount = obj15998_onTap_runningActionsCount + 1;


	var selector = "#obj15882";
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
					window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
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
				window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16000();
function playAudioFile_16000() {
	window.obj15998_onTap_runningActionsCount = obj15998_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16000")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16000");
			$("#obj_audio_playSoundFile16000").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
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
				window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16002();
function switchText_16002() {
	window.obj15998_onTap_runningActionsCount = obj15998_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>28</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15998_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15998_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15998").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15998_content");
			setTimeout(function () {
				window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15998 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15998_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15998_onTap_activeActionGroupIndex = -1;
		$("#obj15998").trigger("obj15998_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15998) {
				console.warn("de-queueing event obj15998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15998_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16003();
function wait_16003() {
	window.obj15998_onTap_runningActionsCount = obj15998_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15998_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15998_onTap_activeActionGroupIndex = -1;
		$("#obj15998").trigger("obj15998_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15998) {
				console.warn("de-queueing event obj15998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15998_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16004();
function switchText_16004() {
	window.obj15998_onTap_runningActionsCount = obj15998_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">28</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15998_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15998_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15998").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15998_content");
			setTimeout(function () {
				window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15998 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15998_onTap_runningActionsCount = window.obj15998_onTap_runningActionsCount - 1;

if (window.obj15998_onTap_runningActionsCount < 0) {
	window.obj15998_onTap_runningActionsCount = 0;
} else if (window.obj15998_onTap_runningActionsCount == 0) {
	obj15998_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15998_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15998_onTap_activeActionGroupIndex = -1;
		$("#obj15998").trigger("obj15998_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15998) {
				console.warn("de-queueing event obj15998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15998_onTap_activeActionGroupIndex = 3;
	











































};
obj15990_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15990_onTap_activeActionGroupIndex = -1;
		$("#obj15990").trigger("obj15990_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15990) {
				console.warn("de-queueing event obj15990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15990_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15889
(function(){
	window.obj15990_onTap_runningActionsCount = obj15990_onTap_runningActionsCount + 1;


	var selector = "#obj15889";
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
					window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
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
				window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15992();
function playAudioFile_15992() {
	window.obj15990_onTap_runningActionsCount = obj15990_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15992")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15992");
			$("#obj_audio_playSoundFile15992").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
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
				window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15994();
function switchText_15994() {
	window.obj15990_onTap_runningActionsCount = obj15990_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>–</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15990_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15990_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15990").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15990_content");
			setTimeout(function () {
				window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15990 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15990_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15990_onTap_activeActionGroupIndex = -1;
		$("#obj15990").trigger("obj15990_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15990) {
				console.warn("de-queueing event obj15990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15990_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15995();
function wait_15995() {
	window.obj15990_onTap_runningActionsCount = obj15990_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15990_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15990_onTap_activeActionGroupIndex = -1;
		$("#obj15990").trigger("obj15990_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15990) {
				console.warn("de-queueing event obj15990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15990_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15996();
function switchText_15996() {
	window.obj15990_onTap_runningActionsCount = obj15990_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">–</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15990_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15990_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15990").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15990_content");
			setTimeout(function () {
				window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15990 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15990_onTap_runningActionsCount = window.obj15990_onTap_runningActionsCount - 1;

if (window.obj15990_onTap_runningActionsCount < 0) {
	window.obj15990_onTap_runningActionsCount = 0;
} else if (window.obj15990_onTap_runningActionsCount == 0) {
	obj15990_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15990_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15990_onTap_activeActionGroupIndex = -1;
		$("#obj15990").trigger("obj15990_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15990) {
				console.warn("de-queueing event obj15990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15990_onTap_activeActionGroupIndex = 3;
	











































};
obj15982_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15982_onTap_activeActionGroupIndex = -1;
		$("#obj15982").trigger("obj15982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15982) {
				console.warn("de-queueing event obj15982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15982_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15899
(function(){
	window.obj15982_onTap_runningActionsCount = obj15982_onTap_runningActionsCount + 1;


	var selector = "#obj15899";
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
					window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
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
				window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_15984();
function playAudioFile_15984() {
	window.obj15982_onTap_runningActionsCount = obj15982_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile15984")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile15984");
			$("#obj_audio_playSoundFile15984").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
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
				window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_15986();
function switchText_15986() {
	window.obj15982_onTap_runningActionsCount = obj15982_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>18</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15982").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15982_content");
			setTimeout(function () {
				window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15982_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15982_onTap_activeActionGroupIndex = -1;
		$("#obj15982").trigger("obj15982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15982) {
				console.warn("de-queueing event obj15982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15982_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_15987();
function wait_15987() {
	window.obj15982_onTap_runningActionsCount = obj15982_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15982_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15982_onTap_activeActionGroupIndex = -1;
		$("#obj15982").trigger("obj15982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15982) {
				console.warn("de-queueing event obj15982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15982_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_15988();
function switchText_15988() {
	window.obj15982_onTap_runningActionsCount = obj15982_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">18</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15982").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15982_content");
			setTimeout(function () {
				window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15982_onTap_runningActionsCount = window.obj15982_onTap_runningActionsCount - 1;

if (window.obj15982_onTap_runningActionsCount < 0) {
	window.obj15982_onTap_runningActionsCount = 0;
} else if (window.obj15982_onTap_runningActionsCount == 0) {
	obj15982_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15982_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15982_onTap_activeActionGroupIndex = -1;
		$("#obj15982").trigger("obj15982_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15982) {
				console.warn("de-queueing event obj15982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15982_onTap_activeActionGroupIndex = 3;
	











































};
obj15972_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15972_onTap_activeActionGroupIndex = -1;
		$("#obj15972").trigger("obj15972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15972) {
				console.warn("de-queueing event obj15972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15972_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15917
(function(){
	window.obj15972_onTap_runningActionsCount = obj15972_onTap_runningActionsCount + 1;


	var selector = "#obj15917";
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
					window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
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
				window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16031();
function playAudioFile_16031() {
	window.obj15972_onTap_runningActionsCount = obj15972_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16031")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16031");
			$("#obj_audio_playSoundFile16031").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
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
				window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16033();
function switchText_16033() {
	window.obj15972_onTap_runningActionsCount = obj15972_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>42</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15972_content");
			setTimeout(function () {
				window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj15972_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15972_onTap_activeActionGroupIndex = -1;
		$("#obj15972").trigger("obj15972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15972) {
				console.warn("de-queueing event obj15972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15972_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16034();
function wait_16034() {
	window.obj15972_onTap_runningActionsCount = obj15972_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup2();
}
	}, 500);
}


























};
obj15972_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15972_onTap_activeActionGroupIndex = -1;
		$("#obj15972").trigger("obj15972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15972) {
				console.warn("de-queueing event obj15972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15972_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16035();
function switchText_16035() {
	window.obj15972_onTap_runningActionsCount = obj15972_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">42</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15972_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15972_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15972").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15972_content");
			setTimeout(function () {
				window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj15972 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj15972_onTap_runningActionsCount = window.obj15972_onTap_runningActionsCount - 1;

if (window.obj15972_onTap_runningActionsCount < 0) {
	window.obj15972_onTap_runningActionsCount = 0;
} else if (window.obj15972_onTap_runningActionsCount == 0) {
	obj15972_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj15972_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15972_onTap_activeActionGroupIndex = -1;
		$("#obj15972").trigger("obj15972_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15972) {
				console.warn("de-queueing event obj15972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15972_onTap_activeActionGroupIndex = 3;
	











































};
obj15964_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15964_onTap_activeActionGroupIndex = -1;
		$("#obj15964").trigger("obj15964_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15964) {
				console.warn("de-queueing event obj15964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15964_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15931 
hide_16026();
function hide_16026() {
	var selector = "#obj15931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16026(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16008 
hide_16029();
function hide_16029() {
	var selector = "#obj16008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16029(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15919
(function(){
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;


	var selector = "#obj15919";
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
					window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
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
				window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15933
(function(){
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;


	var selector = "#obj15933";
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
					window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
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
				window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16006
(function(){
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;


	var selector = "#obj16006";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
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
				window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16024();
function playAudioFile_16024() {
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16024")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16024");
			$("#obj_audio_playSoundFile16024").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
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
				window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj15464 
incrementCounter_16030();
function incrementCounter_16030() {
	window.obj15964_onTap_runningActionsCount = obj15964_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj15964_onTap_runningActionsCount = window.obj15964_onTap_runningActionsCount - 1;

if (window.obj15964_onTap_runningActionsCount < 0) {
	window.obj15964_onTap_runningActionsCount = 0;
} else if (window.obj15964_onTap_runningActionsCount == 0) {
	obj15964_onTap_actionGroup1();
} }, 1);
}











};
obj15964_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15964_onTap_activeActionGroupIndex = -1;
		$("#obj15964").trigger("obj15964_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15964) {
				console.warn("de-queueing event obj15964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15964_onTap_activeActionGroupIndex = 1;
	











































};
obj15957_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj15957_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15957").trigger("obj15957_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15957) {
				console.warn("de-queueing event obj15957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15957_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15998 
hide_15959();
function hide_15959() {
	var selector = "#obj15998";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15957_SCEventRun_runningActionsCount = obj15957_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15959(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15990 
hide_15960();
function hide_15960() {
	var selector = "#obj15990";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15957_SCEventRun_runningActionsCount = obj15957_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15960(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15982 
hide_15961();
function hide_15961() {
	var selector = "#obj15982";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15957_SCEventRun_runningActionsCount = obj15957_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15961(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15972 
hide_15962();
function hide_15962() {
	var selector = "#obj15972";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15957_SCEventRun_runningActionsCount = obj15957_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15962(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj15964 
hide_15963();
function hide_15963() {
	var selector = "#obj15964";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj15957_SCEventRun_runningActionsCount = obj15957_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_15963(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj15957_SCEventRun_runningActionsCount = window.obj15957_SCEventRun_runningActionsCount - 1;

if (window.obj15957_SCEventRun_runningActionsCount < 0) {
	window.obj15957_SCEventRun_runningActionsCount = 0;
} else if (window.obj15957_SCEventRun_runningActionsCount == 0) {
	obj15957_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj15957_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj15957_SCEventRun_activeActionGroupIndex = -1;
		$("#obj15957").trigger("obj15957_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 15957) {
				console.warn("de-queueing event obj15957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj15957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj15957_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj16089_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16089_onTap_activeActionGroupIndex = -1;
		$("#obj16089").trigger("obj16089_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16089) {
				console.warn("de-queueing event obj16089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16089_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15933 
hide_16093();
function hide_16093() {
	var selector = "#obj15933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16093(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16087
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16087";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15931
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj15931";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16077
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16077";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16069
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16069";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16061
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16061";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16053
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16053";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16043
(function(){
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;


	var selector = "#obj16043";
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
					window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16091();
function playAudioFile_16091() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16091")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16091");
			$("#obj_audio_playSoundFile16091").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
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
				window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15521 
runActionList_16100();
function runActionList_16100() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	$("#obj15521").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15957 
runActionList_16102();
function runActionList_16102() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	$("#obj15957").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15950 
runActionList_16101();
function runActionList_16101() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	$("#obj15950").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16119 
runActionList_16187();
function runActionList_16187() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	$("#obj16119").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16206 
runActionList_16276();
function runActionList_16276() {
	window.obj16089_onTap_runningActionsCount = obj16089_onTap_runningActionsCount + 1;

	$("#obj16206").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16089_onTap_runningActionsCount = window.obj16089_onTap_runningActionsCount - 1;

if (window.obj16089_onTap_runningActionsCount < 0) {
	window.obj16089_onTap_runningActionsCount = 0;
} else if (window.obj16089_onTap_runningActionsCount == 0) {
	obj16089_onTap_actionGroup1();
}		
	}, 1);
}







};
obj16089_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16089_onTap_activeActionGroupIndex = -1;
		$("#obj16089").trigger("obj16089_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16089) {
				console.warn("de-queueing event obj16089." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16089").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16089_onTap_activeActionGroupIndex = 1;
	











































};
obj16077_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16077_onTap_activeActionGroupIndex = -1;
		$("#obj16077").trigger("obj16077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16077) {
				console.warn("de-queueing event obj16077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16077_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15882
(function(){
	window.obj16077_onTap_runningActionsCount = obj16077_onTap_runningActionsCount + 1;


	var selector = "#obj15882";
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
					window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
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
				window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16079();
function playAudioFile_16079() {
	window.obj16077_onTap_runningActionsCount = obj16077_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16079")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16079");
			$("#obj_audio_playSoundFile16079").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
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
				window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16081();
function switchText_16081() {
	window.obj16077_onTap_runningActionsCount = obj16077_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>28</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16077_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16077_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16077").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16077_content");
			setTimeout(function () {
				window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16077 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16077_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16077_onTap_activeActionGroupIndex = -1;
		$("#obj16077").trigger("obj16077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16077) {
				console.warn("de-queueing event obj16077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16077_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16082();
function wait_16082() {
	window.obj16077_onTap_runningActionsCount = obj16077_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16077_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16077_onTap_activeActionGroupIndex = -1;
		$("#obj16077").trigger("obj16077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16077) {
				console.warn("de-queueing event obj16077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16077_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16083();
function switchText_16083() {
	window.obj16077_onTap_runningActionsCount = obj16077_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">28</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16077_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16077_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16077").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16077_content");
			setTimeout(function () {
				window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16077 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16077_onTap_runningActionsCount = window.obj16077_onTap_runningActionsCount - 1;

if (window.obj16077_onTap_runningActionsCount < 0) {
	window.obj16077_onTap_runningActionsCount = 0;
} else if (window.obj16077_onTap_runningActionsCount == 0) {
	obj16077_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16077_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16077_onTap_activeActionGroupIndex = -1;
		$("#obj16077").trigger("obj16077_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16077) {
				console.warn("de-queueing event obj16077." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16077").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16077_onTap_activeActionGroupIndex = 3;
	











































};
obj16069_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16069_onTap_activeActionGroupIndex = -1;
		$("#obj16069").trigger("obj16069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16069) {
				console.warn("de-queueing event obj16069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16069_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15889
(function(){
	window.obj16069_onTap_runningActionsCount = obj16069_onTap_runningActionsCount + 1;


	var selector = "#obj15889";
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
					window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
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
				window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16071();
function playAudioFile_16071() {
	window.obj16069_onTap_runningActionsCount = obj16069_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16071")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16071");
			$("#obj_audio_playSoundFile16071").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
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
				window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16073();
function switchText_16073() {
	window.obj16069_onTap_runningActionsCount = obj16069_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>–</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16069_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16069_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16069").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16069_content");
			setTimeout(function () {
				window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16069 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16069_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16069_onTap_activeActionGroupIndex = -1;
		$("#obj16069").trigger("obj16069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16069) {
				console.warn("de-queueing event obj16069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16069_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16074();
function wait_16074() {
	window.obj16069_onTap_runningActionsCount = obj16069_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16069_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16069_onTap_activeActionGroupIndex = -1;
		$("#obj16069").trigger("obj16069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16069) {
				console.warn("de-queueing event obj16069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16069_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16075();
function switchText_16075() {
	window.obj16069_onTap_runningActionsCount = obj16069_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">–</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16069_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16069_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16069").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16069_content");
			setTimeout(function () {
				window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16069 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16069_onTap_runningActionsCount = window.obj16069_onTap_runningActionsCount - 1;

if (window.obj16069_onTap_runningActionsCount < 0) {
	window.obj16069_onTap_runningActionsCount = 0;
} else if (window.obj16069_onTap_runningActionsCount == 0) {
	obj16069_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16069_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16069_onTap_activeActionGroupIndex = -1;
		$("#obj16069").trigger("obj16069_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16069) {
				console.warn("de-queueing event obj16069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16069_onTap_activeActionGroupIndex = 3;
	











































};
obj16061_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16061_onTap_activeActionGroupIndex = -1;
		$("#obj16061").trigger("obj16061_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16061) {
				console.warn("de-queueing event obj16061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16061_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15931 
hide_16112();
function hide_16112() {
	var selector = "#obj15931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16112(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16087 
hide_16115();
function hide_16115() {
	var selector = "#obj16087";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16115(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15899
(function(){
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;


	var selector = "#obj15899";
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
					window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
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
				window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15933
(function(){
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;


	var selector = "#obj15933";
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
					window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
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
				window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16085
(function(){
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;


	var selector = "#obj16085";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
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
				window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16110();
function playAudioFile_16110() {
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16110")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16110");
			$("#obj_audio_playSoundFile16110").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
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
				window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj15464 
incrementCounter_16116();
function incrementCounter_16116() {
	window.obj16061_onTap_runningActionsCount = obj16061_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16061_onTap_runningActionsCount = window.obj16061_onTap_runningActionsCount - 1;

if (window.obj16061_onTap_runningActionsCount < 0) {
	window.obj16061_onTap_runningActionsCount = 0;
} else if (window.obj16061_onTap_runningActionsCount == 0) {
	obj16061_onTap_actionGroup1();
} }, 1);
}











};
obj16061_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16061_onTap_activeActionGroupIndex = -1;
		$("#obj16061").trigger("obj16061_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16061) {
				console.warn("de-queueing event obj16061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16061_onTap_activeActionGroupIndex = 1;
	











































};
obj16053_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16053_onTap_activeActionGroupIndex = -1;
		$("#obj16053").trigger("obj16053_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16053) {
				console.warn("de-queueing event obj16053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16053_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15917
(function(){
	window.obj16053_onTap_runningActionsCount = obj16053_onTap_runningActionsCount + 1;


	var selector = "#obj15917";
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
					window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
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
				window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16055();
function playAudioFile_16055() {
	window.obj16053_onTap_runningActionsCount = obj16053_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16055")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16055");
			$("#obj_audio_playSoundFile16055").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
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
				window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16057();
function switchText_16057() {
	window.obj16053_onTap_runningActionsCount = obj16053_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>42</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16053_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16053_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16053").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16053_content");
			setTimeout(function () {
				window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16053 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16053_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16053_onTap_activeActionGroupIndex = -1;
		$("#obj16053").trigger("obj16053_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16053) {
				console.warn("de-queueing event obj16053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16053_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16058();
function wait_16058() {
	window.obj16053_onTap_runningActionsCount = obj16053_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16053_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16053_onTap_activeActionGroupIndex = -1;
		$("#obj16053").trigger("obj16053_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16053) {
				console.warn("de-queueing event obj16053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16053_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16059();
function switchText_16059() {
	window.obj16053_onTap_runningActionsCount = obj16053_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">42</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16053_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16053_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16053").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16053_content");
			setTimeout(function () {
				window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16053 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16053_onTap_runningActionsCount = window.obj16053_onTap_runningActionsCount - 1;

if (window.obj16053_onTap_runningActionsCount < 0) {
	window.obj16053_onTap_runningActionsCount = 0;
} else if (window.obj16053_onTap_runningActionsCount == 0) {
	obj16053_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16053_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16053_onTap_activeActionGroupIndex = -1;
		$("#obj16053").trigger("obj16053_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16053) {
				console.warn("de-queueing event obj16053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16053_onTap_activeActionGroupIndex = 3;
	











































};
obj16043_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16043_onTap_activeActionGroupIndex = -1;
		$("#obj16043").trigger("obj16043_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16043) {
				console.warn("de-queueing event obj16043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16043_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15919
(function(){
	window.obj16043_onTap_runningActionsCount = obj16043_onTap_runningActionsCount + 1;


	var selector = "#obj15919";
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
					window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
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
				window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16105();
function playAudioFile_16105() {
	window.obj16043_onTap_runningActionsCount = obj16043_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16105")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16105");
			$("#obj_audio_playSoundFile16105").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
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
				window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16107();
function switchText_16107() {
	window.obj16043_onTap_runningActionsCount = obj16043_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>24</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16043").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16043_content");
			setTimeout(function () {
				window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16043_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16043_onTap_activeActionGroupIndex = -1;
		$("#obj16043").trigger("obj16043_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16043) {
				console.warn("de-queueing event obj16043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16043_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16108();
function wait_16108() {
	window.obj16043_onTap_runningActionsCount = obj16043_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16043_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16043_onTap_activeActionGroupIndex = -1;
		$("#obj16043").trigger("obj16043_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16043) {
				console.warn("de-queueing event obj16043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16043_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16109();
function switchText_16109() {
	window.obj16043_onTap_runningActionsCount = obj16043_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">24</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16043").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16043_content");
			setTimeout(function () {
				window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16043_onTap_runningActionsCount = window.obj16043_onTap_runningActionsCount - 1;

if (window.obj16043_onTap_runningActionsCount < 0) {
	window.obj16043_onTap_runningActionsCount = 0;
} else if (window.obj16043_onTap_runningActionsCount == 0) {
	obj16043_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16043_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16043_onTap_activeActionGroupIndex = -1;
		$("#obj16043").trigger("obj16043_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16043) {
				console.warn("de-queueing event obj16043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16043_onTap_activeActionGroupIndex = 3;
	











































};
obj16036_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16036_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16036").trigger("obj16036_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16036) {
				console.warn("de-queueing event obj16036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16036_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16077 
hide_16038();
function hide_16038() {
	var selector = "#obj16077";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16036_SCEventRun_runningActionsCount = obj16036_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16038(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16069 
hide_16039();
function hide_16039() {
	var selector = "#obj16069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16036_SCEventRun_runningActionsCount = obj16036_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16039(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16061 
hide_16040();
function hide_16040() {
	var selector = "#obj16061";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16036_SCEventRun_runningActionsCount = obj16036_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16040(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16053 
hide_16041();
function hide_16041() {
	var selector = "#obj16053";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16036_SCEventRun_runningActionsCount = obj16036_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16041(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16043 
hide_16042();
function hide_16042() {
	var selector = "#obj16043";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16036_SCEventRun_runningActionsCount = obj16036_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16042(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16036_SCEventRun_runningActionsCount = window.obj16036_SCEventRun_runningActionsCount - 1;

if (window.obj16036_SCEventRun_runningActionsCount < 0) {
	window.obj16036_SCEventRun_runningActionsCount = 0;
} else if (window.obj16036_SCEventRun_runningActionsCount == 0) {
	obj16036_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16036_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16036_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16036").trigger("obj16036_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16036) {
				console.warn("de-queueing event obj16036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16036_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj16172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16172_onTap_activeActionGroupIndex = -1;
		$("#obj16172").trigger("obj16172_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16172) {
				console.warn("de-queueing event obj16172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16172_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15933 
hide_16176();
function hide_16176() {
	var selector = "#obj15933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16176(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16170
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16170";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15931
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj15931";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16160
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16160";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16152
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16152";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16142
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16142";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16134
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16134";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16126
(function(){
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;


	var selector = "#obj16126";
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
					window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16174();
function playAudioFile_16174() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16174")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16174");
			$("#obj_audio_playSoundFile16174").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
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
				window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15521 
runActionList_16183();
function runActionList_16183() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	$("#obj15521").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15957 
runActionList_16184();
function runActionList_16184() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	$("#obj15957").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15950 
runActionList_16185();
function runActionList_16185() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	$("#obj15950").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16036 
runActionList_16186();
function runActionList_16186() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	$("#obj16036").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16206 
runActionList_16275();
function runActionList_16275() {
	window.obj16172_onTap_runningActionsCount = obj16172_onTap_runningActionsCount + 1;

	$("#obj16206").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16172_onTap_runningActionsCount = window.obj16172_onTap_runningActionsCount - 1;

if (window.obj16172_onTap_runningActionsCount < 0) {
	window.obj16172_onTap_runningActionsCount = 0;
} else if (window.obj16172_onTap_runningActionsCount == 0) {
	obj16172_onTap_actionGroup1();
}		
	}, 1);
}







};
obj16172_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16172_onTap_activeActionGroupIndex = -1;
		$("#obj16172").trigger("obj16172_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16172) {
				console.warn("de-queueing event obj16172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16172_onTap_activeActionGroupIndex = 1;
	











































};
obj16160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16160_onTap_activeActionGroupIndex = -1;
		$("#obj16160").trigger("obj16160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16160) {
				console.warn("de-queueing event obj16160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16160_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15882
(function(){
	window.obj16160_onTap_runningActionsCount = obj16160_onTap_runningActionsCount + 1;


	var selector = "#obj15882";
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
					window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
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
				window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16162();
function playAudioFile_16162() {
	window.obj16160_onTap_runningActionsCount = obj16160_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16162")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16162");
			$("#obj_audio_playSoundFile16162").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
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
				window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16164();
function switchText_16164() {
	window.obj16160_onTap_runningActionsCount = obj16160_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>28</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16160").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16160_content");
			setTimeout(function () {
				window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16160_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16160_onTap_activeActionGroupIndex = -1;
		$("#obj16160").trigger("obj16160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16160) {
				console.warn("de-queueing event obj16160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16160_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16165();
function wait_16165() {
	window.obj16160_onTap_runningActionsCount = obj16160_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16160_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16160_onTap_activeActionGroupIndex = -1;
		$("#obj16160").trigger("obj16160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16160) {
				console.warn("de-queueing event obj16160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16160_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16166();
function switchText_16166() {
	window.obj16160_onTap_runningActionsCount = obj16160_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">28</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16160_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16160_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16160").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16160_content");
			setTimeout(function () {
				window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16160 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16160_onTap_runningActionsCount = window.obj16160_onTap_runningActionsCount - 1;

if (window.obj16160_onTap_runningActionsCount < 0) {
	window.obj16160_onTap_runningActionsCount = 0;
} else if (window.obj16160_onTap_runningActionsCount == 0) {
	obj16160_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16160_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16160_onTap_activeActionGroupIndex = -1;
		$("#obj16160").trigger("obj16160_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16160) {
				console.warn("de-queueing event obj16160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16160_onTap_activeActionGroupIndex = 3;
	











































};
obj16152_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16152_onTap_activeActionGroupIndex = -1;
		$("#obj16152").trigger("obj16152_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16152) {
				console.warn("de-queueing event obj16152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16152_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15931 
hide_16197();
function hide_16197() {
	var selector = "#obj15931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16197(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16170 
hide_16200();
function hide_16200() {
	var selector = "#obj16170";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16200(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15889
(function(){
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;


	var selector = "#obj15889";
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
					window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
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
				window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15933
(function(){
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;


	var selector = "#obj15933";
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
					window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
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
				window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16168
(function(){
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;


	var selector = "#obj16168";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
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
				window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16195();
function playAudioFile_16195() {
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16195")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16195");
			$("#obj_audio_playSoundFile16195").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
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
				window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj15464 
incrementCounter_16201();
function incrementCounter_16201() {
	window.obj16152_onTap_runningActionsCount = obj16152_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16152_onTap_runningActionsCount = window.obj16152_onTap_runningActionsCount - 1;

if (window.obj16152_onTap_runningActionsCount < 0) {
	window.obj16152_onTap_runningActionsCount = 0;
} else if (window.obj16152_onTap_runningActionsCount == 0) {
	obj16152_onTap_actionGroup1();
} }, 1);
}











};
obj16152_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16152_onTap_activeActionGroupIndex = -1;
		$("#obj16152").trigger("obj16152_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16152) {
				console.warn("de-queueing event obj16152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16152_onTap_activeActionGroupIndex = 1;
	











































};
obj16142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16142_onTap_activeActionGroupIndex = -1;
		$("#obj16142").trigger("obj16142_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16142) {
				console.warn("de-queueing event obj16142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16142_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15899
(function(){
	window.obj16142_onTap_runningActionsCount = obj16142_onTap_runningActionsCount + 1;


	var selector = "#obj15899";
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
					window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
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
				window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16190();
function playAudioFile_16190() {
	window.obj16142_onTap_runningActionsCount = obj16142_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16190")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16190");
			$("#obj_audio_playSoundFile16190").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
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
				window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16192();
function switchText_16192() {
	window.obj16142_onTap_runningActionsCount = obj16142_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>18</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16142").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16142_content");
			setTimeout(function () {
				window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16142_onTap_activeActionGroupIndex = -1;
		$("#obj16142").trigger("obj16142_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16142) {
				console.warn("de-queueing event obj16142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16142_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16193();
function wait_16193() {
	window.obj16142_onTap_runningActionsCount = obj16142_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16142_onTap_activeActionGroupIndex = -1;
		$("#obj16142").trigger("obj16142_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16142) {
				console.warn("de-queueing event obj16142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16142_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16194();
function switchText_16194() {
	window.obj16142_onTap_runningActionsCount = obj16142_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">18</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16142").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16142_content");
			setTimeout(function () {
				window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16142_onTap_runningActionsCount = window.obj16142_onTap_runningActionsCount - 1;

if (window.obj16142_onTap_runningActionsCount < 0) {
	window.obj16142_onTap_runningActionsCount = 0;
} else if (window.obj16142_onTap_runningActionsCount == 0) {
	obj16142_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16142_onTap_activeActionGroupIndex = -1;
		$("#obj16142").trigger("obj16142_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16142) {
				console.warn("de-queueing event obj16142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16142_onTap_activeActionGroupIndex = 3;
	











































};
obj16126_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16126_onTap_activeActionGroupIndex = -1;
		$("#obj16126").trigger("obj16126_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16126) {
				console.warn("de-queueing event obj16126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16126_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15919
(function(){
	window.obj16126_onTap_runningActionsCount = obj16126_onTap_runningActionsCount + 1;


	var selector = "#obj15919";
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
					window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
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
				window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16128();
function playAudioFile_16128() {
	window.obj16126_onTap_runningActionsCount = obj16126_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16128")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16128");
			$("#obj_audio_playSoundFile16128").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
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
				window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16130();
function switchText_16130() {
	window.obj16126_onTap_runningActionsCount = obj16126_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>24</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16126_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16126_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16126").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16126_content");
			setTimeout(function () {
				window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16126 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16126_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16126_onTap_activeActionGroupIndex = -1;
		$("#obj16126").trigger("obj16126_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16126) {
				console.warn("de-queueing event obj16126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16126_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16131();
function wait_16131() {
	window.obj16126_onTap_runningActionsCount = obj16126_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16126_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16126_onTap_activeActionGroupIndex = -1;
		$("#obj16126").trigger("obj16126_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16126) {
				console.warn("de-queueing event obj16126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16126_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16132();
function switchText_16132() {
	window.obj16126_onTap_runningActionsCount = obj16126_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">24</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16126_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16126_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16126").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16126_content");
			setTimeout(function () {
				window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16126 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16126_onTap_runningActionsCount = window.obj16126_onTap_runningActionsCount - 1;

if (window.obj16126_onTap_runningActionsCount < 0) {
	window.obj16126_onTap_runningActionsCount = 0;
} else if (window.obj16126_onTap_runningActionsCount == 0) {
	obj16126_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16126_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16126_onTap_activeActionGroupIndex = -1;
		$("#obj16126").trigger("obj16126_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16126) {
				console.warn("de-queueing event obj16126." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16126").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16126_onTap_activeActionGroupIndex = 3;
	











































};
obj16134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16134_onTap_activeActionGroupIndex = -1;
		$("#obj16134").trigger("obj16134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16134) {
				console.warn("de-queueing event obj16134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16134_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15917
(function(){
	window.obj16134_onTap_runningActionsCount = obj16134_onTap_runningActionsCount + 1;


	var selector = "#obj15917";
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
					window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
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
				window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16136();
function playAudioFile_16136() {
	window.obj16134_onTap_runningActionsCount = obj16134_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16136")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16136");
			$("#obj_audio_playSoundFile16136").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
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
				window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16138();
function switchText_16138() {
	window.obj16134_onTap_runningActionsCount = obj16134_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>42</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16134_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16134_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16134").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16134_content");
			setTimeout(function () {
				window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16134 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16134_onTap_activeActionGroupIndex = -1;
		$("#obj16134").trigger("obj16134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16134) {
				console.warn("de-queueing event obj16134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16134_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16139();
function wait_16139() {
	window.obj16134_onTap_runningActionsCount = obj16134_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16134_onTap_activeActionGroupIndex = -1;
		$("#obj16134").trigger("obj16134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16134) {
				console.warn("de-queueing event obj16134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16134_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16140();
function switchText_16140() {
	window.obj16134_onTap_runningActionsCount = obj16134_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">42</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16134_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16134_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16134").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16134_content");
			setTimeout(function () {
				window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16134 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16134_onTap_runningActionsCount = window.obj16134_onTap_runningActionsCount - 1;

if (window.obj16134_onTap_runningActionsCount < 0) {
	window.obj16134_onTap_runningActionsCount = 0;
} else if (window.obj16134_onTap_runningActionsCount == 0) {
	obj16134_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16134_onTap_activeActionGroupIndex = -1;
		$("#obj16134").trigger("obj16134_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16134) {
				console.warn("de-queueing event obj16134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16134_onTap_activeActionGroupIndex = 3;
	











































};
obj16119_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16119").trigger("obj16119_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16119) {
				console.warn("de-queueing event obj16119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16119_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16160 
hide_16121();
function hide_16121() {
	var selector = "#obj16160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16119_SCEventRun_runningActionsCount = obj16119_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16121(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16152 
hide_16122();
function hide_16122() {
	var selector = "#obj16152";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16119_SCEventRun_runningActionsCount = obj16119_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16122(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16142 
hide_16123();
function hide_16123() {
	var selector = "#obj16142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16119_SCEventRun_runningActionsCount = obj16119_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16123(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16134 
hide_16124();
function hide_16124() {
	var selector = "#obj16134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16119_SCEventRun_runningActionsCount = obj16119_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16124(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16126 
hide_16125();
function hide_16125() {
	var selector = "#obj16126";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16119_SCEventRun_runningActionsCount = obj16119_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16125(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16119_SCEventRun_runningActionsCount = window.obj16119_SCEventRun_runningActionsCount - 1;

if (window.obj16119_SCEventRun_runningActionsCount < 0) {
	window.obj16119_SCEventRun_runningActionsCount = 0;
} else if (window.obj16119_SCEventRun_runningActionsCount == 0) {
	obj16119_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16119_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16119").trigger("obj16119_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16119) {
				console.warn("de-queueing event obj16119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16119_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj16259_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16259_onTap_activeActionGroupIndex = -1;
		$("#obj16259").trigger("obj16259_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16259) {
				console.warn("de-queueing event obj16259." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16259").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16259_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15933 
hide_16263();
function hide_16263() {
	var selector = "#obj15933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16263(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj16257
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16257";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15931
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj15931";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16247
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16247";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16239
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16239";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16229
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16229";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16221
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16221";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16213
(function(){
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;


	var selector = "#obj16213";
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
					window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16261();
function playAudioFile_16261() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16261")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16261");
			$("#obj_audio_playSoundFile16261").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
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
				window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj15521 
runActionList_16270();
function runActionList_16270() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	$("#obj15521").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15957 
runActionList_16271();
function runActionList_16271() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	$("#obj15957").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16119 
runActionList_16273();
function runActionList_16273() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	$("#obj16119").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj15950 
runActionList_16272();
function runActionList_16272() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	$("#obj15950").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj16036 
runActionList_16274();
function runActionList_16274() {
	window.obj16259_onTap_runningActionsCount = obj16259_onTap_runningActionsCount + 1;

	$("#obj16036").trigger('SCEventRun');
	setTimeout(function() {
		window.obj16259_onTap_runningActionsCount = window.obj16259_onTap_runningActionsCount - 1;

if (window.obj16259_onTap_runningActionsCount < 0) {
	window.obj16259_onTap_runningActionsCount = 0;
} else if (window.obj16259_onTap_runningActionsCount == 0) {
	obj16259_onTap_actionGroup1();
}		
	}, 1);
}







};
obj16259_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16259_onTap_activeActionGroupIndex = -1;
		$("#obj16259").trigger("obj16259_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16259) {
				console.warn("de-queueing event obj16259." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16259").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16259_onTap_activeActionGroupIndex = 1;
	











































};
obj16247_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16247_onTap_activeActionGroupIndex = -1;
		$("#obj16247").trigger("obj16247_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16247) {
				console.warn("de-queueing event obj16247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16247_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15882
(function(){
	window.obj16247_onTap_runningActionsCount = obj16247_onTap_runningActionsCount + 1;


	var selector = "#obj15882";
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
					window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
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
				window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16249();
function playAudioFile_16249() {
	window.obj16247_onTap_runningActionsCount = obj16247_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16249")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16249");
			$("#obj_audio_playSoundFile16249").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
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
				window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16251();
function switchText_16251() {
	window.obj16247_onTap_runningActionsCount = obj16247_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 30px; font-family: Roboto;\"><strong>28</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16247_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16247_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16247").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16247_content");
			setTimeout(function () {
				window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16247 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16247_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16247_onTap_activeActionGroupIndex = -1;
		$("#obj16247").trigger("obj16247_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16247) {
				console.warn("de-queueing event obj16247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16247_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16252();
function wait_16252() {
	window.obj16247_onTap_runningActionsCount = obj16247_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16247_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16247_onTap_activeActionGroupIndex = -1;
		$("#obj16247").trigger("obj16247_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16247) {
				console.warn("de-queueing event obj16247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16247_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16253();
function switchText_16253() {
	window.obj16247_onTap_runningActionsCount = obj16247_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">28</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16247_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16247_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16247").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16247_content");
			setTimeout(function () {
				window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16247 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16247_onTap_runningActionsCount = window.obj16247_onTap_runningActionsCount - 1;

if (window.obj16247_onTap_runningActionsCount < 0) {
	window.obj16247_onTap_runningActionsCount = 0;
} else if (window.obj16247_onTap_runningActionsCount == 0) {
	obj16247_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16247_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16247_onTap_activeActionGroupIndex = -1;
		$("#obj16247").trigger("obj16247_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16247) {
				console.warn("de-queueing event obj16247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16247_onTap_activeActionGroupIndex = 3;
	











































};
obj16239_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16239_onTap_activeActionGroupIndex = -1;
		$("#obj16239").trigger("obj16239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16239) {
				console.warn("de-queueing event obj16239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16239_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15889
(function(){
	window.obj16239_onTap_runningActionsCount = obj16239_onTap_runningActionsCount + 1;


	var selector = "#obj15889";
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
					window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
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
				window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16241();
function playAudioFile_16241() {
	window.obj16239_onTap_runningActionsCount = obj16239_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16241")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16241");
			$("#obj_audio_playSoundFile16241").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
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
				window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16243();
function switchText_16243() {
	window.obj16239_onTap_runningActionsCount = obj16239_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>–</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16239_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16239_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16239").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16239_content");
			setTimeout(function () {
				window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16239 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16239_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16239_onTap_activeActionGroupIndex = -1;
		$("#obj16239").trigger("obj16239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16239) {
				console.warn("de-queueing event obj16239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16239_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16244();
function wait_16244() {
	window.obj16239_onTap_runningActionsCount = obj16239_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16239_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16239_onTap_activeActionGroupIndex = -1;
		$("#obj16239").trigger("obj16239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16239) {
				console.warn("de-queueing event obj16239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16239_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16245();
function switchText_16245() {
	window.obj16239_onTap_runningActionsCount = obj16239_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">–</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16239_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16239_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16239").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16239_content");
			setTimeout(function () {
				window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16239 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16239_onTap_runningActionsCount = window.obj16239_onTap_runningActionsCount - 1;

if (window.obj16239_onTap_runningActionsCount < 0) {
	window.obj16239_onTap_runningActionsCount = 0;
} else if (window.obj16239_onTap_runningActionsCount == 0) {
	obj16239_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16239_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16239_onTap_activeActionGroupIndex = -1;
		$("#obj16239").trigger("obj16239_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16239) {
				console.warn("de-queueing event obj16239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16239_onTap_activeActionGroupIndex = 3;
	











































};
obj16229_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16229_onTap_activeActionGroupIndex = -1;
		$("#obj16229").trigger("obj16229_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16229) {
				console.warn("de-queueing event obj16229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16229_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj15931 
hide_16233();
function hide_16233() {
	var selector = "#obj15931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16233(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16257 
hide_16236();
function hide_16236() {
	var selector = "#obj16257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16236(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj15899
(function(){
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;


	var selector = "#obj15899";
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
					window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
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
				window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj15933
(function(){
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;


	var selector = "#obj15933";
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
					window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
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
				window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj16255
(function(){
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;


	var selector = "#obj16255";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
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
				window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16231();
function playAudioFile_16231() {
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16231")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16231");
			$("#obj_audio_playSoundFile16231").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
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
				window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
}
		}
	}

	
	
	
}

























//	action: increment counter
//	target: obj15464 
incrementCounter_16237();
function incrementCounter_16237() {
	window.obj16229_onTap_runningActionsCount = obj16229_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj16229_onTap_runningActionsCount = window.obj16229_onTap_runningActionsCount - 1;

if (window.obj16229_onTap_runningActionsCount < 0) {
	window.obj16229_onTap_runningActionsCount = 0;
} else if (window.obj16229_onTap_runningActionsCount == 0) {
	obj16229_onTap_actionGroup1();
} }, 1);
}











};
obj16229_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16229_onTap_activeActionGroupIndex = -1;
		$("#obj16229").trigger("obj16229_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16229) {
				console.warn("de-queueing event obj16229." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16229").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16229_onTap_activeActionGroupIndex = 1;
	











































};
obj16221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16221_onTap_activeActionGroupIndex = -1;
		$("#obj16221").trigger("obj16221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16221) {
				console.warn("de-queueing event obj16221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16221_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15917
(function(){
	window.obj16221_onTap_runningActionsCount = obj16221_onTap_runningActionsCount + 1;


	var selector = "#obj15917";
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
					window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
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
				window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16223();
function playAudioFile_16223() {
	window.obj16221_onTap_runningActionsCount = obj16221_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16223")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16223");
			$("#obj_audio_playSoundFile16223").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
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
				window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16225();
function switchText_16225() {
	window.obj16221_onTap_runningActionsCount = obj16221_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>42</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16221_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16221_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16221").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16221_content");
			setTimeout(function () {
				window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16221 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16221_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16221_onTap_activeActionGroupIndex = -1;
		$("#obj16221").trigger("obj16221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16221) {
				console.warn("de-queueing event obj16221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16221_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16226();
function wait_16226() {
	window.obj16221_onTap_runningActionsCount = obj16221_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16221_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16221_onTap_activeActionGroupIndex = -1;
		$("#obj16221").trigger("obj16221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16221) {
				console.warn("de-queueing event obj16221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16221_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16227();
function switchText_16227() {
	window.obj16221_onTap_runningActionsCount = obj16221_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">42</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16221_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16221_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16221").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16221_content");
			setTimeout(function () {
				window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16221 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16221_onTap_runningActionsCount = window.obj16221_onTap_runningActionsCount - 1;

if (window.obj16221_onTap_runningActionsCount < 0) {
	window.obj16221_onTap_runningActionsCount = 0;
} else if (window.obj16221_onTap_runningActionsCount == 0) {
	obj16221_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16221_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16221_onTap_activeActionGroupIndex = -1;
		$("#obj16221").trigger("obj16221_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16221) {
				console.warn("de-queueing event obj16221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16221_onTap_activeActionGroupIndex = 3;
	











































};
obj16213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16213_onTap_activeActionGroupIndex = -1;
		$("#obj16213").trigger("obj16213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16213) {
				console.warn("de-queueing event obj16213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16213_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj15919
(function(){
	window.obj16213_onTap_runningActionsCount = obj16213_onTap_runningActionsCount + 1;


	var selector = "#obj15919";
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
					window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
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
				window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_16215();
function playAudioFile_16215() {
	window.obj16213_onTap_runningActionsCount = obj16213_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile16215")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile16215");
			$("#obj_audio_playSoundFile16215").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
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
				window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_16217();
function switchText_16217() {
	window.obj16213_onTap_runningActionsCount = obj16213_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>24</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16213_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16213_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16213").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16213_content");
			setTimeout(function () {
				window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj16213 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj16213_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16213_onTap_activeActionGroupIndex = -1;
		$("#obj16213").trigger("obj16213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16213) {
				console.warn("de-queueing event obj16213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16213_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_16218();
function wait_16218() {
	window.obj16213_onTap_runningActionsCount = obj16213_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup2();
}
	}, 500);
}


























};
obj16213_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16213_onTap_activeActionGroupIndex = -1;
		$("#obj16213").trigger("obj16213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16213) {
				console.warn("de-queueing event obj16213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16213_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_16219();
function switchText_16219() {
	window.obj16213_onTap_runningActionsCount = obj16213_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">24</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj16213_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj16213_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj16213").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj16213_content");
			setTimeout(function () {
				window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj16213 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj16213_onTap_runningActionsCount = window.obj16213_onTap_runningActionsCount - 1;

if (window.obj16213_onTap_runningActionsCount < 0) {
	window.obj16213_onTap_runningActionsCount = 0;
} else if (window.obj16213_onTap_runningActionsCount == 0) {
	obj16213_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj16213_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16213_onTap_activeActionGroupIndex = -1;
		$("#obj16213").trigger("obj16213_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16213) {
				console.warn("de-queueing event obj16213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16213_onTap_activeActionGroupIndex = 3;
	











































};
obj20072_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20072_onTap_activeActionGroupIndex = -1;
		$("#obj20072").trigger("obj20072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20072) {
				console.warn("de-queueing event obj20072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20072_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj20087
(function(){
	window.obj20072_onTap_runningActionsCount = obj20072_onTap_runningActionsCount + 1;


	var selector = "#obj20087";
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
					window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
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
				window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_20082();
function playAudioFile_20082() {
	window.obj20072_onTap_runningActionsCount = obj20072_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20082")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20082");
			$("#obj_audio_playSoundFile20082").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
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
				window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_20084();
function switchText_20084() {
	window.obj20072_onTap_runningActionsCount = obj20072_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 30px;\"><strong>+</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj20072_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj20072_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj20072").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj20072_content");
			setTimeout(function () {
				window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj20072 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj20072_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20072_onTap_activeActionGroupIndex = -1;
		$("#obj20072").trigger("obj20072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20072) {
				console.warn("de-queueing event obj20072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20072_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_20085();
function wait_20085() {
	window.obj20072_onTap_runningActionsCount = obj20072_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup2();
}
	}, 500);
}


























};
obj20072_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20072_onTap_activeActionGroupIndex = -1;
		$("#obj20072").trigger("obj20072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20072) {
				console.warn("de-queueing event obj20072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20072_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_20086();
function switchText_20086() {
	window.obj20072_onTap_runningActionsCount = obj20072_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-size: 33px; font-family: Roboto;\">+</span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj20072_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj20072_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj20072").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj20072_content");
			setTimeout(function () {
				window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj20072 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj20072_onTap_runningActionsCount = window.obj20072_onTap_runningActionsCount - 1;

if (window.obj20072_onTap_runningActionsCount < 0) {
	window.obj20072_onTap_runningActionsCount = 0;
} else if (window.obj20072_onTap_runningActionsCount == 0) {
	obj20072_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj20072_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20072_onTap_activeActionGroupIndex = -1;
		$("#obj20072").trigger("obj20072_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20072) {
				console.warn("de-queueing event obj20072." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20072").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20072_onTap_activeActionGroupIndex = 3;
	











































};
obj16206_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj16206_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16206").trigger("obj16206_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16206) {
				console.warn("de-queueing event obj16206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16206_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj16247 
hide_16208();
function hide_16208() {
	var selector = "#obj16247";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16206_SCEventRun_runningActionsCount = obj16206_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16208(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16239 
hide_16209();
function hide_16209() {
	var selector = "#obj16239";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16206_SCEventRun_runningActionsCount = obj16206_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16209(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16229 
hide_16210();
function hide_16210() {
	var selector = "#obj16229";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16206_SCEventRun_runningActionsCount = obj16206_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16210(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16221 
hide_16211();
function hide_16211() {
	var selector = "#obj16221";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16206_SCEventRun_runningActionsCount = obj16206_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16211(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj16213 
hide_16212();
function hide_16212() {
	var selector = "#obj16213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj16206_SCEventRun_runningActionsCount = obj16206_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_16212(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj16206_SCEventRun_runningActionsCount = window.obj16206_SCEventRun_runningActionsCount - 1;

if (window.obj16206_SCEventRun_runningActionsCount < 0) {
	window.obj16206_SCEventRun_runningActionsCount = 0;
} else if (window.obj16206_SCEventRun_runningActionsCount == 0) {
	obj16206_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj16206_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj16206_SCEventRun_activeActionGroupIndex = -1;
		$("#obj16206").trigger("obj16206_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 16206) {
				console.warn("de-queueing event obj16206." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj16206").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj16206_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj20036_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20036_onTap_activeActionGroupIndex = -1;
		$("#obj20036").trigger("obj20036_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20036) {
				console.warn("de-queueing event obj20036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20036_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj20041
(function(){
	window.obj20036_onTap_runningActionsCount = obj20036_onTap_runningActionsCount + 1;


	var selector = "#obj20041";
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
					window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
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
				window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj20034
(function(){
	window.obj20036_onTap_runningActionsCount = obj20036_onTap_runningActionsCount + 1;


	var selector = "#obj20034";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
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
				window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_20038();
function playAudioFile_20038() {
	window.obj20036_onTap_runningActionsCount = obj20036_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20038")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20038");
			$("#obj_audio_playSoundFile20038").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
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
				window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_20039();
function switchText_20039() {
	window.obj20036_onTap_runningActionsCount = obj20036_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 38px; font-family: Roboto;\">Марійка <span style=\"color: #ed1c24;\"><span style=\"color: #4d74d5;\"><span style=\"color: #000000;\"><span style=\"color: #ffffff;\">сплела</span> </span></span></span>42 браслети. Після того, як вона <span style=\"color: #ed1c24;\"><span style=\"color: #4d74d5;\"><span style=\"color: #000000;\">подарувала</span></span></span></span><br /><span style=\"font-size: 38px; font-family: Roboto;\">браслети своїм друзям, у неї <span style=\"color: #ed1c24;\"><span style=\"color: #2174d5;\"><span style=\"color: #000000;\">залишилось </span></span></span>24 браслети.</span><br /><span style=\"font-size: 38px; font-family: Roboto;\">Скільки браслетів подарувала Марійка?</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15814_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15814_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15814").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15814_content");
			setTimeout(function () {
				window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15814 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj20036_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20036_onTap_activeActionGroupIndex = -1;
		$("#obj20036").trigger("obj20036_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20036) {
				console.warn("de-queueing event obj20036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20036_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj15464 
incrementCounter_20049();
function incrementCounter_20049() {
	window.obj20036_onTap_runningActionsCount = obj20036_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj20036_onTap_runningActionsCount = window.obj20036_onTap_runningActionsCount - 1;

if (window.obj20036_onTap_runningActionsCount < 0) {
	window.obj20036_onTap_runningActionsCount = 0;
} else if (window.obj20036_onTap_runningActionsCount == 0) {
	obj20036_onTap_actionGroup2();
} }, 1);
}











};
obj20036_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20036_onTap_activeActionGroupIndex = -1;
		$("#obj20036").trigger("obj20036_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20036) {
				console.warn("de-queueing event obj20036." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20036").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20036_onTap_activeActionGroupIndex = 2;
	











































};
obj20052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20052_onTap_activeActionGroupIndex = -1;
		$("#obj20052").trigger("obj20052_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20052) {
				console.warn("de-queueing event obj20052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20052_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj20050
(function(){
	window.obj20052_onTap_runningActionsCount = obj20052_onTap_runningActionsCount + 1;


	var selector = "#obj20050";
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
					window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
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
				window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj20059
(function(){
	window.obj20052_onTap_runningActionsCount = obj20052_onTap_runningActionsCount + 1;


	var selector = "#obj20059";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
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
				window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_20054();
function playAudioFile_20054() {
	window.obj20052_onTap_runningActionsCount = obj20052_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20054")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20054");
			$("#obj_audio_playSoundFile20054").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
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
				window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_20055();
function switchText_20055() {
	window.obj20052_onTap_runningActionsCount = obj20052_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 38px; font-family: Roboto;\">Марійка <span style=\"color: #ed1c24;\"><span style=\"color: #4d74d5;\"><span style=\"color: #000000;\">сплела </span></span></span>42 браслети. Після того, як вона <span style=\"color: #ffffff;\">подарувала</span></span><br /><span style=\"font-size: 38px; font-family: Roboto;\">браслети своїм друзям, у неї <span style=\"color: #ed1c24;\"><span style=\"color: #2174d5;\"><span style=\"color: #000000;\">залишилось </span></span></span>24 браслети.</span><br /><span style=\"font-size: 38px; font-family: Roboto;\">Скільки браслетів подарувала Марійка?</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15814_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15814_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15814").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15814_content");
			setTimeout(function () {
				window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15814 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj20052_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20052_onTap_activeActionGroupIndex = -1;
		$("#obj20052").trigger("obj20052_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20052) {
				console.warn("de-queueing event obj20052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20052_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj15464 
incrementCounter_20058();
function incrementCounter_20058() {
	window.obj20052_onTap_runningActionsCount = obj20052_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj20052_onTap_runningActionsCount = window.obj20052_onTap_runningActionsCount - 1;

if (window.obj20052_onTap_runningActionsCount < 0) {
	window.obj20052_onTap_runningActionsCount = 0;
} else if (window.obj20052_onTap_runningActionsCount == 0) {
	obj20052_onTap_actionGroup2();
} }, 1);
}











};
obj20052_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20052_onTap_activeActionGroupIndex = -1;
		$("#obj20052").trigger("obj20052_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20052) {
				console.warn("de-queueing event obj20052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20052_onTap_activeActionGroupIndex = 2;
	











































};
obj20063_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20063_onTap_activeActionGroupIndex = -1;
		$("#obj20063").trigger("obj20063_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20063) {
				console.warn("de-queueing event obj20063." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20063").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20063_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj20061
(function(){
	window.obj20063_onTap_runningActionsCount = obj20063_onTap_runningActionsCount + 1;


	var selector = "#obj20061";
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
					window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
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
				window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj20070
(function(){
	window.obj20063_onTap_runningActionsCount = obj20063_onTap_runningActionsCount + 1;


	var selector = "#obj20070";
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
	
		var animationType = "zoomIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
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
				window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_20065();
function playAudioFile_20065() {
	window.obj20063_onTap_runningActionsCount = obj20063_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile20065")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile20065");
			$("#obj_audio_playSoundFile20065").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
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
				window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_20066();
function switchText_20066() {
	window.obj20063_onTap_runningActionsCount = obj20063_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 38px; font-family: Roboto;\">Марійка <span style=\"color: #ed1c24;\"><span style=\"color: #4d74d5;\"><span style=\"color: #000000;\">сплела </span></span></span>42 браслети. Після того, як вона <span style=\"color: #ed1c24;\"><span style=\"color: #4d74d5;\"><span style=\"color: #000000;\">подарувала</span></span></span></span><br /><span style=\"font-size: 38px; font-family: Roboto;\">браслети своїм друзям, у неї <span style=\"color: #ed1c24;\"><span style=\"color: #2174d5;\"><span style=\"color: #000000;\"><span style=\"color: #ffffff;\">залишилось</span> </span></span></span>24 браслети.</span><br /><span style=\"font-size: 38px; font-family: Roboto;\">Скільки браслетів подарувала Марійка?</span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj15814_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj15814_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj15814").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj15814_content");
			setTimeout(function () {
				window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj15814 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj20063_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj20063_onTap_activeActionGroupIndex = -1;
		$("#obj20063").trigger("obj20063_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20063) {
				console.warn("de-queueing event obj20063." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20063").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20063_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj15464 
incrementCounter_20069();
function incrementCounter_20069() {
	window.obj20063_onTap_runningActionsCount = obj20063_onTap_runningActionsCount + 1;


	var oldValue = obj15464_counterValue;
	obj15464_counterValue = obj15464_counterValue + 1;
	if (! obj15464_counterCanExceedTargetValue && obj15464_counterValue > obj15464_counterTargetValue) {
		obj15464_counterValue = obj15464_counterTargetValue;
	}

	if (oldValue != obj15464_counterValue) {
		$("#obj15464").trigger('SCEventCounterValueChange');
		$("#obj15464").trigger('SCEventCounterIncrease');
		if (obj15464_counterValue == obj15464_counterTargetValue)
			$("#obj15464").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj20063_onTap_runningActionsCount = window.obj20063_onTap_runningActionsCount - 1;

if (window.obj20063_onTap_runningActionsCount < 0) {
	window.obj20063_onTap_runningActionsCount = 0;
} else if (window.obj20063_onTap_runningActionsCount == 0) {
	obj20063_onTap_actionGroup2();
} }, 1);
}











};
obj20063_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj20063_onTap_activeActionGroupIndex = -1;
		$("#obj20063").trigger("obj20063_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 20063) {
				console.warn("de-queueing event obj20063." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj20063").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj20063_onTap_activeActionGroupIndex = 2;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj15435: Event Touch Down
 *
 */

$("#obj15435").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15435_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15435_onTap is still running");
	return;
}
var obj15435_onTap_runningActionsCount = 0;
var obj15435_onTap_loopCount = 0;
obj15435_onTap_actionGroup0();
});


















/*
 *
 *   obj15438: Event Touch Down
 *
 */

$("#obj15438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15438_onTap is still running");
	return;
}
var obj15438_onTap_runningActionsCount = 0;
var obj15438_onTap_loopCount = 0;
obj15438_onTap_actionGroup0();
});
























































/*
 *
 *   obj15445: Event Touch Down
 *
 */

$("#obj15445").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15445_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15445_onTap is still running");
	return;
}
var obj15445_onTap_runningActionsCount = 0;
var obj15445_onTap_loopCount = 0;
obj15445_onTap_actionGroup0();
});


















/*
 *
 *   obj15448: Event Touch Down
 *
 */

$("#obj15448").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15448_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15448_onTap is still running");
	return;
}
var obj15448_onTap_runningActionsCount = 0;
var obj15448_onTap_loopCount = 0;
obj15448_onTap_actionGroup0();
});


















/*
 *
 *   obj15454: Event Touch Down
 *
 */

$("#obj15454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15454_onTap is still running");
	return;
}
var obj15454_onTap_runningActionsCount = 0;
var obj15454_onTap_loopCount = 0;
obj15454_onTap_actionGroup0();
});



























/*
 *
 *   obj15464: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj15464").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj15464_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15464_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj15464_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj15464_SCEventCounterReachedTargetValue_loopCount = 0;
obj15464_SCEventCounterReachedTargetValue_actionGroup0();
});
























































/*
 *
 *   obj15521: Event SCEventRun
 *
 */

$("#obj15521").bind("SCEventRun", function(event) {
	if (window.obj15521_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15521_SCEventRun is still running");
	return;
}
var obj15521_SCEventRun_runningActionsCount = 0;
var obj15521_SCEventRun_loopCount = 0;
obj15521_SCEventRun_actionGroup0();
});

































































































































































/*
 *
 *   obj15824: Event Touch Down
 *
 */

$("#obj15824").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15824_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15824_onTap is still running");
	return;
}
var obj15824_onTap_runningActionsCount = 0;
var obj15824_onTap_loopCount = 0;
obj15824_onTap_actionGroup0();
});
























































/*
 *
 *   obj15858: Event Touch Down
 *
 */

$("#obj15858").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15858_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15858_onTap is still running");
	return;
}
var obj15858_onTap_runningActionsCount = 0;
var obj15858_onTap_loopCount = 0;
obj15858_onTap_actionGroup0();
});


















/*
 *
 *   obj15891: Event Touch Down
 *
 */

$("#obj15891").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15891_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15891_onTap is still running");
	return;
}
var obj15891_onTap_runningActionsCount = 0;
var obj15891_onTap_loopCount = 0;
obj15891_onTap_actionGroup0();
});


















/*
 *
 *   obj15901: Event Touch Down
 *
 */

$("#obj15901").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15901_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15901_onTap is still running");
	return;
}
var obj15901_onTap_runningActionsCount = 0;
var obj15901_onTap_loopCount = 0;
obj15901_onTap_actionGroup0();
});


















/*
 *
 *   obj15909: Event Touch Down
 *
 */

$("#obj15909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15909_onTap is still running");
	return;
}
var obj15909_onTap_runningActionsCount = 0;
var obj15909_onTap_loopCount = 0;
obj15909_onTap_actionGroup0();
});


















/*
 *
 *   obj15921: Event Touch Down
 *
 */

$("#obj15921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15921_onTap is still running");
	return;
}
var obj15921_onTap_runningActionsCount = 0;
var obj15921_onTap_loopCount = 0;
obj15921_onTap_actionGroup0();
});



























/*
 *
 *   obj15950: Event SCEventRun
 *
 */

$("#obj15950").bind("SCEventRun", function(event) {
	if (window.obj15950_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15950_SCEventRun is still running");
	return;
}
var obj15950_SCEventRun_runningActionsCount = 0;
var obj15950_SCEventRun_loopCount = 0;
obj15950_SCEventRun_actionGroup0();
});









/*
 *
 *   obj16010: Event Touch Down
 *
 */

$("#obj16010").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16010_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16010_onTap is still running");
	return;
}
var obj16010_onTap_runningActionsCount = 0;
var obj16010_onTap_loopCount = 0;
obj16010_onTap_actionGroup0();
});
























































/*
 *
 *   obj15998: Event Touch Down
 *
 */

$("#obj15998").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15998_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15998_onTap is still running");
	return;
}
var obj15998_onTap_runningActionsCount = 0;
var obj15998_onTap_loopCount = 0;
obj15998_onTap_actionGroup0();
});


















/*
 *
 *   obj15990: Event Touch Down
 *
 */

$("#obj15990").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15990_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15990_onTap is still running");
	return;
}
var obj15990_onTap_runningActionsCount = 0;
var obj15990_onTap_loopCount = 0;
obj15990_onTap_actionGroup0();
});


















/*
 *
 *   obj15982: Event Touch Down
 *
 */

$("#obj15982").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15982_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15982_onTap is still running");
	return;
}
var obj15982_onTap_runningActionsCount = 0;
var obj15982_onTap_loopCount = 0;
obj15982_onTap_actionGroup0();
});


















/*
 *
 *   obj15972: Event Touch Down
 *
 */

$("#obj15972").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15972_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15972_onTap is still running");
	return;
}
var obj15972_onTap_runningActionsCount = 0;
var obj15972_onTap_loopCount = 0;
obj15972_onTap_actionGroup0();
});


















/*
 *
 *   obj15964: Event Touch Down
 *
 */

$("#obj15964").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj15964_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15964_onTap is still running");
	return;
}
var obj15964_onTap_runningActionsCount = 0;
var obj15964_onTap_loopCount = 0;
obj15964_onTap_actionGroup0();
});



























/*
 *
 *   obj15957: Event SCEventRun
 *
 */

$("#obj15957").bind("SCEventRun", function(event) {
	if (window.obj15957_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj15957_SCEventRun is still running");
	return;
}
var obj15957_SCEventRun_runningActionsCount = 0;
var obj15957_SCEventRun_loopCount = 0;
obj15957_SCEventRun_actionGroup0();
});









/*
 *
 *   obj16089: Event Touch Down
 *
 */

$("#obj16089").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16089_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16089_onTap is still running");
	return;
}
var obj16089_onTap_runningActionsCount = 0;
var obj16089_onTap_loopCount = 0;
obj16089_onTap_actionGroup0();
});
























































/*
 *
 *   obj16077: Event Touch Down
 *
 */

$("#obj16077").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16077_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16077_onTap is still running");
	return;
}
var obj16077_onTap_runningActionsCount = 0;
var obj16077_onTap_loopCount = 0;
obj16077_onTap_actionGroup0();
});


















/*
 *
 *   obj16069: Event Touch Down
 *
 */

$("#obj16069").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16069_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16069_onTap is still running");
	return;
}
var obj16069_onTap_runningActionsCount = 0;
var obj16069_onTap_loopCount = 0;
obj16069_onTap_actionGroup0();
});


















/*
 *
 *   obj16061: Event Touch Down
 *
 */

$("#obj16061").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16061_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16061_onTap is still running");
	return;
}
var obj16061_onTap_runningActionsCount = 0;
var obj16061_onTap_loopCount = 0;
obj16061_onTap_actionGroup0();
});


















/*
 *
 *   obj16053: Event Touch Down
 *
 */

$("#obj16053").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16053_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16053_onTap is still running");
	return;
}
var obj16053_onTap_runningActionsCount = 0;
var obj16053_onTap_loopCount = 0;
obj16053_onTap_actionGroup0();
});


















/*
 *
 *   obj16043: Event Touch Down
 *
 */

$("#obj16043").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16043_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16043_onTap is still running");
	return;
}
var obj16043_onTap_runningActionsCount = 0;
var obj16043_onTap_loopCount = 0;
obj16043_onTap_actionGroup0();
});



























/*
 *
 *   obj16036: Event SCEventRun
 *
 */

$("#obj16036").bind("SCEventRun", function(event) {
	if (window.obj16036_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16036_SCEventRun is still running");
	return;
}
var obj16036_SCEventRun_runningActionsCount = 0;
var obj16036_SCEventRun_loopCount = 0;
obj16036_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj16172: Event Touch Down
 *
 */

$("#obj16172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16172_onTap is still running");
	return;
}
var obj16172_onTap_runningActionsCount = 0;
var obj16172_onTap_loopCount = 0;
obj16172_onTap_actionGroup0();
});
























































/*
 *
 *   obj16160: Event Touch Down
 *
 */

$("#obj16160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16160_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16160_onTap is still running");
	return;
}
var obj16160_onTap_runningActionsCount = 0;
var obj16160_onTap_loopCount = 0;
obj16160_onTap_actionGroup0();
});


















/*
 *
 *   obj16152: Event Touch Down
 *
 */

$("#obj16152").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16152_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16152_onTap is still running");
	return;
}
var obj16152_onTap_runningActionsCount = 0;
var obj16152_onTap_loopCount = 0;
obj16152_onTap_actionGroup0();
});


















/*
 *
 *   obj16142: Event Touch Down
 *
 */

$("#obj16142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16142_onTap is still running");
	return;
}
var obj16142_onTap_runningActionsCount = 0;
var obj16142_onTap_loopCount = 0;
obj16142_onTap_actionGroup0();
});


















/*
 *
 *   obj16126: Event Touch Down
 *
 */

$("#obj16126").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16126_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16126_onTap is still running");
	return;
}
var obj16126_onTap_runningActionsCount = 0;
var obj16126_onTap_loopCount = 0;
obj16126_onTap_actionGroup0();
});


















/*
 *
 *   obj16134: Event Touch Down
 *
 */

$("#obj16134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16134_onTap is still running");
	return;
}
var obj16134_onTap_runningActionsCount = 0;
var obj16134_onTap_loopCount = 0;
obj16134_onTap_actionGroup0();
});



























/*
 *
 *   obj16119: Event SCEventRun
 *
 */

$("#obj16119").bind("SCEventRun", function(event) {
	if (window.obj16119_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16119_SCEventRun is still running");
	return;
}
var obj16119_SCEventRun_runningActionsCount = 0;
var obj16119_SCEventRun_loopCount = 0;
obj16119_SCEventRun_actionGroup0();
});















































/*
 *
 *   obj16259: Event Touch Down
 *
 */

$("#obj16259").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16259_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16259_onTap is still running");
	return;
}
var obj16259_onTap_runningActionsCount = 0;
var obj16259_onTap_loopCount = 0;
obj16259_onTap_actionGroup0();
});
























































/*
 *
 *   obj16247: Event Touch Down
 *
 */

$("#obj16247").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16247_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16247_onTap is still running");
	return;
}
var obj16247_onTap_runningActionsCount = 0;
var obj16247_onTap_loopCount = 0;
obj16247_onTap_actionGroup0();
});


















/*
 *
 *   obj16239: Event Touch Down
 *
 */

$("#obj16239").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16239_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16239_onTap is still running");
	return;
}
var obj16239_onTap_runningActionsCount = 0;
var obj16239_onTap_loopCount = 0;
obj16239_onTap_actionGroup0();
});


















/*
 *
 *   obj16229: Event Touch Down
 *
 */

$("#obj16229").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16229_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16229_onTap is still running");
	return;
}
var obj16229_onTap_runningActionsCount = 0;
var obj16229_onTap_loopCount = 0;
obj16229_onTap_actionGroup0();
});


















/*
 *
 *   obj16221: Event Touch Down
 *
 */

$("#obj16221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16221_onTap is still running");
	return;
}
var obj16221_onTap_runningActionsCount = 0;
var obj16221_onTap_loopCount = 0;
obj16221_onTap_actionGroup0();
});


















/*
 *
 *   obj16213: Event Touch Down
 *
 */

$("#obj16213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj16213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16213_onTap is still running");
	return;
}
var obj16213_onTap_runningActionsCount = 0;
var obj16213_onTap_loopCount = 0;
obj16213_onTap_actionGroup0();
});


















/*
 *
 *   obj20072: Event Touch Down
 *
 */

$("#obj20072").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj20072_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20072_onTap is still running");
	return;
}
var obj20072_onTap_runningActionsCount = 0;
var obj20072_onTap_loopCount = 0;
obj20072_onTap_actionGroup0();
});



























/*
 *
 *   obj16206: Event SCEventRun
 *
 */

$("#obj16206").bind("SCEventRun", function(event) {
	if (window.obj16206_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj16206_SCEventRun is still running");
	return;
}
var obj16206_SCEventRun_runningActionsCount = 0;
var obj16206_SCEventRun_loopCount = 0;
obj16206_SCEventRun_actionGroup0();
});




















































































































































































/*
 *
 *   obj20036: Event Touch Down
 *
 */

$("#obj20036").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj20036_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20036_onTap is still running");
	return;
}
var obj20036_onTap_runningActionsCount = 0;
var obj20036_onTap_loopCount = 0;
obj20036_onTap_actionGroup0();
});
























































/*
 *
 *   obj20052: Event Touch Down
 *
 */

$("#obj20052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj20052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20052_onTap is still running");
	return;
}
var obj20052_onTap_runningActionsCount = 0;
var obj20052_onTap_loopCount = 0;
obj20052_onTap_actionGroup0();
});
























































/*
 *
 *   obj20063: Event Touch Down
 *
 */

$("#obj20063").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj20063_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj20063_onTap is still running");
	return;
}
var obj20063_onTap_runningActionsCount = 0;
var obj20063_onTap_loopCount = 0;
obj20063_onTap_actionGroup0();
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
	
$("#obj15431").trigger('SCEventShow');
$("#obj15433").trigger('SCEventShow');
$("#obj15435").trigger('SCEventShow');
$("#obj15438").trigger('SCEventShow');
$("#obj15441").trigger('SCEventShow');
$("#obj15443").trigger('SCEventShow');
$("#obj15445").trigger('SCEventShow');
$("#obj15448").trigger('SCEventShow');
$("#obj15470").trigger('SCEventShow');
$("#obj15812").trigger('SCEventShow');
$("#obj16296").trigger('SCEventShow');
$("#obj15814").trigger('SCEventShow');
$("#obj15816").trigger('SCEventShow');
$("#obj15818").trigger('SCEventShow');
$("#obj15824").trigger('SCEventShow');
$("#obj15858").trigger('SCEventShow');
$("#obj15891").trigger('SCEventShow');
$("#obj15901").trigger('SCEventShow');
$("#obj15909").trigger('SCEventShow');
$("#obj15921").trigger('SCEventShow');
$("#obj16010").trigger('SCEventShow');
$("#obj16089").trigger('SCEventShow');
$("#obj16117").trigger('SCEventShow');
$("#obj16172").trigger('SCEventShow');
$("#obj16202").trigger('SCEventShow');
$("#obj16204").trigger('SCEventShow');
$("#obj16259").trigger('SCEventShow');
$("#obj20072").trigger('SCEventShow');
$("#obj15882").trigger('SCEventShow');
$("#obj15889").trigger('SCEventShow');
$("#obj15899").trigger('SCEventShow');
$("#obj15917").trigger('SCEventShow');
$("#obj15919").trigger('SCEventShow');
$("#obj15933").trigger('SCEventShow');
$("#obj20036").trigger('SCEventShow');
$("#obj20052").trigger('SCEventShow');
$("#obj20063").trigger('SCEventShow');
	

});