pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 18737;
pubcoder.page.title = pubcoder.page.title || "51";
pubcoder.page.number = pubcoder.page.number || 51;
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
var obj18742_onTap_activeActionGroupIndex = -1;
var obj18742_onTap_runningActionsCount = 0;
var obj18742_onTap_loopCount = 0;
var obj18745_onTap_activeActionGroupIndex = -1;
var obj18745_onTap_runningActionsCount = 0;
var obj18745_onTap_loopCount = 0;
var obj18752_onTap_activeActionGroupIndex = -1;
var obj18752_onTap_runningActionsCount = 0;
var obj18752_onTap_loopCount = 0;
var obj18757_onTap_activeActionGroupIndex = -1;
var obj18757_onTap_runningActionsCount = 0;
var obj18757_onTap_loopCount = 0;
var obj18763_onTap_activeActionGroupIndex = -1;
var obj18763_onTap_runningActionsCount = 0;
var obj18763_onTap_loopCount = 0;
var obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj18773_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18773_SCEventCounterReachedTargetValue_loopCount = 0;
var obj19463_onTap_activeActionGroupIndex = -1;
var obj19463_onTap_runningActionsCount = 0;
var obj19463_onTap_loopCount = 0;
var obj19479_onTap_activeActionGroupIndex = -1;
var obj19479_onTap_runningActionsCount = 0;
var obj19479_onTap_loopCount = 0;
var obj19493_onTap_activeActionGroupIndex = -1;
var obj19493_onTap_runningActionsCount = 0;
var obj19493_onTap_loopCount = 0;
var obj19504_onTap_activeActionGroupIndex = -1;
var obj19504_onTap_runningActionsCount = 0;
var obj19504_onTap_loopCount = 0;
var obj19518_onTap_activeActionGroupIndex = -1;
var obj19518_onTap_runningActionsCount = 0;
var obj19518_onTap_loopCount = 0;
var obj19525_SCEventRun_activeActionGroupIndex = -1;
var obj19525_SCEventRun_runningActionsCount = 0;
var obj19525_SCEventRun_loopCount = 0;
var obj19531_SCEventRun_activeActionGroupIndex = -1;
var obj19531_SCEventRun_runningActionsCount = 0;
var obj19531_SCEventRun_loopCount = 0;
var obj19582_onTap_activeActionGroupIndex = -1;
var obj19582_onTap_runningActionsCount = 0;
var obj19582_onTap_loopCount = 0;
var obj19571_onTap_activeActionGroupIndex = -1;
var obj19571_onTap_runningActionsCount = 0;
var obj19571_onTap_loopCount = 0;
var obj19564_onTap_activeActionGroupIndex = -1;
var obj19564_onTap_runningActionsCount = 0;
var obj19564_onTap_loopCount = 0;
var obj19555_onTap_activeActionGroupIndex = -1;
var obj19555_onTap_runningActionsCount = 0;
var obj19555_onTap_loopCount = 0;
var obj19548_onTap_activeActionGroupIndex = -1;
var obj19548_onTap_runningActionsCount = 0;
var obj19548_onTap_loopCount = 0;
var obj19542_SCEventRun_activeActionGroupIndex = -1;
var obj19542_SCEventRun_runningActionsCount = 0;
var obj19542_SCEventRun_loopCount = 0;
var obj19649_onTap_activeActionGroupIndex = -1;
var obj19649_onTap_runningActionsCount = 0;
var obj19649_onTap_loopCount = 0;
var obj19638_onTap_activeActionGroupIndex = -1;
var obj19638_onTap_runningActionsCount = 0;
var obj19638_onTap_loopCount = 0;
var obj19631_onTap_activeActionGroupIndex = -1;
var obj19631_onTap_runningActionsCount = 0;
var obj19631_onTap_loopCount = 0;
var obj19624_onTap_activeActionGroupIndex = -1;
var obj19624_onTap_runningActionsCount = 0;
var obj19624_onTap_loopCount = 0;
var obj19615_onTap_activeActionGroupIndex = -1;
var obj19615_onTap_runningActionsCount = 0;
var obj19615_onTap_loopCount = 0;
var obj19609_SCEventRun_activeActionGroupIndex = -1;
var obj19609_SCEventRun_runningActionsCount = 0;
var obj19609_SCEventRun_loopCount = 0;
var obj19716_onTap_activeActionGroupIndex = -1;
var obj19716_onTap_runningActionsCount = 0;
var obj19716_onTap_loopCount = 0;
var obj19705_onTap_activeActionGroupIndex = -1;
var obj19705_onTap_runningActionsCount = 0;
var obj19705_onTap_loopCount = 0;
var obj19698_onTap_activeActionGroupIndex = -1;
var obj19698_onTap_runningActionsCount = 0;
var obj19698_onTap_loopCount = 0;
var obj19689_onTap_activeActionGroupIndex = -1;
var obj19689_onTap_runningActionsCount = 0;
var obj19689_onTap_loopCount = 0;
var obj19682_onTap_activeActionGroupIndex = -1;
var obj19682_onTap_runningActionsCount = 0;
var obj19682_onTap_loopCount = 0;
var obj19676_SCEventRun_activeActionGroupIndex = -1;
var obj19676_SCEventRun_runningActionsCount = 0;
var obj19676_SCEventRun_loopCount = 0;
var obj19787_onTap_activeActionGroupIndex = -1;
var obj19787_onTap_runningActionsCount = 0;
var obj19787_onTap_loopCount = 0;
var obj19774_onTap_activeActionGroupIndex = -1;
var obj19774_onTap_runningActionsCount = 0;
var obj19774_onTap_loopCount = 0;
var obj19767_onTap_activeActionGroupIndex = -1;
var obj19767_onTap_runningActionsCount = 0;
var obj19767_onTap_loopCount = 0;
var obj19760_onTap_activeActionGroupIndex = -1;
var obj19760_onTap_runningActionsCount = 0;
var obj19760_onTap_loopCount = 0;
var obj19753_onTap_activeActionGroupIndex = -1;
var obj19753_onTap_runningActionsCount = 0;
var obj19753_onTap_loopCount = 0;
var obj19747_SCEventRun_activeActionGroupIndex = -1;
var obj19747_SCEventRun_runningActionsCount = 0;
var obj19747_SCEventRun_loopCount = 0;
var obj22241_onTap_activeActionGroupIndex = -1;
var obj22241_onTap_runningActionsCount = 0;
var obj22241_onTap_loopCount = 0;
var obj22250_onTap_activeActionGroupIndex = -1;
var obj22250_onTap_runningActionsCount = 0;
var obj22250_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj18773_counterValue = 0;
var obj18773_counterTargetValue = 5;
var obj18773_counterCanExceedTargetValue = false;

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
		
obj18742_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18742_onTap_activeActionGroupIndex = -1;
		$("#obj18742").trigger("obj18742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18742) {
				console.warn("de-queueing event obj18742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18742_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_18744();
function goToPage_18744() {
	window.obj18742_onTap_runningActionsCount = obj18742_onTap_runningActionsCount + 1;

	$("#anchor766")[0].click();
	window.obj18742_onTap_runningActionsCount = window.obj18742_onTap_runningActionsCount - 1;

if (window.obj18742_onTap_runningActionsCount < 0) {
	window.obj18742_onTap_runningActionsCount = 0;
} else if (window.obj18742_onTap_runningActionsCount == 0) {
	obj18742_onTap_actionGroup1();
}
}










































};
obj18742_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18742_onTap_activeActionGroupIndex = -1;
		$("#obj18742").trigger("obj18742_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18742) {
				console.warn("de-queueing event obj18742." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18742").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18742_onTap_activeActionGroupIndex = 1;
	











































};
obj18745_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18745_onTap_activeActionGroupIndex = -1;
		$("#obj18745").trigger("obj18745_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18745) {
				console.warn("de-queueing event obj18745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18745_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_18747();
function goToPage_18747() {
	window.obj18745_onTap_runningActionsCount = obj18745_onTap_runningActionsCount + 1;

	$("#anchor767")[0].click();
	window.obj18745_onTap_runningActionsCount = window.obj18745_onTap_runningActionsCount - 1;

if (window.obj18745_onTap_runningActionsCount < 0) {
	window.obj18745_onTap_runningActionsCount = 0;
} else if (window.obj18745_onTap_runningActionsCount == 0) {
	obj18745_onTap_actionGroup1();
}
}










































};
obj18745_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18745_onTap_activeActionGroupIndex = -1;
		$("#obj18745").trigger("obj18745_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18745) {
				console.warn("de-queueing event obj18745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18745_onTap_activeActionGroupIndex = 1;
	











































};
obj18752_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18752_onTap_activeActionGroupIndex = -1;
		$("#obj18752").trigger("obj18752_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18752) {
				console.warn("de-queueing event obj18752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18752_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_18754();
function goToPage_18754() {
	window.obj18752_onTap_runningActionsCount = obj18752_onTap_runningActionsCount + 1;

	$("#anchor768")[0].click();
	window.obj18752_onTap_runningActionsCount = window.obj18752_onTap_runningActionsCount - 1;

if (window.obj18752_onTap_runningActionsCount < 0) {
	window.obj18752_onTap_runningActionsCount = 0;
} else if (window.obj18752_onTap_runningActionsCount == 0) {
	obj18752_onTap_actionGroup1();
}
}










































};
obj18752_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18752_onTap_activeActionGroupIndex = -1;
		$("#obj18752").trigger("obj18752_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18752) {
				console.warn("de-queueing event obj18752." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18752").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18752_onTap_activeActionGroupIndex = 1;
	











































};
obj18757_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18757_onTap_activeActionGroupIndex = -1;
		$("#obj18757").trigger("obj18757_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18757) {
				console.warn("de-queueing event obj18757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18757_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj18763
(function(){
	window.obj18757_onTap_runningActionsCount = obj18757_onTap_runningActionsCount + 1;


	var selector = "#obj18763";
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
					window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup1();
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
				window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18757_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18757_onTap_activeActionGroupIndex = -1;
		$("#obj18757").trigger("obj18757_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18757) {
				console.warn("de-queueing event obj18757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18757_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj18757 
hide_18760();
function hide_18760() {
	var selector = "#obj18757";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18757_onTap_runningActionsCount = obj18757_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18760(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18757_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18757_onTap_activeActionGroupIndex = -1;
		$("#obj18757").trigger("obj18757_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18757) {
				console.warn("de-queueing event obj18757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18757_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj18771
(function(){
	window.obj18757_onTap_runningActionsCount = obj18757_onTap_runningActionsCount + 1;


	var selector = "#obj18771";
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
					window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup3();
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
				window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj18769
(function(){
	window.obj18757_onTap_runningActionsCount = obj18757_onTap_runningActionsCount + 1;


	var selector = "#obj18769";
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
					window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup3();
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
				window.obj18757_onTap_runningActionsCount = window.obj18757_onTap_runningActionsCount - 1;

if (window.obj18757_onTap_runningActionsCount < 0) {
	window.obj18757_onTap_runningActionsCount = 0;
} else if (window.obj18757_onTap_runningActionsCount == 0) {
	obj18757_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18757_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18757_onTap_activeActionGroupIndex = -1;
		$("#obj18757").trigger("obj18757_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18757) {
				console.warn("de-queueing event obj18757." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18757").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18757_onTap_activeActionGroupIndex = 3;
	











































};
obj18763_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18763_onTap_activeActionGroupIndex = -1;
		$("#obj18763").trigger("obj18763_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18763) {
				console.warn("de-queueing event obj18763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18763_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj18757
(function(){
	window.obj18763_onTap_runningActionsCount = obj18763_onTap_runningActionsCount + 1;


	var selector = "#obj18757";
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
					window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup1();
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
				window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj18763_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18763_onTap_activeActionGroupIndex = -1;
		$("#obj18763").trigger("obj18763_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18763) {
				console.warn("de-queueing event obj18763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18763_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj18763 
hide_18766();
function hide_18766() {
	var selector = "#obj18763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18763_onTap_runningActionsCount = obj18763_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18766(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18763_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18763_onTap_activeActionGroupIndex = -1;
		$("#obj18763").trigger("obj18763_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18763) {
				console.warn("de-queueing event obj18763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18763_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj18769 
hide_18767();
function hide_18767() {
	var selector = "#obj18769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18763_onTap_runningActionsCount = obj18763_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18767(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj18771 
hide_18768();
function hide_18768() {
	var selector = "#obj18771";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj18763_onTap_runningActionsCount = obj18763_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_18768(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj18763_onTap_runningActionsCount = window.obj18763_onTap_runningActionsCount - 1;

if (window.obj18763_onTap_runningActionsCount < 0) {
	window.obj18763_onTap_runningActionsCount = 0;
} else if (window.obj18763_onTap_runningActionsCount == 0) {
	obj18763_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj18763_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18763_onTap_activeActionGroupIndex = -1;
		$("#obj18763").trigger("obj18763_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18763) {
				console.warn("de-queueing event obj18763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18763_onTap_activeActionGroupIndex = 3;
	











































};
obj18773_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18773").trigger("obj18773_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18773) {
				console.warn("de-queueing event obj18773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_18775();
function wait_18775() {
	window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = obj18773_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18773_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj18773_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18773").trigger("obj18773_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18773) {
				console.warn("de-queueing event obj18773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_18776();
function goToPage_18776() {
	window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = obj18773_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor769")[0].click();
	window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj18773_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj18773_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj18773_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj18773").trigger("obj18773_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 18773) {
				console.warn("de-queueing event obj18773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj18773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj19463_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19463_onTap_activeActionGroupIndex = -1;
		$("#obj19463").trigger("obj19463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19463) {
				console.warn("de-queueing event obj19463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19463_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19477 
hide_19476();
function hide_19476() {
	var selector = "#obj19477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19476(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19465
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19465";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19472
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19472";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19479
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19479";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19493
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19493";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19504
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19504";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19518
(function(){
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;


	var selector = "#obj19518";
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
					window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19471();
function playAudioFile_19471() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19471")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19471");
			$("#obj_audio_playSoundFile19471").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
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
				window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj19525 
runActionList_19537();
function runActionList_19537() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	$("#obj19525").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19542 
runActionList_19608();
function runActionList_19608() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	$("#obj19542").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19609 
runActionList_19675();
function runActionList_19675() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	$("#obj19609").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19676 
runActionList_19734();
function runActionList_19734() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	$("#obj19676").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19747 
runActionList_19807();
function runActionList_19807() {
	window.obj19463_onTap_runningActionsCount = obj19463_onTap_runningActionsCount + 1;

	$("#obj19747").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19463_onTap_runningActionsCount = window.obj19463_onTap_runningActionsCount - 1;

if (window.obj19463_onTap_runningActionsCount < 0) {
	window.obj19463_onTap_runningActionsCount = 0;
} else if (window.obj19463_onTap_runningActionsCount == 0) {
	obj19463_onTap_actionGroup1();
}		
	}, 1);
}







};
obj19463_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19463_onTap_activeActionGroupIndex = -1;
		$("#obj19463").trigger("obj19463_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19463) {
				console.warn("de-queueing event obj19463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19463_onTap_activeActionGroupIndex = 1;
	











































};
obj19479_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19479_onTap_activeActionGroupIndex = -1;
		$("#obj19479").trigger("obj19479_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19479) {
				console.warn("de-queueing event obj19479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19479_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19481
(function(){
	window.obj19479_onTap_runningActionsCount = obj19479_onTap_runningActionsCount + 1;


	var selector = "#obj19481";
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
					window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
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
				window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19486();
function playAudioFile_19486() {
	window.obj19479_onTap_runningActionsCount = obj19479_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19486")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19486");
			$("#obj_audio_playSoundFile19486").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
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
				window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19488();
function switchText_19488() {
	window.obj19479_onTap_runningActionsCount = obj19479_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19479_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19479_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19479").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19479_content");
			setTimeout(function () {
				window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19479 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19479_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19479_onTap_activeActionGroupIndex = -1;
		$("#obj19479").trigger("obj19479_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19479) {
				console.warn("de-queueing event obj19479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19479_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19489();
function wait_19489() {
	window.obj19479_onTap_runningActionsCount = obj19479_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19479_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19479_onTap_activeActionGroupIndex = -1;
		$("#obj19479").trigger("obj19479_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19479) {
				console.warn("de-queueing event obj19479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19479_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19490();
function switchText_19490() {
	window.obj19479_onTap_runningActionsCount = obj19479_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19479_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19479_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19479").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19479_content");
			setTimeout(function () {
				window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19479 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19479_onTap_runningActionsCount = window.obj19479_onTap_runningActionsCount - 1;

if (window.obj19479_onTap_runningActionsCount < 0) {
	window.obj19479_onTap_runningActionsCount = 0;
} else if (window.obj19479_onTap_runningActionsCount == 0) {
	obj19479_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19479_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19479_onTap_activeActionGroupIndex = -1;
		$("#obj19479").trigger("obj19479_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19479) {
				console.warn("de-queueing event obj19479." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19479").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19479_onTap_activeActionGroupIndex = 3;
	











































};
obj19493_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19493_onTap_activeActionGroupIndex = -1;
		$("#obj19493").trigger("obj19493_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19493) {
				console.warn("de-queueing event obj19493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19493_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19491
(function(){
	window.obj19493_onTap_runningActionsCount = obj19493_onTap_runningActionsCount + 1;


	var selector = "#obj19491";
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
					window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
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
				window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19495();
function playAudioFile_19495() {
	window.obj19493_onTap_runningActionsCount = obj19493_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19495")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19495");
			$("#obj_audio_playSoundFile19495").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
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
				window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19499();
function switchText_19499() {
	window.obj19493_onTap_runningActionsCount = obj19493_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19493_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19493_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19493").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19493_content");
			setTimeout(function () {
				window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19493 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19493_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19493_onTap_activeActionGroupIndex = -1;
		$("#obj19493").trigger("obj19493_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19493) {
				console.warn("de-queueing event obj19493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19493_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19500();
function wait_19500() {
	window.obj19493_onTap_runningActionsCount = obj19493_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19493_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19493_onTap_activeActionGroupIndex = -1;
		$("#obj19493").trigger("obj19493_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19493) {
				console.warn("de-queueing event obj19493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19493_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19501();
function switchText_19501() {
	window.obj19493_onTap_runningActionsCount = obj19493_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19493_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19493_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19493").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19493_content");
			setTimeout(function () {
				window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19493 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19493_onTap_runningActionsCount = window.obj19493_onTap_runningActionsCount - 1;

if (window.obj19493_onTap_runningActionsCount < 0) {
	window.obj19493_onTap_runningActionsCount = 0;
} else if (window.obj19493_onTap_runningActionsCount == 0) {
	obj19493_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19493_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19493_onTap_activeActionGroupIndex = -1;
		$("#obj19493").trigger("obj19493_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19493) {
				console.warn("de-queueing event obj19493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19493_onTap_activeActionGroupIndex = 3;
	











































};
obj19504_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19504_onTap_activeActionGroupIndex = -1;
		$("#obj19504").trigger("obj19504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19504) {
				console.warn("de-queueing event obj19504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19504_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19472 
hide_19508();
function hide_19508() {
	var selector = "#obj19472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19508(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19465 
hide_19513();
function hide_19513() {
	var selector = "#obj19465";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19513(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19477
(function(){
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;


	var selector = "#obj19477";
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
					window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
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
				window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19502
(function(){
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;


	var selector = "#obj19502";
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
					window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
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
				window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19467
(function(){
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;


	var selector = "#obj19467";
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
					window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
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
				window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19506();
function playAudioFile_19506() {
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19506")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19506");
			$("#obj_audio_playSoundFile19506").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
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
				window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19504_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19504_onTap_activeActionGroupIndex = -1;
		$("#obj19504").trigger("obj19504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19504) {
				console.warn("de-queueing event obj19504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19504_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18773 
incrementCounter_19515();
function incrementCounter_19515() {
	window.obj19504_onTap_runningActionsCount = obj19504_onTap_runningActionsCount + 1;


	var oldValue = obj18773_counterValue;
	obj18773_counterValue = obj18773_counterValue + 1;
	if (! obj18773_counterCanExceedTargetValue && obj18773_counterValue > obj18773_counterTargetValue) {
		obj18773_counterValue = obj18773_counterTargetValue;
	}

	if (oldValue != obj18773_counterValue) {
		$("#obj18773").trigger('SCEventCounterValueChange');
		$("#obj18773").trigger('SCEventCounterIncrease');
		if (obj18773_counterValue == obj18773_counterTargetValue)
			$("#obj18773").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19504_onTap_runningActionsCount = window.obj19504_onTap_runningActionsCount - 1;

if (window.obj19504_onTap_runningActionsCount < 0) {
	window.obj19504_onTap_runningActionsCount = 0;
} else if (window.obj19504_onTap_runningActionsCount == 0) {
	obj19504_onTap_actionGroup2();
} }, 1);
}











};
obj19504_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19504_onTap_activeActionGroupIndex = -1;
		$("#obj19504").trigger("obj19504_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19504) {
				console.warn("de-queueing event obj19504." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19504").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19504_onTap_activeActionGroupIndex = 2;
	











































};
obj19518_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19518_onTap_activeActionGroupIndex = -1;
		$("#obj19518").trigger("obj19518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19518) {
				console.warn("de-queueing event obj19518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19518_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19516
(function(){
	window.obj19518_onTap_runningActionsCount = obj19518_onTap_runningActionsCount + 1;


	var selector = "#obj19516";
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
					window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
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
				window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19520();
function playAudioFile_19520() {
	window.obj19518_onTap_runningActionsCount = obj19518_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19520")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19520");
			$("#obj_audio_playSoundFile19520").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
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
				window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19522();
function switchText_19522() {
	window.obj19518_onTap_runningActionsCount = obj19518_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19518_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19518_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19518").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19518_content");
			setTimeout(function () {
				window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19518 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19518_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19518_onTap_activeActionGroupIndex = -1;
		$("#obj19518").trigger("obj19518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19518) {
				console.warn("de-queueing event obj19518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19518_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19523();
function wait_19523() {
	window.obj19518_onTap_runningActionsCount = obj19518_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19518_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19518_onTap_activeActionGroupIndex = -1;
		$("#obj19518").trigger("obj19518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19518) {
				console.warn("de-queueing event obj19518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19518_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19524();
function switchText_19524() {
	window.obj19518_onTap_runningActionsCount = obj19518_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19518_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19518_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19518").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19518_content");
			setTimeout(function () {
				window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19518 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19518_onTap_runningActionsCount = window.obj19518_onTap_runningActionsCount - 1;

if (window.obj19518_onTap_runningActionsCount < 0) {
	window.obj19518_onTap_runningActionsCount = 0;
} else if (window.obj19518_onTap_runningActionsCount == 0) {
	obj19518_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19518_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19518_onTap_activeActionGroupIndex = -1;
		$("#obj19518").trigger("obj19518_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19518) {
				console.warn("de-queueing event obj19518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19518_onTap_activeActionGroupIndex = 3;
	











































};
obj19525_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19525_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19525").trigger("obj19525_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19525) {
				console.warn("de-queueing event obj19525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19525_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19481 
hide_19527();
function hide_19527() {
	var selector = "#obj19481";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19527(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19491 
hide_19528();
function hide_19528() {
	var selector = "#obj19491";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19528(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19502 
hide_19529();
function hide_19529() {
	var selector = "#obj19502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19529(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19516 
hide_19530();
function hide_19530() {
	var selector = "#obj19516";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19530(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj22239 
hide_22257();
function hide_22257() {
	var selector = "#obj22239";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22257(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj22248 
hide_22258();
function hide_22258() {
	var selector = "#obj22248";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19525_SCEventRun_runningActionsCount = obj19525_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22258(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19525_SCEventRun_runningActionsCount = window.obj19525_SCEventRun_runningActionsCount - 1;

if (window.obj19525_SCEventRun_runningActionsCount < 0) {
	window.obj19525_SCEventRun_runningActionsCount = 0;
} else if (window.obj19525_SCEventRun_runningActionsCount == 0) {
	obj19525_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19525_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19525_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19525").trigger("obj19525_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19525) {
				console.warn("de-queueing event obj19525." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19525").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19525_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj19531_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19531_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19531").trigger("obj19531_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19531) {
				console.warn("de-queueing event obj19531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19531_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19518 
hide_19533();
function hide_19533() {
	var selector = "#obj19518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19531_SCEventRun_runningActionsCount = obj19531_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19533(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19504 
hide_19534();
function hide_19534() {
	var selector = "#obj19504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19531_SCEventRun_runningActionsCount = obj19531_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19534(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19493 
hide_19535();
function hide_19535() {
	var selector = "#obj19493";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19531_SCEventRun_runningActionsCount = obj19531_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19535(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19479 
hide_19536();
function hide_19536() {
	var selector = "#obj19479";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19531_SCEventRun_runningActionsCount = obj19531_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19536(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19531_SCEventRun_runningActionsCount = window.obj19531_SCEventRun_runningActionsCount - 1;

if (window.obj19531_SCEventRun_runningActionsCount < 0) {
	window.obj19531_SCEventRun_runningActionsCount = 0;
} else if (window.obj19531_SCEventRun_runningActionsCount == 0) {
	obj19531_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19531_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19531_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19531").trigger("obj19531_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19531) {
				console.warn("de-queueing event obj19531." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19531").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19531_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj19582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19582_onTap_activeActionGroupIndex = -1;
		$("#obj19582").trigger("obj19582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19582) {
				console.warn("de-queueing event obj19582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19582_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19477 
hide_19587();
function hide_19587() {
	var selector = "#obj19477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19587(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19580
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19580";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19472
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19472";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19571
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19571";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19564
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19564";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19555
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19555";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19548
(function(){
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;


	var selector = "#obj19548";
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
					window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19584();
function playAudioFile_19584() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19584")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19584");
			$("#obj_audio_playSoundFile19584").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
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
				window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj19525 
runActionList_19588();
function runActionList_19588() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	$("#obj19525").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19531 
runActionList_19607();
function runActionList_19607() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	$("#obj19531").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19609 
runActionList_19674();
function runActionList_19674() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	$("#obj19609").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19676 
runActionList_19733();
function runActionList_19733() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	$("#obj19676").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19747 
runActionList_19806();
function runActionList_19806() {
	window.obj19582_onTap_runningActionsCount = obj19582_onTap_runningActionsCount + 1;

	$("#obj19747").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19582_onTap_runningActionsCount = window.obj19582_onTap_runningActionsCount - 1;

if (window.obj19582_onTap_runningActionsCount < 0) {
	window.obj19582_onTap_runningActionsCount = 0;
} else if (window.obj19582_onTap_runningActionsCount == 0) {
	obj19582_onTap_actionGroup1();
}		
	}, 1);
}







};
obj19582_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19582_onTap_activeActionGroupIndex = -1;
		$("#obj19582").trigger("obj19582_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19582) {
				console.warn("de-queueing event obj19582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19582_onTap_activeActionGroupIndex = 1;
	











































};
obj19571_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19571_onTap_activeActionGroupIndex = -1;
		$("#obj19571").trigger("obj19571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19571) {
				console.warn("de-queueing event obj19571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19571_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19481
(function(){
	window.obj19571_onTap_runningActionsCount = obj19571_onTap_runningActionsCount + 1;


	var selector = "#obj19481";
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
					window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
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
				window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19573();
function playAudioFile_19573() {
	window.obj19571_onTap_runningActionsCount = obj19571_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19573")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19573");
			$("#obj_audio_playSoundFile19573").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
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
				window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19575();
function switchText_19575() {
	window.obj19571_onTap_runningActionsCount = obj19571_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19571").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19571_content");
			setTimeout(function () {
				window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19571_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19571_onTap_activeActionGroupIndex = -1;
		$("#obj19571").trigger("obj19571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19571) {
				console.warn("de-queueing event obj19571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19571_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19576();
function wait_19576() {
	window.obj19571_onTap_runningActionsCount = obj19571_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19571_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19571_onTap_activeActionGroupIndex = -1;
		$("#obj19571").trigger("obj19571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19571) {
				console.warn("de-queueing event obj19571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19571_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19577();
function switchText_19577() {
	window.obj19571_onTap_runningActionsCount = obj19571_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19571").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19571_content");
			setTimeout(function () {
				window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19571_onTap_runningActionsCount = window.obj19571_onTap_runningActionsCount - 1;

if (window.obj19571_onTap_runningActionsCount < 0) {
	window.obj19571_onTap_runningActionsCount = 0;
} else if (window.obj19571_onTap_runningActionsCount == 0) {
	obj19571_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19571_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19571_onTap_activeActionGroupIndex = -1;
		$("#obj19571").trigger("obj19571_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19571) {
				console.warn("de-queueing event obj19571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19571_onTap_activeActionGroupIndex = 3;
	











































};
obj19564_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19564_onTap_activeActionGroupIndex = -1;
		$("#obj19564").trigger("obj19564_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19564) {
				console.warn("de-queueing event obj19564." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19564").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19564_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19491
(function(){
	window.obj19564_onTap_runningActionsCount = obj19564_onTap_runningActionsCount + 1;


	var selector = "#obj19491";
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
					window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
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
				window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19566();
function playAudioFile_19566() {
	window.obj19564_onTap_runningActionsCount = obj19564_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19566")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19566");
			$("#obj_audio_playSoundFile19566").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
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
				window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19568();
function switchText_19568() {
	window.obj19564_onTap_runningActionsCount = obj19564_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19564_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19564_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19564").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19564_content");
			setTimeout(function () {
				window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19564 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19564_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19564_onTap_activeActionGroupIndex = -1;
		$("#obj19564").trigger("obj19564_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19564) {
				console.warn("de-queueing event obj19564." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19564").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19564_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19569();
function wait_19569() {
	window.obj19564_onTap_runningActionsCount = obj19564_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19564_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19564_onTap_activeActionGroupIndex = -1;
		$("#obj19564").trigger("obj19564_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19564) {
				console.warn("de-queueing event obj19564." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19564").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19564_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19570();
function switchText_19570() {
	window.obj19564_onTap_runningActionsCount = obj19564_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19564_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19564_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19564").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19564_content");
			setTimeout(function () {
				window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19564 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19564_onTap_runningActionsCount = window.obj19564_onTap_runningActionsCount - 1;

if (window.obj19564_onTap_runningActionsCount < 0) {
	window.obj19564_onTap_runningActionsCount = 0;
} else if (window.obj19564_onTap_runningActionsCount == 0) {
	obj19564_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19564_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19564_onTap_activeActionGroupIndex = -1;
		$("#obj19564").trigger("obj19564_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19564) {
				console.warn("de-queueing event obj19564." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19564").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19564_onTap_activeActionGroupIndex = 3;
	











































};
obj19555_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19555_onTap_activeActionGroupIndex = -1;
		$("#obj19555").trigger("obj19555_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19555) {
				console.warn("de-queueing event obj19555." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19555").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19555_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19502
(function(){
	window.obj19555_onTap_runningActionsCount = obj19555_onTap_runningActionsCount + 1;


	var selector = "#obj19502";
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
					window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
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
				window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19602();
function playAudioFile_19602() {
	window.obj19555_onTap_runningActionsCount = obj19555_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19602")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19602");
			$("#obj_audio_playSoundFile19602").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
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
				window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19604();
function switchText_19604() {
	window.obj19555_onTap_runningActionsCount = obj19555_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19555_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19555_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19555").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19555_content");
			setTimeout(function () {
				window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19555 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19555_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19555_onTap_activeActionGroupIndex = -1;
		$("#obj19555").trigger("obj19555_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19555) {
				console.warn("de-queueing event obj19555." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19555").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19555_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19605();
function wait_19605() {
	window.obj19555_onTap_runningActionsCount = obj19555_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19555_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19555_onTap_activeActionGroupIndex = -1;
		$("#obj19555").trigger("obj19555_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19555) {
				console.warn("de-queueing event obj19555." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19555").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19555_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19606();
function switchText_19606() {
	window.obj19555_onTap_runningActionsCount = obj19555_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19555_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19555_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19555").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19555_content");
			setTimeout(function () {
				window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19555 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19555_onTap_runningActionsCount = window.obj19555_onTap_runningActionsCount - 1;

if (window.obj19555_onTap_runningActionsCount < 0) {
	window.obj19555_onTap_runningActionsCount = 0;
} else if (window.obj19555_onTap_runningActionsCount == 0) {
	obj19555_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19555_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19555_onTap_activeActionGroupIndex = -1;
		$("#obj19555").trigger("obj19555_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19555) {
				console.warn("de-queueing event obj19555." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19555").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19555_onTap_activeActionGroupIndex = 3;
	











































};
obj19548_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19548_onTap_activeActionGroupIndex = -1;
		$("#obj19548").trigger("obj19548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19548) {
				console.warn("de-queueing event obj19548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19548_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19472 
hide_19597();
function hide_19597() {
	var selector = "#obj19472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19597(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19580 
hide_19599();
function hide_19599() {
	var selector = "#obj19580";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19599(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19477
(function(){
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;


	var selector = "#obj19477";
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
					window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
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
				window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19516
(function(){
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;


	var selector = "#obj19516";
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
					window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
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
				window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19578
(function(){
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;


	var selector = "#obj19578";
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
					window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
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
				window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19595();
function playAudioFile_19595() {
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19595")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19595");
			$("#obj_audio_playSoundFile19595").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
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
				window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19548_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19548_onTap_activeActionGroupIndex = -1;
		$("#obj19548").trigger("obj19548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19548) {
				console.warn("de-queueing event obj19548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19548_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18773 
incrementCounter_19601();
function incrementCounter_19601() {
	window.obj19548_onTap_runningActionsCount = obj19548_onTap_runningActionsCount + 1;


	var oldValue = obj18773_counterValue;
	obj18773_counterValue = obj18773_counterValue + 1;
	if (! obj18773_counterCanExceedTargetValue && obj18773_counterValue > obj18773_counterTargetValue) {
		obj18773_counterValue = obj18773_counterTargetValue;
	}

	if (oldValue != obj18773_counterValue) {
		$("#obj18773").trigger('SCEventCounterValueChange');
		$("#obj18773").trigger('SCEventCounterIncrease');
		if (obj18773_counterValue == obj18773_counterTargetValue)
			$("#obj18773").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19548_onTap_runningActionsCount = window.obj19548_onTap_runningActionsCount - 1;

if (window.obj19548_onTap_runningActionsCount < 0) {
	window.obj19548_onTap_runningActionsCount = 0;
} else if (window.obj19548_onTap_runningActionsCount == 0) {
	obj19548_onTap_actionGroup2();
} }, 1);
}











};
obj19548_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19548_onTap_activeActionGroupIndex = -1;
		$("#obj19548").trigger("obj19548_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19548) {
				console.warn("de-queueing event obj19548." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19548").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19548_onTap_activeActionGroupIndex = 2;
	











































};
obj19542_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19542_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19542").trigger("obj19542_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19542) {
				console.warn("de-queueing event obj19542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19542_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19548 
hide_19544();
function hide_19544() {
	var selector = "#obj19548";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19542_SCEventRun_runningActionsCount = obj19542_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19544(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19555 
hide_19545();
function hide_19545() {
	var selector = "#obj19555";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19542_SCEventRun_runningActionsCount = obj19542_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19545(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19564 
hide_19546();
function hide_19546() {
	var selector = "#obj19564";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19542_SCEventRun_runningActionsCount = obj19542_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19546(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19571 
hide_19547();
function hide_19547() {
	var selector = "#obj19571";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19542_SCEventRun_runningActionsCount = obj19542_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19547(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19542_SCEventRun_runningActionsCount = window.obj19542_SCEventRun_runningActionsCount - 1;

if (window.obj19542_SCEventRun_runningActionsCount < 0) {
	window.obj19542_SCEventRun_runningActionsCount = 0;
} else if (window.obj19542_SCEventRun_runningActionsCount == 0) {
	obj19542_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19542_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19542_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19542").trigger("obj19542_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19542) {
				console.warn("de-queueing event obj19542." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19542").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19542_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj19649_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19649_onTap_activeActionGroupIndex = -1;
		$("#obj19649").trigger("obj19649_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19649) {
				console.warn("de-queueing event obj19649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19649_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19477 
hide_19654();
function hide_19654() {
	var selector = "#obj19477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19654(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19647
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19647";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19472
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19472";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19638
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19638";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19631
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19631";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19624
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19624";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19615
(function(){
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;


	var selector = "#obj19615";
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
					window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19651();
function playAudioFile_19651() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19651")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19651");
			$("#obj_audio_playSoundFile19651").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
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
				window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj19525 
runActionList_19655();
function runActionList_19655() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	$("#obj19525").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19531 
runActionList_19656();
function runActionList_19656() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	$("#obj19531").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19542 
runActionList_19673();
function runActionList_19673() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	$("#obj19542").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19676 
runActionList_19732();
function runActionList_19732() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	$("#obj19676").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19747 
runActionList_19805();
function runActionList_19805() {
	window.obj19649_onTap_runningActionsCount = obj19649_onTap_runningActionsCount + 1;

	$("#obj19747").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19649_onTap_runningActionsCount = window.obj19649_onTap_runningActionsCount - 1;

if (window.obj19649_onTap_runningActionsCount < 0) {
	window.obj19649_onTap_runningActionsCount = 0;
} else if (window.obj19649_onTap_runningActionsCount == 0) {
	obj19649_onTap_actionGroup1();
}		
	}, 1);
}







};
obj19649_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19649_onTap_activeActionGroupIndex = -1;
		$("#obj19649").trigger("obj19649_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19649) {
				console.warn("de-queueing event obj19649." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19649").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19649_onTap_activeActionGroupIndex = 1;
	











































};
obj19638_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19638_onTap_activeActionGroupIndex = -1;
		$("#obj19638").trigger("obj19638_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19638) {
				console.warn("de-queueing event obj19638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19638_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19481
(function(){
	window.obj19638_onTap_runningActionsCount = obj19638_onTap_runningActionsCount + 1;


	var selector = "#obj19481";
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
					window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
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
				window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19640();
function playAudioFile_19640() {
	window.obj19638_onTap_runningActionsCount = obj19638_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19640")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19640");
			$("#obj_audio_playSoundFile19640").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
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
				window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19642();
function switchText_19642() {
	window.obj19638_onTap_runningActionsCount = obj19638_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19638_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19638_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19638").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19638_content");
			setTimeout(function () {
				window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19638 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19638_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19638_onTap_activeActionGroupIndex = -1;
		$("#obj19638").trigger("obj19638_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19638) {
				console.warn("de-queueing event obj19638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19638_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19643();
function wait_19643() {
	window.obj19638_onTap_runningActionsCount = obj19638_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19638_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19638_onTap_activeActionGroupIndex = -1;
		$("#obj19638").trigger("obj19638_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19638) {
				console.warn("de-queueing event obj19638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19638_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19644();
function switchText_19644() {
	window.obj19638_onTap_runningActionsCount = obj19638_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">84</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19638_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19638_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19638").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19638_content");
			setTimeout(function () {
				window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19638 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19638_onTap_runningActionsCount = window.obj19638_onTap_runningActionsCount - 1;

if (window.obj19638_onTap_runningActionsCount < 0) {
	window.obj19638_onTap_runningActionsCount = 0;
} else if (window.obj19638_onTap_runningActionsCount == 0) {
	obj19638_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19638_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19638_onTap_activeActionGroupIndex = -1;
		$("#obj19638").trigger("obj19638_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19638) {
				console.warn("de-queueing event obj19638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19638_onTap_activeActionGroupIndex = 3;
	











































};
obj19631_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19631_onTap_activeActionGroupIndex = -1;
		$("#obj19631").trigger("obj19631_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19631) {
				console.warn("de-queueing event obj19631." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19631").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19631_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19472 
hide_19668();
function hide_19668() {
	var selector = "#obj19472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19668(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19647 
hide_19670();
function hide_19670() {
	var selector = "#obj19647";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19670(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19477
(function(){
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;


	var selector = "#obj19477";
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
					window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
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
				window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19491
(function(){
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;


	var selector = "#obj19491";
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
					window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
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
				window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19645
(function(){
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;


	var selector = "#obj19645";
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
					window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
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
				window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19666();
function playAudioFile_19666() {
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19666")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19666");
			$("#obj_audio_playSoundFile19666").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
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
				window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19631_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19631_onTap_activeActionGroupIndex = -1;
		$("#obj19631").trigger("obj19631_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19631) {
				console.warn("de-queueing event obj19631." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19631").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19631_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18773 
incrementCounter_19672();
function incrementCounter_19672() {
	window.obj19631_onTap_runningActionsCount = obj19631_onTap_runningActionsCount + 1;


	var oldValue = obj18773_counterValue;
	obj18773_counterValue = obj18773_counterValue + 1;
	if (! obj18773_counterCanExceedTargetValue && obj18773_counterValue > obj18773_counterTargetValue) {
		obj18773_counterValue = obj18773_counterTargetValue;
	}

	if (oldValue != obj18773_counterValue) {
		$("#obj18773").trigger('SCEventCounterValueChange');
		$("#obj18773").trigger('SCEventCounterIncrease');
		if (obj18773_counterValue == obj18773_counterTargetValue)
			$("#obj18773").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19631_onTap_runningActionsCount = window.obj19631_onTap_runningActionsCount - 1;

if (window.obj19631_onTap_runningActionsCount < 0) {
	window.obj19631_onTap_runningActionsCount = 0;
} else if (window.obj19631_onTap_runningActionsCount == 0) {
	obj19631_onTap_actionGroup2();
} }, 1);
}











};
obj19631_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19631_onTap_activeActionGroupIndex = -1;
		$("#obj19631").trigger("obj19631_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19631) {
				console.warn("de-queueing event obj19631." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19631").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19631_onTap_activeActionGroupIndex = 2;
	











































};
obj19624_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19624_onTap_activeActionGroupIndex = -1;
		$("#obj19624").trigger("obj19624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19624) {
				console.warn("de-queueing event obj19624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19624_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19502
(function(){
	window.obj19624_onTap_runningActionsCount = obj19624_onTap_runningActionsCount + 1;


	var selector = "#obj19502";
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
					window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
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
				window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19626();
function playAudioFile_19626() {
	window.obj19624_onTap_runningActionsCount = obj19624_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19626")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19626");
			$("#obj_audio_playSoundFile19626").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
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
				window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19628();
function switchText_19628() {
	window.obj19624_onTap_runningActionsCount = obj19624_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19624_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19624_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19624").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19624_content");
			setTimeout(function () {
				window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19624 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19624_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19624_onTap_activeActionGroupIndex = -1;
		$("#obj19624").trigger("obj19624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19624) {
				console.warn("de-queueing event obj19624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19624_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19629();
function wait_19629() {
	window.obj19624_onTap_runningActionsCount = obj19624_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19624_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19624_onTap_activeActionGroupIndex = -1;
		$("#obj19624").trigger("obj19624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19624) {
				console.warn("de-queueing event obj19624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19624_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19630();
function switchText_19630() {
	window.obj19624_onTap_runningActionsCount = obj19624_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19624_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19624_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19624").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19624_content");
			setTimeout(function () {
				window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19624 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19624_onTap_runningActionsCount = window.obj19624_onTap_runningActionsCount - 1;

if (window.obj19624_onTap_runningActionsCount < 0) {
	window.obj19624_onTap_runningActionsCount = 0;
} else if (window.obj19624_onTap_runningActionsCount == 0) {
	obj19624_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19624_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19624_onTap_activeActionGroupIndex = -1;
		$("#obj19624").trigger("obj19624_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19624) {
				console.warn("de-queueing event obj19624." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19624").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19624_onTap_activeActionGroupIndex = 3;
	











































};
obj19615_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19615_onTap_activeActionGroupIndex = -1;
		$("#obj19615").trigger("obj19615_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19615) {
				console.warn("de-queueing event obj19615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19615_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19516
(function(){
	window.obj19615_onTap_runningActionsCount = obj19615_onTap_runningActionsCount + 1;


	var selector = "#obj19516";
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
					window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
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
				window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19661();
function playAudioFile_19661() {
	window.obj19615_onTap_runningActionsCount = obj19615_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19661")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19661");
			$("#obj_audio_playSoundFile19661").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
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
				window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19663();
function switchText_19663() {
	window.obj19615_onTap_runningActionsCount = obj19615_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19615").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19615_content");
			setTimeout(function () {
				window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19615_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19615_onTap_activeActionGroupIndex = -1;
		$("#obj19615").trigger("obj19615_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19615) {
				console.warn("de-queueing event obj19615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19615_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19664();
function wait_19664() {
	window.obj19615_onTap_runningActionsCount = obj19615_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19615_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19615_onTap_activeActionGroupIndex = -1;
		$("#obj19615").trigger("obj19615_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19615) {
				console.warn("de-queueing event obj19615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19615_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19665();
function switchText_19665() {
	window.obj19615_onTap_runningActionsCount = obj19615_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19615_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19615_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19615").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19615_content");
			setTimeout(function () {
				window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19615 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19615_onTap_runningActionsCount = window.obj19615_onTap_runningActionsCount - 1;

if (window.obj19615_onTap_runningActionsCount < 0) {
	window.obj19615_onTap_runningActionsCount = 0;
} else if (window.obj19615_onTap_runningActionsCount == 0) {
	obj19615_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19615_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19615_onTap_activeActionGroupIndex = -1;
		$("#obj19615").trigger("obj19615_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19615) {
				console.warn("de-queueing event obj19615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19615_onTap_activeActionGroupIndex = 3;
	











































};
obj19609_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19609_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19609").trigger("obj19609_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19609) {
				console.warn("de-queueing event obj19609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19609_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19615 
hide_19611();
function hide_19611() {
	var selector = "#obj19615";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19609_SCEventRun_runningActionsCount = obj19609_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19611(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19624 
hide_19612();
function hide_19612() {
	var selector = "#obj19624";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19609_SCEventRun_runningActionsCount = obj19609_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19612(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19631 
hide_19613();
function hide_19613() {
	var selector = "#obj19631";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19609_SCEventRun_runningActionsCount = obj19609_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19613(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19638 
hide_19614();
function hide_19614() {
	var selector = "#obj19638";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19609_SCEventRun_runningActionsCount = obj19609_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19614(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19609_SCEventRun_runningActionsCount = window.obj19609_SCEventRun_runningActionsCount - 1;

if (window.obj19609_SCEventRun_runningActionsCount < 0) {
	window.obj19609_SCEventRun_runningActionsCount = 0;
} else if (window.obj19609_SCEventRun_runningActionsCount == 0) {
	obj19609_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19609_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19609_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19609").trigger("obj19609_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19609) {
				console.warn("de-queueing event obj19609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19609_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj19716_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19716_onTap_activeActionGroupIndex = -1;
		$("#obj19716").trigger("obj19716_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19716) {
				console.warn("de-queueing event obj19716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19716_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19477 
hide_19721();
function hide_19721() {
	var selector = "#obj19477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19721(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19714
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19714";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19472
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19472";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19705
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19705";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19698
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19698";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19689
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19689";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19682
(function(){
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;


	var selector = "#obj19682";
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
					window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19718();
function playAudioFile_19718() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19718")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19718");
			$("#obj_audio_playSoundFile19718").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
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
				window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj19525 
runActionList_19722();
function runActionList_19722() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	$("#obj19525").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19531 
runActionList_19731();
function runActionList_19731() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	$("#obj19531").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19542 
runActionList_19723();
function runActionList_19723() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	$("#obj19542").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19609 
runActionList_19724();
function runActionList_19724() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	$("#obj19609").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19747 
runActionList_19804();
function runActionList_19804() {
	window.obj19716_onTap_runningActionsCount = obj19716_onTap_runningActionsCount + 1;

	$("#obj19747").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19716_onTap_runningActionsCount = window.obj19716_onTap_runningActionsCount - 1;

if (window.obj19716_onTap_runningActionsCount < 0) {
	window.obj19716_onTap_runningActionsCount = 0;
} else if (window.obj19716_onTap_runningActionsCount == 0) {
	obj19716_onTap_actionGroup1();
}		
	}, 1);
}







};
obj19716_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19716_onTap_activeActionGroupIndex = -1;
		$("#obj19716").trigger("obj19716_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19716) {
				console.warn("de-queueing event obj19716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19716_onTap_activeActionGroupIndex = 1;
	











































};
obj19705_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19705_onTap_activeActionGroupIndex = -1;
		$("#obj19705").trigger("obj19705_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19705) {
				console.warn("de-queueing event obj19705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19705_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19472 
hide_19737();
function hide_19737() {
	var selector = "#obj19472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19737(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19714 
hide_19739();
function hide_19739() {
	var selector = "#obj19714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19739(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19477
(function(){
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;


	var selector = "#obj19477";
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
					window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
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
				window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19481
(function(){
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;


	var selector = "#obj19481";
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
					window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
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
				window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19712
(function(){
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;


	var selector = "#obj19712";
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
					window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
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
				window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19735();
function playAudioFile_19735() {
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19735")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19735");
			$("#obj_audio_playSoundFile19735").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
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
				window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19705_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19705_onTap_activeActionGroupIndex = -1;
		$("#obj19705").trigger("obj19705_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19705) {
				console.warn("de-queueing event obj19705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19705_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18773 
incrementCounter_19741();
function incrementCounter_19741() {
	window.obj19705_onTap_runningActionsCount = obj19705_onTap_runningActionsCount + 1;


	var oldValue = obj18773_counterValue;
	obj18773_counterValue = obj18773_counterValue + 1;
	if (! obj18773_counterCanExceedTargetValue && obj18773_counterValue > obj18773_counterTargetValue) {
		obj18773_counterValue = obj18773_counterTargetValue;
	}

	if (oldValue != obj18773_counterValue) {
		$("#obj18773").trigger('SCEventCounterValueChange');
		$("#obj18773").trigger('SCEventCounterIncrease');
		if (obj18773_counterValue == obj18773_counterTargetValue)
			$("#obj18773").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19705_onTap_runningActionsCount = window.obj19705_onTap_runningActionsCount - 1;

if (window.obj19705_onTap_runningActionsCount < 0) {
	window.obj19705_onTap_runningActionsCount = 0;
} else if (window.obj19705_onTap_runningActionsCount == 0) {
	obj19705_onTap_actionGroup2();
} }, 1);
}











};
obj19705_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19705_onTap_activeActionGroupIndex = -1;
		$("#obj19705").trigger("obj19705_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19705) {
				console.warn("de-queueing event obj19705." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19705").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19705_onTap_activeActionGroupIndex = 2;
	











































};
obj19698_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19698_onTap_activeActionGroupIndex = -1;
		$("#obj19698").trigger("obj19698_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19698) {
				console.warn("de-queueing event obj19698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19698_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19491
(function(){
	window.obj19698_onTap_runningActionsCount = obj19698_onTap_runningActionsCount + 1;


	var selector = "#obj19491";
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
					window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
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
				window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19700();
function playAudioFile_19700() {
	window.obj19698_onTap_runningActionsCount = obj19698_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19700")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19700");
			$("#obj_audio_playSoundFile19700").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
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
				window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19702();
function switchText_19702() {
	window.obj19698_onTap_runningActionsCount = obj19698_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19698_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19698_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19698").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19698_content");
			setTimeout(function () {
				window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19698 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19698_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19698_onTap_activeActionGroupIndex = -1;
		$("#obj19698").trigger("obj19698_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19698) {
				console.warn("de-queueing event obj19698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19698_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19703();
function wait_19703() {
	window.obj19698_onTap_runningActionsCount = obj19698_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19698_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19698_onTap_activeActionGroupIndex = -1;
		$("#obj19698").trigger("obj19698_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19698) {
				console.warn("de-queueing event obj19698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19698_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19704();
function switchText_19704() {
	window.obj19698_onTap_runningActionsCount = obj19698_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19698_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19698_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19698").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19698_content");
			setTimeout(function () {
				window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19698 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19698_onTap_runningActionsCount = window.obj19698_onTap_runningActionsCount - 1;

if (window.obj19698_onTap_runningActionsCount < 0) {
	window.obj19698_onTap_runningActionsCount = 0;
} else if (window.obj19698_onTap_runningActionsCount == 0) {
	obj19698_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19698_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19698_onTap_activeActionGroupIndex = -1;
		$("#obj19698").trigger("obj19698_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19698) {
				console.warn("de-queueing event obj19698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19698_onTap_activeActionGroupIndex = 3;
	











































};
obj19689_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19689_onTap_activeActionGroupIndex = -1;
		$("#obj19689").trigger("obj19689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19689) {
				console.warn("de-queueing event obj19689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19689_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19502
(function(){
	window.obj19689_onTap_runningActionsCount = obj19689_onTap_runningActionsCount + 1;


	var selector = "#obj19502";
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
					window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
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
				window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19742();
function playAudioFile_19742() {
	window.obj19689_onTap_runningActionsCount = obj19689_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19742")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19742");
			$("#obj_audio_playSoundFile19742").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
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
				window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19744();
function switchText_19744() {
	window.obj19689_onTap_runningActionsCount = obj19689_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19689_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19689_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19689").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19689_content");
			setTimeout(function () {
				window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19689 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19689_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19689_onTap_activeActionGroupIndex = -1;
		$("#obj19689").trigger("obj19689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19689) {
				console.warn("de-queueing event obj19689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19689_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19745();
function wait_19745() {
	window.obj19689_onTap_runningActionsCount = obj19689_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19689_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19689_onTap_activeActionGroupIndex = -1;
		$("#obj19689").trigger("obj19689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19689) {
				console.warn("de-queueing event obj19689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19689_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19746();
function switchText_19746() {
	window.obj19689_onTap_runningActionsCount = obj19689_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19689_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19689_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19689").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19689_content");
			setTimeout(function () {
				window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19689 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19689_onTap_runningActionsCount = window.obj19689_onTap_runningActionsCount - 1;

if (window.obj19689_onTap_runningActionsCount < 0) {
	window.obj19689_onTap_runningActionsCount = 0;
} else if (window.obj19689_onTap_runningActionsCount == 0) {
	obj19689_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19689_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19689_onTap_activeActionGroupIndex = -1;
		$("#obj19689").trigger("obj19689_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19689) {
				console.warn("de-queueing event obj19689." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19689").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19689_onTap_activeActionGroupIndex = 3;
	











































};
obj19682_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19682_onTap_activeActionGroupIndex = -1;
		$("#obj19682").trigger("obj19682_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19682) {
				console.warn("de-queueing event obj19682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19682_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19516
(function(){
	window.obj19682_onTap_runningActionsCount = obj19682_onTap_runningActionsCount + 1;


	var selector = "#obj19516";
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
					window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
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
				window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19684();
function playAudioFile_19684() {
	window.obj19682_onTap_runningActionsCount = obj19682_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19684")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19684");
			$("#obj_audio_playSoundFile19684").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
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
				window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19686();
function switchText_19686() {
	window.obj19682_onTap_runningActionsCount = obj19682_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19682_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19682_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19682").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19682_content");
			setTimeout(function () {
				window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19682 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19682_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19682_onTap_activeActionGroupIndex = -1;
		$("#obj19682").trigger("obj19682_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19682) {
				console.warn("de-queueing event obj19682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19682_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19687();
function wait_19687() {
	window.obj19682_onTap_runningActionsCount = obj19682_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19682_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19682_onTap_activeActionGroupIndex = -1;
		$("#obj19682").trigger("obj19682_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19682) {
				console.warn("de-queueing event obj19682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19682_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19688();
function switchText_19688() {
	window.obj19682_onTap_runningActionsCount = obj19682_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19682_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19682_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19682").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19682_content");
			setTimeout(function () {
				window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19682 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19682_onTap_runningActionsCount = window.obj19682_onTap_runningActionsCount - 1;

if (window.obj19682_onTap_runningActionsCount < 0) {
	window.obj19682_onTap_runningActionsCount = 0;
} else if (window.obj19682_onTap_runningActionsCount == 0) {
	obj19682_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19682_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19682_onTap_activeActionGroupIndex = -1;
		$("#obj19682").trigger("obj19682_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19682) {
				console.warn("de-queueing event obj19682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19682_onTap_activeActionGroupIndex = 3;
	











































};
obj19676_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19676_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19676").trigger("obj19676_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19676) {
				console.warn("de-queueing event obj19676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19676_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19682 
hide_19678();
function hide_19678() {
	var selector = "#obj19682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19676_SCEventRun_runningActionsCount = obj19676_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19678(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19689 
hide_19679();
function hide_19679() {
	var selector = "#obj19689";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19676_SCEventRun_runningActionsCount = obj19676_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19679(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19698 
hide_19680();
function hide_19680() {
	var selector = "#obj19698";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19676_SCEventRun_runningActionsCount = obj19676_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19680(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19705 
hide_19681();
function hide_19681() {
	var selector = "#obj19705";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19676_SCEventRun_runningActionsCount = obj19676_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19681(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19676_SCEventRun_runningActionsCount = window.obj19676_SCEventRun_runningActionsCount - 1;

if (window.obj19676_SCEventRun_runningActionsCount < 0) {
	window.obj19676_SCEventRun_runningActionsCount = 0;
} else if (window.obj19676_SCEventRun_runningActionsCount == 0) {
	obj19676_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19676_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19676_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19676").trigger("obj19676_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19676) {
				console.warn("de-queueing event obj19676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19676_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj19787_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19787_onTap_activeActionGroupIndex = -1;
		$("#obj19787").trigger("obj19787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19787) {
				console.warn("de-queueing event obj19787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19787_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19477 
hide_19792();
function hide_19792() {
	var selector = "#obj19477";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19792(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19785
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19785";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19472
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19472";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19774
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19774";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19767
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19767";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19760
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19760";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19753
(function(){
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;


	var selector = "#obj19753";
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
					window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19789();
function playAudioFile_19789() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19789")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19789");
			$("#obj_audio_playSoundFile19789").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
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
				window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}
		}
	}

	
	
	
}





























//	action: run action list container
//	target: obj19525 
runActionList_19793();
function runActionList_19793() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	$("#obj19525").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19531 
runActionList_19794();
function runActionList_19794() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	$("#obj19531").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19542 
runActionList_19795();
function runActionList_19795() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	$("#obj19542").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19609 
runActionList_19796();
function runActionList_19796() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	$("#obj19609").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj19676 
runActionList_19803();
function runActionList_19803() {
	window.obj19787_onTap_runningActionsCount = obj19787_onTap_runningActionsCount + 1;

	$("#obj19676").trigger('SCEventRun');
	setTimeout(function() {
		window.obj19787_onTap_runningActionsCount = window.obj19787_onTap_runningActionsCount - 1;

if (window.obj19787_onTap_runningActionsCount < 0) {
	window.obj19787_onTap_runningActionsCount = 0;
} else if (window.obj19787_onTap_runningActionsCount == 0) {
	obj19787_onTap_actionGroup1();
}		
	}, 1);
}







};
obj19787_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19787_onTap_activeActionGroupIndex = -1;
		$("#obj19787").trigger("obj19787_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19787) {
				console.warn("de-queueing event obj19787." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19787").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19787_onTap_activeActionGroupIndex = 1;
	











































};
obj19774_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19774_onTap_activeActionGroupIndex = -1;
		$("#obj19774").trigger("obj19774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19774) {
				console.warn("de-queueing event obj19774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19774_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19472 
hide_19778();
function hide_19778() {
	var selector = "#obj19472";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19778(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19785 
hide_19780();
function hide_19780() {
	var selector = "#obj19785";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19780(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj19477
(function(){
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;


	var selector = "#obj19477";
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
					window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
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
				window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19481
(function(){
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;


	var selector = "#obj19481";
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
					window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
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
				window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj19783
(function(){
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;


	var selector = "#obj19783";
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
					window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
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
				window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19776();
function playAudioFile_19776() {
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19776")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19776");
			$("#obj_audio_playSoundFile19776").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
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
				window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj19774_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19774_onTap_activeActionGroupIndex = -1;
		$("#obj19774").trigger("obj19774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19774) {
				console.warn("de-queueing event obj19774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19774_onTap_activeActionGroupIndex = 1;
	































//	action: increment counter
//	target: obj18773 
incrementCounter_19782();
function incrementCounter_19782() {
	window.obj19774_onTap_runningActionsCount = obj19774_onTap_runningActionsCount + 1;


	var oldValue = obj18773_counterValue;
	obj18773_counterValue = obj18773_counterValue + 1;
	if (! obj18773_counterCanExceedTargetValue && obj18773_counterValue > obj18773_counterTargetValue) {
		obj18773_counterValue = obj18773_counterTargetValue;
	}

	if (oldValue != obj18773_counterValue) {
		$("#obj18773").trigger('SCEventCounterValueChange');
		$("#obj18773").trigger('SCEventCounterIncrease');
		if (obj18773_counterValue == obj18773_counterTargetValue)
			$("#obj18773").trigger('SCEventCounterReachedTargetValue');
	}

	setTimeout(function() { window.obj19774_onTap_runningActionsCount = window.obj19774_onTap_runningActionsCount - 1;

if (window.obj19774_onTap_runningActionsCount < 0) {
	window.obj19774_onTap_runningActionsCount = 0;
} else if (window.obj19774_onTap_runningActionsCount == 0) {
	obj19774_onTap_actionGroup2();
} }, 1);
}











};
obj19774_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19774_onTap_activeActionGroupIndex = -1;
		$("#obj19774").trigger("obj19774_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19774) {
				console.warn("de-queueing event obj19774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19774_onTap_activeActionGroupIndex = 2;
	











































};
obj19767_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19767_onTap_activeActionGroupIndex = -1;
		$("#obj19767").trigger("obj19767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19767) {
				console.warn("de-queueing event obj19767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19767_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19491
(function(){
	window.obj19767_onTap_runningActionsCount = obj19767_onTap_runningActionsCount + 1;


	var selector = "#obj19491";
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
					window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
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
				window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19769();
function playAudioFile_19769() {
	window.obj19767_onTap_runningActionsCount = obj19767_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19769")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19769");
			$("#obj_audio_playSoundFile19769").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
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
				window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19771();
function switchText_19771() {
	window.obj19767_onTap_runningActionsCount = obj19767_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19767_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19767_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19767").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19767_content");
			setTimeout(function () {
				window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19767 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19767_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19767_onTap_activeActionGroupIndex = -1;
		$("#obj19767").trigger("obj19767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19767) {
				console.warn("de-queueing event obj19767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19767_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19772();
function wait_19772() {
	window.obj19767_onTap_runningActionsCount = obj19767_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19767_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19767_onTap_activeActionGroupIndex = -1;
		$("#obj19767").trigger("obj19767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19767) {
				console.warn("de-queueing event obj19767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19767_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19773();
function switchText_19773() {
	window.obj19767_onTap_runningActionsCount = obj19767_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">48</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19767_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19767_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19767").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19767_content");
			setTimeout(function () {
				window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19767 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19767_onTap_runningActionsCount = window.obj19767_onTap_runningActionsCount - 1;

if (window.obj19767_onTap_runningActionsCount < 0) {
	window.obj19767_onTap_runningActionsCount = 0;
} else if (window.obj19767_onTap_runningActionsCount == 0) {
	obj19767_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19767_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19767_onTap_activeActionGroupIndex = -1;
		$("#obj19767").trigger("obj19767_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19767) {
				console.warn("de-queueing event obj19767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19767_onTap_activeActionGroupIndex = 3;
	











































};
obj19760_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19760_onTap_activeActionGroupIndex = -1;
		$("#obj19760").trigger("obj19760_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19760) {
				console.warn("de-queueing event obj19760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19760_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19502
(function(){
	window.obj19760_onTap_runningActionsCount = obj19760_onTap_runningActionsCount + 1;


	var selector = "#obj19502";
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
					window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
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
				window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19762();
function playAudioFile_19762() {
	window.obj19760_onTap_runningActionsCount = obj19760_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19762")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19762");
			$("#obj_audio_playSoundFile19762").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
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
				window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19764();
function switchText_19764() {
	window.obj19760_onTap_runningActionsCount = obj19760_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19760_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19760_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19760").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19760_content");
			setTimeout(function () {
				window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19760 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19760_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19760_onTap_activeActionGroupIndex = -1;
		$("#obj19760").trigger("obj19760_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19760) {
				console.warn("de-queueing event obj19760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19760_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19765();
function wait_19765() {
	window.obj19760_onTap_runningActionsCount = obj19760_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19760_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19760_onTap_activeActionGroupIndex = -1;
		$("#obj19760").trigger("obj19760_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19760) {
				console.warn("de-queueing event obj19760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19760_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19766();
function switchText_19766() {
	window.obj19760_onTap_runningActionsCount = obj19760_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">36</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19760_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19760_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19760").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19760_content");
			setTimeout(function () {
				window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19760 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19760_onTap_runningActionsCount = window.obj19760_onTap_runningActionsCount - 1;

if (window.obj19760_onTap_runningActionsCount < 0) {
	window.obj19760_onTap_runningActionsCount = 0;
} else if (window.obj19760_onTap_runningActionsCount == 0) {
	obj19760_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19760_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19760_onTap_activeActionGroupIndex = -1;
		$("#obj19760").trigger("obj19760_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19760) {
				console.warn("de-queueing event obj19760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19760_onTap_activeActionGroupIndex = 3;
	











































};
obj19753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19753_onTap_activeActionGroupIndex = -1;
		$("#obj19753").trigger("obj19753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19753) {
				console.warn("de-queueing event obj19753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19753_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj19516
(function(){
	window.obj19753_onTap_runningActionsCount = obj19753_onTap_runningActionsCount + 1;


	var selector = "#obj19516";
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
					window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
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
				window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_19755();
function playAudioFile_19755() {
	window.obj19753_onTap_runningActionsCount = obj19753_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile19755")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile19755");
			$("#obj_audio_playSoundFile19755").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
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
				window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_19757();
function switchText_19757() {
	window.obj19753_onTap_runningActionsCount = obj19753_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19753_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19753_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19753").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19753_content");
			setTimeout(function () {
				window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj19753 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj19753_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19753_onTap_activeActionGroupIndex = -1;
		$("#obj19753").trigger("obj19753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19753) {
				console.warn("de-queueing event obj19753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19753_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_19758();
function wait_19758() {
	window.obj19753_onTap_runningActionsCount = obj19753_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup2();
}
	}, 300);
}


























};
obj19753_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19753_onTap_activeActionGroupIndex = -1;
		$("#obj19753").trigger("obj19753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19753) {
				console.warn("de-queueing event obj19753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19753_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_19759();
function switchText_19759() {
	window.obj19753_onTap_runningActionsCount = obj19753_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">+</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj19753_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj19753_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj19753").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj19753_content");
			setTimeout(function () {
				window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj19753 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj19753_onTap_runningActionsCount = window.obj19753_onTap_runningActionsCount - 1;

if (window.obj19753_onTap_runningActionsCount < 0) {
	window.obj19753_onTap_runningActionsCount = 0;
} else if (window.obj19753_onTap_runningActionsCount == 0) {
	obj19753_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj19753_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19753_onTap_activeActionGroupIndex = -1;
		$("#obj19753").trigger("obj19753_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19753) {
				console.warn("de-queueing event obj19753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19753_onTap_activeActionGroupIndex = 3;
	











































};
obj19747_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj19747_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19747").trigger("obj19747_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19747) {
				console.warn("de-queueing event obj19747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19747_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj19753 
hide_19749();
function hide_19749() {
	var selector = "#obj19753";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19747_SCEventRun_runningActionsCount = obj19747_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19749(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19760 
hide_19750();
function hide_19750() {
	var selector = "#obj19760";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19747_SCEventRun_runningActionsCount = obj19747_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19750(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19767 
hide_19751();
function hide_19751() {
	var selector = "#obj19767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19747_SCEventRun_runningActionsCount = obj19747_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19751(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj19774 
hide_19752();
function hide_19752() {
	var selector = "#obj19774";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj19747_SCEventRun_runningActionsCount = obj19747_SCEventRun_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_19752(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj19747_SCEventRun_runningActionsCount = window.obj19747_SCEventRun_runningActionsCount - 1;

if (window.obj19747_SCEventRun_runningActionsCount < 0) {
	window.obj19747_SCEventRun_runningActionsCount = 0;
} else if (window.obj19747_SCEventRun_runningActionsCount == 0) {
	obj19747_SCEventRun_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj19747_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj19747_SCEventRun_activeActionGroupIndex = -1;
		$("#obj19747").trigger("obj19747_SCEventRun_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 19747) {
				console.warn("de-queueing event obj19747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj19747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj19747_SCEventRun_activeActionGroupIndex = 1;
	











































};
obj22241_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22241_onTap_activeActionGroupIndex = -1;
		$("#obj22241").trigger("obj22241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22241) {
				console.warn("de-queueing event obj22241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22241_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22239
(function(){
	window.obj22241_onTap_runningActionsCount = obj22241_onTap_runningActionsCount + 1;


	var selector = "#obj22239";
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
					window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
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
				window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_22243();
function playAudioFile_22243() {
	window.obj22241_onTap_runningActionsCount = obj22241_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22243")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22243");
			$("#obj_audio_playSoundFile22243").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
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
				window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_22245();
function switchText_22245() {
	window.obj22241_onTap_runningActionsCount = obj22241_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px;\"><strong><span style=\"font-family: Roboto;\">12</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22241_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22241_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22241").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22241_content");
			setTimeout(function () {
				window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj22241 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj22241_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22241_onTap_activeActionGroupIndex = -1;
		$("#obj22241").trigger("obj22241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22241) {
				console.warn("de-queueing event obj22241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22241_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_22246();
function wait_22246() {
	window.obj22241_onTap_runningActionsCount = obj22241_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup2();
}
	}, 300);
}


























};
obj22241_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22241_onTap_activeActionGroupIndex = -1;
		$("#obj22241").trigger("obj22241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22241) {
				console.warn("de-queueing event obj22241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22241_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_22247();
function switchText_22247() {
	window.obj22241_onTap_runningActionsCount = obj22241_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 50px;\"><strong><span style=\"font-family: Roboto;\">12</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22241_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22241_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22241").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22241_content");
			setTimeout(function () {
				window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj22241 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22241_onTap_runningActionsCount = window.obj22241_onTap_runningActionsCount - 1;

if (window.obj22241_onTap_runningActionsCount < 0) {
	window.obj22241_onTap_runningActionsCount = 0;
} else if (window.obj22241_onTap_runningActionsCount == 0) {
	obj22241_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj22241_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22241_onTap_activeActionGroupIndex = -1;
		$("#obj22241").trigger("obj22241_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22241) {
				console.warn("de-queueing event obj22241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22241_onTap_activeActionGroupIndex = 3;
	











































};
obj22250_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22250_onTap_activeActionGroupIndex = -1;
		$("#obj22250").trigger("obj22250_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22250) {
				console.warn("de-queueing event obj22250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22250_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22248
(function(){
	window.obj22250_onTap_runningActionsCount = obj22250_onTap_runningActionsCount + 1;


	var selector = "#obj22248";
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
					window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
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
				window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_22252();
function playAudioFile_22252() {
	window.obj22250_onTap_runningActionsCount = obj22250_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22252")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22252");
			$("#obj_audio_playSoundFile22252").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
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
				window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_22254();
function switchText_22254() {
	window.obj22250_onTap_runningActionsCount = obj22250_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 43px;\"><strong><span style=\"font-family: Roboto;\">–</span></strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22250_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22250_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22250").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22250_content");
			setTimeout(function () {
				window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj22250 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj22250_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22250_onTap_activeActionGroupIndex = -1;
		$("#obj22250").trigger("obj22250_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22250) {
				console.warn("de-queueing event obj22250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22250_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_22255();
function wait_22255() {
	window.obj22250_onTap_runningActionsCount = obj22250_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup2();
}
	}, 300);
}


























};
obj22250_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22250_onTap_activeActionGroupIndex = -1;
		$("#obj22250").trigger("obj22250_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22250) {
				console.warn("de-queueing event obj22250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22250_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_22256();
function switchText_22256() {
	window.obj22250_onTap_runningActionsCount = obj22250_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><strong><span style=\"font-family: Roboto;\"><span style=\"font-size: 45px;\"><span style=\"font-size: 48px;\"><span style=\"font-size: 50px;\">–</span></span></span></span></strong></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22250_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22250_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22250").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22250_content");
			setTimeout(function () {
				window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj22250 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22250_onTap_runningActionsCount = window.obj22250_onTap_runningActionsCount - 1;

if (window.obj22250_onTap_runningActionsCount < 0) {
	window.obj22250_onTap_runningActionsCount = 0;
} else if (window.obj22250_onTap_runningActionsCount == 0) {
	obj22250_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj22250_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22250_onTap_activeActionGroupIndex = -1;
		$("#obj22250").trigger("obj22250_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22250) {
				console.warn("de-queueing event obj22250." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22250").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22250_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		











































/*
 *
 *   obj18742: Event Touch Down
 *
 */

$("#obj18742").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18742_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18742_onTap is still running");
	return;
}
var obj18742_onTap_runningActionsCount = 0;
var obj18742_onTap_loopCount = 0;
obj18742_onTap_actionGroup0();
});


















/*
 *
 *   obj18745: Event Touch Down
 *
 */

$("#obj18745").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18745_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18745_onTap is still running");
	return;
}
var obj18745_onTap_runningActionsCount = 0;
var obj18745_onTap_loopCount = 0;
obj18745_onTap_actionGroup0();
});
























































/*
 *
 *   obj18752: Event Touch Down
 *
 */

$("#obj18752").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18752_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18752_onTap is still running");
	return;
}
var obj18752_onTap_runningActionsCount = 0;
var obj18752_onTap_loopCount = 0;
obj18752_onTap_actionGroup0();
});


















/*
 *
 *   obj18757: Event Touch Down
 *
 */

$("#obj18757").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18757_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18757_onTap is still running");
	return;
}
var obj18757_onTap_runningActionsCount = 0;
var obj18757_onTap_loopCount = 0;
obj18757_onTap_actionGroup0();
});


















/*
 *
 *   obj18763: Event Touch Down
 *
 */

$("#obj18763").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj18763_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18763_onTap is still running");
	return;
}
var obj18763_onTap_runningActionsCount = 0;
var obj18763_onTap_loopCount = 0;
obj18763_onTap_actionGroup0();
});

































































/*
 *
 *   obj18773: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj18773").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj18773_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj18773_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj18773_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj18773_SCEventCounterReachedTargetValue_loopCount = 0;
obj18773_SCEventCounterReachedTargetValue_actionGroup0();
});















































/*
 *
 *   obj19463: Event Touch Down
 *
 */

$("#obj19463").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19463_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19463_onTap is still running");
	return;
}
var obj19463_onTap_runningActionsCount = 0;
var obj19463_onTap_loopCount = 0;
obj19463_onTap_actionGroup0();
});
























































/*
 *
 *   obj19479: Event Touch Down
 *
 */

$("#obj19479").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19479_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19479_onTap is still running");
	return;
}
var obj19479_onTap_runningActionsCount = 0;
var obj19479_onTap_loopCount = 0;
obj19479_onTap_actionGroup0();
});


















/*
 *
 *   obj19493: Event Touch Down
 *
 */

$("#obj19493").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19493_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19493_onTap is still running");
	return;
}
var obj19493_onTap_runningActionsCount = 0;
var obj19493_onTap_loopCount = 0;
obj19493_onTap_actionGroup0();
});


















/*
 *
 *   obj19504: Event Touch Down
 *
 */

$("#obj19504").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19504_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19504_onTap is still running");
	return;
}
var obj19504_onTap_runningActionsCount = 0;
var obj19504_onTap_loopCount = 0;
obj19504_onTap_actionGroup0();
});


















/*
 *
 *   obj19518: Event Touch Down
 *
 */

$("#obj19518").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19518_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19518_onTap is still running");
	return;
}
var obj19518_onTap_runningActionsCount = 0;
var obj19518_onTap_loopCount = 0;
obj19518_onTap_actionGroup0();
});



























/*
 *
 *   obj19525: Event SCEventRun
 *
 */

$("#obj19525").bind("SCEventRun", function(event) {
	if (window.obj19525_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19525_SCEventRun is still running");
	return;
}
var obj19525_SCEventRun_runningActionsCount = 0;
var obj19525_SCEventRun_loopCount = 0;
obj19525_SCEventRun_actionGroup0();
});


















/*
 *
 *   obj19531: Event SCEventRun
 *
 */

$("#obj19531").bind("SCEventRun", function(event) {
	if (window.obj19531_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19531_SCEventRun is still running");
	return;
}
var obj19531_SCEventRun_runningActionsCount = 0;
var obj19531_SCEventRun_loopCount = 0;
obj19531_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj19582: Event Touch Down
 *
 */

$("#obj19582").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19582_onTap is still running");
	return;
}
var obj19582_onTap_runningActionsCount = 0;
var obj19582_onTap_loopCount = 0;
obj19582_onTap_actionGroup0();
});
























































/*
 *
 *   obj19571: Event Touch Down
 *
 */

$("#obj19571").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19571_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19571_onTap is still running");
	return;
}
var obj19571_onTap_runningActionsCount = 0;
var obj19571_onTap_loopCount = 0;
obj19571_onTap_actionGroup0();
});


















/*
 *
 *   obj19564: Event Touch Down
 *
 */

$("#obj19564").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19564_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19564_onTap is still running");
	return;
}
var obj19564_onTap_runningActionsCount = 0;
var obj19564_onTap_loopCount = 0;
obj19564_onTap_actionGroup0();
});


















/*
 *
 *   obj19555: Event Touch Down
 *
 */

$("#obj19555").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19555_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19555_onTap is still running");
	return;
}
var obj19555_onTap_runningActionsCount = 0;
var obj19555_onTap_loopCount = 0;
obj19555_onTap_actionGroup0();
});


















/*
 *
 *   obj19548: Event Touch Down
 *
 */

$("#obj19548").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19548_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19548_onTap is still running");
	return;
}
var obj19548_onTap_runningActionsCount = 0;
var obj19548_onTap_loopCount = 0;
obj19548_onTap_actionGroup0();
});



























/*
 *
 *   obj19542: Event SCEventRun
 *
 */

$("#obj19542").bind("SCEventRun", function(event) {
	if (window.obj19542_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19542_SCEventRun is still running");
	return;
}
var obj19542_SCEventRun_runningActionsCount = 0;
var obj19542_SCEventRun_loopCount = 0;
obj19542_SCEventRun_actionGroup0();
});









/*
 *
 *   obj19649: Event Touch Down
 *
 */

$("#obj19649").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19649_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19649_onTap is still running");
	return;
}
var obj19649_onTap_runningActionsCount = 0;
var obj19649_onTap_loopCount = 0;
obj19649_onTap_actionGroup0();
});
























































/*
 *
 *   obj19638: Event Touch Down
 *
 */

$("#obj19638").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19638_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19638_onTap is still running");
	return;
}
var obj19638_onTap_runningActionsCount = 0;
var obj19638_onTap_loopCount = 0;
obj19638_onTap_actionGroup0();
});


















/*
 *
 *   obj19631: Event Touch Down
 *
 */

$("#obj19631").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19631_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19631_onTap is still running");
	return;
}
var obj19631_onTap_runningActionsCount = 0;
var obj19631_onTap_loopCount = 0;
obj19631_onTap_actionGroup0();
});


















/*
 *
 *   obj19624: Event Touch Down
 *
 */

$("#obj19624").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19624_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19624_onTap is still running");
	return;
}
var obj19624_onTap_runningActionsCount = 0;
var obj19624_onTap_loopCount = 0;
obj19624_onTap_actionGroup0();
});


















/*
 *
 *   obj19615: Event Touch Down
 *
 */

$("#obj19615").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19615_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19615_onTap is still running");
	return;
}
var obj19615_onTap_runningActionsCount = 0;
var obj19615_onTap_loopCount = 0;
obj19615_onTap_actionGroup0();
});



























/*
 *
 *   obj19609: Event SCEventRun
 *
 */

$("#obj19609").bind("SCEventRun", function(event) {
	if (window.obj19609_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19609_SCEventRun is still running");
	return;
}
var obj19609_SCEventRun_runningActionsCount = 0;
var obj19609_SCEventRun_loopCount = 0;
obj19609_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj19716: Event Touch Down
 *
 */

$("#obj19716").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19716_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19716_onTap is still running");
	return;
}
var obj19716_onTap_runningActionsCount = 0;
var obj19716_onTap_loopCount = 0;
obj19716_onTap_actionGroup0();
});
























































/*
 *
 *   obj19705: Event Touch Down
 *
 */

$("#obj19705").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19705_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19705_onTap is still running");
	return;
}
var obj19705_onTap_runningActionsCount = 0;
var obj19705_onTap_loopCount = 0;
obj19705_onTap_actionGroup0();
});


















/*
 *
 *   obj19698: Event Touch Down
 *
 */

$("#obj19698").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19698_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19698_onTap is still running");
	return;
}
var obj19698_onTap_runningActionsCount = 0;
var obj19698_onTap_loopCount = 0;
obj19698_onTap_actionGroup0();
});


















/*
 *
 *   obj19689: Event Touch Down
 *
 */

$("#obj19689").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19689_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19689_onTap is still running");
	return;
}
var obj19689_onTap_runningActionsCount = 0;
var obj19689_onTap_loopCount = 0;
obj19689_onTap_actionGroup0();
});


















/*
 *
 *   obj19682: Event Touch Down
 *
 */

$("#obj19682").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19682_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19682_onTap is still running");
	return;
}
var obj19682_onTap_runningActionsCount = 0;
var obj19682_onTap_loopCount = 0;
obj19682_onTap_actionGroup0();
});



























/*
 *
 *   obj19676: Event SCEventRun
 *
 */

$("#obj19676").bind("SCEventRun", function(event) {
	if (window.obj19676_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19676_SCEventRun is still running");
	return;
}
var obj19676_SCEventRun_runningActionsCount = 0;
var obj19676_SCEventRun_loopCount = 0;
obj19676_SCEventRun_actionGroup0();
});




























/*
 *
 *   obj19787: Event Touch Down
 *
 */

$("#obj19787").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19787_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19787_onTap is still running");
	return;
}
var obj19787_onTap_runningActionsCount = 0;
var obj19787_onTap_loopCount = 0;
obj19787_onTap_actionGroup0();
});
























































/*
 *
 *   obj19774: Event Touch Down
 *
 */

$("#obj19774").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19774_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19774_onTap is still running");
	return;
}
var obj19774_onTap_runningActionsCount = 0;
var obj19774_onTap_loopCount = 0;
obj19774_onTap_actionGroup0();
});


















/*
 *
 *   obj19767: Event Touch Down
 *
 */

$("#obj19767").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19767_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19767_onTap is still running");
	return;
}
var obj19767_onTap_runningActionsCount = 0;
var obj19767_onTap_loopCount = 0;
obj19767_onTap_actionGroup0();
});


















/*
 *
 *   obj19760: Event Touch Down
 *
 */

$("#obj19760").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19760_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19760_onTap is still running");
	return;
}
var obj19760_onTap_runningActionsCount = 0;
var obj19760_onTap_loopCount = 0;
obj19760_onTap_actionGroup0();
});


















/*
 *
 *   obj19753: Event Touch Down
 *
 */

$("#obj19753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj19753_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19753_onTap is still running");
	return;
}
var obj19753_onTap_runningActionsCount = 0;
var obj19753_onTap_loopCount = 0;
obj19753_onTap_actionGroup0();
});



























/*
 *
 *   obj19747: Event SCEventRun
 *
 */

$("#obj19747").bind("SCEventRun", function(event) {
	if (window.obj19747_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj19747_SCEventRun is still running");
	return;
}
var obj19747_SCEventRun_runningActionsCount = 0;
var obj19747_SCEventRun_loopCount = 0;
obj19747_SCEventRun_actionGroup0();
});








































































































/*
 *
 *   obj22241: Event Touch Down
 *
 */

$("#obj22241").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22241_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22241_onTap is still running");
	return;
}
var obj22241_onTap_runningActionsCount = 0;
var obj22241_onTap_loopCount = 0;
obj22241_onTap_actionGroup0();
});





































/*
 *
 *   obj22250: Event Touch Down
 *
 */

$("#obj22250").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22250_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22250_onTap is still running");
	return;
}
var obj22250_onTap_runningActionsCount = 0;
var obj22250_onTap_loopCount = 0;
obj22250_onTap_actionGroup0();
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
	
$("#obj18738").trigger('SCEventShow');
$("#obj18740").trigger('SCEventShow');
$("#obj18742").trigger('SCEventShow');
$("#obj18745").trigger('SCEventShow');
$("#obj18748").trigger('SCEventShow');
$("#obj18750").trigger('SCEventShow');
$("#obj18752").trigger('SCEventShow');
$("#obj18757").trigger('SCEventShow');
$("#obj18779").trigger('SCEventShow');
$("#obj19461").trigger('SCEventShow');
$("#obj19463").trigger('SCEventShow');
$("#obj19479").trigger('SCEventShow');
$("#obj19493").trigger('SCEventShow');
$("#obj19504").trigger('SCEventShow');
$("#obj19518").trigger('SCEventShow');
$("#obj19593").trigger('SCEventShow');
$("#obj19582").trigger('SCEventShow');
$("#obj19649").trigger('SCEventShow');
$("#obj19729").trigger('SCEventShow');
$("#obj19716").trigger('SCEventShow');
$("#obj19801").trigger('SCEventShow');
$("#obj19787").trigger('SCEventShow');
$("#obj19808").trigger('SCEventShow');
$("#obj22241").trigger('SCEventShow');
$("#obj22250").trigger('SCEventShow');
$("#obj19477").trigger('SCEventShow');
$("#obj22237").trigger('SCEventShow');
	

});