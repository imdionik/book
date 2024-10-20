pubcoder.projectID = pubcoder.projectID || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.id = pubcoder.project.id || "04CBE4814F94C647B494EACA673E6CFF";
pubcoder.project.title = pubcoder.project.title || "Математика 3 клас";
pubcoder.page.id = pubcoder.page.id || 21876;
pubcoder.page.title = pubcoder.page.title || "54";
pubcoder.page.number = pubcoder.page.number || 54;
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
var obj21883_onTap_activeActionGroupIndex = -1;
var obj21883_onTap_runningActionsCount = 0;
var obj21883_onTap_loopCount = 0;
var obj21886_onTap_activeActionGroupIndex = -1;
var obj21886_onTap_runningActionsCount = 0;
var obj21886_onTap_loopCount = 0;
var obj21893_onTap_activeActionGroupIndex = -1;
var obj21893_onTap_runningActionsCount = 0;
var obj21893_onTap_loopCount = 0;
var obj21896_onTap_activeActionGroupIndex = -1;
var obj21896_onTap_runningActionsCount = 0;
var obj21896_onTap_loopCount = 0;
var obj21902_onTap_activeActionGroupIndex = -1;
var obj21902_onTap_runningActionsCount = 0;
var obj21902_onTap_loopCount = 0;
var obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj21912_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj21912_SCEventCounterReachedTargetValue_loopCount = 0;
var obj22051_onTap_activeActionGroupIndex = -1;
var obj22051_onTap_runningActionsCount = 0;
var obj22051_onTap_loopCount = 0;
var obj22062_onTap_activeActionGroupIndex = -1;
var obj22062_onTap_runningActionsCount = 0;
var obj22062_onTap_loopCount = 0;
var obj22071_onTap_activeActionGroupIndex = -1;
var obj22071_onTap_runningActionsCount = 0;
var obj22071_onTap_loopCount = 0;

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj21912_counterValue = 0;
var obj21912_counterTargetValue = 5;
var obj21912_counterCanExceedTargetValue = false;

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
		
obj21883_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21883_onTap_activeActionGroupIndex = -1;
		$("#obj21883").trigger("obj21883_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21883) {
				console.warn("de-queueing event obj21883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21883_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21885();
function goToPage_21885() {
	window.obj21883_onTap_runningActionsCount = obj21883_onTap_runningActionsCount + 1;

	$("#anchor873")[0].click();
	window.obj21883_onTap_runningActionsCount = window.obj21883_onTap_runningActionsCount - 1;

if (window.obj21883_onTap_runningActionsCount < 0) {
	window.obj21883_onTap_runningActionsCount = 0;
} else if (window.obj21883_onTap_runningActionsCount == 0) {
	obj21883_onTap_actionGroup1();
}
}










































};
obj21883_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21883_onTap_activeActionGroupIndex = -1;
		$("#obj21883").trigger("obj21883_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21883) {
				console.warn("de-queueing event obj21883." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21883").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21883_onTap_activeActionGroupIndex = 1;
	











































};
obj21886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21886_onTap_activeActionGroupIndex = -1;
		$("#obj21886").trigger("obj21886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21886) {
				console.warn("de-queueing event obj21886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21886_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21888();
function goToPage_21888() {
	window.obj21886_onTap_runningActionsCount = obj21886_onTap_runningActionsCount + 1;

	$("#anchor874")[0].click();
	window.obj21886_onTap_runningActionsCount = window.obj21886_onTap_runningActionsCount - 1;

if (window.obj21886_onTap_runningActionsCount < 0) {
	window.obj21886_onTap_runningActionsCount = 0;
} else if (window.obj21886_onTap_runningActionsCount == 0) {
	obj21886_onTap_actionGroup1();
}
}










































};
obj21886_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21886_onTap_activeActionGroupIndex = -1;
		$("#obj21886").trigger("obj21886_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21886) {
				console.warn("de-queueing event obj21886." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21886").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21886_onTap_activeActionGroupIndex = 1;
	











































};
obj21893_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21893_onTap_activeActionGroupIndex = -1;
		$("#obj21893").trigger("obj21893_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21893) {
				console.warn("de-queueing event obj21893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21893_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_21895();
function goToPage_21895() {
	window.obj21893_onTap_runningActionsCount = obj21893_onTap_runningActionsCount + 1;

	$("#anchor875")[0].click();
	window.obj21893_onTap_runningActionsCount = window.obj21893_onTap_runningActionsCount - 1;

if (window.obj21893_onTap_runningActionsCount < 0) {
	window.obj21893_onTap_runningActionsCount = 0;
} else if (window.obj21893_onTap_runningActionsCount == 0) {
	obj21893_onTap_actionGroup1();
}
}










































};
obj21893_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21893_onTap_activeActionGroupIndex = -1;
		$("#obj21893").trigger("obj21893_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21893) {
				console.warn("de-queueing event obj21893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21893_onTap_activeActionGroupIndex = 1;
	











































};
obj21896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21896_onTap_activeActionGroupIndex = -1;
		$("#obj21896").trigger("obj21896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21896) {
				console.warn("de-queueing event obj21896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21896_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21902
(function(){
	window.obj21896_onTap_runningActionsCount = obj21896_onTap_runningActionsCount + 1;


	var selector = "#obj21902";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21896_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21896_onTap_activeActionGroupIndex = -1;
		$("#obj21896").trigger("obj21896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21896) {
				console.warn("de-queueing event obj21896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21896_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj21896 
hide_21899();
function hide_21899() {
	var selector = "#obj21896";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21896_onTap_runningActionsCount = obj21896_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21899(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21896_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21896_onTap_activeActionGroupIndex = -1;
		$("#obj21896").trigger("obj21896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21896) {
				console.warn("de-queueing event obj21896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21896_onTap_activeActionGroupIndex = 2;
	


//	action: show 
//	selector: #obj21910
(function(){
	window.obj21896_onTap_runningActionsCount = obj21896_onTap_runningActionsCount + 1;


	var selector = "#obj21910";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj21908
(function(){
	window.obj21896_onTap_runningActionsCount = obj21896_onTap_runningActionsCount + 1;


	var selector = "#obj21908";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj21896_onTap_runningActionsCount = window.obj21896_onTap_runningActionsCount - 1;

if (window.obj21896_onTap_runningActionsCount < 0) {
	window.obj21896_onTap_runningActionsCount = 0;
} else if (window.obj21896_onTap_runningActionsCount == 0) {
	obj21896_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21896_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21896_onTap_activeActionGroupIndex = -1;
		$("#obj21896").trigger("obj21896_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21896) {
				console.warn("de-queueing event obj21896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21896_onTap_activeActionGroupIndex = 3;
	











































};
obj21902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21902_onTap_activeActionGroupIndex = -1;
		$("#obj21902").trigger("obj21902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21902) {
				console.warn("de-queueing event obj21902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21902_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj21896
(function(){
	window.obj21902_onTap_runningActionsCount = obj21902_onTap_runningActionsCount + 1;


	var selector = "#obj21896";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();








































};
obj21902_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21902_onTap_activeActionGroupIndex = -1;
		$("#obj21902").trigger("obj21902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21902) {
				console.warn("de-queueing event obj21902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21902_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj21902 
hide_21905();
function hide_21905() {
	var selector = "#obj21902";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21902_onTap_runningActionsCount = obj21902_onTap_runningActionsCount + 1;

	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup2();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21905(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup2();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21902_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21902_onTap_activeActionGroupIndex = -1;
		$("#obj21902").trigger("obj21902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21902) {
				console.warn("de-queueing event obj21902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21902_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj21908 
hide_21906();
function hide_21906() {
	var selector = "#obj21908";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21902_onTap_runningActionsCount = obj21902_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21906(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: hide
//	selector: obj#obj21910 
hide_21907();
function hide_21907() {
	var selector = "#obj21910";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj21902_onTap_runningActionsCount = obj21902_onTap_runningActionsCount + 1;

	
	var animationType = "slideOutRight";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup3();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_21907(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj21902_onTap_runningActionsCount = window.obj21902_onTap_runningActionsCount - 1;

if (window.obj21902_onTap_runningActionsCount < 0) {
	window.obj21902_onTap_runningActionsCount = 0;
} else if (window.obj21902_onTap_runningActionsCount == 0) {
	obj21902_onTap_actionGroup3();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}









































};
obj21902_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21902_onTap_activeActionGroupIndex = -1;
		$("#obj21902").trigger("obj21902_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21902) {
				console.warn("de-queueing event obj21902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21902_onTap_activeActionGroupIndex = 3;
	











































};
obj21912_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21912").trigger("obj21912_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21912) {
				console.warn("de-queueing event obj21912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	
















//	action: wait
wait_21914();
function wait_21914() {
	window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = obj21912_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	setTimeout(function() {
		window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj21912_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1000);
}


























};
obj21912_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21912").trigger("obj21912_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21912) {
				console.warn("de-queueing event obj21912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_21915();
function goToPage_21915() {
	window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = obj21912_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	$("#anchor876")[0].click();
	window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount - 1;

if (window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj21912_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj21912_SCEventCounterReachedTargetValue_actionGroup2();
}
}










































};
obj21912_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj21912").trigger("obj21912_SCEventCounterReachedTargetValue_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 21912) {
				console.warn("de-queueing event obj21912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj21912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	











































};
obj22051_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22051_onTap_activeActionGroupIndex = -1;
		$("#obj22051").trigger("obj22051_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22051) {
				console.warn("de-queueing event obj22051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22051_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22054
(function(){
	window.obj22051_onTap_runningActionsCount = obj22051_onTap_runningActionsCount + 1;


	var selector = "#obj22054";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_22053();
function playAudioFile_22053() {
	window.obj22051_onTap_runningActionsCount = obj22051_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22053")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22053");
			$("#obj_audio_playSoundFile22053").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
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
				window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_22057();
function switchText_22057() {
	window.obj22051_onTap_runningActionsCount = obj22051_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px; font-family: Roboto;\"><strong>59</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22051_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22051_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22051").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22051_content");
			setTimeout(function () {
				window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj22051 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj22051_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22051_onTap_activeActionGroupIndex = -1;
		$("#obj22051").trigger("obj22051_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22051) {
				console.warn("de-queueing event obj22051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22051_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_22058();
function wait_22058() {
	window.obj22051_onTap_runningActionsCount = obj22051_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup2();
}
	}, 500);
}


























};
obj22051_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22051_onTap_activeActionGroupIndex = -1;
		$("#obj22051").trigger("obj22051_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22051) {
				console.warn("de-queueing event obj22051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22051_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_22059();
function switchText_22059() {
	window.obj22051_onTap_runningActionsCount = obj22051_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px; font-family: Roboto;\"><strong>59</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22051_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22051_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22051").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22051_content");
			setTimeout(function () {
				window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj22051 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22051_onTap_runningActionsCount = window.obj22051_onTap_runningActionsCount - 1;

if (window.obj22051_onTap_runningActionsCount < 0) {
	window.obj22051_onTap_runningActionsCount = 0;
} else if (window.obj22051_onTap_runningActionsCount == 0) {
	obj22051_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj22051_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22051_onTap_activeActionGroupIndex = -1;
		$("#obj22051").trigger("obj22051_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22051) {
				console.warn("de-queueing event obj22051." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22051").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22051_onTap_activeActionGroupIndex = 3;
	











































};
obj22062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22062_onTap_activeActionGroupIndex = -1;
		$("#obj22062").trigger("obj22062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22062) {
				console.warn("de-queueing event obj22062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22062_onTap_activeActionGroupIndex = 0;
	


//	action: show 
//	selector: #obj22060
(function(){
	window.obj22062_onTap_runningActionsCount = obj22062_onTap_runningActionsCount + 1;


	var selector = "#obj22060";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_22064();
function playAudioFile_22064() {
	window.obj22062_onTap_runningActionsCount = obj22062_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22064")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22064");
			$("#obj_audio_playSoundFile22064").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
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
				window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
		}
	}

	
	
	
}
























//	action: Switch Text
switchText_22066();
function switchText_22066() {
	window.obj22062_onTap_runningActionsCount = obj22062_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 45px; font-family: Roboto;\"><strong>85</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22062_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22062_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22062").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22062_content");
			setTimeout(function () {
				window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
			}, 1);
		});
	} else {
		$("#obj22062 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup1();
}
		}, 1);
	}
}












};
obj22062_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22062_onTap_activeActionGroupIndex = -1;
		$("#obj22062").trigger("obj22062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22062) {
				console.warn("de-queueing event obj22062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22062_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_22067();
function wait_22067() {
	window.obj22062_onTap_runningActionsCount = obj22062_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup2();
}
	}, 500);
}


























};
obj22062_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22062_onTap_activeActionGroupIndex = -1;
		$("#obj22062").trigger("obj22062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22062) {
				console.warn("de-queueing event obj22062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22062_onTap_activeActionGroupIndex = 2;
	






























//	action: Switch Text
switchText_22068();
function switchText_22068() {
	window.obj22062_onTap_runningActionsCount = obj22062_onTap_runningActionsCount + 1;

	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 48px; font-family: Roboto;\"><strong>85</strong></span></p>";

	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj22062_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj22062_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;

		document.querySelector("#obj22062").appendChild(obj_content_new);

		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj22062_content");
			setTimeout(function () {
				window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj22062 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj22062_onTap_runningActionsCount = window.obj22062_onTap_runningActionsCount - 1;

if (window.obj22062_onTap_runningActionsCount < 0) {
	window.obj22062_onTap_runningActionsCount = 0;
} else if (window.obj22062_onTap_runningActionsCount == 0) {
	obj22062_onTap_actionGroup3();
}
		}, 1);
	}
}












};
obj22062_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22062_onTap_activeActionGroupIndex = -1;
		$("#obj22062").trigger("obj22062_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22062) {
				console.warn("de-queueing event obj22062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22062_onTap_activeActionGroupIndex = 3;
	











































};
obj22071_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22071_onTap_activeActionGroupIndex = -1;
		$("#obj22071").trigger("obj22071_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22071) {
				console.warn("de-queueing event obj22071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22071_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj22049 
hide_22084();
function hide_22084() {
	var selector = "#obj22049";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;

	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";

	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
		}, 1);
		return;
	};

	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);

	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_22084(), 100);
		return;
	}

	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
	}, animationDurationMs);

	$(selector).addClass("animated " + animationType);

}
//	action: show 
//	selector: #obj22069
(function(){
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;


	var selector = "#obj22069";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj22078
(function(){
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;


	var selector = "#obj22078";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj22081
(function(){
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;


	var selector = "#obj22081";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
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
					window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();









//	action: playAudioFile
playAudioFile_22073();
function playAudioFile_22073() {
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;

	var myAudio = $("#obj_audio_playSoundFile22073")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;

	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));

	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile22073");
			$("#obj_audio_playSoundFile22073").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
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
				window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup1();
}
		}
	}

	
	
	
}





































};
obj22071_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22071_onTap_activeActionGroupIndex = -1;
		$("#obj22071").trigger("obj22071_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22071) {
				console.warn("de-queueing event obj22071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22071_onTap_activeActionGroupIndex = 1;
	
















//	action: wait
wait_22087();
function wait_22087() {
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;

	setTimeout(function() {
		window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup2();
}
	}, 1000);
}


























};
obj22071_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj22071_onTap_activeActionGroupIndex = -1;
		$("#obj22071").trigger("obj22071_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22071) {
				console.warn("de-queueing event obj22071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22071_onTap_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_22088();
function goToPage_22088() {
	window.obj22071_onTap_runningActionsCount = obj22071_onTap_runningActionsCount + 1;

	$("#anchor880")[0].click();
	window.obj22071_onTap_runningActionsCount = window.obj22071_onTap_runningActionsCount - 1;

if (window.obj22071_onTap_runningActionsCount < 0) {
	window.obj22071_onTap_runningActionsCount = 0;
} else if (window.obj22071_onTap_runningActionsCount == 0) {
	obj22071_onTap_actionGroup3();
}
}










































};
obj22071_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj22071_onTap_activeActionGroupIndex = -1;
		$("#obj22071").trigger("obj22071_onTap_ended");
		

		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 22071) {
				console.warn("de-queueing event obj22071." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj22071").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj22071_onTap_activeActionGroupIndex = 3;
	











































};
		

		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






























































/*
 *
 *   obj21883: Event Touch Down
 *
 */

$("#obj21883").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21883_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21883_onTap is still running");
	return;
}
var obj21883_onTap_runningActionsCount = 0;
var obj21883_onTap_loopCount = 0;
obj21883_onTap_actionGroup0();
});


















/*
 *
 *   obj21886: Event Touch Down
 *
 */

$("#obj21886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21886_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21886_onTap is still running");
	return;
}
var obj21886_onTap_runningActionsCount = 0;
var obj21886_onTap_loopCount = 0;
obj21886_onTap_actionGroup0();
});
























































/*
 *
 *   obj21893: Event Touch Down
 *
 */

$("#obj21893").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21893_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21893_onTap is still running");
	return;
}
var obj21893_onTap_runningActionsCount = 0;
var obj21893_onTap_loopCount = 0;
obj21893_onTap_actionGroup0();
});


















/*
 *
 *   obj21896: Event Touch Down
 *
 */

$("#obj21896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21896_onTap is still running");
	return;
}
var obj21896_onTap_runningActionsCount = 0;
var obj21896_onTap_loopCount = 0;
obj21896_onTap_actionGroup0();
});


















/*
 *
 *   obj21902: Event Touch Down
 *
 */

$("#obj21902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj21902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21902_onTap is still running");
	return;
}
var obj21902_onTap_runningActionsCount = 0;
var obj21902_onTap_loopCount = 0;
obj21902_onTap_actionGroup0();
});

































































/*
 *
 *   obj21912: Event SCEventCounterReachedTargetValue
 *
 */

$("#obj21912").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj21912_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj21912_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj21912_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj21912_SCEventCounterReachedTargetValue_loopCount = 0;
obj21912_SCEventCounterReachedTargetValue_actionGroup0();
});

































































































































































/*
 *
 *   obj22051: Event Touch Down
 *
 */

$("#obj22051").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22051_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22051_onTap is still running");
	return;
}
var obj22051_onTap_runningActionsCount = 0;
var obj22051_onTap_loopCount = 0;
obj22051_onTap_actionGroup0();
});


















/*
 *
 *   obj22062: Event Touch Down
 *
 */

$("#obj22062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22062_onTap is still running");
	return;
}
var obj22062_onTap_runningActionsCount = 0;
var obj22062_onTap_loopCount = 0;
obj22062_onTap_actionGroup0();
});


















/*
 *
 *   obj22071: Event Touch Down
 *
 */

$("#obj22071").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj22071_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj22071_onTap is still running");
	return;
}
var obj22071_onTap_runningActionsCount = 0;
var obj22071_onTap_loopCount = 0;
obj22071_onTap_actionGroup0();
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
	
$("#obj21877").trigger('SCEventShow');
$("#obj22098").trigger('SCEventShow');
$("#obj21881").trigger('SCEventShow');
$("#obj21883").trigger('SCEventShow');
$("#obj21886").trigger('SCEventShow');
$("#obj21889").trigger('SCEventShow');
$("#obj21891").trigger('SCEventShow');
$("#obj21893").trigger('SCEventShow');
$("#obj21896").trigger('SCEventShow');
$("#obj21916").trigger('SCEventShow');
$("#obj22036").trigger('SCEventShow');
$("#obj22039").trigger('SCEventShow');
$("#obj22041").trigger('SCEventShow');
$("#obj22043").trigger('SCEventShow');
$("#obj22045").trigger('SCEventShow');
$("#obj22047").trigger('SCEventShow');
$("#obj22049").trigger('SCEventShow');
$("#obj22051").trigger('SCEventShow');
$("#obj22062").trigger('SCEventShow');
$("#obj22071").trigger('SCEventShow');
$("#obj22090").trigger('SCEventShow');
$("#obj22093").trigger('SCEventShow');
$("#obj22095").trigger('SCEventShow');
	

});